import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface FilterProps {
  onFiltersChange: (filters: FilterState) => void;
}

export interface FilterState {
  sizes: string[];
  materials: string[];
}

const ProductFilters = ({ onFiltersChange }: FilterProps) => {
  const [filters, setFilters] = useState<FilterState>({
    sizes: [],
    materials: [],
  });

  const sizes = [
    { id: "small", label: "Ручная кладь (55см)", count: 24 },
    { id: "medium", label: "Средний (65см)", count: 18 },
    { id: "large", label: "Большой (75см)", count: 12 },
    { id: "extra-large", label: "Очень большой (85см)", count: 8 },
  ];

  const materials = [
    { id: "polycarbonate", label: "Поликарбонат", count: 32 },
    { id: "abs", label: "ABS пластик", count: 28 },
    { id: "aluminum", label: "Алюминий", count: 15 },
    { id: "fabric", label: "Ткань", count: 22 },
    { id: "leather", label: "Кожа", count: 6 },
  ];

  const handleSizeChange = (sizeId: string, checked: boolean) => {
    const newSizes = checked
      ? [...filters.sizes, sizeId]
      : filters.sizes.filter((s) => s !== sizeId);

    const newFilters = { ...filters, sizes: newSizes };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleMaterialChange = (materialId: string, checked: boolean) => {
    const newMaterials = checked
      ? [...filters.materials, materialId]
      : filters.materials.filter((m) => m !== materialId);

    const newFilters = { ...filters, materials: newMaterials };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters = { sizes: [], materials: [] };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const hasActiveFilters =
    filters.sizes.length > 0 || filters.materials.length > 0;

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Фильтры</CardTitle>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <Icon name="X" size={16} className="mr-1" />
              Очистить
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Размер */}
        <div>
          <h3 className="font-medium mb-3 flex items-center">
            <Icon name="Ruler" size={18} className="mr-2" />
            Размер
          </h3>
          <div className="space-y-3">
            {sizes.map((size) => (
              <div key={size.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`size-${size.id}`}
                    checked={filters.sizes.includes(size.id)}
                    onCheckedChange={(checked) =>
                      handleSizeChange(size.id, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={`size-${size.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {size.label}
                  </label>
                </div>
                <span className="text-xs text-muted-foreground">
                  {size.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Материал */}
        <div>
          <h3 className="font-medium mb-3 flex items-center">
            <Icon name="Package" size={18} className="mr-2" />
            Материал
          </h3>
          <div className="space-y-3">
            {materials.map((material) => (
              <div
                key={material.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`material-${material.id}`}
                    checked={filters.materials.includes(material.id)}
                    onCheckedChange={(checked) =>
                      handleMaterialChange(material.id, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={`material-${material.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {material.label}
                  </label>
                </div>
                <span className="text-xs text-muted-foreground">
                  {material.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductFilters;
