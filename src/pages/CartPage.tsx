
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const { isAuthenticated } = useAuth();
  
  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast.error("Please login to continue", {
        description: "You need to be logged in to checkout.",
        action: {
          label: "Login",
          onClick: () => window.location.href = "/login",
        },
      });
      return;
    }
    
    // In a real app, this would navigate to checkout page
    toast.success("Order placed successfully!");
    clearCart();
    // Navigate programmatically to order confirmation
    // history.push('/order-confirmation');
  };
  
  if (items.length === 0) {
    return (
      <div className="container px-4 py-12 mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="text-center py-16 border rounded-lg">
          <ShoppingBag className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white border rounded-lg">
            <div className="divide-y">
              {items.map((item) => (
                <div key={item.id} className="px-6 py-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    
                    <div className="ml-6 flex-1">
                      <Link to={`/products/${item.productId}`}>
                        <h3 className="font-medium hover:text-primary">{item.title}</h3>
                      </Link>
                      <p className="text-sm text-gray-600">
                        Seller: {item.sellerId}
                      </p>
                    </div>
                    
                    <div className="ml-6 flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded hover:bg-gray-100"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      
                      <span className="w-8 text-center">{item.quantity}</span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded hover:bg-gray-100"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    
                    <div className="ml-6 text-right">
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-red-600 hover:text-red-800 flex items-center mt-1"
                      >
                        <Trash2 className="h-3 w-3 mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white border rounded-lg p-6 sticky top-24">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Items ({totalItems})</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              
              <div className="pt-3 mt-3 border-t flex justify-between font-medium text-base">
                <span>Order Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            
            <Button 
              onClick={handleCheckout}
              className="w-full mt-6"
              size="lg"
            >
              Checkout
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="mt-6">
              <Button 
                variant="outline" 
                size="sm"
                onClick={clearCart}
                className="w-full"
              >
                Clear cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
