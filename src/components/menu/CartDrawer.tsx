import { Minus, Plus, Search, ShoppingCart } from "lucide-react";
import { Drawer } from "antd";

import { products } from "../../config/data";
import type { Cart, Product } from "../../config/types";

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
  const lines = products.filter((product) => (cart[product.id] || 0) > 0);

  const subtotal = lines.reduce(
    (sum, product) => sum + product.price * (cart[product.id] || 0),
    0,
  );

  return (
    <Drawer
      open={open}
      onClose={onClose}
      placement="right"
      width={420}
      closable={true}
      styles={{
        body: { padding: 0 },
        header: { display: "none" }, 
      }}
    >
      <div className="flex h-full flex-col bg-white">
        <div className="flex h-[64px] shrink-0 items-center gap-3 border-b border-gray-100 px-5">
          <div className="flex h-[42px] flex-1 items-center gap-2 rounded-full border border-gray-200 px-4 text-gray-400">
            <Search size={18} strokeWidth={2} />
            <span className="text-sm">Search</span>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-gray-900">
            <ShoppingCart size={24} />
          </div>
        </div>

        {/* Order Details Title */}
        <div className="shrink-0 px-5 pb-4 pt-5">
          <h2 className="text-[20px] font-bold leading-tight text-gray-900">
            Order details
          </h2>
          <span className="mt-1 block text-sm text-gray-500">
            Table 13 · 4 PAX
          </span>
        </div>

        {/* Items List */}
        <div className="min-h-0 flex-1 overflow-y-auto px-5">
          {lines.length === 0 ? (
            <div className="flex h-full min-h-[250px] items-center justify-center text-sm text-gray-400">
              Your cart is empty
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

        {/* Totals & Submit Footer */}
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
            disabled={lines.length === 0}
            className="mt-5 h-[56px] w-full rounded-xl bg-[#ef2b2f] text-[16px] font-semibold text-white shadow-sm transition hover:bg-[#dc2428] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Place Order
          </button>
        </div>
      </div>
    </Drawer>
  );
}