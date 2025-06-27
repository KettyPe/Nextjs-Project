"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React from "react";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Skeleton } from "@/components/ui";

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValues?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  limit = 5,
  loading,
  searchInputPlaceholder = "Поиск...",
  defaultItems,
  className,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if(loading) {
    return (
      <div className={cn("", className)}>
        <p className="mb-3 font-bold">{title}</p>

        {...Array(limit).fill(0).map((_, index) => <Skeleton key={index} className="h-6 mb-5" />)}

        <Skeleton className="w-28 h-6 mb-5" />
      </div>
    )
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : defaultItems?.slice(0, limit);

  return (
    <div className={cn("", className)}>
      <p className="mb-3 font-bold">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="border-none bg-gray-50"
          />
        </div>
      )}

      <div className="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(check) => console.log(check)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "mt-4 border-t border-t-neutral-100" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-3 text-primary"
          >
            {showAll ? "Скрыть" : "Показать ещё"}
          </button>
        </div>
      )}
    </div>
  );
};
