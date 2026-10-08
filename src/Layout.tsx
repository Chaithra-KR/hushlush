import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Outlet, useOutletContext } from "react-router-dom";

import Header from "./components/common/Header";
import SidebarNav from "./components/common/SidebarNav";
import MobileNav from "./components/common/MobileNav";
import CartDrawer from "./components/menu/CartDrawer";

import { useCart } from "./context/CartContext";

type LayoutContext = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};

export function useLayoutContext() {
  return useOutletContext<LayoutContext>();
}

export default function Layout() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    cart,
    cartCount,
    addToCart,
    removeFromCart,
  } = useCart();

  return (
    <div className="min-h-dvh bg-[#f8f8f8] text-gray-900">
      <SidebarNav />

      <main className="min-h-dvh w-full bg-white p-2 md:p-3 lg:ml-20 lg:w-[calc(100%-104px)] lg:p-0 lg:py-5 lg:pb-0 xl:ml-[120px] xl:w-[calc(100%-120px)] 2xl:ml-[240px] 2xl:w-[calc(100%-240px)]">

        <Header
          cartCount={cartCount}
          onCart={() => setIsCartOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <Outlet
          context={{
            searchQuery,
            setSearchQuery,
          }}
        />
      </main>

      <MobileNav />

      {/* Mobile floating cart */}
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
        onAdd={addToCart}
        onRemove={removeFromCart}
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}