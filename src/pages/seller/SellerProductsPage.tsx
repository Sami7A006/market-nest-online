
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { getProductsBySeller } from "@/data/mockData";
import { PackageOpen, Search, Edit, Trash2, AlertCircle } from "lucide-react";

export default function SellerProductsPage() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  
  // In a real app, we would fetch this data from the server
  const allSellerProducts = user?.id ? getProductsBySeller(user.id) : [];
  
  // Filter products based on search term
  const filteredProducts = allSellerProducts.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Your Products</h1>
          <p className="text-gray-600">Manage your product listings</p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Button asChild>
            <Link to="/seller/products/new">
              <PackageOpen className="mr-2 h-4 w-4" />
              Add New Product
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Search and Filter */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Input
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pr-10"
          />
          <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
        </div>
      </div>
      
      {/* Products List */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded bg-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="ml-4 flex-grow">
                    <h3 className="font-medium">{product.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 mt-1">
                      <span>{product.category}</span>
                      <span className="hidden sm:inline mx-2">•</span>
                      <span>${product.price.toFixed(2)}</span>
                      <span className="hidden sm:inline mx-2">•</span>
                      <span>Stock: {product.stock}</span>
                    </div>
                  </div>
                  
                  <div className="ml-4 flex items-center space-x-2">
                    <Button asChild variant="ghost" size="sm">
                      <Link to={`/seller/products/${product.id}/edit`}>
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-8 text-center">
            <AlertCircle className="h-10 w-10 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No products found</h3>
            {searchTerm ? (
              <p className="text-gray-600">No products match your search criteria. Try different keywords.</p>
            ) : (
              <div>
                <p className="text-gray-600 mb-4">You haven't added any products to your store yet.</p>
                <Button asChild>
                  <Link to="/seller/products/new">
                    <PackageOpen className="mr-2 h-4 w-4" />
                    Add Your First Product
                  </Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
