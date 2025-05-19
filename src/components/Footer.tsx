
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-16 bg-gray-50 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-primary">MarketHub</h3>
            <p className="mt-4 text-sm text-gray-600">
              Connect buyers and sellers in a seamless online marketplace experience.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Marketplace</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-primary">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-gray-600 hover:text-primary">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/sellers" className="text-sm text-gray-600 hover:text-primary">
                  Sellers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Your Account</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/login" className="text-sm text-gray-600 hover:text-primary">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-sm text-gray-600 hover:text-primary">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm text-gray-600 hover:text-primary">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-sm text-gray-600 hover:text-primary">
                  Order History
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Seller Zone</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/seller/register" className="text-sm text-gray-600 hover:text-primary">
                  Become a Seller
                </Link>
              </li>
              <li>
                <Link to="/seller/dashboard" className="text-sm text-gray-600 hover:text-primary">
                  Seller Dashboard
                </Link>
              </li>
              <li>
                <Link to="/seller/products" className="text-sm text-gray-600 hover:text-primary">
                  Manage Products
                </Link>
              </li>
              <li>
                <Link to="/seller/orders" className="text-sm text-gray-600 hover:text-primary">
                  Manage Orders
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-12 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MarketHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
