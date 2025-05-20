
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Search, Menu, Heart } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-30 w-full bg-white border-b shadow-sm">
      <div className="container px-4 mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-black">FashionHub</span>
          </Link>
          
          {/* Search on desktop */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full max-w-xl">
              <Input 
                type="search" 
                placeholder="Search for fashion items..." 
                className="w-full pr-10 border-black rounded-none"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-black" />
            </div>
          </div>
          
          {/* Navigation for desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/wishlist" className="relative">
              <Heart className="h-6 w-6 text-black hover:text-primary" />
            </Link>
            
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-black hover:text-primary" />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <Link to={user?.role === "seller" ? "/seller/dashboard" : "/account"} className="flex items-center space-x-1">
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">{user?.name}</span>
                </Link>
                <Button variant="ghost" size="sm" onClick={logout} className="text-black hover:text-primary">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="text-black hover:text-primary">Log in</Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" size="sm" className="border-black text-black hover:bg-black hover:text-white">Sign up</Button>
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-black" />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                  {totalItems}
                </span>
              )}
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6 text-black" />
            </Button>
          </div>
        </div>
        
        {/* Fashion Categories Menu - Desktop */}
        <div className="hidden md:block border-t border-gray-200">
          <NavigationMenu className="justify-start py-1">
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent text-black">WOMEN</NavigationMenuTrigger>
                <NavigationMenuContent className="flex w-[400px] p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-sm mb-2">Clothing</h4>
                      <ul className="space-y-1">
                        <li><Link to="/categories/women/dresses" className="text-sm hover:underline">Dresses</Link></li>
                        <li><Link to="/categories/women/tops" className="text-sm hover:underline">Tops</Link></li>
                        <li><Link to="/categories/women/pants" className="text-sm hover:underline">Pants</Link></li>
                        <li><Link to="/categories/women/jeans" className="text-sm hover:underline">Jeans</Link></li>
                        <li><Link to="/categories/women/skirts" className="text-sm hover:underline">Skirts</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-2">Accessories</h4>
                      <ul className="space-y-1">
                        <li><Link to="/categories/women/bags" className="text-sm hover:underline">Bags</Link></li>
                        <li><Link to="/categories/women/jewelry" className="text-sm hover:underline">Jewelry</Link></li>
                        <li><Link to="/categories/women/shoes" className="text-sm hover:underline">Shoes</Link></li>
                        <li><Link to="/categories/women/belts" className="text-sm hover:underline">Belts</Link></li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent text-black">MEN</NavigationMenuTrigger>
                <NavigationMenuContent className="flex w-[400px] p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-sm mb-2">Clothing</h4>
                      <ul className="space-y-1">
                        <li><Link to="/categories/men/shirts" className="text-sm hover:underline">Shirts</Link></li>
                        <li><Link to="/categories/men/t-shirts" className="text-sm hover:underline">T-shirts</Link></li>
                        <li><Link to="/categories/men/pants" className="text-sm hover:underline">Pants</Link></li>
                        <li><Link to="/categories/men/jeans" className="text-sm hover:underline">Jeans</Link></li>
                        <li><Link to="/categories/men/jackets" className="text-sm hover:underline">Jackets</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-2">Accessories</h4>
                      <ul className="space-y-1">
                        <li><Link to="/categories/men/watches" className="text-sm hover:underline">Watches</Link></li>
                        <li><Link to="/categories/men/belts" className="text-sm hover:underline">Belts</Link></li>
                        <li><Link to="/categories/men/shoes" className="text-sm hover:underline">Shoes</Link></li>
                        <li><Link to="/categories/men/bags" className="text-sm hover:underline">Bags</Link></li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent text-black">KIDS</NavigationMenuTrigger>
                <NavigationMenuContent className="flex w-[400px] p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-sm mb-2">Girls</h4>
                      <ul className="space-y-1">
                        <li><Link to="/categories/kids/girls-dresses" className="text-sm hover:underline">Dresses</Link></li>
                        <li><Link to="/categories/kids/girls-tops" className="text-sm hover:underline">Tops</Link></li>
                        <li><Link to="/categories/kids/girls-pants" className="text-sm hover:underline">Pants</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-2">Boys</h4>
                      <ul className="space-y-1">
                        <li><Link to="/categories/kids/boys-shirts" className="text-sm hover:underline">Shirts</Link></li>
                        <li><Link to="/categories/kids/boys-pants" className="text-sm hover:underline">Pants</Link></li>
                        <li><Link to="/categories/kids/boys-jeans" className="text-sm hover:underline">Jeans</Link></li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent text-black">ACCESSORIES</NavigationMenuTrigger>
                <NavigationMenuContent className="flex w-[400px] p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-sm mb-2">Jewelry</h4>
                      <ul className="space-y-1">
                        <li><Link to="/categories/accessories/necklaces" className="text-sm hover:underline">Necklaces</Link></li>
                        <li><Link to="/categories/accessories/earrings" className="text-sm hover:underline">Earrings</Link></li>
                        <li><Link to="/categories/accessories/bracelets" className="text-sm hover:underline">Bracelets</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-2">Others</h4>
                      <ul className="space-y-1">
                        <li><Link to="/categories/accessories/bags" className="text-sm hover:underline">Bags</Link></li>
                        <li><Link to="/categories/accessories/glasses" className="text-sm hover:underline">Glasses</Link></li>
                        <li><Link to="/categories/accessories/hats" className="text-sm hover:underline">Hats</Link></li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/sale" className="text-sm font-medium text-red-600 hover:underline">
                  SALE
                </Link>
              </NavigationMenuItem>
              
              {!isAuthenticated && (
                <NavigationMenuItem>
                  <Link to="/seller/register" className="text-sm font-medium text-black hover:underline">
                    Become a Seller
                  </Link>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Mobile search (always visible on mobile) */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <Input 
              type="search" 
              placeholder="Search for fashion items..." 
              className="w-full pr-10 border-black rounded-none"
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-black" />
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="mt-4 py-4 border-t md:hidden">
            <div className="flex flex-col space-y-4">
              <div className="font-medium text-sm">SHOP BY CATEGORY</div>
              <Link to="/categories/women" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Women
              </Link>
              <Link to="/categories/men" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Men
              </Link>
              <Link to="/categories/kids" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Kids
              </Link>
              <Link to="/categories/accessories" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Accessories
              </Link>
              <Link to="/sale" className="text-sm font-medium text-red-600" onClick={() => setMobileMenuOpen(false)}>
                Sale
              </Link>
              
              {!isAuthenticated && (
                <Link to="/seller/register" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Become a Seller
                </Link>
              )}
              
              <div className="border-t pt-4 mt-4"></div>
              
              {isAuthenticated ? (
                <>
                  <Link 
                    to={user?.role === "seller" ? "/seller/dashboard" : "/account"} 
                    className="flex items-center space-x-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <User className="h-5 w-5" />
                    <span className="text-sm font-medium">{user?.name}</span>
                  </Link>
                  <Button variant="outline" size="sm" onClick={() => { logout(); setMobileMenuOpen(false); }} className="border-black text-black">
                    Logout
                  </Button>
                </>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" size="sm" className="w-full text-black">Log in</Button>
                  </Link>
                  <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                    <Button size="sm" className="w-full bg-black text-white hover:bg-gray-800">Sign up</Button>
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
