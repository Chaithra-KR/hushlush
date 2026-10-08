import { useEffect, useState } from "react";

import { products } from "../../config/data";
import type { Product } from "../../config/types";
import ProductCard from "./ProductCard";

type Props = {
  activeCategory: string;
  searchQuery: string;
  onAdd: (product: Product) => void;
};

export default function ProductGrid({
  activeCategory,
  searchQuery,
  onAdd,
}: Props) {
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const normalizedSearch = debouncedSearch.trim().toLowerCase();

  const items = products.filter((product) => {
    const matchesCategory =
      activeCategory === "For You" || product.category === activeCategory;

    const matchesSearch =
      !normalizedSearch ||
      product.name.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  if (items.length === 0) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl">
          🍽️
        </div>

        <h3 className="mt-4 text-base font-semibold text-gray-900">
          No dishes found
        </h3>

        <p className="mt-1 max-w-sm text-sm text-gray-500">
          We couldn't find any dishes matching your search.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 px-4 py-6 sm:gap-5 sm:px-6 md:grid-cols-3 md:gap-5 lg:gap-6 lg:px-8 xl:grid-cols-4 xl:gap-6 xl:px-10 2xl:gap-7">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
}
