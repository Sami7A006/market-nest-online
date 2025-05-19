
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-30 w-full bg-white border-b shadow-sm">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">MarketHub</span>
          </Link>
          
          {/* Search on desktop */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full max-w-xl">
              <Input 
                type="search" 
                placeholder="Search for products..." 
                className="w-full pr-10"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          {/* Navigation for desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
              Products
            </Link>
            <Link to="/categories" className="text-sm font-medium transition-colors hover:text-primary">
              Categories
            </Link>
            {isAuthenticated && user?.role === "seller" && (
              <Link to="/seller/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
                Seller Dashboard
              </Link>
            )}
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-primary" />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <Link to={user?.role === "seller" ? "/seller/profile" : "/buyer/profile"} className="flex items-center space-x-1">
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">{user?.name}</span>
                </Link>
                <Button variant="outline" size="sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost" size="sm">Log in</Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">Sign up</Button>
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                  {totalItems}
                </span>
              )}
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile search (always visible on mobile) */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <Input 
              type="search" 
              placeholder="Search for products..." 
              className="w-full pr-10"
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="mt-4 py-4 border-t md:hidden">
            <div className="flex flex-col space-y-4">
              <Link to="/products" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Products
              </Link>
              <Link to="/categories" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Categories
              </Link>
              {isAuthenticated && user?.role === "seller" && (
                <Link to="/seller/dashboard" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Seller Dashboard
                </Link>
              )}
              
              {isAuthenticated ? (
                <>
                  <Link 
                    to={user?.role === "seller" ? "/seller/profile" : "/buyer/profile"} 
                    className="flex items-center space-x-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <User className="h-5 w-5" />
                    <span className="text-sm font-medium">{user?.name}</span>
                  </Link>
                  <Button variant="outline" size="sm" onClick={() => { logout(); setMobileMenuOpen(false); }}>
                    Logout
                  </Button>
                </>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" size="sm" className="w-full">Log in</Button>
                  </Link>
                  <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                    <Button size="sm" className="w-full">Sign up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
