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
  familyColors: Record<ScentFamily, string>
): FamilyColumn[] {
  const columnWidth = width / families.length;

  return families.map((family, index) => ({
    family,
    x: (index + 0.5) * columnWidth,
    width: columnWidth,
    color: familyColors[family],
  }));
}

function distributeNodesInCell(
  nodes: GraphNode[],
  centerX: number,
  centerY: number,
  columnWidth: number
): void {
  const count = nodes.length;
  const spreadWidth = columnWidth * 0.6;
  const spreadHeight = 40;

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

  const familyColumns = calculateFamilyColumns(graphWidth, familyOrder, familyColors);

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
