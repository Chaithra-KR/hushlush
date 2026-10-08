import { Menu as MenuIcon, ReceiptText, Store, UserRound } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  { label: "Outlet", path: "/outlet", Icon: Store },
  { label: "Menu", path: "/", Icon: ReceiptText },
  { label: "Account", path: "/account", Icon: UserRound },
  { label: "More", path: "/more", Icon: MenuIcon },
] as const;

export default function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-12 items-stretch border-t border-gray-200 bg-white shadow-sm md:h-16 lg:hidden">
      {items.map(({ label, path, Icon }) => {
        const isActive =
          path === "/"
            ? location.pathname === "/"
            : location.pathname.startsWith(path);

        return (
          <button
            key={label}
            type="button"
            onClick={() => navigate(path)}
            className={`relative flex flex-1 flex-col items-center justify-center gap-0.5 text-[11px] font-medium transition md:gap-1 md:text-[12px] ${
              isActive ? "text-[#ef2b2f]" : "text-gray-900"
            }`}
          >
            {isActive && (
              <span className="absolute bottom-0 left-1/2 h-[2px] w-[55%] -translate-x-1/2 rounded-t-full bg-[#ef2b2f]" />
            )}

            <Icon className="size-4 md:size-5" />
            <span>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
