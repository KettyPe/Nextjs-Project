"use client";

import { cn } from "@/lib/utils";
import { useCategoryState } from "@/store/category";
import React from "react";

interface Props {
  className?: string;
}

const items = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктейли" },
  { id: 5, name: "Кофе" },
  { id: 6, name: "Напитки" },
  { id: 7, name: "Десерты" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryState((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
      {items.map((item, index) => (
        <a
          className={cn(
            "flex h-11 items-center rounded-2xl px-5 font-bold",
            categoryActiveId === item.id &&
              "bg-white text-primary shadow-md shadow-gray-200"
          )}
          key={index}
          href={`/#${item.name}`}
        >
          <button>{item.name}</button>
        </a>
      ))}
    </div>
  );
};
