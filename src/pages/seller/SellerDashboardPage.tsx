
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { getProductsBySeller } from "@/data/mockData";
import { PackageOpen, Package, DollarSign, ShoppingCart, Clock, Users, Star, AlertCircle } from "lucide-react";

export default function SellerDashboardPage() {
  const { user } = useAuth();
  
  // In a real app, we would fetch this data from the server
  const sellerProducts = user?.id ? getProductsBySeller(user.id) : [];
  
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Seller Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name || "Seller"}</p>
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
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-primary/10 rounded">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Products</p>
                <h4 className="text-2xl font-bold">{sellerProducts.length}</h4>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Sales</p>
                <h4 className="text-2xl font-bold">$1,234</h4>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded">
                <ShoppingCart className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Orders</p>
                <h4 className="text-2xl font-bold">12</h4>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Average Rating</p>
                <h4 className="text-2xl font-bold">4.8</h4>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Orders */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          {/* For demo purposes, let's show a placeholder */}
          <div className="text-center py-6">
            <Clock className="h-10 w-10 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium mb-1">No recent orders</h3>
            <p className="text-gray-600">
              Your recent orders will appear here when customers make purchases.
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* Products */}
      <Card className="mt-8">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Your Products</CardTitle>
          <Button asChild variant="outline" size="sm">
            <Link to="/seller/products">
              View All Products
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          {sellerProducts.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left text-sm text-gray-600">
                    <th className="pb-3">Product</th>
                    <th className="pb-3">Price</th>
                    <th className="pb-3">Stock</th>
                    <th className="pb-3">Rating</th>
                    <th className="pb-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {sellerProducts.slice(0, 5).map((product) => (
                    <tr key={product.id}>
                      <td className="py-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded bg-gray-100 overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="font-medium">{product.title}</p>
                            <p className="text-sm text-gray-500">{product.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3">${product.price.toFixed(2)}</td>
                      <td className="py-3">{product.stock}</td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1">{product.rating}</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <Button asChild variant="ghost" size="sm">
                          <Link to={`/seller/products/${product.id}/edit`}>
                            Edit
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-6">
              <Package className="h-10 w-10 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-1">No products yet</h3>
              <p className="text-gray-600 mb-4">
                Start adding products to your store to attract customers.
              </p>
              <Button asChild>
                <Link to="/seller/products/new">
                  <PackageOpen className="mr-2 h-4 w-4" />
                  Add New Product
                </Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
