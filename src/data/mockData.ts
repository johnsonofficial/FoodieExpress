export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  rating: number;
  restaurantId: string;
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string[];
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  minOrder: number;
  address: string;
  featured?: boolean;
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Burger Palace",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop",
    cuisine: ["Burgers", "American", "Fast Food"],
    rating: 4.5,
    deliveryTime: "25-35 min",
    deliveryFee: 2.99,
    minOrder: 10,
    address: "123 Main St",
    featured: true,
  },
  {
    id: "2",
    name: "Pizza Paradise",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop",
    cuisine: ["Pizza", "Italian"],
    rating: 4.7,
    deliveryTime: "30-40 min",
    deliveryFee: 1.99,
    minOrder: 12,
    address: "456 Oak Ave",
    featured: true,
  },
  {
    id: "3",
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop",
    cuisine: ["Sushi", "Japanese"],
    rating: 4.8,
    deliveryTime: "35-45 min",
    deliveryFee: 3.99,
    minOrder: 15,
    address: "789 Elm Blvd",
    featured: true,
  },
  {
    id: "4",
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
    cuisine: ["Mexican", "Tacos"],
    rating: 4.3,
    deliveryTime: "20-30 min",
    deliveryFee: 1.49,
    minOrder: 8,
    address: "321 Pine Rd",
  },
  {
    id: "5",
    name: "Green Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    cuisine: ["Healthy", "Salads", "Vegan"],
    rating: 4.6,
    deliveryTime: "20-25 min",
    deliveryFee: 2.49,
    minOrder: 10,
    address: "654 Maple Ct",
  },
  {
    id: "6",
    name: "Curry House",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop",
    cuisine: ["Indian", "Curry"],
    rating: 4.4,
    deliveryTime: "30-40 min",
    deliveryFee: 2.99,
    minOrder: 12,
    address: "987 Birch Ln",
  },
];

export const foodItems: FoodItem[] = [
  // Burger Palace
  { id: "f1", name: "Classic Cheeseburger", description: "Juicy beef patty with melted cheddar, lettuce, tomato & special sauce", price: 9.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", category: "Burgers", isVeg: false, rating: 4.5, restaurantId: "1" },
  { id: "f2", name: "Double Bacon Burger", description: "Two beef patties, crispy bacon, cheese & smoky BBQ sauce", price: 13.99, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop", category: "Burgers", isVeg: false, rating: 4.7, restaurantId: "1" },
  { id: "f3", name: "Veggie Burger", description: "Plant-based patty with avocado, sprouts & herb mayo", price: 10.99, image: "https://images.unsplash.com/photo-1520072959219-c595e6cdc07e?w=400&h=300&fit=crop", category: "Burgers", isVeg: true, rating: 4.2, restaurantId: "1" },
  { id: "f4", name: "Crispy Fries", description: "Golden crispy fries with sea salt", price: 4.99, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop", category: "Sides", isVeg: true, rating: 4.3, restaurantId: "1" },
  // Pizza Paradise
  { id: "f5", name: "Margherita Pizza", description: "Fresh mozzarella, tomatoes, basil on thin crust", price: 12.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop", category: "Pizza", isVeg: true, rating: 4.6, restaurantId: "2" },
  { id: "f6", name: "Pepperoni Pizza", description: "Loaded with pepperoni and melted cheese", price: 14.99, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop", category: "Pizza", isVeg: false, rating: 4.8, restaurantId: "2" },
  { id: "f7", name: "BBQ Chicken Pizza", description: "Grilled chicken, BBQ sauce, red onions & cilantro", price: 15.99, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop", category: "Pizza", isVeg: false, rating: 4.5, restaurantId: "2" },
  // Sushi Master
  { id: "f8", name: "Salmon Nigiri Set", description: "8 pieces of premium salmon nigiri", price: 18.99, image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&h=300&fit=crop", category: "Sushi", isVeg: false, rating: 4.9, restaurantId: "3" },
  { id: "f9", name: "California Roll", description: "Crab, avocado, cucumber wrapped in seasoned rice", price: 12.99, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop", category: "Sushi", isVeg: false, rating: 4.6, restaurantId: "3" },
  { id: "f10", name: "Veggie Roll", description: "Avocado, cucumber, carrot & asparagus roll", price: 10.99, image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop", category: "Sushi", isVeg: true, rating: 4.4, restaurantId: "3" },
  // Taco Fiesta
  { id: "f11", name: "Street Tacos", description: "Three authentic corn tortilla tacos with cilantro & onion", price: 8.99, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop", category: "Tacos", isVeg: false, rating: 4.5, restaurantId: "4" },
  { id: "f12", name: "Burrito Bowl", description: "Rice, beans, grilled chicken, salsa, guacamole", price: 11.99, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop", category: "Bowls", isVeg: false, rating: 4.3, restaurantId: "4" },
  // Green Bowl
  { id: "f13", name: "Quinoa Power Bowl", description: "Quinoa, roasted veggies, avocado, tahini dressing", price: 13.99, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", category: "Bowls", isVeg: true, rating: 4.7, restaurantId: "5" },
  { id: "f14", name: "Acai Smoothie Bowl", description: "Acai, banana, granola, fresh berries & coconut", price: 10.99, image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop", category: "Smoothies", isVeg: true, rating: 4.8, restaurantId: "5" },
  // Curry House
  { id: "f15", name: "Butter Chicken", description: "Tender chicken in rich tomato-butter sauce with naan", price: 14.99, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop", category: "Curry", isVeg: false, rating: 4.6, restaurantId: "6" },
  { id: "f16", name: "Paneer Tikka Masala", description: "Cottage cheese in spiced tomato gravy with rice", price: 12.99, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop", category: "Curry", isVeg: true, rating: 4.5, restaurantId: "6" },
];

export const categories = [
  { name: "Pizza", icon: "🍕" },
  { name: "Burgers", icon: "🍔" },
  { name: "Sushi", icon: "🍣" },
  { name: "Tacos", icon: "🌮" },
  { name: "Salads", icon: "🥗" },
  { name: "Indian", icon: "🍛" },
  { name: "Desserts", icon: "🍰" },
  { name: "Drinks", icon: "🥤" },
];
