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
// When null, falls back to family image
export const aromachemicalImages: Record<number, string | null> = {
	1: 'https://images.unsplash.com/photo-1592141433224-950c844513e9?w=800&q=80', // Ambrettolide - clean sweet musky, skin-like warmth
	2: 'https://images.unsplash.com/photo-1559649532-3745ec116fc5?w=800&q=80', // Ambroxan - warm amber woody, crystalline mineral
	3: 'https://images.unsplash.com/photo-1680510150229-9c490248e833?w=800&q=80', // Auralva - powdery violet-orris, elegant modern
	4: 'https://images.unsplash.com/photo-1623171404570-1d196759fe20?w=800&q=80', // Benzyl Acetate - fresh jasmine, fruity pear banana
	5: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80', // Calone 1951 - intense marine-ozonic, watermelon rind
	6: 'https://images.unsplash.com/photo-1671881202164-d784d336e582?w=800&q=80', // Citral - intense fresh lemon, verbena green
	7: 'https://images.unsplash.com/photo-1558473720-cf2dbe8a1f91?w=800&q=80', // Citronellol - sweet rosy-citrus, green nuances
	8: 'https://images.unsplash.com/photo-1567428051128-5f09a0200655?w=800&q=80', // Cyclamen Aldehyde - delicate powdery floral, lily of valley
	9: 'https://images.unsplash.com/photo-1612882910661-e44b25c6e79b?w=800&q=80', // Dihydro Eugenol - warm spicy clove, creamy woody
	10: 'https://images.unsplash.com/photo-1624907821744-6c27fc8675c0?w=800&q=80', // Dihydro Myrcenol - fresh citrus-metallic, lavender clean
	11: 'https://images.unsplash.com/photo-1696426506268-00a41b06b956?w=800&q=80', // DMBCA - sweet fruity gardenia, green pear
	12: 'https://images.unsplash.com/photo-1643981312137-33a41305672b?w=800&q=80', // Dimethyl Octenone - fresh green-marine, violet leaf watery
	13: 'https://images.unsplash.com/photo-1615195695780-bb72bdeda718?w=800&q=80', // Ebanol - rich creamy sandalwood, warm enveloping
	14: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80', // Ethyl Linalool - fresh light floral woody, tea nuances
	15: 'https://images.unsplash.com/photo-1633907752860-b943d2cf886d?w=800&q=80', // Ethyl Maltol - intensely sweet caramelized sugar, cotton candy
	16: 'https://images.unsplash.com/photo-1610487512810-b614ad747572?w=800&q=80', // Ethyl Vanillin - rich creamy vanilla, warm comforting
	17: 'https://images.unsplash.com/photo-1606208594041-3dfd470247ce?w=800&q=80', // Ethylene Brassylate - soft powdery musk, floral-woody clean
	18: 'https://images.unsplash.com/photo-1629828874514-c1e5103f2150?w=800&q=80', // Exaltolide Total - sweet powdery musk, lactonic peach
	19: 'https://images.unsplash.com/photo-1692948785866-1749928eeec9?w=800&q=80', // Florhydral - fresh green-floral, lily hyacinth natural
	20: 'https://images.unsplash.com/photo-1542728929-2b5d9a0c8d48?w=800&q=80', // Galaxolide - clean sweet musk, subtle woody modern
	21: 'https://images.unsplash.com/photo-1632052345135-40a3ebc227d8?w=800&q=80', // Geraniol - sweet fresh rose, fruity-citrus natural
	22: null, // Geranyl Acetate - fresh fruity-rose, green lavender light
	23: null, // Habanolide - elegant clean musk, pear woody sophisticated
	24: null, // Hedione - transparent radiant jasmine, citrus fresh revolutionary
	25: null, // Helional - fresh green-floral, aquatic melon clean
	26: null, // Hexenol-3-cis - intense fresh-cut grass, green leaves natural
	27: null, // Hexenyl-3-cis Acetate - fresh green, fruity banana-pear softer
	28: null, // Hexyl Salicylate - subtle orchid-like floral, green blending
	29: null, // Linalool - fresh floral-woody, citrus-lavender essential
	30: null, // Iso E Super - velvety cedarwood-amber, skin-like warmth diffusive
	31: null, // Indolene 50 - animalic-floral jasmine, depth sensuality
	32: null, // Linalyl Acetate - fresh sweet lavender-bergamot, fruity clean
	33: null, // Methyl Benzoate - fresh ylang-like floral, fruity feijoa light
	34: null, // Methyl Diantilis - creamy carnation-like, green-spicy rich
	35: 'https://images.unsplash.com/photo-1587890767851-e9bc526764b1?w=800&q=80', // Methyl Laitone - creamy coconut-lactonic, peach soft
	36: 'https://images.unsplash.com/photo-1549492824-12c7cd53e0ca?w=800&q=80', // Orange Terpenes - bright fresh orange peel, sweet juicy natural
	37: 'https://images.unsplash.com/photo-1647249239918-058feb10d233?w=800&q=80', // Oranger Crystals - sweet orange blossom, honey-like warm narcotic
	38: null, // Para Cresyl Acetate - animalic narcissus-like, hay leather complex
	39: null, // Peonile - soft rosy-peony, fresh green delicate
	40: null, // Petitgrain EO - fresh green-citrus, woody-bitter orange leaf
	41: null, // Phenethyl Acetate - fresh rose-like, honey fruity sweet
	42: null, // Phenethyl Alcohol - soft natural rose, green-honey heart
	43: null, // PEPA Replacer - rose-honey, green tea modern building block
	44: null, // Rose Oxide - fresh metallic-green rose, lychee sparkling
	45: null, // Stemone - green watery stem-like, violet leaf natural ozonic
	46: null, // Styrallyl Acetate - fresh green-gardenia, fruity-tropical light
	47: null, // Tetrahydro Linalool - clean fresh-floral, subtle woody-citrus modern
	48: null, // Toscanol - warm sandalwood-like, creamy milky soft enveloping
	49: null, // Ultrazur - fresh ozonic, clean metallic modern aquatic
	50: null, // Undecavertol - fresh violet leaf, cucumber-green natural transparent
	51: null, // Vanillin - classic warm vanilla, sweet comforting benchmark
	52: null, // Velvione - powerful clean musk, excellent longevity modern diffusive
};

