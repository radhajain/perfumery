// User data types for personal notes, accords, and formulas

// Personal Notes Feature
export interface AromachemicalNote {
	aromachemicalId: number;
	content: string;
	createdAt: string;
	updatedAt: string;
}

export interface UserNotes {
	[aromachemicalId: number]: AromachemicalNote;
}

// Accords System
export interface AccordIngredient {
	aromachemicalId: number;
	percentage: number;
	notes?: string; // User notes specific to this ingredient in this accord
}

export interface Accord {
	id: string;
	name: string;
	description: string;
	aromachemicals: AccordIngredient[];
	isPreDefined: boolean; // true for popular accords, false for custom
	category?: 'classic' | 'modern' | 'niche'; // For pre-defined accords
	imageUrl?: string; // Optional image URL, defaults to most prominent aromachemical's image
	colorBand?: string[]; // Array of colors from constituent aromachemicals
	createdAt: string;
	updatedAt: string;
}

export interface AccordRating {
	rating: number; // 1-5 stars
	notes?: string;
}

// Formula Builder
export interface FormulaIngredient {
	aromachemicalId: number;
	weight: number; // in grams
	dilution?: number; // percentage if diluted
	notes?: string;
}

export interface Formula {
	id: string; // UUID
	name: string;
	description?: string;
	ingredients: FormulaIngredient[];
	totalWeight: number; // calculated total in grams
	userNotes?: string;
	userRating?: number; // 1-5 stars
	createdAt: string;
	updatedAt: string;
}

// User data aggregate
export interface UserData {
	notes: UserNotes;
	customAccords: Accord[];
	accordRatings: { [accordId: string]: AccordRating };
	formulas: Formula[];
	version: number; // for migration purposes
}

// Default empty user data
export const DEFAULT_USER_DATA: UserData = {
	notes: {},
	customAccords: [],
	accordRatings: {},
	formulas: [],
	version: 1,
};
