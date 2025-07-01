"use client";

import { cn } from "@/lib/utils";
import { useCategoryState } from "@/store/category";
import { Category } from "@prisma/client";
import React from "react";

interface Props {
  items: Category[]
  className?: string;
}

export const Categories: React.FC<Props> = ({ items, className }) => {
  const categoryActiveId = useCategoryState((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
      {items.map(({name, id}, index) => (
        <a
          className={cn(
            "flex h-11 items-center rounded-2xl px-5 font-bold",
            categoryActiveId === id &&
              "bg-white text-primary shadow-md shadow-gray-200"
          )}
          key={index}
          href={`/#${name}`}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
