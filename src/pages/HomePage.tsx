
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { products } from "@/data/mockData";

// Fashion categories
const fashionCategories = [
  {
    id: "women",
    name: "Women",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "men",
    name: "Men",
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "kids",
    name: "Kids",
    image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sale",
    name: "Sale",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=800&auto=format&fit=crop"
  }
];

export default function HomePage() {
  // Get featured fashion products (first 8)
  const fashionProducts = products.slice(0, 8);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1600&auto=format&fit=crop" 
            alt="Fashion Collection" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Discover Unique Fashion From Independent Designers
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              FashionHub connects you with thousands of designers offering one-of-a-kind fashion items
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/seller/register">Sell Your Designs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Shop By Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {fashionCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link to="/products" className="text-primary hover:underline font-medium">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {fashionProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Designer CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 mx-auto">
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop" 
              alt="Become a Designer" 
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20 p-6">
              <div className="text-center max-w-2xl">
                <h2 className="text-3xl font-bold text-white mb-4">Start Selling Your Fashion Designs</h2>
                <p className="text-white/90 text-lg mb-6 max-w-xl mx-auto">
                  Join thousands of successful fashion designers who have expanded their reach with FashionHub. 
                  Low fees, powerful tools, and a global marketplace at your fingertips.
                </p>
                <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                  <Link to="/seller/register">Become a Designer</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fashion Trends Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Top Fashion Trends</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-lg overflow-hidden h-[300px] group">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop" 
                alt="Summer Styles" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white">Summer Styles</h3>
                <Link to="/categories/summer" className="text-white hover:underline inline-block mt-2">Shop Now</Link>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden h-[300px] group">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop" 
                alt="Sustainable Fashion" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white">Sustainable Fashion</h3>
                <Link to="/categories/sustainable" className="text-white hover:underline inline-block mt-2">Shop Now</Link>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden h-[300px] group">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=800&auto=format&fit=crop" 
                alt="Luxury Pieces" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white">Luxury Pieces</h3>
                <Link to="/categories/luxury" className="text-white hover:underline inline-block mt-2">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
