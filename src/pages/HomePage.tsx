
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { categories, products } from "@/data/mockData";

export default function HomePage() {
  // Get featured products (first 6)
  const featuredProducts = products.slice(0, 6);
  
  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Hero Section */}
      <section className="py-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover Unique Products from Independent Sellers
            </h1>
            <p className="text-lg text-gray-600">
              MarketHub connects you with thousands of sellers offering one-of-a-kind items across various categories.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/seller/register">Become a Seller</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="MarketHub" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Shop by Category</h2>
          <Link to="/categories" className="text-primary hover:underline text-sm">
            View all categories
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link to="/products" className="text-primary hover:underline text-sm">
            View all products
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      {/* Seller CTA Section */}
      <section className="py-10">
        <div className="bg-accent p-8 rounded-lg">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Start Selling on MarketHub</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Join thousands of successful sellers who have expanded their business with MarketHub. 
              Low fees, powerful tools, and a global marketplace at your fingertips.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link to="/seller/register">Become a Seller</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
