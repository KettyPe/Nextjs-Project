"use client";
<<<<<<< HEAD
import { cn } from "@/lib/utils";

interface VatiantProps {
=======

import { cn } from "@/lib/utils";

interface VariantProps {
>>>>>>> modal-product-content
  name: string;
  value: string;
  disabled?: boolean;
}

interface GroupVariantsProps {
<<<<<<< HEAD
  items: readonly VatiantProps[];
  selectedValue?: VatiantProps["value"];
  onClick?: (value: VatiantProps["value"]) => void;
=======
  items: readonly VariantProps[];
  value?: VariantProps["value"];
  onClick?: (value: VariantProps["value"]) => void;
>>>>>>> modal-product-content
  className?: string;
}

export const ProductGroupVariants = ({
  items,
<<<<<<< HEAD
  selectedValue: value,
=======
  value: value,
>>>>>>> modal-product-content
  onClick,
  className,
}: GroupVariantsProps) => {
  return (
    <div
      className={cn(
        className,
        "flex select-none justify-between rounded-3xl bg-[#F3F3F7] p-1"
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
<<<<<<< HEAD
            "duration-400 flex h-[30px] flex-1 cursor-pointer items-center justify-center rounded-3xl px-5 text-sm transition-all",
=======
            "flex h-[30px] flex-1 items-center justify-center px-5 text-sm",
            "duration-400 cursor-pointer rounded-3xl transition-all",
>>>>>>> modal-product-content
            {
              "bg-white shadow": item.value === value,
              "pointer-events-none text-gray-500 opacity-50": item.disabled,
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
