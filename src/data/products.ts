// --- Product Types ---
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  thumbnails: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

// Categories 
export const CATEGORIES: Category[] = [
  { id: 'meats', name: 'Meats', image: '/category-meats.png' },
  { id: 'poultry', name: 'Poultry', image: '/category-poultry.png' },
  { id: 'fish', name: 'Fish & Seafood', image: '/category-fish.png' },
  { id: 'vegetables', name: 'Vegetables', image: '/category-vegetables.png' },
];

// Products 
export const PRODUCTS: Product[] = [
  // == MEATS ==
  { id: 'cow-meat', name: 'Cow Meat', category: 'meats', price: 0, description: 'Fresh, high-quality cow meat.', image: '/cow-meat.png', thumbnails: [] },
  { id: 'goat-meat', name: 'Goat Meat', category: 'meats', price: 0, description: 'Fresh, high-quality goat meat.', image: '/goat-meat.png', thumbnails: [] },
  { id: 'grasscutter', name: 'Grasscutter', category: 'meats', price: 0, description: 'Fresh, high-quality grasscutter.', image: '/grasscutter.png', thumbnails: [] },
  { id: 'snail', name: 'Snail', category: 'meats', price: 0, description: 'Fresh, high-quality snail.', image: '/snail.png', thumbnails: [] },
  { id: 'pork', name: 'Pork', category: 'meats', price: 0, description: 'Fresh, high-quality pork.', image: '/pork.png', thumbnails: [] },

  // == POULTRY ==
  { id: 'chicken', name: 'Chicken', category: 'poultry', price: 0, description: 'Fresh, farm-raised chicken.', image: '/chicken.png', thumbnails: [] },
  { id: 'guinea-fowl', name: 'Guinea Fowl', category: 'poultry', price: 0, description: 'Fresh, farm-raised guinea fowl.', image: '/guinea-fowl.png', thumbnails: [] },
  { id: 'turkey', name: 'Turkey', category: 'poultry', price: 0, description: 'Fresh, farm-raised turkey.', image: '/turkey.png', thumbnails: [] },
  { id: 'eggs', name: 'Eggs', category: 'poultry', price: 0, description: 'Fresh, farm-raised eggs.', image: '/eggs.png', thumbnails: [] },
  
  // == FISH & SEAFOOD ==
  { id: 'tilapia', name: 'Tilapia', category: 'fish', price: 0, description: 'Fresh tilapia.', image: '/tilapia.png', thumbnails: [] },
  { id: 'catfish', name: 'Catfish', category: 'fish', price: 0, description: 'Fresh catfish.', image: '/catfishp.png', thumbnails: [] },
  { id: 'mackerel', name: 'Mackerel', category: 'fish', price: 0, description: 'Fresh mackerel.', image: '/mackerel.png', thumbnails: [] },
  { id: 'grouper', name: 'Grouper', category: 'fish', price: 0, description: 'Fresh grouper.', image: '/grouper.png', thumbnails: [] },
  { id: 'crabs', name: 'Crabs', category: 'fish', price: 0, description: 'Fresh crabs.', image: '/crabs.png', thumbnails: [] },
  { id: 'shrimp', name: 'Shrimp', category: 'fish', price: 0, description: 'Fresh shrimp.', image: '/shrimp.png', thumbnails: [] },
  { id: 'octopus', name: 'Octopus', category: 'fish', price: 0, description: 'Fresh octopus.', image: '/octopus.png', thumbnails: [] },
  { id: 'squid', name: 'Squid', category: 'fish', price: 0, description: 'Fresh squid.', image: '/squid.png', thumbnails: [] },
  { id: 'salmon', name: 'Salmon', category: 'fish', price: 0, description: 'Fresh salmon.', image: '/salmon.png', thumbnails: [] },
  
  // == VEGETABLES ==
  { id: 'tomatoes', name: 'Tomatoes', category: 'vegetables', price: 0, description: 'Fresh, organic tomatoes.', image: '/tomatoes.png', thumbnails: [] },
  { id: 'onions', name: 'Onions', category: 'vegetables', price: 0, description: 'Fresh, organic onions.', image: '/onions.png', thumbnails: [] },
  { id: 'chili-pepper', name: 'Chili Pepper', category: 'vegetables', price: 0, description: 'Fresh, hot chili pepper.', image: '/chili-pepper.png', thumbnails: [] },
  { id: 'bell-pepper', name: 'Bell Pepper', category: 'vegetables', price: 0, description: 'Fresh, sweet bell pepper.', image: '/bell-pepper.png', thumbnails: [] },
  { id: 'okra', name: 'Okra', category: 'vegetables', price: 0, description: 'Fresh, organic okra.', image: '/okra.png', thumbnails: [] },
  { id: 'garden-eggs', name: 'Garden Eggs', category: 'vegetables', price: 0, description: 'Fresh, organic garden eggs.', image: '/garden-eggs.jpg', thumbnails: [] },
  { id: 'cabbage', name: 'Cabbage', category: 'vegetables', price: 0, description: 'Fresh, organic cabbage.', image: '/cabbage.png', thumbnails: [] },
  { id: 'carrots', name: 'Carrots', category: 'vegetables', price: 0, description: 'Fresh, organic carrots.', image: '/carrots.png', thumbnails: [] },
  { id: 'lettuce', name: 'Lettuce', category: 'vegetables', price: 0, description: 'Fresh, organic lettuce.', image: '/lettuce.png', thumbnails: [] },
  { id: 'cucumber', name: 'Cucumber', category: 'vegetables', price: 0, description: 'Fresh, organic cucumber.', image: '/cucumber.png', thumbnails: [] },
  { id: 'spinach', name: 'Spinach', category: 'vegetables', price: 0, description: 'Fresh, organic spinach.', image: '/spinach.png', thumbnails: [] },
];