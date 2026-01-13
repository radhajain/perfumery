// Curated classy stock photos from Unsplash for each scent family vibe
export const familyImages: Record<string, string> = {
  // Musk - soft, powdery, clean
  musk: 'https://images.unsplash.com/photo-1604762516-2433f65f7ed7?w=800&q=80',

  // Amber - warm, resinous, golden
  amber: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80',

  // Floral - elegant flowers
  floral: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',

  // Citrus - fresh citrus fruits
  citrus: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=800&q=80',

  // Marine - ocean, water, fresh
  marine: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80',

  // Green - leaves, nature, fresh cut grass
  green: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',

  // Woody - wood, cedar, forest
  woody: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',

  // Gourmand - vanilla, desserts, sweet
  gourmand: 'https://images.unsplash.com/photo-1548888396-7b2d98c25e09?w=800&q=80',

  // Spicy - spices, warm tones
  spicy: 'https://images.unsplash.com/photo-1596040033229-a0b40419b8f2?w=800&q=80',

  // Fruity - berries, stone fruits
  fruity: 'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=800&q=80',

  // Animalic - leather, sophisticated
  animalic: 'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?w=800&q=80',
};

// Specific aromachemical images - curated to match the specific character
export const aromachemicalImages: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1604762516-2433f65f7ed7?w=800&q=80', // Ambrettolide - musk, soft white
  2: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80', // Ambroxan - amber glow
  3: 'https://images.unsplash.com/photo-1463992286267-d37bef1211c7?w=800&q=80', // Auralva - violet/iris
  4: 'https://images.unsplash.com/photo-1524386416438-98b9b2d4b433?w=800&q=80', // Benzyl Acetate - jasmine
  5: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80', // Calone - ocean/marine
  6: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=800&q=80', // Citral - lemon
  7: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=800&q=80', // Citronellol - rose petals
  8: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?w=800&q=80', // Cyclamen Aldehyde - lily of valley
  9: 'https://images.unsplash.com/photo-1596040033229-a0b40419b8f2?w=800&q=80', // Dihydro Eugenol - clove spice
  10: 'https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=800&q=80', // Dihydro Myrcenol - lavender fresh
  11: 'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=800&q=80', // DMBCA - pear/gardenia
  12: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&q=80', // Dimethyl Octenone - violet leaf
  13: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80', // Ebanol - sandalwood
  14: 'https://images.unsplash.com/photo-1516634439120-d8beda7b497b?w=800&q=80', // Ethyl Linalool - tea/floral
  15: 'https://images.unsplash.com/photo-1548888396-7b2d98c25e09?w=800&q=80', // Ethyl Maltol - cotton candy
  16: 'https://images.unsplash.com/photo-1571506165871-ee72a35bc9d1?w=800&q=80', // Ethyl Vanillin - vanilla
  17: 'https://images.unsplash.com/photo-1583706932006-53eb736348f8?w=800&q=80', // Ethylene Brassylate - powdery musk
  18: 'https://images.unsplash.com/photo-1629103615081-74a7e50dca8e?w=800&q=80', // Exaltolide - peach/musk
  19: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80', // Florhydral - green floral
  20: 'https://images.unsplash.com/photo-1618061832108-eebd9b3d6c66?w=800&q=80', // Galaxolide - clean white
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
