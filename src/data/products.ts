// Product & Variant Types 

export interface ProductVariant {
  id: string; 
  name: string; 
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number; 
  unit?: string; 
  description: string;
  image: string;
  thumbnails?: string[]; 
  variants?: ProductVariant[]; 
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  { id: 'meats', name: 'Meats', image: '/category-meats.png' },
  { id: 'poultry', name: 'Poultry', image: '/category-poultry.png' },
  { id: 'fish', name: 'Fish & Seafood', image: '/category-fish.png' },
  { id: 'vegetables', name: 'Vegetables', image: '/category-vegetables.png' },
];

// --- Products
export const PRODUCTS: Product[] = [
  // == MEATS (Prices & Units) ==
  { id: 'cow-meat', name: 'Cow Meat', category: 'meats', price: 48, unit: '1 kg', description: 'Fresh, high-quality cow meat.', image: '/cow-meat.png' },
  { id: 'goat-meat', name: 'Goat Meat', category: 'meats', price: 52, unit: '1 kg', description: 'Fresh, high-quality goat meat.', image: '/goat-meat1.png' },
  { id: 'grasscutter', name: 'Grasscutter', category: 'meats', price: 750, unit: 'full', description: 'Fresh, high-quality full grasscutter.', image: '/grassc.jpg' },
  { id: 'snail', name: 'Snail (Medium)', category: 'meats', price: 85, unit: '5 pieces', description: 'Pack of 5 medium-sized fresh snails.', image: '/snail.png' },
  { id: 'pork', name: 'Pork (Farm Fresh)', category: 'meats', price: 136, unit: '5 kg', description: 'Fresh, high-quality farm-raised pork.', image: '/pork.png' },

  // == POULTRY 
  { 
    id: 'whole-chicken', 
    name: 'Whole Chicken', 
    category: 'poultry', 
    price: 0, 
    description: 'Fresh, farm-raised whole chicken. Select your preferred type and size.', 
    image: '/category-poultry.png', 
    variants: [ 
      { id: 'layer-whole', name: 'Whole Chicken (Layer)', price: 180 },
      { id: 'broiler-1.5kg', name: 'Broiler 1.5 kg', price: 120 },
      { id: 'broiler-1.8kg', name: 'Broiler 1.8 kg', price: 155 },
      { id: 'broiler-2.0kg', name: 'Broiler 2.0 kg', price: 170 },
      { id: 'broiler-2.2kg', name: 'Broiler 2.2 kg', price: 180 },
      { id: 'broiler-2.4kg', name: 'Broiler 2.4 kg', price: 190 },
      { id: 'broiler-2.6kg', name: 'Broiler 2.6 kg', price: 220 },
      { id: 'broiler-2.8kg', name: 'Broiler 2.8 kg', price: 230 },
      { id: 'broiler-3.0kg', name: 'Broiler 3.0 kg', price: 250 },
    ] 
  },
  // Chicken Parts Products
  { id: 'chicken-gizzard', name: 'Chicken Gizzard', category: 'poultry', price: 54, unit: '1 kg', description: 'Fresh chicken gizzards.', image: '/chicken-gizzard.png' }, 
  { id: 'chicken-drumstick-broiler', name: 'Chicken Drumstick (Broiler)', category: 'poultry', price: 70, unit: '1 kg', description: 'Fresh broiler chicken drumsticks.', image: '/chicken-drumstick.png' }, 
  { id: 'chicken-thigh-broiler', name: 'Chicken Thigh (Broiler)', category: 'poultry', price: 70, unit: '1 kg', description: 'Fresh broiler chicken thighs.', image: '/chicken-thigh.png' }, 
  { id: 'chicken-wings-layer', name: 'Chicken Wings (Layer)', category: 'poultry', price: 62, unit: '1 kg', description: 'Fresh layer chicken wings.', image: '/chicken-wings.png' }, 
  { id: 'chicken-wings-broiler', name: 'Chicken Wings (Broiler)', category: 'poultry', price: 65, unit: '1 kg', description: 'Fresh broiler chicken wings.', image: '/chicken-wings-broiler.png' }, 

  { id: 'guinea-fowl', name: 'Guinea Fowl', category: 'poultry', price: 0, description: 'Fresh, farm-raised guinea fowl.', image: '/guinea-fowl.png' },
  { 
    id: 'turkey', 
    name: 'Turkey', 
    category: 'poultry', 
    price: 0, 
    description: 'Fresh, farm-raised whole turkey. Select your preferred size.', 
    image: '/turkey.png', 
    variants: [ 
      { id: 'turkey-8kg', name: 'Turkey - 8 kg', price: 1500 },
      { id: 'turkey-10kg', name: 'Turkey - 10 kg', price: 1800 },
      { id: 'turkey-12kg', name: 'Turkey - 12 kg', price: 2100 },
    ] 
  },
  { id: 'eggs', name: 'Eggs', category: 'poultry', price: 0, unit: 'crate', description: 'Fresh, farm-raised eggs (crate).', image: '/eggs.png' }, // Added unit, Price TBD
  
  // == FISH & SEAFOOD ==
  { id: 'tilapia', name: 'Tilapia', category: 'fish', price: 0, description: 'Fresh tilapia.', image: '/tilapia.png' },
  { id: 'catfish', name: 'Catfish', category: 'fish', price: 0, description: 'Fresh catfish.', image: '/catfishp.png' },
  { id: 'mackerel', name: 'Mackerel', category: 'fish', price: 0, description: 'Fresh mackerel.', image: '/mackerel.png' },
  { id: 'grouper', name: 'Grouper', category: 'fish', price: 0, description: 'Fresh grouper.', image: '/grouper.png' },
  { id: 'crabs', name: 'Crabs', category: 'fish', price: 0, description: 'Fresh crabs.', image: '/crabs.png' },
  { id: 'shrimp', name: 'Shrimp', category: 'fish', price: 0, description: 'Fresh shrimp.', image: '/shrimp.png' },
  { id: 'octopus', name: 'Octopus', category: 'fish', price: 0, description: 'Fresh octopus.', image: '/octopus.png' },
  { id: 'squid', name: 'Squid', category: 'fish', price: 0, description: 'Fresh squid.', image: '/squid.png' },
  { id: 'salmon', name: 'Salmon', category: 'fish', price: 0, description: 'Fresh salmon.', image: '/salmon.png' },
  
  // == VEGETABLES (Prices TBD) ==
  { id: 'tomatoes', name: 'Tomatoes', category: 'vegetables', price: 0, description: 'Fresh, organic tomatoes.', image: '/tomatoes.png' },
  { id: 'onions', name: 'Onions', category: 'vegetables', price: 0, description: 'Fresh, organic onions.', image: '/onions.png' },
  { id: 'chili-pepper', name: 'Chili Pepper', category: 'vegetables', price: 0, description: 'Fresh, hot chili pepper.', image: '/chili-pepper.png' },
  { id: 'bell-pepper', name: 'Bell Pepper', category: 'vegetables', price: 0, description: 'Fresh, sweet bell pepper.', image: '/bell-pepper.png' },
  { id: 'okra', name: 'Okra', category: 'vegetables', price: 0, description: 'Fresh, organic okra.', image: '/okra.png' },
  { id: 'garden-eggs', name: 'Garden Eggs', category: 'vegetables', price: 0, description: 'Fresh, organic garden eggs.', image: '/garden-eggs.jpg' },
  { id: 'cabbage', name: 'Cabbage', category: 'vegetables', price: 0, description: 'Fresh, organic cabbage.', image: '/cabbage.png' },
  { id: 'carrots', name: 'Carrots', category: 'vegetables', price: 0, description: 'Fresh, organic carrots.', image: '/carrots.png' },
  { id: 'lettuce', name: 'Lettuce', category: 'vegetables', price: 0, description: 'Fresh, organic lettuce.', image: '/lettuce.png' },
  { id: 'cucumber', name: 'Cucumber', category: 'vegetables', price: 0, description: 'Fresh, organic cucumber.', image: '/cucumber.png' },
  { id: 'spinach', name: 'Spinach', category: 'vegetables', price: 0, description: 'Fresh, organic spinach.', image: '/spinach.png' },
];