import { Aromachemical, ScentFamily } from '../types';

export const aromachemicals: Aromachemical[] = [
	{
		id: 1,
		name: 'Ambrettolide',
		manufacturer: 'Givaudan',
		family: 'musk',
		note: 'base',
		description:
			'Ambrettolide is a "macrocyclic" musk that acts as the luminous "sheen" of the musk world. It offers a clean, soapy, and exceptionally "white" muskiness with a distinct pear-like fruitiness. Its primary function is to provide a "diffuse radiance" to a fragrance, making it feel less like laundry detergent and more like fine, expensive silk.',
		origin:
			'A synthetic masterpiece designed to mimic the rare and expensive natural Ambrette Seed oil (the only botanical source of musk in nature). It has become a staple in "skin-scents" where the goal is to smell like a person, only better.',
		perfumes: [
			'Narciso Rodriguez For Her',
			'Glossier You',
			'Juliette Has A Gun Not A Perfume',
		],
		pairings: [17, 14, 29],
		structure: 'C16H28O2',
		substantivity:
			'It is exceptionally long-lasting, often remaining detectable for over 400+ hours on a smelling strip. It serves as a major fixative for the heart of the perfume.',
		impactSillage:
			'It has a moderate, elegant sillage; it doesn’t project aggressively, but it creates a radiant "halo" effect that surrounds the wearer.',
		dilution:
			'Commonly used at 10% in DPG for sketching, but can be used at 100% in compounds. It is soluble in Alcohol, DPG, and IPM.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pairs beautifully with Ethyl Linalool (14) to create a "transparent" floral musk that feels modern and airy.',
	},
	{
		id: 2,
		name: 'Ambroxan',
		manufacturer: 'Various',
		family: 'amber',
		note: 'base',
		description:
			'The "superstar" of modern sillage. Ambroxan is dry, woody, and salty, mimicking the mineral warmth of natural Ambergris. Its function is to provide "structural integrity" and massive diffusion, making a fragrance feel 3D and holographic. Experts describe it as the "sparkle" that makes a fragrance feel expensive.',
		origin:
			'Derived from Sclareol, found in Clary Sage. It became a cultural phenomenon via Escentric Molecules 02, which featured it as a standalone molecule to prove its power.',
		perfumes: ['Dior Sauvage', 'Escentric Molecules 02', 'Baccarat Rouge 540'],
		pairings: [30, 13, 51],
		structure: 'C16H28O',
		substantivity:
			'It lasts over 400+ hours on a strip. It provides a dry, salty anchor that survives long after most other notes have vanished.',
		impactSillage:
			'Extremely high. This molecule is famous for "filling a room" and creating a trail (sillage) that lingers minutes after the wearer has left.',
		dilution:
			'Usually pre-diluted to 10% in DPG or Ethanol as the pure crystals can cause olfactory fatigue at 100%.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Iso E Super (30) to create the "Modern Masculine" skeleton found in scents like Dior Sauvage.',
	},
	{
		id: 3,
		name: 'Auralva (Aurantiol)',
		manufacturer: 'IFF',
		family: 'floral',
		note: 'middle',
		description:
			'Auralva is a heavy, viscous "Schiff Base" that smells like deep, honeyed orange blossom and narcotic tuberose. It functions as a "floral anchor," providing a thick, sweet foundation that prevents lighter florals from evaporating too quickly.',
		origin:
			'A chemical reaction product (Schiff Base) of Methyl Anthranilate and Hydroxycitronellal. It represents the "Old World" soul of perfumery, giving modern scents a vintage, dense floralcy.',
		perfumes: ['Fine fragrance compositions'],
		pairings: [29, 42, 1],
		structure: 'Proprietary',
		substantivity:
			'It is a marathon runner, staying on a strip for 400+ hours. It provides a lingering sweetness in the dry-down long after the petals have fallen.',
		impactSillage:
			'Low projection but massive density. It makes a perfume feel "thick" and "substantial" rather than loud.',
		dilution:
			'Typically used at 10% or 50% in DPG; the pure material is as thick as honey and difficult to pour.',
		ifraLimit: 'Restricted based on Hydroxycitronellal content.',
		pairingDetail:
			'Pair with Linalool (29) to create a realistic, woody orange blossom accord.',
	},
	{
		id: 4,
		name: 'Benzyl Acetate',
		manufacturer: 'Various',
		family: 'floral',
		note: 'top',
		description:
			'The primary "Jasmine" top note. It is fresh, sweet, and slightly fruity with pear and banana facets. Its function is to provide the "impact" and "sweetness" at the very opening of a jasmine or floral accord.',
		origin:
			'Found naturally in jasmine and ylang-ylang. It is one of the cheapest and most common materials in perfumery, acting as the starting point for almost all floral reconstructions.',
		perfumes: ['Guerlain Samsara', "Dior J'adore", 'Chanel No. 5'],
		pairings: [29, 42, 22],
		structure: 'C9H10O2',
		substantivity:
			'Very short-lived, lasting less than 4 to 8 hours on a strip. It provides the initial "blast" of floral sweetness.',
		impactSillage:
			'High impact. It is very diffusive and sweet, making the floralcy noticeable the moment the bottle is opened.',
		dilution: 'Used at 100% or 10%. Soluble in Alcohol and DPG.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Essential with Phenethyl Alcohol (42) to balance its "candy" sweetness with "watery" realism.',
	},
	{
		id: 5,
		name: 'Calone 1951',
		manufacturer: 'Firmenich',
		family: 'marine',
		note: 'top',
		description:
			'The definitive "Ocean" molecule. It smells of sea breezes, watermelon rind, and cold humidity. It functions as the primary "aquatic" engine, giving a scent a watery, fresh, and ozonic atmosphere.',
		origin:
			'Discovered accidentally by Pfizer in 1966. It launched the "Aquatic" era in the 90s, defining a generation of "Blue" scents.',
		perfumes: [
			'Davidoff Cool Water',
			"Issey Miyake L'Eau d'Issey",
			"Kenzo L'Eau Par Kenzo",
		],
		pairings: [12, 27, 29],
		structure: 'C11H14O3',
		substantivity:
			'It lasts about 48 to 72 hours on a strip. It provides a persistent "wet" feeling throughout the wear.',
		impactSillage:
			'Extremely high. Even a trace amount is instantly recognizable; if overdosed, it can smell metallic or "fishy."',
		dilution:
			'Crucially used at 1% or 0.1% in DPG. Handling it at 100% is nearly impossible for fine-tuning.',
		ifraLimit: 'No restriction, but self-limiting.',
		pairingDetail:
			'Pair with Dimethyl Octenone (12) to create a modern, violet-leaf marine accord.',
	},
	{
		id: 6,
		name: 'Citral',
		manufacturer: 'Various',
		family: 'citrus',
		note: 'top',
		description:
			'An intense, "zingy" lemon scent with a distinct green, verbena-like edge. Its function is to provide a "sharp, realistic" citrus impact that feels more like juice than peel.',
		origin:
			'The major component of Lemongrass and Litsea Cubeba oils. It is the core of "lemon" scent in nature.',
		perfumes: [
			'Atelier Cologne Clémentine California',
			'Jo Malone Verbenas of Provence',
		],
		pairings: [7, 22, 29],
		structure: 'C10H16O',
		substantivity:
			'Very fleeting, lasting less than 2 to 4 hours. It is a classic top note that provides immediate "zest."',
		impactSillage:
			'Very high. It pierces through heavier notes with a sharp, sour-sweet freshness.',
		dilution:
			'Commonly used at 10% in DPG. Pure Citral can be skin-sensitizing.',
		ifraLimit:
			'Restricted (Category 4 limits apply to avoid skin sensitization).',
		pairingDetail:
			'Pair with Citronellol (7) to create a "citrus-rose" freshness that feels natural.',
	},
	{
		id: 7,
		name: 'Citronellol',
		manufacturer: 'Various',
		family: 'floral',
		note: 'middle',
		description:
			'A clean, fresh, "rosy" floral with a distinct citrus-green undertone. It is the "spine" of almost all rose accords, providing a soft, natural, and slightly waxy texture.',
		origin:
			'Found abundantly in Rose and Geranium oils. It is one of the "big three" rose chemicals alongside Geraniol and PEA.',
		perfumes: ["Byredo Rose of No Man's Land", 'Chloé Eau de Parfum'],
		pairings: [21, 22, 42],
		structure: 'C10H20O',
		substantivity:
			'Medium longevity, lasting about 24 to 48 hours on a strip. It bridges the citrus top notes and the deeper floral heart.',
		impactSillage:
			'Moderate. It provides a steady, clean floral presence without being overpowering.',
		dilution: 'Used at 100% or 10%. Soluble in Alcohol and DPG.',
		ifraLimit: 'Restricted as a potential allergen.',
		pairingDetail:
			'Combine with Geraniol (21) and Phenethyl Alcohol (42) for a classic "Tea Rose" accord.',
	},
	{
		id: 8,
		name: 'Cyclamen Aldehyde',
		manufacturer: 'Various',
		family: 'floral',
		note: 'middle',
		description:
			'A delicate, "watery" floral that smells of cyclamen flowers and lily-of-the-valley. Its function is to provide a "dewy," fresh floralcy that feels like a florist’s refrigerator.',
		origin:
			'A synthetic aldehyde that became essential for creating "Muguet" (Lily of the Valley) scents, which cannot be extracted naturally.',
		perfumes: ['Diorissimo', 'Gucci Bloom'],
		pairings: [29, 26, 42],
		structure: 'C10H18O',
		substantivity:
			'Lasts about 48 to 72 hours. It is a reliable heart note that adds "moisture" to a floral bouquet.',
		impactSillage:
			'Moderate. It has a transparent, clean sillage that feels very modern.',
		dilution:
			'Used at 10% in DPG. It is more stable than many other aldehydes.',
		ifraLimit: 'Restricted (check Category 4 limits).',
		pairingDetail:
			'Pair with cis-3-Hexenol (26) to create a "wet, green flower" effect.',
	},
	{
		id: 9,
		name: 'Dihydro Eugenol',
		manufacturer: 'Various',
		family: 'spicy',
		note: 'middle',
		description:
			'A warm, "clove-like" spice that is softer and creamier than regular Eugenol. Its function is to add "warmth" and a "carnation-like" spiciness without the harsh "dentist office" sharp edge of pure clove.',
		origin:
			'A hydrogenated version of Eugenol (from clove oil), designed to be more stable and easier to blend in fine fragrance.',
		perfumes: ['YSL Opium', "Serge Lutens Five O'Clock Au Gingembre"],
		pairings: [51, 14, 2],
		structure: 'C10H14O2',
		substantivity:
			'Lasts about 100 hours. It is a slow-moving middle note that adds a spicy hum to the heart and dry-down.',
		impactSillage:
			'Moderate. It adds a "glow" to the fragrance rather than a sharp projection.',
		dilution:
			'Used at 10% in DPG. It is less irritating to the skin than regular Eugenol.',
		ifraLimit: 'Restricted (check Category 4 limits).',
		pairingDetail:
			'Pair with Vanillin (51) to create a "Spiced Vanilla" or "Gingerbread" effect.',
	},
	{
		id: 10,
		name: 'Dihydro Myrcenol',
		manufacturer: 'Various',
		family: 'citrus',
		note: 'top',
		description:
			'The smell of "Clean." It is lime-like, metallic, and slightly lavender. It functions as a "functional freshness" agent, making scents feel bright, soapy, and "just-out-of-the-shower."',
		origin:
			'Originally a soap-industry workhorse, it defined the "Aromatic Fougere" category in the 80s and 90s.',
		perfumes: ['Davidoff Cool Water', 'Dior Fahrenheit', 'Acqua di Gio'],
		pairings: [5, 29, 32],
		structure: 'C10H20O',
		substantivity:
			'Short-lived, lasting 12 to 24 hours on a strip. It provides the "explosive" opening characteristic of citrus scents.',
		impactSillage:
			'Very high projection. It "screams" freshness in the first 15 minutes.',
		dilution: 'Commonly used at 100% or 50% in Alcohol.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Linalyl Acetate (32) to reinforce the "citrus-clean" facet.',
	},
	{
		id: 11,
		name: 'DMBCA (Dimethyl Benzyl Carbinyl Acetate)',
		manufacturer: 'Various',
		family: 'fruity',
		note: 'top',
		description:
			'A sweet, fruity, "gardenia-like" note with facets of pear and plum. Its function is to provide a "smooth, fruity floralcy" that bridges the gap between top-note fruits and middle-note florals.',
		origin:
			'A synthetic ester that is a key component in reconstructing Gardenia and Stephanotis scents.',
		perfumes: ['Marc Jacobs Daisy', 'Gucci Flora'],
		pairings: [4, 29, 41],
		structure: 'C12H16O2',
		substantivity:
			'Lasts about 24 hours. It is a "heavy" top note that lingers into the start of the floral heart.',
		impactSillage:
			'Moderate. It provides a creamy fruitiness that feels very "designer" and polished.',
		dilution: 'Used at 10% or 100%. Soluble in Alcohol and DPG.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Benzyl Acetate (4) to create a "Fruity Jasmine" accord.',
	},
	{
		id: 12,
		name: 'Dimethyl Octenone',
		manufacturer: 'Various',
		family: 'marine',
		note: 'top',
		description:
			'A fresh, "green-marine" note with a violet leaf character. It is more "vegetal" and less "watermelon" than Calone, functioning as a sophisticated way to add a "watery" or "misty" quality.',
		origin:
			'A synthetic ketone often used in modern "mineral" or "green" aquatic scents to avoid the 90s Calone cliché.',
		perfumes: ["Kenzo L'Eau Par Kenzo", 'CK One'],
		pairings: [5, 27, 10],
		structure: 'C10H18O',
		substantivity:
			'Lasts about 12 to 24 hours. It is a fleeting top note that adds "moisture" to the opening.',
		impactSillage:
			'Moderate. It has a "diffuse" sillage that feels more like a hum than a shout.',
		dilution: 'Used at 10% in DPG. Soluble in Alcohol.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with cis-3-Hexenyl Acetate (27) for a "wet green leaf" effect.',
	},
	{
		id: 13,
		name: 'Ebanol',
		manufacturer: 'Givaudan',
		family: 'woody',
		note: 'base',
		description:
			'A rich, creamy, and "fatty" sandalwood molecule. It functions as a powerful replacement for natural Sandalwood, providing a smooth, milky woodiness with excellent tenacity.',
		origin:
			'A Givaudan captive molecule that mimics the "buttery" facets of rare Mysore Sandalwood.',
		perfumes: [
			'Le Labo Santal 33',
			'Tom Ford Santal Blush',
			'Diptyque Tam Dao',
		],
		pairings: [2, 30, 51],
		structure: 'C14H22O',
		substantivity:
			'Extremely persistent, lasting 400+ hours. It stays on skin for the entire duration of the dry-down.',
		impactSillage:
			'Moderate but steady. It creates a warm, enveloping cloud around the wearer.',
		dilution:
			'Typically used at 10% or 100%. Soluble in Alcohol, DPG, and IPM.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Combine with Vanillin (51) to create the "creamy/lactonic" sandalwood effect.',
	},
	{
		id: 14,
		name: 'Ethyl Linalool',
		manufacturer: 'Various',
		family: 'floral',
		note: 'middle',
		description:
			'A cleaner, "cooler," and more elegant version of Linalool. It smells like a fresh "floral-tea" and functions as a modern, sophisticated way to add floral volume without the "spicy" or "soapy" facets of regular Linalool.',
		origin:
			'A synthetic variant of Linalool. It is preferred in modern perfumery for its "transparency" and stability.',
		perfumes: ['Bulgari Pour Homme', 'Guerlain Aqua Allegoria'],
		pairings: [29, 32, 1],
		structure: 'C12H22O',
		substantivity:
			'Lasts about 24 to 48 hours. It is a "high-performance" heart note.',
		impactSillage:
			'Moderate. It creates a very "polite," airy floralcy that feels high-end.',
		dilution: 'Used at 100% or 10%. Soluble in Alcohol and DPG.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Linalyl Acetate (32) for a "high-end Earl Grey tea" accord.',
	},
	{
		id: 15,
		name: 'Ethyl Maltol',
		manufacturer: 'Various',
		family: 'gourmand',
		note: 'base',
		description:
			'The "Sugar" note. It smells exactly like cotton candy or strawberry jam. Its function is to act as the primary "sweetener" in gourmand fragrances, adding addictive, edible qualities.',
		origin:
			'Borrowed from the flavor industry, it launched the "Gourmand" genre with Thierry Mugler’s Angel in 1992.',
		perfumes: ['Mugler Angel', 'Prada Candy', 'Viktor&Rolf Flowerbomb'],
		pairings: [51, 16, 2],
		structure: 'C7H8O3',
		substantivity:
			'Incredibly long-lasting, staying for 400+ hours. It can linger on clothing for weeks.',
		impactSillage:
			'High. It is a "heavy" molecule that creates a thick, sweet trail.',
		dilution:
			'Best used at 1% or 10% in DPG. It is a solid crystal at room temperature.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Essential with Vanillin (51) to prevent the "sugar" from smelling too metallic.',
	},
	{
		id: 16,
		name: 'Ethyl Vanillin',
		manufacturer: 'Various',
		family: 'gourmand',
		note: 'base',
		description:
			'A more intense, "boozier," and richer version of vanilla. It is 3-4 times stronger than standard Vanillin and functions as a deep, creamy fixative.',
		origin:
			'Famously used by Jacques Guerlain in Shalimar (1925) to create the first "Oriental" fragrance.',
		perfumes: ['Guerlain Shalimar', 'Tom Ford Tobacco Vanille'],
		pairings: [51, 15, 2],
		structure: 'C9H10O3',
		substantivity:
			'Lasts 400+ hours. It is one of the most powerful base notes available.',
		impactSillage: 'Moderate-high. It creates a dense, comforting aura.',
		dilution:
			'Usually used as 10% in DPG. Note: it causes intense brown discoloration.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Ambroxan (2) to modernize a vanilla base with a "salty" edge.',
	},
	{
		id: 17,
		name: 'Ethylene Brassylate',
		manufacturer: 'Various',
		family: 'musk',
		note: 'base',
		description:
			'A soft, powdery, "sweet" musk with subtle floral facets. It functions as an "all-purpose" fixative that helps "glue" a formula together without changing the scent profile too much.',
		origin:
			'A macrocyclic musk that is one of the most widely used fixatives in the industry due to its low cost and high compatibility.',
		perfumes: ['Narciso Rodriguez For Her', 'Byredo Gypsy Water'],
		pairings: [1, 20, 42],
		structure: 'C15H26O4',
		substantivity:
			'Lasts 400+ hours. It is a "heavy" base note that provides a reliable foundation.',
		impactSillage:
			'Low-moderate. It creates a "skin-like" warmth rather than a projection.',
		dilution: 'Used at 100% or 50%. Soluble in Alcohol and DPG.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Phenethyl Alcohol (42) to extend the life of a rose accord.',
	},
	{
		id: 18,
		name: 'Exaltolide Total',
		manufacturer: 'Firmenich',
		family: 'musk',
		note: 'base',
		description:
			'An elegant, "animalic-sweet" musk with subtle "lactonic" (milky/peach) undertones. It functions as a "sensual" musk that makes a perfume feel warm, human, and soft.',
		origin:
			'One of the most prestigious macrocyclic musks from Firmenich, designed to mimic the complexity of natural musk.',
		perfumes: ['Lancôme La Vie Est Belle', 'Chanel Chance'],
		pairings: [1, 17, 29],
		structure: 'C15H28O2',
		substantivity:
			'Lasts 400+ hours. It provides a "velvety" finish to the dry-down.',
		impactSillage:
			'Moderate. It has a "diffuse" radiance that feels very high-end.',
		dilution: 'Used at 10% or 100%. Soluble in Alcohol.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Ambrettolide (1) for a "full-spectrum" high-end musk accord.',
	},
	{
		id: 19,
		name: 'Florhydral',
		manufacturer: 'Givaudan',
		family: 'floral',
		note: 'middle',
		description:
			'A "super-fresh," green floral note that smells like lily, hyacinth, and the stems of a flower. Its function is to provide a "transparent" and "vibrant" greenness to floral bouquets.',
		origin:
			'A Givaudan captive molecule designed for "transparent" floral effects in modern fragrances.',
		perfumes: ['Hermès Un Jardin sur le Nil', 'Chanel Chance Eau Fraîche'],
		pairings: [26, 8, 29],
		structure: 'C10H18O2',
		substantivity:
			'Lasts about 48 to 72 hours. It is a reliable heart note with a "dewy" finish.',
		impactSillage:
			'High. It provides a "sparkle" to florals that is very noticeable.',
		dilution: 'Used at 10% in DPG.',
		ifraLimit: 'Restricted (check Category 4 limits).',
		pairingDetail:
			'Pair with Cyclamen Aldehyde (8) to create a "Dewy Lily" accord.',
	},
	{
		id: 20,
		name: 'Galaxolide',
		manufacturer: 'IFF',
		family: 'musk',
		note: 'base',
		description:
			'The "Clean Laundry" musk. It is sweet, powdery, and floral. Its function is to provide a soft, reliable base that feels "clean" and "safe," acting as the workhorse of the industry.',
		origin:
			'Created by IFF in the 60s. It is likely the most widely used perfume material in history.',
		perfumes: ['Nearly every modern fragrance', 'Glossier You'],
		pairings: [1, 17, 30],
		structure: 'C18H26O',
		substantivity:
			'Lasts 400+ hours. It is a massive molecule that serves as a powerful fixative.',
		impactSillage:
			'Moderate. It provides volume and longevity rather than projection.',
		dilution: 'Often sold as 50% in IPM or BB; it is incredibly thick neat.',
		ifraLimit: 'No restriction, but under environmental scrutiny.',
		pairingDetail: 'Combine with Iso E Super (30) for a "clean skin" base.',
	},
	{
		id: 21,
		name: 'Geraniol',
		manufacturer: 'Various',
		family: 'floral',
		note: 'middle',
		description:
			'A "fruity-sweet" rose note with a slightly green, herbal undertone. It is the "body" of a rose accord, providing a natural, "botanical" floralcy.',
		origin:
			'Found in rose, palmarosa, and geranium. It is essential for any realistic rose reconstruction.',
		perfumes: ['Frederic Malle Portrait of a Lady', 'Chloé Eau de Parfum'],
		pairings: [7, 22, 42],
		structure: 'C10H18O',
		substantivity: 'Lasts about 24 to 48 hours. It is a core middle note.',
		impactSillage: 'Moderate. It adds a natural floral "hum" to the sillage.',
		dilution: 'Used at 100% or 10%.',
		ifraLimit: 'Restricted as an allergen.',
		pairingDetail:
			'Pair with Geranyl Acetate (22) to add a "fruity/lavender" top to the rose.',
	},
	{
		id: 22,
		name: 'Geranyl Acetate',
		manufacturer: 'Various',
		family: 'floral',
		note: 'top',
		description:
			'A fresh, "fruity-lavender" rose note with a green-herbal facet. Its function is to provide a "sparkle" and a "lift" to the top of a rose accord, making it feel less heavy.',
		origin:
			'Found in many essential oils including geranium and lemon. It is the "top-note" version of Geraniol.',
		perfumes: ['Acqua di Parma Colonia', 'Jo Malone English Pear'],
		pairings: [21, 7, 32],
		structure: 'C12H20O2',
		substantivity:
			'Short-lived, lasting about 8 to 12 hours. It provides a "bright" opening to florals.',
		impactSillage: 'Moderate-high. It is quite diffusive and fresh.',
		dilution: 'Used at 100% or 10%.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Linalyl Acetate (32) for a "fresh/aromatic" floral opening.',
	},
	{
		id: 23,
		name: 'Habanolide',
		manufacturer: 'Firmenich',
		family: 'musk',
		note: 'base',
		description:
			'A "metallic-clean" musk with facets of hot iron and fresh pear. Its function is to provide an "elegant cleanness" that feels modern and architectural.',
		origin:
			'A Firmenich macrocyclic musk that has become a favorite for its unique "metallic" shimmer.',
		perfumes: ['Chanel Chance', 'Maison Francis Kurkdjian Gentle Fluidity'],
		pairings: [1, 18, 29],
		structure: 'C15H26O2',
		substantivity: 'Lasts 400+ hours. It is a fantastic fixative.',
		impactSillage:
			'Moderate-high. It is one of the more radiant and noticeable musks.',
		dilution: 'Used at 10% or 100%.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Ambrettolide (1) for a "high-tech" clean musk accord.',
	},
	{
		id: 24,
		name: 'Hedione',
		manufacturer: 'Firmenich',
		family: 'floral',
		note: 'middle',
		description:
			'The "Perfumer’s Best Friend." It smells of airy, transparent jasmine. Its function is to act as an "expander," providing lift and diffusion to any composition.',
		origin:
			'Isolated from jasmine absolute in 1962. It revolutionized modern perfumery by making florals feel "airy."',
		perfumes: ['Dior Eau Sauvage', 'CK One', 'Chanel No. 19'],
		pairings: [29, 7, 32],
		structure: 'C13H22O3',
		substantivity: 'Lasts about 48 hours. It bridges the top and heart notes.',
		impactSillage:
			'Moderate scent, but massive "Functional Sillage"—it pushes other notes into the room.',
		dilution: 'Used at 100% (neat) in professional formulas.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Must be paired with Linalool (29) for a professional "airy" opening.',
	},
	{
		id: 25,
		name: 'Helional',
		manufacturer: 'IFF',
		family: 'floral',
		note: 'middle',
		description:
			'A "watery-green" floral that smells of cyclamen and silver-melon. Its function is to add a "metallic humidity" to florals, making them feel modern and "cool."',
		origin:
			'An IFF specialty molecule that became essential for the "Transparent Floral" trend of the 90s.',
		perfumes: ["Issey Miyake L'Eau d'Issey", 'Calvin Klein Eternity'],
		pairings: [5, 24, 8],
		structure: 'C11H12O3',
		substantivity: 'Lasts about 48 to 72 hours. It is a steady heart note.',
		impactSillage:
			'Moderate. It creates a "misty" sillage that feels very fresh.',
		dilution: 'Used at 10% in DPG.',
		ifraLimit: 'Restricted (check Category 4 limits).',
		pairingDetail: 'Pair with Calone (5) for a "modern aquatic" floral accord.',
	},
	{
		id: 26,
		name: 'Hexenol-3-cis',
		manufacturer: 'Various',
		family: 'green',
		note: 'top',
		description:
			'The literal smell of "Fresh Cut Grass." It is sharp and leaf-like. Its function is to provide "instant naturalness" to the opening.',
		origin:
			'Found naturally in green leaves. It is the core of the "Green" category.',
		perfumes: ['Hermès Un Jardin series', 'Chanel No. 19'],
		pairings: [27, 19, 22],
		structure: 'C6H12O',
		substantivity:
			'Fleeting, lasting less than 8 hours. It is a high-impact top note.',
		impactSillage: 'Enormous. A tiny amount projects massively.',
		dilution:
			'Must be used at 1% or 0.1% in DPG; it is way too powerful to use neat.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Hexenyl Acetate (27) to soften the "sharp grass" edge.',
	},
	{
		id: 27,
		name: 'Hexenyl-3-cis Acetate',
		manufacturer: 'Various',
		family: 'green',
		note: 'top',
		description:
			'A "fruity-green" note that smells of unripe pears and banana leaves. It is softer than cis-3-Hexenol and functions as a way to add a "juicy" greenness to the top notes.',
		origin:
			'The ester form of leaf alcohol, providing a more "fruit-like" green profile.',
		perfumes: ['Dolce & Gabbana Light Blue', 'Hermès Un Jardin sur le Nil'],
		pairings: [26, 12, 5],
		structure: 'C8H14O2',
		substantivity: 'Lasts about 4 to 8 hours. It is a classic top note.',
		impactSillage: 'Moderate-high. It is very diffusive and uplifting.',
		dilution: 'Used at 10% or 1% in DPG.',
		ifraLimit: 'No restriction.',
		pairingDetail: 'Pair with Calone (5) for a "watery-green fruit" opening.',
	},
	{
		id: 28,
		name: 'Hexyl Salicylate',
		manufacturer: 'Various',
		family: 'floral',
		note: 'middle',
		description:
			'A "silky," orchid-like floral note with green facets. Its function is to act as a "blender," smoothing out harsh florals and providing a "solar" (sunscreen-like) warmth.',
		origin:
			'A synthetic ester that is a key building block for modern floral and tropical scents.',
		perfumes: ['Tom Ford Black Orchid', 'Gucci Bloom'],
		pairings: [29, 42, 8],
		structure: 'C13H18O3',
		substantivity:
			'Lasts 100+ hours. It is a slow-moving heart note that anchors florals.',
		impactSillage:
			'Low. It is more about "texture" and "smoothing" than projection.',
		dilution: 'Used at 100% or 10%. Soluble in Alcohol.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Linalool (29) to add "heft" and "silkiness" to the floral heart.',
	},
	{
		id: 29,
		name: 'Linalool',
		manufacturer: 'Various',
		family: 'floral',
		note: 'middle',
		description:
			'The "Universal Blender." It is fresh, woody-floral, and slightly spicy (like coriander). It is the most used material in perfumery, functioning as the "bridge" between citrus, floral, and spice notes.',
		origin:
			'Found in lavender, rosewood, and bergamot. It is essential for a natural feeling in almost all fragrances.',
		perfumes: ['Nearly every fine fragrance', 'Chanel No. 5'],
		pairings: [32, 24, 7],
		structure: 'C10H18O',
		substantivity:
			'Lasts about 12 to 24 hours. It is a high-impact top/middle note.',
		impactSillage:
			'High. It provides an immediate "perfume" smell and great radiance.',
		dilution: 'Used at 100% or 10%. Highly soluble.',
		ifraLimit: 'Restricted as an allergen.',
		pairingDetail:
			'Pair with Linalyl Acetate (32) for a classic "Lavender/Bergamot" structure.',
	},
	{
		id: 30,
		name: 'Iso E Super',
		manufacturer: 'IFF',
		family: 'woody',
		note: 'base',
		description:
			'The "Skeleton" of modern perfumery. It is smooth, velvety, and smells of cedarwood and pencil shavings. It provides volume, comfort, and a professional "polish."',
		origin:
			'Created by IFF in 1973. It is the #1 cause of olfactory fatigue but creates a massive "halo" for others to smell.',
		perfumes: ['Escentric Molecules Molecule 01', "Terre d'Hermès"],
		pairings: [2, 13, 51],
		structure: 'C16H26O',
		substantivity:
			'Lasts 172+ hours on a strip. It clings to skin and fabric for days.',
		impactSillage:
			'Moderate-high. It creates a "hovering" sillage that others will notice as you walk by.',
		dilution: 'Used at 100% or 20%.',
		ifraLimit: 'Restricted to 21.4% in the final product.',
		pairingDetail:
			'Pair with Ambroxan (2) for a modern, transparent woody base.',
	},
	{
		id: 31,
		name: 'Indolene 50',
		manufacturer: 'Various',
		family: 'floral',
		note: 'middle',
		description:
			'The "Animalic Soul." It smells of overripe jasmine with a mothball undertone. Its function is to provide "realism" and "fleshiness" to synthetic floral accords.',
		origin:
			'A more stable version of Indole. It adds the "funk" of real flowers without the brown staining.',
		perfumes: ['Serge Lutens Sarrasins', 'Malle Carnal Flower'],
		pairings: [4, 24, 42],
		structure: 'C17H17N',
		substantivity: 'Lasts about 120 hours. It provides a warm, "dirty" heart.',
		impactSillage: 'Moderate. It adds a "human" warmth.',
		dilution: 'Used at 1% or 10% in DPG. Discolors over time.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Essential with Benzyl Acetate (4) to turn "jasmine candy" into "real jasmine."',
	},
	{
		id: 32,
		name: 'Linalyl Acetate',
		manufacturer: 'Various',
		family: 'floral',
		note: 'top',
		description:
			'The "Bergamot Note." It is fresh, sweet, and lavender-citrus. Its function is to provide a "clean, bright, and airy" opening that feels much more sophisticated than simple lemon or orange.',
		origin:
			'Found in bergamot and lavender. It is the "top-note" version of Linalool.',
		perfumes: ['Acqua di Parma Colonia', 'Dior Eau Sauvage'],
		pairings: [29, 22, 24],
		structure: 'C12H20O2',
		substantivity:
			'Fleeting, lasting 4 to 8 hours. It is a classic opening material.',
		impactSillage: 'Moderate-high. It provides a "sparkling" freshness.',
		dilution: 'Used at 100% or 10%.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Hedione (24) for a radiant, "luminous" citrus opening.',
	},
	{
		id: 33,
		name: 'Methyl Benzoate',
		manufacturer: 'Various',
		family: 'floral',
		note: 'top',
		description:
			'A "sharp, fruity-ylang" floral note with a distinct "medicinal" or "almond-like" edge. Its function is to provide an immediate "exotic" floral impact.',
		origin:
			'Found in ylang-ylang and cloves. It is used to add "bite" to tropical floral accords.',
		perfumes: ['Chanel No. 5', 'Tom Ford Champaca Absolute'],
		pairings: [4, 29, 42],
		structure: 'C8H8O2',
		substantivity:
			'Very fleeting, lasting less than 2 hours. It is an "impact" top note.',
		impactSillage: 'Enormous. It "jumps" out of the bottle immediately.',
		dilution: 'Used at 1% or 10% in DPG.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Benzyl Acetate (4) to create a "Ylang-Ylang" opening.',
	},
	{
		id: 34,
		name: 'Methyl Diantilis',
		manufacturer: 'Givaudan',
		family: 'floral',
		note: 'middle',
		description:
			'A creamy, "carnation-like" note with spicy-clove facets. Its function is to add a "spicy, vintage" warmth to florals without the skin irritation of regular Eugenol.',
		origin:
			'A Givaudan specialty designed for carnation and "clove-pink" effects in fine fragrance.',
		perfumes: [
			'Frederic Malle Carnal Flower',
			"Serge Lutens Vitriol d'Oeillet",
		],
		pairings: [9, 7, 29],
		structure: 'C13H16O3',
		substantivity: 'Lasts about 100 hours. It is a slow-moving heart note.',
		impactSillage: 'Moderate. It adds "density" and "warmth" to the dry-down.',
		dilution: 'Used at 10% in DPG.',
		ifraLimit: 'Restricted (check Category 4 limits).',
		pairingDetail:
			'Pair with Dihydro Eugenol (9) for a realistic, spicy carnation accord.',
	},
	{
		id: 35,
		name: 'Methyl Laitone',
		manufacturer: 'Givaudan',
		family: 'gourmand',
		note: 'middle',
		description:
			'A creamy, "coconut-milk" note with peach undertones. Its function is to add "creaminess" and "softness" to tropical or gourmand scents, making them feel "comforting."',
		origin:
			'A Givaudan captive molecule that provides a unique "milky" texture.',
		perfumes: ['Tom Ford Soleil Blanc', 'Maison Margiela Beach Walk'],
		pairings: [18, 15, 1],
		structure: 'C11H18O2',
		substantivity: 'Lasts about 48 to 72 hours. It is a persistent heart note.',
		impactSillage:
			'Low-moderate. It creates a "creamy aura" rather than projection.',
		dilution: 'Used at 10% or 1% in DPG; it is very powerful.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Exaltolide (18) for a "creamy, skin-like" muskiness.',
	},
	{
		id: 36,
		name: 'Orange Terpenes',
		manufacturer: 'Various',
		family: 'citrus',
		note: 'top',
		description:
			'The pure, "fizzy" smell of an orange peel being squeezed. Its function is to add "sparkle" and "lift" to any citrus opening, making it feel "alive" and "energetic."',
		origin: 'Cold-pressed from orange peels, primarily consisting of Limonene.',
		perfumes: ['Acqua di Parma Arancia', 'Atelier Cologne Orange Sanguine'],
		pairings: [6, 10, 22],
		structure: 'C10H16',
		substantivity:
			'Extremely fleeting, lasting less than 1 hour. It is the definition of a top note.',
		impactSillage: 'Very high projection. It "pops" immediately.',
		dilution: 'Used at 100% or 10%. Highly flammable.',
		ifraLimit:
			'No restriction, but watch out for phototoxicity in natural citrus oils.',
		pairingDetail:
			'Pair with Citral (6) for a "complete lemon-orange" opening.',
	},
	{
		id: 37,
		name: 'Oranger Crystals',
		manufacturer: 'Various',
		family: 'floral',
		note: 'middle',
		description:
			'A sweet, "honeyed" orange blossom note with distinct grape-like facets. Its function is to add "narcotic depth" and "honeyed sweetness" to white floral accords.',
		origin:
			'A crystalline derivative of Methyl Anthranilate used for orange flower effects.',
		perfumes: ["Serge Lutens Fleurs d'Oranger", 'Tom Ford Neroli Portofino'],
		pairings: [42, 31, 24],
		structure: 'C12H17NO3',
		substantivity: 'Lasts 200+ hours. It is a slow-moving heart/base note.',
		impactSillage: 'Moderate-high. It adds a "heavy" sweetness.',
		dilution: 'Used at 10% in DPG. Will discolor your perfume brown.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Indolene (31) for a realistic, "animalic" orange blossom.',
	},
	{
		id: 38,
		name: 'Para Cresyl Acetate',
		manufacturer: 'Various',
		family: 'animalic',
		note: 'middle',
		description:
			'A "narcissus-like" floral note with facets of hay, leather, and stable (animalic). Its function is to add a "wild, botanical" realism to floral or leather scents.',
		origin:
			'Found in narcissus absolute. It provides the "dirty, sexy" edge found in high-end floral extraits.',
		perfumes: ['Hermès Kelly Calèche', 'Malle Portrait of a Lady'],
		pairings: [31, 42, 2],
		structure: 'C9H10O2',
		substantivity: 'Lasts about 48 to 72 hours. It is a persistent heart note.',
		impactSillage: 'Moderate. It adds "human warmth" to the sillage.',
		dilution: 'Used at 1% or 0.1% in DPG; it is very potent.',
		ifraLimit: 'No restriction.',
		pairingDetail: 'Pair with Ambroxan (2) for a "dirty mineral" dry-down.',
	},
	{
		id: 39,
		name: 'Peonile',
		manufacturer: 'Givaudan',
		family: 'floral',
		note: 'middle',
		description:
			'A soft, "modern rose-peony" note with fresh green facets. Its function is to provide a "dewy, feminine" floral heart that feels much younger than traditional rose.',
		origin:
			'A Givaudan captive molecule designed for realistic, "airy" peony accords.',
		perfumes: ['Chloé Eau de Parfum', 'Lancôme La Vie Est Belle'],
		pairings: [7, 21, 8],
		structure: 'C14H24O2',
		substantivity: 'Lasts about 48 to 72 hours. It is a solid middle note.',
		impactSillage: 'Moderate-high. It is very diffusive and "pretty."',
		dilution: 'Used at 10% in DPG.',
		ifraLimit: 'No restriction.',
		pairingDetail: 'Pair with Citronellol (7) to create a "Peony Rose" accord.',
	},
	{
		id: 40,
		name: 'Petitgrain EO',
		manufacturer: 'Paraguay',
		family: 'citrus',
		note: 'top',
		description:
			'A fresh, "bitter-green" citrus note with woody-leaf facets. Its function is to add "naturalness" and a "botanical bite" to cologne-style fragrances.',
		origin:
			'Steam distilled from the leaves and twigs of the bitter orange tree.',
		perfumes: ["Hermès Eau d'Orange Verte", 'Jo Malone Wood Sage'],
		pairings: [32, 29, 36],
		structure: 'Complex',
		substantivity:
			'Fleeting, lasting 4 to 8 hours. It is a classic aromatic top note.',
		impactSillage: 'Moderate. It adds "texture" rather than projection.',
		dilution: 'Used at 100% or 10%.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Linalyl Acetate (32) for a "classic Mediterranean" cologne opening.',
	},
	{
		id: 41,
		name: 'Phenethyl Acetate',
		manufacturer: 'Various',
		family: 'floral',
		note: 'top',
		description:
			'A fresh, "honeyed rose" note with fruity pear facets. Its function is to provide a "sweet, diffusive" opening to rose accords, making them feel "wet" and "fresh."',
		origin:
			'Found in roses and various fruits. It is the "top-note" version of Phenethyl Alcohol.',
		perfumes: ['Chloé Eau de Parfum', 'Jo Malone Red Roses'],
		pairings: [42, 4, 22],
		structure: 'C10H12O2',
		substantivity:
			'Short-lived, lasting 4 to 8 hours. It is a "bright" opening floral.',
		impactSillage: 'Moderate-high. It provides a sweet floral projection.',
		dilution: 'Used at 10% or 100%.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Phenethyl Alcohol (42) to create a "complete rose" transition.',
	},
	{
		id: 42,
		name: 'Phenethyl Alcohol (PEA)',
		manufacturer: 'Various',
		family: 'floral',
		note: 'middle',
		description:
			'The "Heart of the Rose." It is a soft, sweet, "honey-petal" floral note. Its function is to provide the "watery" realism of rose petals; without it, rose feels thin.',
		origin:
			'Found naturally in huge quantities in Rose Otto. It is a foundational building block for all floral perfumery.',
		perfumes: ['Nearly every rose fragrance', 'Chanel No. 5'],
		pairings: [41, 7, 21],
		structure: 'C8H10O',
		substantivity: 'Lasts about 24 to 48 hours. It is a solid heart note.',
		impactSillage: 'Moderate. It provides the "body" of the floral sillage.',
		dilution: 'Used at 100% or 10%. Highly soluble.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Must be paired with Citronellol (7) and Geraniol (21) for a realistic rose.',
	},
	{
		id: 43,
		name: 'PEPA Replacer',
		manufacturer: 'Various',
		family: 'floral',
		note: 'middle',
		description:
			'A "modern rose-honey" note with green tea nuances. Its function is to provide a "cleaner, tea-like" rose heart that fits better in modern "watery" floral compositions.',
		origin:
			'A synthetic blend designed to modernize the traditional rose heart.',
		perfumes: ['Modern rose fragrance compositions'],
		pairings: [42, 41, 21],
		structure: 'Various',
		substantivity: 'Lasts about 48 hours. It is a reliable heart note.',
		impactSillage: 'Moderate. It adds a "transparent" floral hum.',
		dilution: 'Used at 10% in DPG.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Phenethyl Alcohol (42) to add "depth" to its modern tea-like profile.',
	},
	{
		id: 44,
		name: 'Rose Oxide',
		manufacturer: 'Various',
		family: 'floral',
		note: 'top',
		description:
			'A "metallic-green" rose note with distinct lychee facets. Its function is to provide the "sparkle" and "metallic bite" found in high-end Bulgarian rose oil.',
		origin:
			'The "character-impact" chemical of natural rose oil. It is very powerful and recognizable.',
		perfumes: [
			'Frederic Malle Portrait of a Lady',
			"Byredo Rose of No Man's Land",
		],
		pairings: [42, 21, 7],
		structure: 'C10H18O',
		substantivity:
			'Lasts about 12 to 24 hours. It is a high-impact top/middle note.',
		impactSillage:
			'Very high. It "shines" through the formula like a metallic thread.',
		dilution: 'Must be used at 1% or 0.1% in DPG; it is very potent.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Phenethyl Alcohol (42) to "naturalize" a synthetic rose.',
	},
	{
		id: 45,
		name: 'Stemone',
		manufacturer: 'Givaudan',
		family: 'green',
		note: 'top',
		description:
			'A "green-stem" note that smells of fig leaves, tomato vines, and violet leaf. Its function is to provide a "natural, vegetal" greenness that feels "wet" and "raw."',
		origin:
			'A Givaudan captive molecule that is essential for the "Fig Leaf" trend (e.g., Diptyque Philosykos).',
		perfumes: ['Hermès Un Jardin series', "Issey Miyake L'Eau d'Issey"],
		pairings: [26, 12, 5],
		structure: 'C10H16O2',
		substantivity:
			'Lasts about 24 to 48 hours. It is a persistent top/middle note.',
		impactSillage:
			'Moderate-high. It provides a very distinct "green stem" projection.',
		dilution: 'Used at 10% or 1% in DPG.',
		ifraLimit: 'No restriction.',
		pairingDetail: 'Pair with Calone (5) for a "wet, vegetal garden" accord.',
	},
	{
		id: 46,
		name: 'Styrallyl Acetate',
		manufacturer: 'Various',
		family: 'floral',
		note: 'top',
		description:
			'A "green-gardenia" note with distinct rhubarb and tropical facets. Its function is to provide a "tart, green sparkle" to the opening of floral or fruity scents.',
		origin: 'A synthetic ester used for gardenia and rhubarb effects.',
		perfumes: ['Marc Jacobs Daisy', 'Michael Kors Island'],
		pairings: [4, 11, 29],
		structure: 'C10H12O2',
		substantivity:
			'Short-lived, lasting 4 to 8 hours. It is a "sparkly" opening note.',
		impactSillage: 'High. It provides a sharp, tart projection.',
		dilution: 'Used at 1% or 10% in DPG.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with DMBCA (11) for a realistic, "tart gardenia" opening.',
	},
	{
		id: 47,
		name: 'Tetrahydro Linalool',
		manufacturer: 'Various',
		family: 'floral',
		note: 'middle',
		description:
			'A "super-stable, super-clean" version of Linalool. It smells of fresh-floral-woody and functions as the backbone for "functional" scents where regular Linalool might break down.',
		origin:
			'A hydrogenated version of Linalool. It is the "cleanest" possible version of that scent profile.',
		perfumes: ['Clean fragrances', 'Acqua di Gio'],
		pairings: [29, 10, 14],
		structure: 'C10H22O',
		substantivity: 'Lasts about 24 hours. It is a steady heart note.',
		impactSillage: 'Moderate. It provides a "polite" and steady floralcy.',
		dilution: 'Used at 100% or 10%.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Dihydro Myrcenol (10) for a "high-performance clean" accord.',
	},
	{
		id: 48,
		name: 'Toscanol',
		manufacturer: 'Givaudan',
		family: 'woody',
		note: 'base',
		description:
			'A "warm, milky" sandalwood-like note with facets of hay and anise. Its function is to add a "comfortable, creamy" woodiness that feels much softer than cedar.',
		origin:
			'A Givaudan sandalwood alternative designed for soft, enveloping dry-downs.',
		perfumes: ['Byredo Gypsy Water', 'Le Labo Santal 33'],
		pairings: [13, 2, 30],
		structure: 'C13H24O',
		substantivity: 'Lasts 300+ hours. It is a very persistent base note.',
		impactSillage: 'Low-moderate. It creates a "warm skin" aura.',
		dilution: 'Used at 10% in DPG.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Ebanol (13) for a "ultra-creamy" sandalwood base.',
	},
	{
		id: 49,
		name: 'Ultrazur',
		manufacturer: 'Givaudan',
		family: 'marine',
		note: 'top',
		description:
			'A "modern ozonic" note that smells of clean, cold air and metallic water. Its function is to provide a "high-tech" marine freshness that is less "fruit/melon" and more "mineral."',
		origin:
			'A Givaudan captive designed for the "new generation" of mineral aquatics.',
		perfumes: ['Acqua di Gio', "Issey Miyake L'Eau d'Issey"],
		pairings: [5, 10, 12],
		structure: 'Proprietary',
		substantivity:
			'Lasts about 48 hours. It provides a persistent "misty" quality.',
		impactSillage: 'High. It is very radiant and diffusive.',
		dilution: 'Used at 1% or 10% in DPG.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Dihydro Myrcenol (10) for a "high-tech laundry" marine opening.',
	},
	{
		id: 50,
		name: 'Undecavertol',
		manufacturer: 'Givaudan',
		family: 'green',
		note: 'middle',
		description:
			'A "violet-leaf-cucumber" note that feels "transparent" and "misty." Its function is to add a "wet, green" heart to floral or aquatic scents.',
		origin: 'A Givaudan specialty for realistic, watery violet leaf effects.',
		perfumes: ['Chanel No. 19', 'Hermès Un Jardin series'],
		pairings: [26, 45, 8],
		structure: 'C11H20O',
		substantivity: 'Lasts about 24 to 48 hours. It is a solid heart note.',
		impactSillage: 'Moderate. It adds a "moist" texture to the sillage.',
		dilution: 'Used at 10% in DPG.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Pair with Stemone (45) for a realistic "fig-leaf-and-water" accord.',
	},
	{
		id: 51,
		name: 'Vanillin',
		manufacturer: 'Various',
		family: 'gourmand',
		note: 'base',
		description:
			'The gold standard of "Warmth." It smells of classic vanilla and sweet wood. Its function is to provide comfort, sweetness, and a "rounding" effect that softens harsh compositions.',
		origin:
			'Synthetic identical to vanilla beans. It is the soul of the "Oriental" fragrance family.',
		perfumes: ['Guerlain Shalimar', 'Mugler Angel'],
		pairings: [16, 15, 2],
		structure: 'C8H8O3',
		substantivity: 'Lasts 400+ hours. It is an incredible fixative.',
		impactSillage: 'Moderate-high. It creates a "tasty" trail.',
		dilution: 'Usually 10% in DPG. Causes brown discoloration.',
		ifraLimit: 'No restriction.',
		pairingDetail:
			'Combine with Ethyl Maltol (15) for a "sugar-and-custard" gourmand base.',
	},
];

export const families: Record<ScentFamily, string> = {
	floral: '#E8B5C5',
	citrus: '#F5D68A',
	woody: '#C4A570',
	musk: '#D5C5B5',
	amber: '#D4A050',
	marine: '#95C8E8',
	green: '#98D898',
	gourmand: '#E8B090',
	spicy: '#C48550',
	fruity: '#F0A4B4',
	animalic: '#B9A876',
};

export const familyOrder: ScentFamily[] = [
	'citrus',
	'green',
	'marine',
	'fruity',
	'floral',
	'spicy',
	'animalic',
	'gourmand',
	'woody',
	'amber',
	'musk',
];
