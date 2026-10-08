import { Menu as MenuIcon, ReceiptText, Store, UserRound } from "lucide-react";
import { Hushlush, Logo } from "../../assets/images";
import { NavLink } from "react-router-dom";

const items = [
  {
    label: "Outlet",
    path: "/outlet",
    Icon: Store,
  },
  {
    label: "Menu",
    path: "/",
    Icon: ReceiptText,
  },
  {
    label: "Account",
    path: "/account",
    Icon: UserRound,
  },
  {
    label: "More",
    path: "/more",
    Icon: MenuIcon,
  },
];

export default function SidebarNav() {
  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-dvh w-20 flex-col bg-white lg:flex xl:w-[120px] 2xl:w-[240px]">
      <div className="flex h-[105px] items-center justify-center px-4 2xl:justify-start 2xl:px-7">
        <div className="flex items-center gap-1">
          <img
            src={Logo}
            alt="Hush Lush"
            className="h-[55px] w-[55px] object-contain lg:h-10 lg:w-10 2xl:h-14 2xl:w-14"
          />

          <div className="hidden 2xl:block">
            <img
              src={Hushlush}
              alt="Hush Lush"
              className=" object-contain 2xl:h-[48px]2xl:w-[48px]"
            />
          </div>
        </div>
      </div>

      <nav className="flex flex-1 flex-col items-center gap-5 pt-5 2xl:items-stretch 2xl:gap-2 2xl:px-3">
        {items.map(({ label, path, Icon }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `relative flex h-[70px] w-full items-center justify-center gap-4 transition 2xl:h-[64px] 2xl:justify-start 2xl:px-5 ${
                isActive ? "text-[#ef2b2f]" : "text-gray-900 hover:bg-gray-50"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-[42px] w-[4px] -translate-y-1/2 rounded-r-full bg-[#ef2b2f]" />
                )}

                <Icon className="size-4 md:size-6" />

                <span className="hidden text-[16px] font-medium 2xl:block">
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
