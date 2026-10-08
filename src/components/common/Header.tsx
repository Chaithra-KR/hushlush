import { useState } from "react";
import { Search, ShoppingCart, ChevronDown, Utensils, X } from "lucide-react";
import { Logo } from "../../assets/images";
import { useTable } from "../../context/TableContext";
import { TableSelectorModal } from "../menu/TableSelectorModal";

type HeaderProps = {
  cartCount: number;
  onCart: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export default function Header({
  cartCount,
  onCart,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  const { selectedTable } = useTable();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 rounded-t-3xl border-b border-gray-100 bg-[#f8f8f8] lg:rounded-t-none">
        <div className="relative flex h-14 items-center justify-between px-4 sm:h-14 sm:px-6 md:h-16 lg:px-8 xl:h-[80px] xl:px-10">
          <div className="absolute left-4 top-3/4 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-xl bg-[#fffafa] shadow-[0_4px_18px_rgba(0,0,0,0.08)] md:h-[66px] md:w-[66px] lg:left-8 lg:h-[68px] lg:w-[68px] xl:left-10">
            <img
              src={Logo}
              alt="Hush Lush logo"
              className="h-10 w-10 object-contain md:h-[52px] md:w-[52px]"
            />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-1.5 rounded-full border border-gray-200/80 bg-white px-3.5 py-1.5 text-gray-900 shadow-sm transition hover:bg-gray-50"
            >
              <Utensils className="h-3.5 w-3.5 text-red-600 transition-transform group-hover:scale-110" />

              <span className="text-xs font-bold sm:text-sm xl:text-base">
                Table {selectedTable.id} ({selectedTable.pax} PAX)
              </span>

              <ChevronDown className="h-3.5 w-3.5 text-gray-400 transition group-hover:text-gray-600" />
            </button>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden h-10 w-[270px] items-center gap-3 rounded-full border border-gray-200 bg-white px-4 transition focus-within:border-gray-300 focus-within:ring-2 focus-within:ring-gray-100 lg:flex 2xl:h-[46px] 2xl:w-[320px]">
              <Search className="size-5 shrink-0 text-gray-400 2xl:size-6" />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search dishes..."
                className="h-full min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  aria-label="Clear search"
                  className="flex shrink-0 items-center justify-center text-gray-400 transition hover:text-gray-700"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            <button
              type="button"
              aria-label={isMobileSearchOpen ? "Close search" : "Open search"}
              onClick={() => {
                setIsMobileSearchOpen((previous) => !previous);
              }}
              className="flex h-5 w-5 items-center justify-center text-gray-900 md:h-10 md:w-10 lg:hidden"
            >
              {isMobileSearchOpen ? <X size={24} /> : <Search size={25} />}
            </button>

            <button
              type="button"
              onClick={onCart}
              aria-label="Open cart"
              className="relative hidden h-5 w-5 cursor-pointer items-center justify-center text-gray-900 md:h-10 md:w-10 lg:flex"
            >
              <ShoppingCart size={25} />

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#ef2b2f] px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {isMobileSearchOpen && (
          <div className="border-t border-gray-100 px-4 pb-3 pt-2 md:px-6 lg:hidden">
            <div className="flex h-11 w-full items-center gap-3 rounded-full border border-gray-200 bg-white px-4 transition focus-within:border-gray-300 focus-within:ring-2 focus-within:ring-gray-100">
              <Search className="size-5 shrink-0 text-gray-400" />

              <input
                autoFocus
                type="search"
                value={searchQuery}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search dishes..."
                className="h-full min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  aria-label="Clear search"
                  className="flex shrink-0 items-center justify-center text-gray-400 transition hover:text-gray-700"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      <TableSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
