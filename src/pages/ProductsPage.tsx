
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/mockData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortOrder, setSortOrder] = useState("featured");
  
  // Filter products based on search, category and price
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });
  
  // Sort products based on selected order
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0; // featured, no specific sort
    }
  });
  
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6 bg-white rounded-lg border p-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Search</h3>
              <Input
                type="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="border-t pt-4">
              <h3 className="text-lg font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="all-categories"
                    checked={selectedCategory === ""}
                    onCheckedChange={() => setSelectedCategory("")}
                  />
                  <Label htmlFor="all-categories">All Categories</Label>
                </div>
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={selectedCategory === category.id}
                      onCheckedChange={() => setSelectedCategory(category.id)}
                    />
                    <Label htmlFor={`category-${category.id}`}>
                      {category.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="text-lg font-medium mb-4">Price Range</h3>
              <Slider
                defaultValue={[0, 200]}
                max={200}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="flex items-center justify-between mt-3 text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="lg:col-span-3">
          {/* Sort Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm text-gray-600">
              {sortedProducts.length} products
            </div>
            <Select
              value={sortOrder}
              onValueChange={setSortOrder}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
