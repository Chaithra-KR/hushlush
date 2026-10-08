import { useMemo } from "react";
import { products } from "../../config/data";
import type { Product } from "../../config/types";
import ProductCard from "./ProductCard";

type Props = {
  onAdd: (product: Product) => void;
};

export default function ProductGrid({ onAdd }: Props) {
  const items = useMemo(
    () => Array.from({ length: 2 }, () => products).flat(),
    [],
  );

  return (
    <div className="grid grid-cols-2 gap-4 px-4 py-6 sm:gap-5 sm:px-6 md:grid-cols-3 md:gap-5 lg:gap-6 lg:px-8 xl:grid-cols-4 xl:gap-6 xl:px-10 2xl:gap-7">
      {items.map((product, index) => (
        <ProductCard
          key={`${product.id}-${index}`}
          product={product}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
