import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Outlet } from "react-router-dom";
import type { Cart, Product } from "./config/types";

import Header from "./components/common/Header";
import SidebarNav from "./components/common/SidebarNav";
import MobileNav from "./components/common/MobileNav";
import CartDrawer from "./components/menu/CartDrawer";

export default function Layout() {
  const [activeNav, setActiveNav] = useState("Menu");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<Cart>({});

  const handleAdd = (product: Product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  const handleRemove = (product: Product) => {
    setCart((prev) => {
      const currentQuantity = prev[product.id] || 0;

      if (currentQuantity <= 1) {
        const updated = { ...prev };
        delete updated[product.id];
        return updated;
      }

      return {
        ...prev,
        [product.id]: currentQuantity - 1,
      };
    });
  };

  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0,
  );

  return (
    <div className="min-h-dvh bg-[#f8f8f8] text-gray-900">
      <SidebarNav />

      <main className="min-h-dvh w-full bg-white p-2 md:p-3 lg:ml-20 lg:w-[calc(100%-104px)] lg:p-0 lg:py-5 lg:pb-0 xl:ml-[120px] xl:w-[calc(100%-120px)] 2xl:ml-[240px] 2xl:w-[calc(100%-240px)]">
        <Header cartCount={cartCount} onCart={() => setIsCartOpen(true)} />

        <Outlet />
      </main>

      <MobileNav active={activeNav} setActive={setActiveNav} />

      {cartCount > 0 && (
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          aria-label="Open cart"
          className="fixed bottom-[95px] right-5 z-40 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#999999] text-white shadow-lg transition hover:bg-[#777777] sm:right-7 lg:hidden"
        >
          <ShoppingCart size={25} />

          <span className="absolute -right-1 -top-1 flex h-[21px] min-w-[21px] items-center justify-center rounded-full bg-[#ef2b2f] px-1 text-[10px] font-bold">
            {cartCount}
          </span>
        </button>
      )}

      <CartDrawer
        cart={cart}
        onAdd={handleAdd}
        onRemove={handleRemove}
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}
