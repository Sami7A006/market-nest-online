
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/data/mockData";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      sellerId: product.sellerId,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    toast.success("Added to cart", {
      description: `${product.title} has been added to your cart.`,
    });
  };
  
  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-md">
      <Link to={`/products/${product.id}`}>
        <div className="overflow-hidden h-48">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="mb-1 flex items-center text-sm text-muted-foreground">
          <Link to={`/sellers/${product.sellerId}`} className="hover:text-primary hover:underline">
            {product.sellerName}
          </Link>
        </div>
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="text-lg font-medium leading-tight line-clamp-2 hover:text-primary transition-colors">
            {product.title}
          </h3>
        </Link>
        <div className="flex items-center mt-2 mb-1">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
          {product.stock <= 5 && (
            <span className="ml-auto text-xs text-red-500">
              Only {product.stock} left
            </span>
          )}
        </div>
        <div className="mt-2 text-lg font-bold">${product.price.toFixed(2)}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart} 
          variant="outline" 
          className="w-full"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
