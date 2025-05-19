
export type Product = {
  id: string;
  sellerId: string;
  sellerName: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  stock: number;
};

export type Category = {
  id: string;
  name: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "clothing",
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "home",
    name: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "books",
    name: "Books",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "toys",
    name: "Toys & Games",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

export const products: Product[] = [
  {
    id: "1",
    sellerId: "seller1",
    sellerName: "TechStore",
    title: "Wireless Bluetooth Headphones",
    description: "High-quality wireless headphones with noise-cancellation technology and long battery life. Perfect for music lovers and professionals on the go.",
    price: 79.99,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.5,
    stock: 15
  },
  {
    id: "2",
    sellerId: "seller1",
    sellerName: "TechStore",
    title: "Smart Watch",
    description: "Track your fitness, receive notifications, and more with this sleek smart watch that pairs with your smartphone.",
    price: 129.99,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.3,
    stock: 8
  },
  {
    id: "3",
    sellerId: "seller2",
    sellerName: "FashionHub",
    title: "Cotton T-Shirt",
    description: "Comfortable, breathable cotton t-shirt available in various colors. A must-have basic for any wardrobe.",
    price: 19.99,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.0,
    stock: 50
  },
  {
    id: "4",
    sellerId: "seller2",
    sellerName: "FashionHub",
    title: "Denim Jeans",
    description: "Classic denim jeans with a comfortable fit. Durable and stylish for everyday wear.",
    price: 49.99,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.2,
    stock: 30
  },
  {
    id: "5",
    sellerId: "seller3",
    sellerName: "HomeDecor",
    title: "Non-Stick Cookware Set",
    description: "Complete set of non-stick cookware for your kitchen. Includes pots and pans of various sizes.",
    price: 89.99,
    category: "home",
    image: "https://images.unsplash.com/photo-1584990347449-19a1b608dfb9?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.7,
    stock: 12
  },
  {
    id: "6",
    sellerId: "seller3",
    sellerName: "HomeDecor",
    title: "Decorative Throw Pillows (Set of 2)",
    description: "Add a splash of color and comfort to your living space with these decorative throw pillows.",
    price: 34.99,
    category: "home",
    image: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4a?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.4,
    stock: 25
  },
  {
    id: "7",
    sellerId: "seller4",
    sellerName: "BookWorm",
    title: "The Great Novel",
    description: "A captivating story that will take you on an adventure through time and space.",
    price: 15.99,
    category: "books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.8,
    stock: 40
  },
  {
    id: "8",
    sellerId: "seller4",
    sellerName: "BookWorm",
    title: "Cookbook: International Cuisine",
    description: "Learn to cook dishes from around the world with this comprehensive cookbook.",
    price: 24.99,
    category: "books",
    image: "https://images.unsplash.com/photo-1467951591042-f388365db261?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.6,
    stock: 22
  },
  {
    id: "9",
    sellerId: "seller5",
    sellerName: "ToyBox",
    title: "Building Blocks Set",
    description: "Educational building blocks that help develop creativity and motor skills in children.",
    price: 29.99,
    category: "toys",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.9,
    stock: 18
  },
  {
    id: "10",
    sellerId: "seller5",
    sellerName: "ToyBox",
    title: "Plush Teddy Bear",
    description: "Soft and huggable teddy bear that's perfect for bedtime and playtime.",
    price: 19.99,
    category: "toys",
    image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.5,
    stock: 35
  },
  {
    id: "11",
    sellerId: "seller1",
    sellerName: "TechStore",
    title: "Portable Bluetooth Speaker",
    description: "Compact and powerful bluetooth speaker with amazing sound quality and water resistance.",
    price: 59.99,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.4,
    stock: 20
  },
  {
    id: "12",
    sellerId: "seller2",
    sellerName: "FashionHub",
    title: "Winter Jacket",
    description: "Stay warm during cold weather with this insulated winter jacket featuring multiple pockets and adjustable hood.",
    price: 129.99,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4.7,
    stock: 15
  }
];

export type Order = {
  id: string;
  buyerId: string;
  buyerName: string;
  items: {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
  updatedAt: string;
};

export const sellers = [
  { id: "seller1", name: "TechStore", products: 3, rating: 4.5 },
  { id: "seller2", name: "FashionHub", products: 3, rating: 4.1 },
  { id: "seller3", name: "HomeDecor", products: 2, rating: 4.7 },
  { id: "seller4", name: "BookWorm", products: 2, rating: 4.8 },
  { id: "seller5", name: "ToyBox", products: 2, rating: 4.9 },
];

export const orders: Order[] = [];

// Function to find a product by ID
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

// Function to filter products by seller
export function getProductsBySeller(sellerId: string): Product[] {
  return products.filter(product => product.sellerId === sellerId);
}

// Function to filter products by category
export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.category === categoryId);
}
