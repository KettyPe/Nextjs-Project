"use client";

import {
  CheckboxFiltersGroup,
  FilterCheckbox,
  RangeSlider,
  Title,
} from "@/components/shared";
import { productsList } from "@/components/data";
import { Input } from "@/components/ui/input";
import { useFilterIngredients } from "@/hook/useFilterIngredients";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

interface RangePriceProps {
  priceFrom: number
  priceTo: number
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, selectedIds, onAddId } = useFilterIngredients();
  const [prices, setPrice] = React.useState<RangePriceProps>({
    priceFrom: 0,
    priceTo: 1000
  })

  const itemsIngredients = ingredients.map((item) => ({ value: String(item.id), text: item.name }))

  const updatePrice = (name: keyof RangePriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value
    })
  }

  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox name="Can" text="Можно собирать" value="1" />
        <FilterCheckbox name="newGroup" text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={500}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) => setPrice({priceFrom, priceTo})}
        />
      </div>

      <div className="mt-5">
        <CheckboxFiltersGroup
          title="Список товаров"
          name="ingredients"
          limit={6}
          items={productsList}
          defaultItems={itemsIngredients.slice(0, 6)}
          loading={loading}
          onClickCheckbox={onAddId}
          selectedIds={selectedIds}
        />
      </div>
    </div>
  );
};
