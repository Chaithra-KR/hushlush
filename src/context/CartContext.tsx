import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { Cart, Product } from "../config/types";

type CartContextType = {
  cart: Cart;
  cartCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({});

  const addToCart = (product: Product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  const removeFromCart = (product: Product) => {
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
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}