// Chemical structure images - using PubChem or ChemSpider URLs when available
export const chemicalStructures: Record<number, string | null> = {
	1: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=13187&t=l', // Ambrettolide
	2: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=1550&t=l', // Ambroxan
	3: null, // Auralva
	4: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=8785&t=l', // Benzyl Acetate
	5: 'https://pubchem.ncbi.nlm.nih.gov/image/imagefly.cgi?cid=120101&t=l', // Calone 1951
	6: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=638011&t=l', // Citral
	7: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=8842&t=l', // Citronellol
	8: null, // Cyclamen Aldehyde
	9: null, // Dihydro Eugenol
	10: null, // Dihydro Myrcenol
	11: null, // DMBCA
	12: null, // Dimethyl Octenone
	13: null, // Ebanol
	14: null, // Ethyl Linalool
	15: null, // Ethyl Maltol
	16: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=8467&t=l', // Ethyl Vanillin
	17: null, // Ethylene Brassylate
	18: null, // Exaltolide Total
	19: null, // Florhydral
	20: null, // Galaxolide
	21: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=637566&t=l', // Geraniol
	22: null, // Geranyl Acetate
	23: null, // Habanolide
	24: null, // Hedione
	25: null, // Helional
	26: null, // Hexenol-3-cis
	27: null, // Hexenyl-3-cis Acetate
	28: null, // Hexyl Salicylate
	29: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6549&t=l', // Linalool
	30: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=1808124&t=l', // Iso E Super
	31: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=106826&t=l', // Indolene 50
	32: null, // Linalyl Acetate
	33: null, // Methyl Benzoate
	34: null, // Methyl Diantilis
	35: null, // Methyl Laitone
	36: null, // Orange Terpenes
	37: null, // Oranger Crystals
	38: null, // Para Cresyl Acetate
	39: null, // Peonile
	40: null, // Petitgrain EO
	41: null, // Phenethyl Acetate
	42: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6054&t=l', // Phenethyl Alcohol
	43: null, // PEPA Replacer
	44: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=27866&t=l', // Rose Oxide
	45: null, // Stemone
	46: null, // Styrallyl Acetate
	47: null, // Tetrahydro Linalool
	48: null, // Toscanol
	49: null, // Ultrazur
	50: null, // Undecavertol
	51: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=1183&t=l', // Vanillin
	52: null, // Velvione
};
