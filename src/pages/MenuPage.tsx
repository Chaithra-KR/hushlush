import { useState } from "react";

import HeroBanner from "../components/menu/HeroBanner";
import CategoryTabs from "../components/menu/CategoryTabs";
import ProductGrid from "../components/menu/ProductGrid";
import { useCart } from "../context/CartContext";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Chicken Chop");

  const { addToCart } = useCart();

  return (
    <div className="w-full">
      <HeroBanner />

      <CategoryTabs active={activeCategory} setActive={setActiveCategory} />

      <ProductGrid onAdd={addToCart} />

      <div className="flex items-center justify-center px-4 pb-20 text-xs text-gray-800 lg:pb-8 lg:pt-3">
        Powered By{" "}
        <span className="ml-1 text-[14px] font-serif text-[#c43a3a]">
          Hush Lush
        </span>
      </div>
    </div>
  );
}
