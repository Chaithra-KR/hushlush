import { categories } from "../../config/data";

type Props = {
  active: string;
  setActive: (value: string) => void;
};

export default function CategoryTabs({ active, setActive }: Props) {
  return (
    <div className=" w-full border-b border-gray-200 bg-[#f8f8f8]">
      <div className=" flex w-full overflow-x-auto p-2 md:p-4 scrollbar-none sm:px-6 lg:px-8 xl:px-10">
        <div className=" flex min-w-max items-center gap-3">
          {categories.map((category) => {
            const isActive = active === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`flex h-8 shrink-0 items-center justify-center rounded-full border px-3 text-xs md:text-sm xl:text-base font-medium transition-all
                  ${
                    isActive
                      ? "border-[#ef2b2f] bg-[#ef2b2f] text-white shadow-sm"
                      : "border-gray-200 bg-white text-gray-900 hover:border-gray-300"
                  }
                  sm:px-5 lg:px-7 xl:px-8 md:h-9 xl:h-12
                `}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
