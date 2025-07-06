"use client";
import {
  checkboxFilterSizeList,
  pizzaTypesList,
  productsList,
} from "@/components/data";
import { CheckboxFiltersGroup, RangeSlider, Title } from "@/components/shared";
import { Input } from "@/components/ui/input";
import { useFilters, useIngredients, useQueryFilters } from "@/shared/hook/index";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  
  const filters = useFilters();
  useQueryFilters(filters);

  const itemsIngredients = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const {
    pizzaTypes,
    setPizzaTypes,
    sizes,
    setSizes,
    prices,
    setPrices,
    selectedIngredients,
    setSelectedIngredients,
  } = filters;

  const updatePrice = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  }

  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={setPizzaTypes}
        selectedValues={pizzaTypes}
        items={pizzaTypesList}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={setSizes}
        selectedValues={sizes}
        items={checkboxFilterSizeList}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={(e) => setPrices("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(prices.priceTo)}
            onChange={(e) => setPrices("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
          onValueChange={updatePrice}
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
          onClickCheckbox={setSelectedIngredients}
          selectedValues={selectedIngredients}
        />
      </div>
    </div>
  );
};
