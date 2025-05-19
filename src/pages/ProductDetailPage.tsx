
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { getProductById, getProductsByCategory, getProductsBySeller } from "@/data/mockData";
import { ShoppingCart, Star, Truck, CheckCheck, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = productId ? getProductById(productId) : undefined;
  
  if (!product) {
    return (
      <div className="container px-4 py-16 mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8 text-gray-600">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>
    );
  }
  
  // Get similar products (same category, excluding current product)
  const similarProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  // Get more from this seller (excluding current product)
  const moreFromSeller = getProductsBySeller(product.sellerId)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  const handleAddToCart = () => {
    // Add the product to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart({
        productId: product.id,
        sellerId: product.sellerId,
        title: product.title,
        price: product.price,
        image: product.image,
      });
    }
    
    toast.success("Added to cart", {
      description: `${quantity} ${quantity === 1 ? 'item' : 'items'} added to your cart.`,
    });
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:underline">Products</Link>
        <span className="mx-2">/</span>
        <Link 
          to={`/categories/${product.category}`} 
          className="hover:underline"
        >
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-500">{product.title}</span>
      </div>
      
      {/* Product Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden border">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover"
            style={{ maxHeight: "500px" }}
          />
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Link 
              to={`/sellers/${product.sellerId}`} 
              className="text-sm font-medium hover:underline hover:text-primary"
            >
              {product.sellerName}
            </Link>
            <h1 className="text-3xl font-bold mt-2">{product.title}</h1>
            
            <div className="flex items-center mt-2 space-x-1">
              {Array(5).fill(0).map((_, i) => (
                <Star 
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(product.rating) 
                    ? "text-yellow-400 fill-yellow-400" 
                    : "text-gray-300"}`} 
                />
              ))}
              <span className="ml-1 text-sm font-medium">{product.rating}</span>
            </div>
          </div>
          
          <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>
          
          <div className="border-t border-b py-4">
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center border rounded-md">
              <button 
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
                className="px-3 py-1 text-lg border-r disabled:opacity-50"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button 
                onClick={increaseQuantity}
                disabled={quantity >= product.stock}
                className="px-3 py-1 text-lg border-l disabled:opacity-50"
              >
                +
              </button>
            </div>
            <div className="text-sm text-gray-500">
              {product.stock} available
            </div>
          </div>
          
          <Button 
            onClick={handleAddToCart} 
            size="lg" 
            className="w-full"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to cart
          </Button>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-center text-green-600">
              <CheckCheck className="h-4 w-4 mr-2" />
              In stock and ready to ship
            </div>
            <div className="flex items-center">
              <Truck className="h-4 w-4 mr-2" />
              Free shipping on orders over $50
            </div>
          </div>
        </div>
      </div>
      
      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
      
      {/* More from this seller */}
      {moreFromSeller.length > 0 && (
        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">More from {product.sellerName}</h2>
            <Link to={`/sellers/${product.sellerId}`} className="text-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {moreFromSeller.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
