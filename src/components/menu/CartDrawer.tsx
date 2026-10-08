import { useState } from "react";
import { Drawer } from "antd";
import { CheckCircle2, Minus, Plus, Search, ShoppingCart } from "lucide-react";

import { products } from "../../config/data";
import type { Cart, Product } from "../../config/types";
import { useTable } from "../../context/TableContext";
import { useCart } from "../../context/CartContext";

type Props = {
  cart: Cart;
  onAdd: (product: Product) => void;
  onRemove: (product: Product) => void;
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({
  cart,
  onAdd,
  onRemove,
  open,
  onClose,
}: Props) {
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const { selectedTable } = useTable();
  const { clearCart } = useCart();

  const lines = products.filter((product) => (cart[product.id] || 0) > 0);

  const subtotal = lines.reduce(
    (sum, product) => sum + product.price * (cart[product.id] || 0),
    0,
  );

  const handlePlaceOrder = async () => {
    if (lines.length === 0 || isOrdering) return;

    setIsOrdering(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsOrdering(false);
    clearCart();
    setOrderPlaced(true);
  };

  const handleClose = () => {
    setOrderPlaced(false);
    setIsOrdering(false);
    onClose();
  };

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      placement="right"
      width={420}
      closable
      styles={{
        body: { padding: 0 },
        header: { display: "none" },
      }}
    >
      <div className="flex h-full flex-col bg-white">
        {orderPlaced ? (
          <div className="flex h-full flex-col items-center justify-center px-8 text-center">
            <div className="flex size-20 items-center justify-center rounded-full bg-green-50">
              <CheckCircle2 size={42} className="text-green-600" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              Order placed!
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Your order has been sent to the restaurant successfully.
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="mt-7 h-12 w-full rounded-xl bg-[#ef2b2f] text-sm font-semibold text-white transition hover:bg-[#dc2428]"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="flex h-[64px] shrink-0 items-center gap-3 border-b border-gray-100 px-5">
              <div className="flex h-[42px] flex-1 items-center gap-2 rounded-full border border-gray-200 px-4 text-gray-400">
                <Search size={18} strokeWidth={2} />
                <span className="text-sm">Search</span>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-gray-900">
                <ShoppingCart size={24} />
              </div>
            </div>

            <div className="shrink-0 px-5 pb-4 pt-5">
              <h2 className="text-[20px] font-bold leading-tight text-gray-900">
                Order details
              </h2>

              <span className="mt-1 block text-sm text-gray-500">
                Table {selectedTable.id} · {selectedTable.pax} PAX
              </span>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5">
              {lines.length === 0 ? (
                <div className="flex h-full min-h-[250px] flex-col items-center justify-center text-center">
                  <ShoppingCart size={38} className="text-gray-300" />

                  <p className="mt-3 text-sm font-medium text-gray-700">
                    Your cart is empty
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Add some delicious dishes to get started.
                  </p>
                </div>
              ) : (
                <div>
                  {lines.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-3 border-b border-gray-100 py-4"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-[58px] w-[58px] shrink-0 rounded-xl object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <b className="block truncate pr-2 text-[14px] font-semibold leading-[1.25] text-gray-900">
                          {product.name}
                        </b>

                        <strong className="mt-1 block text-[14px] font-bold text-[#ef2b2f]">
                          ${product.price.toFixed(2)}
                        </strong>
                      </div>

                      <div className="flex shrink-0 items-center rounded-full border border-gray-200 bg-white">
                        <button
                          type="button"
                          onClick={() => onRemove(product)}
                          aria-label="Decrease quantity"
                          className="flex h-8 w-8 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="min-w-5 text-center text-sm font-medium text-gray-900">
                          {cart[product.id]}
                        </span>

                        <button
                          type="button"
                          onClick={() => onAdd(product)}
                          aria-label="Increase quantity"
                          className="flex h-8 w-8 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="shrink-0 border-t border-gray-100 bg-white px-5 pb-6 pt-5">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                <span>Service</span>
                <span>$0.00</span>
              </div>

              <div className="mt-4 flex items-center justify-between text-[18px] text-gray-900">
                <b>Total</b>
                <b>${subtotal.toFixed(2)}</b>
              </div>

              <button
                type="button"
                disabled={lines.length === 0 || isOrdering}
                onClick={handlePlaceOrder}
                className="mt-5 flex h-[56px] w-full items-center justify-center rounded-xl bg-[#ef2b2f] text-[16px] font-semibold text-white shadow-sm transition hover:bg-[#dc2428] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isOrdering ? (
                  <>
                    <span className="mr-2 size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Placing order...
                  </>
                ) : (
                  "Place Order"
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </Drawer>
  );
}
