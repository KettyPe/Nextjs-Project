"use client";
import { cn } from "@/lib/utils";

interface VatiantProps {
  name: string;
  value: string;
  disabled?: boolean;
}

interface GroupVariantsProps {
  items: readonly VatiantProps[];
  selectedValue?: VatiantProps["value"];
  onClick?: (value: VatiantProps["value"]) => void;
  className?: string;
}

export const ProductGroupVariants = ({
  items,
  selectedValue: value,
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
            "duration-400 flex h-[30px] flex-1 cursor-pointer items-center justify-center rounded-3xl px-5 text-sm transition-all",
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
