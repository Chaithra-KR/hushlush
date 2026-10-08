import { useState } from "react";
import { Search, ShoppingCart, ChevronDown, Utensils } from "lucide-react";
import { Logo } from "../../assets/images";
import { TableSelectorModal, type SelectedTable } from "../menu/TableSelectorModal"; 

type HeaderProps = {
  cartCount: number;
  onCart: () => void;
};

export default function Header({ cartCount, onCart }: HeaderProps) {
  const [selectedTable, setSelectedTable] = useState<SelectedTable>({
    id: 13,
    pax: 4,
    section: "Indoor",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-gray-100 bg-[#f8f8f8] px-4 sm:px-6 sm:h-14 md:h-16 xl:h-[80px] lg:px-8 xl:px-10 rounded-t-3xl lg:rounded-t-none">
        <div className="absolute left-4 top-3/4 z-10 flex h-14 w-14 md:h-[66px] md:w-[66px] -translate-y-1/2 items-center justify-center rounded-xl bg-[#fffafa] shadow-[0_4px_18px_rgba(0,0,0,0.08)] lg:left-8 lg:h-[68px] lg:w-[68px] xl:left-10">
          <img
            src={Logo}
            alt="Hush Lush logo"
            className="h-10 w-10 md:h-[52px] md:w-[52px] object-contain"
          />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-gray-50 border border-gray-200/80 shadow-2xs transition text-gray-900 group"
          >
            <Utensils className="w-3.5 h-3.5 text-red-600 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold sm:text-sm xl:text-base">
              Table {selectedTable.id} ({selectedTable.pax} PAX)
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 transition" />
          </button>
        </div>

        <div className="ml-auto flex items-center gap-2 ">
          <div className="hidden h-10 2xl:h-[46px] w-[270px] items-center gap-3 rounded-full border border-gray-200 bg-white px-4 text-gray-400 lg:flex xl:w-[300px] 2xl:w-[320px]">
            <Search className="size-5 2xl:size-6" />
            <span className="text-sm"> Search </span>
          </div>

          <button
            type="button"
            aria-label="Search"
            className="flex h-5 w-5 md:h-10 md:w-10 items-center justify-center text-gray-900 lg:hidden"
          >
            <Search size={25} />
          </button>

          <button
            type="button"
            onClick={onCart}
            aria-label="Open cart"
            className="hidden relative lg:flex h-5 w-5 md:h-10 md:w-10 items-center justify-center text-gray-900"
          >
            <ShoppingCart size={25} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#ef2b2f] px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      <TableSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentTable={selectedTable}
        onSelectTable={(table) => setSelectedTable(table)}
      />
    </>
  );
}