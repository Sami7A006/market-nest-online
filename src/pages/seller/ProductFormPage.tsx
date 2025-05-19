
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getProductById, categories } from "@/data/mockData";
import { toast } from "sonner";

export default function ProductFormPage() {
  const { productId } = useParams<{ productId: string }>();
  const isEditing = !!productId;
  const navigate = useNavigate();
  
  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // In a real app, we'd fetch existing product data for editing
  useEffect(() => {
    if (isEditing && productId) {
      const product = getProductById(productId);
      if (product) {
        setTitle(product.title);
        setDescription(product.description);
        setPrice(product.price.toString());
        setCategory(product.category);
        setStock(product.stock.toString());
        setImage(product.image);
      }
    }
  }, [isEditing, productId]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate form
    if (!title || !description || !price || !category || !stock) {
      toast.error("Please fill all required fields");
      setIsLoading(false);
      return;
    }
    
    // In a real app, we would make an API call to save the product
    setTimeout(() => {
      toast.success(
        isEditing 
          ? "Product updated successfully" 
          : "Product added successfully"
      );
      setIsLoading(false);
      navigate("/seller/products");
    }, 1000);
  };
  
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        {isEditing ? "Edit Product" : "Add New Product"}
      </h1>
      
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>{isEditing ? "Edit Product Details" : "Product Details"}</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title*</Label>
              <Input
                id="title"
                placeholder="Product title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description*</Label>
              <Textarea
                id="description"
                placeholder="Describe your product"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)*</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0.00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="stock">Stock*</Label>
                <Input
                  id="stock"
                  type="number"
                  min="0"
                  placeholder="0"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category*</Label>
              <Select 
                value={category} 
                onValueChange={setCategory}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">Image URL*</Label>
              <Input
                id="image"
                placeholder="https://example.com/image.jpg"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
              {image && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600 mb-2">Preview:</p>
                  <img
                    src={image}
                    alt="Product preview"
                    className="w-32 h-32 object-cover border rounded"
                  />
                </div>
              )}
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/seller/products")}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading
                ? isEditing ? "Updating..." : "Adding..."
                : isEditing ? "Update Product" : "Add Product"
              }
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
