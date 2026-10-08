import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import HeroBanner from "../components/menu/HeroBanner";
import CategoryTabs from "../components/menu/CategoryTabs";
import ProductGrid from "../components/menu/ProductGrid";
import { useCart } from "../context/CartContext";

type LayoutContext = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("For You");

  const { searchQuery } = useOutletContext<LayoutContext>();

  const { addToCart } = useCart();

  return (
    <div className="w-full">
      <HeroBanner />

      <CategoryTabs
        active={activeCategory}
        setActive={setActiveCategory}
      />

      <ProductGrid
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onAdd={addToCart}
      />

      <div className="flex items-center justify-center px-4 pb-20 text-xs text-gray-800 lg:pb-8 lg:pt-3">
        Powered By{" "}
        <span className="ml-1 font-serif text-[14px] text-[#c43a3a]">
          Hush Lush
        </span>
      </div>
    </div>
  );
}