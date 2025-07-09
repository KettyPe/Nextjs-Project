"use client";
import { cn } from "@/lib/utils";

export interface VariantProps {
  name: string;
  value: string;
  disabled?: boolean;
}

interface GroupVariantsProps {
  items: readonly VariantProps[];
  value?: VariantProps["value"];
  onClick?: (value: VariantProps["value"]) => void;
  className?: string;
}

export const ProductGroupVariants = ({
  items,
  value: value,
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
            "flex h-[30px] flex-1 items-center justify-center px-5 text-sm",
            "duration-400 cursor-pointer rounded-3xl transition-all",
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
