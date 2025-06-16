import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import ProductFilters, { FilterState } from "@/components/ProductFilters";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  material: string;
  rating: number;
  inStock: boolean;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Премиум чемодан Pro Travel",
    price: 12990,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    size: "medium",
    material: "polycarbonate",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 2,
    name: "Компактный чемодан City",
    price: 8490,
    image:
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=400&fit=crop",
    size: "small",
    material: "abs",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 3,
    name: "Алюминиевый чемодан Elite",
    price: 24990,
    image:
      "https://images.unsplash.com/photo-1586901533048-0e856dff2c0d?w=400&h=400&fit=crop",
    size: "large",
    material: "aluminum",
    rating: 4.9,
    inStock: false,
  },
  {
    id: 4,
    name: "Тканевый чемодан Comfort",
    price: 6990,
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
    size: "medium",
    material: "fabric",
    rating: 4.3,
    inStock: true,
  },
];

const Catalog = () => {
  const [filters, setFilters] = useState<FilterState>({
    sizes: [],
    materials: [],
  });

  const filteredProducts = mockProducts.filter((product) => {
    const sizeMatch =
      filters.sizes.length === 0 || filters.sizes.includes(product.size);
    const materialMatch =
      filters.materials.length === 0 ||
      filters.materials.includes(product.material);
    return sizeMatch && materialMatch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Каталог чемоданов</h1>
          <p className="text-muted-foreground">
            Найдено {filteredProducts.length} товаров
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Фильтры */}
          <div className="lg:col-span-3">
            <div className="sticky top-8">
              <ProductFilters onFiltersChange={setFilters} />
            </div>
          </div>

          {/* Товары */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    {!product.inStock && (
                      <Badge
                        variant="secondary"
                        className="absolute top-2 right-2 bg-red-100 text-red-800"
                      >
                        Нет в наличии
                      </Badge>
                    )}
                    <div className="absolute top-2 left-2 flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Icon
                        name="Star"
                        size={14}
                        className="text-yellow-500 fill-current mr-1"
                      />
                      <span className="text-xs font-medium">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {formatPrice(product.price)} ₽
                      </span>
                    </div>

                    <Button
                      className="w-full"
                      disabled={!product.inStock}
                      variant={product.inStock ? "default" : "secondary"}
                    >
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      {product.inStock ? "В корзину" : "Недоступно"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Icon
                  name="Package"
                  size={64}
                  className="mx-auto text-muted-foreground mb-4"
                />
                <h3 className="text-lg font-medium mb-2">Товары не найдены</h3>
                <p className="text-muted-foreground">
                  Попробуйте изменить параметры фильтрации
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
