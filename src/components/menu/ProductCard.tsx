import { ArrowRight, Plus } from "lucide-react";

import type { Product } from "../../config/types";

type Props = {
  product: Product;
  onAdd: (product: Product) => void;
};

export default function ProductCard({ product, onAdd }: Props) {
  return (
    <article className="overflow-hidden flex flex-col justify-between rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative h-[150px] overflow-hidden md:h-[200px] lg:h-[215px] xl:h-[220px] 2xl:h-[230px]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[150px] overflow-hidden md:h-[200px] lg:h-[215px] xl:h-[220px] 2xl:h-[230px] bg-black/25 " />

        <button
          type="button"
          onClick={() => onAdd(product)}
          aria-label={`Add ${product.name}`}
          className="absolute bottom-3 right-3 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full border border-white/20 bg-white/20 text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/55 active:scale-95"
        >
          <Plus className="size-4 md:size-6" />
        </button>
      </div>

      <div className=" flex min-h-[50px] items-center justify-center px-4 md:py-3 text-center">
        <h3 className=" text-xs font-semibold leading-[1.25] text-gray-900 sm:text-sm xl:text-base">
          {product.name}
        </h3>
      </div>

      <div className=" flex h-10 2xl:h-14 items-center justify-between bg-[#fff4f4] px-5">
        <strong className=" text-base font-bold text-[#ef2b2f] sm:text-lg xl:text-2xl">
          ${product.price.toFixed(2)}
        </strong>

        <button
          type="button"
          onClick={() => onAdd(product)}
          aria-label={`Add ${product.name}`}
          className=" flex items-center justify-center text-[#ef2b2f] transition hover:translate-x-1"
        >
          <ArrowRight className="size-5 lg:size-6 xl:size-7" />
        </button>
      </div>
    </article>
  );
}
