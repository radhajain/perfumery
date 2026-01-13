// Curated classy stock photos from Unsplash for each scent family vibe
export const familyImages: Record<string, string> = {
	// Musk - soft, powdery, clean
	musk: 'https://images.unsplash.com/photo-1727049274211-a5fb643da1ec?w=800&q=80',

	// Amber - warm, resinous, golden
	amber:
		'https://images.unsplash.com/photo-1695992556347-7b6979bacd54?w=800&q=80',

	// Floral - elegant flowers
	floral:
		'https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&q=80',

	// Citrus - fresh citrus fruits
	citrus:
		'https://images.unsplash.com/photo-1643131514219-1e480cce39aa?w=800&q=80',

	// Marine - ocean, water, fresh
	marine:
		'https://images.unsplash.com/photo-1464925257126-6450e871c667?w=800&q=80',

	// Green - leaves, nature, fresh cut grass
	green:
		'https://images.unsplash.com/photo-1567621301854-85b95d32bbf3?w=800&q=80',

	// Woody - wood, cedar, forest
	woody:
		'https://images.unsplash.com/photo-1426170042593-200f250dfdaf?w=800&q=80',

	// Gourmand - vanilla, desserts, sweet
	gourmand:
		'https://images.unsplash.com/photo-1685265186439-9f1f2f566eda?w=800&q=80',

	// Spicy - spices, warm tones
	spicy:
		'https://images.unsplash.com/photo-1542361386395-b6655d75c13c?w=800&q=80',

	// Fruity - berries, stone fruits
	fruity:
		'https://images.unsplash.com/photo-1661022437133-e198324b8b4c?w=800&q=80',

	// Animalic - leather, sophisticated
	animalic:
		'https://images.unsplash.com/photo-1767708457607-d7b0787d1ca5?w=800&q=80',
};

// Specific aromachemical images - curated to match the specific character
export const aromachemicalImages: Record<number, string | null> = {
	1: 'https://images.unsplash.com/photo-1592141433224-950c844513e9?w=800&q=80', // Ambrettolide - musk, soft white
	2: 'https://images.unsplash.com/photo-1559649532-3745ec116fc5?w=800&q=80', // Ambroxan - amber glow
	3: 'https://images.unsplash.com/photo-1680510150229-9c490248e833?w=800&q=80', // Auralva - violet/iris
	4: 'https://images.unsplash.com/photo-1623171404570-1d196759fe20?w=800&q=80', // Benzyl Acetate - jasmine
	5: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80', // Calone - ocean/marine
	6: 'https://images.unsplash.com/photo-1608322368735-b6b6ec262af7?w=800&q=80', // Citral - lemon
	7: 'https://images.unsplash.com/photo-1558473720-cf2dbe8a1f91?w=800&q=80', // Citronellol - rose petals
	8: 'https://images.unsplash.com/photo-1567428051128-5f09a0200655?w=800&q=80', // Cyclamen Aldehyde - lily of valley
	9: 'https://images.unsplash.com/photo-1612882910661-e44b25c6e79b?w=800&q=80', // Dihydro Eugenol - clove spice
	10: 'https://images.unsplash.com/photo-1624907821744-6c27fc8675c0?w=800&q=80', // Dihydro Myrcenol - lavender fresh
	11: 'https://images.unsplash.com/photo-1696426506268-00a41b06b956?w=800&q=80', // DMBCA - pear/gardenia
	12: 'https://images.unsplash.com/photo-1643981312137-33a41305672b?w=800&q=80', // Dimethyl Octenone - violet leaf
	13: 'https://images.unsplash.com/photo-1615195695780-bb72bdeda718?w=800&q=80', // Ebanol - sandalwood
	14: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80', // Ethyl Linalool - tea/floral
	15: 'https://images.unsplash.com/photo-1633907752860-b943d2cf886d?w=800&q=80', // Ethyl Maltol - cotton candy
	16: 'https://images.unsplash.com/photo-1610487512810-b614ad747572?w=800&q=80', // Ethyl Vanillin - vanilla
	17: 'https://images.unsplash.com/photo-1606208594041-3dfd470247ce?w=800&q=80', // Ethylene Brassylate - powdery musk
	18: 'https://images.unsplash.com/photo-1629828874514-c1e5103f2150?w=800&q=80', // Exaltolide - peach/musk
	19: 'https://images.unsplash.com/photo-1692948785866-1749928eeec9?w=800&q=80', // Florhydral - green floral
	20: 'https://images.unsplash.com/photo-1542728929-2b5d9a0c8d48?w=800&q=80', // Galaxolide - clean white
	21: null, // Geraniol - herbal rose
	22: null, // Geranyl Acetate - fruity rose
	23: null, // Habanolide - metallic clean musk
	24: null,
	25: null,
	26: null,
	27: null,
	28: null,
	29: null,
	30: null,
	31: null,
	32: null,
	33: null,
	34: null,
	35: 'https://images.unsplash.com/photo-1587890767851-e9bc526764b1?w=800&q=80', // Methyl Laitone - coconut creamy,
	51: null,
};

// Chemical structure images - using PubChem or ChemSpider URLs when available
export const chemicalStructures: Record<number, string> = {
	1: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=13187&t=l',
	2: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=1550&t=l',
	6: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=638011&t=l',
	7: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=8842&t=l',
	16: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=8467&t=l',
	21: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=637566&t=l',
	29: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6549&t=l',
	42: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6054&t=l',
	51: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=1183&t=l',
};
