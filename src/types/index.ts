// Core domain types
export type NoteType = 'top' | 'middle' | 'base';

export type ScentFamily =
	| 'floral'
	| 'citrus'
	| 'woody'
	| 'musk'
	| 'amber'
	| 'marine'
	| 'green'
	| 'gourmand'
	| 'spicy'
	| 'fruity'
	| 'animalic';

export interface Aromachemical {
	id: number;
	name: string;
	manufacturer: string;
	family: ScentFamily;
	note: NoteType;
	description: string;
	origin: string;
	perfumes: string[];
	pairings: number[];
	structure: string;
	substantivity: string;
	impactSillage: string;
	dilution: string;
	ifraLimit: string;
	pairingDetail: string;
	imageUrl?: string;
	chemicalImageUrl?: string;
}

// Graph visualization types
export interface GraphNode {
	id: number;
	name: string;
	family: ScentFamily;
	note: NoteType;
	x: number;
	y: number;
	data: Aromachemical;
}

export interface GraphEdge {
	source: number;
	target: number;
	strength: number;
	isBidirectional: boolean;
}

export interface GraphData {
	nodes: GraphNode[];
	edges: GraphEdge[];
}

// Layout configuration types
export interface LayoutDimensions {
	width: number;
	height: number;
	margin: {
		top: number;
		right: number;
		bottom: number;
		left: number;
	};
}

export interface FamilyColumn {
	family: ScentFamily;
	x: number;
	width: number;
	color: string;
}

export interface NoteRow {
	note: NoteType;
	y: number;
	height: number;
}

// Search result types
export interface SearchResult {
	id: number;
	name: string;
	family: ScentFamily;
	matchScore: number;
}
