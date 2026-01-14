import {
	Aromachemical,
	GraphNode,
	LayoutDimensions,
	ScentFamily,
	NoteType,
	FamilyColumn,
} from '../types';

const NOTE_POSITIONS: Record<NoteType, number> = {
	top: 0.15,
	middle: 0.5,
	base: 0.85,
};

function calculateNoteY(note: NoteType, height: number): number {
	return height * NOTE_POSITIONS[note];
}

function calculateFamilyColumns(
	width: number,
	families: ScentFamily[],
	familyColors: Record<ScentFamily, string>,
	aromachemicals: Aromachemical[]
): FamilyColumn[] {
	// Count items per family
	const familyCounts = new Map<ScentFamily, number>();
	aromachemicals.forEach((aroma) => {
		familyCounts.set(aroma.family, (familyCounts.get(aroma.family) || 0) + 1);
	});

	// Calculate total weighted width units
	// Families with 1 item get 0.5 weight, others get 1.0 weight
	const totalWeightedUnits = families.reduce((sum, family) => {
		const count = familyCounts.get(family) || 0;
		return sum + (count === 1 ? 0.5 : 1.0);
	}, 0);

	const unitWidth = width / totalWeightedUnits;
	let currentX = 0;

	return families.map((family) => {
		const count = familyCounts.get(family) || 0;
		const columnWidth = unitWidth * (count === 1 ? 0.5 : 1.0);
		const centerX = currentX + columnWidth / 2;
		currentX += columnWidth;

		return {
			family,
			x: centerX,
			width: columnWidth,
			color: familyColors[family],
		};
	});
}

function distributeNodesInCell(
	nodes: GraphNode[],
	centerX: number,
	centerY: number,
	columnWidth: number
): void {
	const count = nodes.length;
	const spreadWidth = columnWidth * 0.8; // Increased from 0.6
	const spreadHeight = 80; // Increased from 40

	if (count === 1) {
		nodes[0].x = centerX;
		nodes[0].y = centerY;
	} else {
		nodes.forEach((node, i) => {
			const offset = (i - (count - 1) / 2) / count;
			node.x = centerX + offset * spreadWidth;
			node.y = centerY + (Math.random() - 0.5) * spreadHeight;
		});
	}
}

export function calculateGraphLayout(
	aromachemicals: Aromachemical[],
	dimensions: LayoutDimensions,
	familyOrder: ScentFamily[],
	familyColors: Record<ScentFamily, string>
): GraphNode[] {
	const { width, height, margin } = dimensions;
	const graphWidth = width - margin.left - margin.right;
	const graphHeight = height - margin.top - margin.bottom;

	const familyColumns = calculateFamilyColumns(
		graphWidth,
		familyOrder,
		familyColors,
		aromachemicals
	);

	const nodesByCell = new Map<string, GraphNode[]>();

	aromachemicals.forEach((aroma) => {
		const key = `${aroma.family}-${aroma.note}`;
		if (!nodesByCell.has(key)) {
			nodesByCell.set(key, []);
		}

		const column = familyColumns.find((c) => c.family === aroma.family)!;
		const node: GraphNode = {
			id: aroma.id,
			name: aroma.name,
			description: aroma.description,
			family: aroma.family,
			note: aroma.note,
			x: column.x + margin.left,
			y: calculateNoteY(aroma.note, graphHeight) + margin.top,
			data: aroma,
		};

		nodesByCell.get(key)!.push(node);
	});

	nodesByCell.forEach((nodes) => {
		if (nodes.length > 1) {
			const column = familyColumns.find((c) => c.family === nodes[0].family)!;
			distributeNodesInCell(
				nodes,
				column.x + margin.left,
				calculateNoteY(nodes[0].note, graphHeight) + margin.top,
				column.width
			);
		}
	});

	return Array.from(nodesByCell.values()).flat();
}
