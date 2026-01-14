import { Accord } from '../types/userdata';

/**
 * Popular pre-defined accords from perfumery history
 * These are read-only reference accords that users can rate and add notes to
 */
export const POPULAR_ACCORDS: Accord[] = [
	{
		id: 'fougere-classic',
		name: 'Fougère',
		description:
			'The foundational aromatic accord created by Houbigant with Fougère Royale (1882). Combines fresh lavender top notes with a woody, coumarin-rich base. The name means "fern" in French, though ferns have no scent.',
		category: 'classic',
		isPreDefined: true,
		aromachemicals: [
			{ aromachemicalId: 29, percentage: 35, notes: 'Lavender heart' }, // Linalool
			{ aromachemicalId: 32, percentage: 25, notes: 'Fresh bergamot top' }, // Linalyl Acetate
			{ aromachemicalId: 10, percentage: 20, notes: 'Clean citrus lift' }, // Dihydro Myrcenol
			{ aromachemicalId: 30, percentage: 20, notes: 'Woody cedarwood base' }, // Iso E Super
		],
		createdAt: '2024-01-01T00:00:00.000Z',
		updatedAt: '2024-01-01T00:00:00.000Z',
	},
	{
		id: 'chypre-classic',
		name: 'Chypre',
		description:
			'Named after Coty\'s Chypre (1917), this family balances fresh citrus bergamot with warm labdanum and oakmoss. Modern versions use synthetic oakmoss alternatives due to IFRA restrictions.',
		category: 'classic',
		isPreDefined: true,
		aromachemicals: [
			{ aromachemicalId: 32, percentage: 25, notes: 'Bergamot sparkle' }, // Linalyl Acetate
			{ aromachemicalId: 42, percentage: 20, notes: 'Rose heart' }, // Phenethyl Alcohol
			{ aromachemicalId: 13, percentage: 30, notes: 'Sandalwood warmth' }, // Ebanol
			{ aromachemicalId: 38, percentage: 15, notes: 'Oakmoss effect' }, // Para Cresyl Acetate
			{ aromachemicalId: 7, percentage: 10, notes: 'Fresh green facet' }, // Citronellol
		],
		createdAt: '2024-01-01T00:00:00.000Z',
		updatedAt: '2024-01-01T00:00:00.000Z',
	},
	{
		id: 'oriental-amber',
		name: 'Oriental Amber',
		description:
			'The warm, spicy, and sweet accord that defines the Oriental family. Popularized by Guerlain\'s Shalimar (1925). Combines vanilla, resinous warmth, and exotic spices.',
		category: 'classic',
		isPreDefined: true,
		aromachemicals: [
			{ aromachemicalId: 51, percentage: 30, notes: 'Classic vanilla base' }, // Vanillin
			{ aromachemicalId: 16, percentage: 25, notes: 'Rich, boozy vanilla' }, // Ethyl Vanillin
			{ aromachemicalId: 2, percentage: 25, notes: 'Ambergris warmth' }, // Ambroxan
			{ aromachemicalId: 9, percentage: 10, notes: 'Soft clove spice' }, // Dihydro Eugenol
			{ aromachemicalId: 13, percentage: 10, notes: 'Creamy sandalwood' }, // Ebanol
		],
		createdAt: '2024-01-01T00:00:00.000Z',
		updatedAt: '2024-01-01T00:00:00.000Z',
	},
	{
		id: 'aquatic-ozonic',
		name: 'Aquatic/Ozonic',
		description:
			'The modern "fresh" accord that revolutionized masculine fragrances in the 1990s. Made famous by Davidoff Cool Water and Acqua di Gio. Smells of ocean breeze and clean water.',
		category: 'modern',
		isPreDefined: true,
		aromachemicals: [
			{ aromachemicalId: 5, percentage: 15, notes: 'Ocean watermelon' }, // Calone
			{ aromachemicalId: 10, percentage: 30, notes: 'Clean lime freshness' }, // Dihydro Myrcenol
			{ aromachemicalId: 49, percentage: 20, notes: 'Mineral water' }, // Ultrazur
			{ aromachemicalId: 12, percentage: 15, notes: 'Violet leaf green' }, // Dimethyl Octenone
			{ aromachemicalId: 2, percentage: 20, notes: 'Dry salty base' }, // Ambroxan
		],
		createdAt: '2024-01-01T00:00:00.000Z',
		updatedAt: '2024-01-01T00:00:00.000Z',
	},
	{
		id: 'white-floral',
		name: 'White Floral',
		description:
			'The luxurious bouquet of jasmine, tuberose, and orange blossom. This is the heart of classic feminine perfumery, rich and heady with indolic depth.',
		category: 'classic',
		isPreDefined: true,
		aromachemicals: [
			{ aromachemicalId: 4, percentage: 30, notes: 'Jasmine sweetness' }, // Benzyl Acetate
			{ aromachemicalId: 42, percentage: 25, notes: 'Rose petal realism' }, // Phenethyl Alcohol
			{ aromachemicalId: 24, percentage: 20, notes: 'Airy jasmine lift' }, // Hedione
			{ aromachemicalId: 31, percentage: 10, notes: 'Animalic depth' }, // Indolene
			{ aromachemicalId: 3, percentage: 15, notes: 'Orange blossom honey' }, // Auralva
		],
		createdAt: '2024-01-01T00:00:00.000Z',
		updatedAt: '2024-01-01T00:00:00.000Z',
	},
	{
		id: 'rose-tea',
		name: 'Rose Tea',
		description:
			'A modern, fresh interpretation of rose with green tea facets. Less jammy than classic roses, more transparent and sophisticated. Popular in niche perfumery.',
		category: 'modern',
		isPreDefined: true,
		aromachemicals: [
			{ aromachemicalId: 7, percentage: 30, notes: 'Clean rose spine' }, // Citronellol
			{ aromachemicalId: 21, percentage: 25, notes: 'Fruity rose body' }, // Geraniol
			{ aromachemicalId: 42, percentage: 20, notes: 'Rose petal heart' }, // Phenethyl Alcohol
			{ aromachemicalId: 14, percentage: 15, notes: 'Fresh tea note' }, // Ethyl Linalool
			{ aromachemicalId: 44, percentage: 10, notes: 'Metallic lychee' }, // Rose Oxide
		],
		createdAt: '2024-01-01T00:00:00.000Z',
		updatedAt: '2024-01-01T00:00:00.000Z',
	},
	{
		id: 'gourmand-praline',
		name: 'Gourmand Praline',
		description:
			'The sweet, edible accord that defined modern feminine fragrances after Thierry Mugler\'s Angel (1992). Combines caramel, vanilla, and cotton candy sweetness.',
		category: 'modern',
		isPreDefined: true,
		aromachemicals: [
			{ aromachemicalId: 15, percentage: 25, notes: 'Cotton candy sugar' }, // Ethyl Maltol
			{ aromachemicalId: 51, percentage: 30, notes: 'Vanilla warmth' }, // Vanillin
			{ aromachemicalId: 16, percentage: 20, notes: 'Deep vanilla richness' }, // Ethyl Vanillin
			{ aromachemicalId: 2, percentage: 15, notes: 'Salty contrast' }, // Ambroxan
			{ aromachemicalId: 35, percentage: 10, notes: 'Coconut creaminess' }, // Methyl Laitone
		],
		createdAt: '2024-01-01T00:00:00.000Z',
		updatedAt: '2024-01-01T00:00:00.000Z',
	},
	{
		id: 'woody-amber',
		name: 'Woody Amber',
		description:
			'The modern masculine base: warm, enveloping, and sophisticated. Combines creamy sandalwood with amber radiance. The backbone of contemporary woody fragrances.',
		category: 'modern',
		isPreDefined: true,
		aromachemicals: [
			{ aromachemicalId: 30, percentage: 35, notes: 'Cedarwood skeleton' }, // Iso E Super
			{ aromachemicalId: 2, percentage: 30, notes: 'Ambergris glow' }, // Ambroxan
			{ aromachemicalId: 13, percentage: 25, notes: 'Creamy sandalwood' }, // Ebanol
			{ aromachemicalId: 51, percentage: 10, notes: 'Soft vanilla rounding' }, // Vanillin
		],
		createdAt: '2024-01-01T00:00:00.000Z',
		updatedAt: '2024-01-01T00:00:00.000Z',
	},
	{
		id: 'green-fig',
		name: 'Green Fig',
		description:
			'The Mediterranean accord popularized by Diptyque Philosykos. Captures the milky sap of fig trees, green leaves, and woody branches under hot sun.',
		category: 'niche',
		isPreDefined: true,
		aromachemicals: [
			{ aromachemicalId: 45, percentage: 30, notes: 'Fig leaf stem' }, // Stemone
			{ aromachemicalId: 26, percentage: 25, notes: 'Cut grass green' }, // Hexenol
			{ aromachemicalId: 27, percentage: 15, notes: 'Fruity green' }, // Hexenyl Acetate
			{ aromachemicalId: 35, percentage: 15, notes: 'Coconut milk sap' }, // Methyl Laitone
			{ aromachemicalId: 13, percentage: 15, notes: 'Woody base' }, // Ebanol
		],
		createdAt: '2024-01-01T00:00:00.000Z',
		updatedAt: '2024-01-01T00:00:00.000Z',
	},
	{
		id: 'skin-musk',
		name: 'Skin Musk',
		description:
			'The "your skin but better" accord. Clean, soft, and intimate. Made famous by Narciso Rodriguez For Her and Glossier You. Designed to smell like freshly washed skin.',
		category: 'modern',
		isPreDefined: true,
		aromachemicals: [
			{ aromachemicalId: 1, percentage: 30, notes: 'White musk radiance' }, // Ambrettolide
			{ aromachemicalId: 20, percentage: 25, notes: 'Clean laundry' }, // Galaxolide
			{ aromachemicalId: 17, percentage: 20, notes: 'Powdery softness' }, // Ethylene Brassylate
			{ aromachemicalId: 18, percentage: 15, notes: 'Peachy warmth' }, // Exaltolide
			{ aromachemicalId: 14, percentage: 10, notes: 'Fresh floral tea' }, // Ethyl Linalool
		],
		createdAt: '2024-01-01T00:00:00.000Z',
		updatedAt: '2024-01-01T00:00:00.000Z',
	},
];
