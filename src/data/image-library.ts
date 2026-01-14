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
	10: 'https://images.unsplash.com/photo-1595258196978-d4430358c984?w=800&q=80', // Dihydro Myrcenol - fresh citrus-metallic, lavender clean
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
	22: 'https://images.unsplash.com/photo-1632052345135-40a3ebc227d8?w=800&q=80', // Geranyl Acetate - fresh fruity-rose, green lavender light
	23: null, // Habanolide - elegant clean musk, pear woody sophisticated
	24: null, // Hedione - transparent radiant jasmine, citrus fresh revolutionary
	25: null, // Helional - fresh green-floral, aquatic melon clean
	26: null, // Hexenol-3-cis - intense fresh-cut grass, green leaves natural
	27: 'https://images.unsplash.com/photo-1739664237734-e6e9b91bfd0d?w=800&q=80', // Hexenyl-3-cis Acetate - fresh green, fruity banana-pear softer
	28: 'https://images.unsplash.com/photo-1605996370592-b6f7a81e382e?w=800&q=80', // Hexyl Salicylate - subtle orchid-like floral, green blending
	29: null, // Linalool - fresh floral-woody, citrus-lavender essential
	30: null, // Iso E Super - velvety cedarwood-amber, skin-like warmth diffusive
	31: null, // Indolene 50 - animalic-floral jasmine, depth sensuality
	32: 'https://images.unsplash.com/photo-1589881132856-bd1a4af0ce4d?w=800&q=80', // Linalyl Acetate - fresh sweet lavender-bergamot, fruity clean
	33: null, // Methyl Benzoate - fresh ylang-like floral, fruity feijoa light
	34: null, // Methyl Diantilis - creamy carnation-like, green-spicy rich
	35: 'https://images.unsplash.com/photo-1587890767851-e9bc526764b1?w=800&q=80', // Methyl Laitone - creamy coconut-lactonic, peach soft
	36: 'https://images.unsplash.com/photo-1549492824-12c7cd53e0ca?w=800&q=80', // Orange Terpenes - bright fresh orange peel, sweet juicy natural
	37: 'https://images.unsplash.com/photo-1647249239918-058feb10d233?w=800&q=80', // Oranger Crystals - sweet orange blossom, honey-like warm narcotic
	38: null, // Para Cresyl Acetate - animalic narcissus-like, hay leather complex
	39: null, // Peonile - soft rosy-peony, fresh green delicate
	40: null, // Petitgrain EO - fresh green-citrus, woody-bitter orange leaf
	41: 'https://images.unsplash.com/photo-1632052345135-40a3ebc227d8?w=800&q=80', // Phenethyl Acetate - fresh rose-like, honey fruity sweet
	42: 'https://images.unsplash.com/photo-1632052345135-40a3ebc227d8?w=800&q=80', // Phenethyl Alcohol - soft natural rose, green-honey heart
	43: 'https://images.unsplash.com/photo-1632052345135-40a3ebc227d8?w=800&q=80', // PEPA Replacer - rose-honey, green tea modern building block
	44: 'https://images.unsplash.com/photo-1709582611534-9fd3435d101e?w=800&q=80', // Rose Oxide - fresh metallic-green rose, lychee sparkling
	45: 'https://images.unsplash.com/photo-1683008952458-dc02ac67f382?w=800&q=80', // Stemone - green watery stem-like, violet leaf natural ozonic
	46: null, // Styrallyl Acetate - fresh green-gardenia, fruity-tropical light
	47: null, // Tetrahydro Linalool - clean fresh-floral, subtle woody-citrus modern
	48: null, // Toscanol - warm sandalwood-like, creamy milky soft enveloping
	49: null, // Ultrazur - fresh ozonic, clean metallic modern aquatic
	50: 'https://images.unsplash.com/photo-1508910238952-0dfebf373ecf?w=800&q=80', // Undecavertol - fresh violet leaf, cucumber-green natural transparent
	51: 'https://images.unsplash.com/photo-1610487512810-b614ad747572?w=800&q=80', // Vanillin - classic warm vanilla, sweet comforting benchmark
	52: null, // Velvione - powerful clean musk, excellent longevity modern diffusive
};

// Chemical structure images - using PubChem or ChemSpider URLs when available
export const chemicalStructures: Record<number, string | null> = {
	1: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=13187&t=l', // Ambrettolide
	2: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=1550&t=l', // Ambroxan
	3: null, // Auralva - proprietary compound
	4: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=8785&t=l', // Benzyl Acetate
	5: 'https://pubchem.ncbi.nlm.nih.gov/image/imagefly.cgi?cid=120101&t=l', // Calone 1951
	6: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=638011&t=l', // Citral
	7: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=8842&t=l', // Citronellol
	8: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=8655&t=l', // Cyclamen Aldehyde (benzaldehyde derivative)
	9: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=14127&t=l', // Dihydro Eugenol
	10: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=10582&t=l', // Dihydro Myrcenol
	11: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=19787&t=l', // DMBCA (dimethylbenzyl carbinyl acetate)
	12: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=62408&t=l', // Dimethyl Octenone
	13: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6437266&t=l', // Ebanol - proprietary
	14: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=10985&t=l', // Ethyl Linalool
	15: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=8468&t=l', // Ethyl Maltol
	16: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=8467&t=l', // Ethyl Vanillin
	17: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=7175&t=l', // Ethylene Brassylate
	18: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=9577&t=l', // Exaltolide Total (cyclopentadecanolide)
	19: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=8527&t=l', // Florhydral (HMPCC)
	20: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=27809&t=l', // Galaxolide
	21: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=637566&t=l', // Geraniol
	22: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=1549026&t=l', // Geranyl Acetate
	23: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=9856149&t=l', // Habanolide - proprietary
	24: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=5373&t=l', // Hedione (methyl dihydrojasmonate)
	25: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=61129&t=l', // Helional
	26: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=5281167&t=l', // Hexenol-3-cis (leaf alcohol)
	27: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=5282387&t=l', // Hexenyl-3-cis Acetate
	28: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=8784&t=l', // Hexyl Salicylate
	29: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6549&t=l', // Linalool
	30: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=1808124&t=l', // Iso E Super
	31: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=106826&t=l', // Indolene 50 (indole)
	32: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=8294&t=l', // Linalyl Acetate
	33: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=7150&t=l', // Methyl Benzoate
	34: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=7143&t=l', // Methyl Diantilis (p-cresyl methyl ether)
	35: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=7344&t=l', // Methyl Laitone (gamma-decalactone)
	36: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=22311&t=l', // Orange Terpenes (limonene)
	37: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=5359332&t=l', // Oranger Crystals (methyl anthranilate)
	38: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=7116&t=l', // Para Cresyl Acetate
	39: null, // Peonile - proprietary
	40: null, // Petitgrain EO - essential oil blend
	41: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=31252&t=l', // Phenethyl Acetate
	42: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6054&t=l', // Phenethyl Alcohol
	43: null, // PEPA Replacer - proprietary blend
	44: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=27866&t=l', // Rose Oxide
	45: null, // Stemone - proprietary
	46: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=5365016&t=l', // Styrallyl Acetate
	47: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=18096&t=l', // Tetrahydro Linalool
	48: null, // Toscanol - proprietary
	49: null, // Ultrazur - proprietary
	50: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=521346&t=l', // Undecavertol (undecenol)
	51: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=1183&t=l', // Vanillin
	52: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=5362736&t=l', // Velvione - proprietary
};
