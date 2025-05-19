
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/data/mockData";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link to={`/categories/${category.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <div className="overflow-hidden h-36">
          <img
            src={category.image}
            alt={category.name}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4 text-center">
          <h3 className="font-medium">{category.name}</h3>
        </CardContent>
      </Card>
    </Link>
  );
}
