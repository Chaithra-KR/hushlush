import { Menu as MenuIcon, ReceiptText, Store, UserRound } from "lucide-react";

type Props = {
  active: string;
  setActive: (value: string) => void;
};

const items = [
  ["Outlet", Store],
  ["Menu", ReceiptText],
  ["Account", UserRound],
  ["More", MenuIcon],
] as const;

export default function MobileNav({ active, setActive }: Props) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-12 md:h-16 lg:h-20 items-stretch border-t border-gray-200 bg-white shadow-sm lg:hidden">
      {items.map(([label, Icon]) => {
        const isActive = active === label;

        return (
          <button
            key={label}
            type="button"
            onClick={() => setActive(label)}
            className={`relative flex flex-1 flex-col items-center justify-center gap-0.5 md:gap-1 text-[11px] md:text-[12px] font-medium transition
              ${isActive ? "text-[#ef2b2f]" : "text-gray-900"}
            `}
          >
            {isActive && (
              <span className="absolute bottom-0 left-1/2 h-[2px] lg:h-[3px] w-[55%] -translate-x-1/2 rounded-t-full bg-[#ef2b2f]" />
            )}

            <Icon className="size-4 md:size-5 lg:size-7" />

            <span>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
