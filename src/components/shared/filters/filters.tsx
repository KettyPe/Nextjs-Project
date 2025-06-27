'use client'

import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title } from "@/components/shared"
import { Input } from "@/components/ui/input"
import { useFilterIngredients } from "@/hook/useFilterIngredients";
import { cn } from "@/lib/utils"
import React from "react";

interface Props {
     className?: string
}

const products = [
     {
          id: 1,
          value: "1",
          text: "Сырный соус"
     },
     {
          id: 2,
          value: "2",
          text: "Пепперони"
     },
     {
          id: 3,
          value: "3",
          text: "Чеснок"
     },
     {
          id: 4,
          value: "4",
          text: "Соленые огурчики"
     },
     {
          id: 5,
          value: "5",
          text: "Газировка"
     },
     {
          id: 6,
          value: "6",
          text: "Кетчуп"
     },
     {
          id: 7,
          value: "4",
          text: "Соленые огурчики"
     },
     {
          id: 8,
          value: "5",
          text: "Газировка"
     },
     {
          id: 9,
          value: "6",
          text: "Кетчуп"
     },
]


export const Filters: React.FC<Props> = ({ className }) => {
     const { ingredients } = useFilterIngredients()

     return (
          <div className={cn('', className)}>
               <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

               <div className="flex flex-col gap-4">
                    <FilterCheckbox text="Можно собирать" value="1" />
                    <FilterCheckbox text="Новинки" value="2" />
               </div>

               <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                    <p className="font-bold mb-3">Цена от и до</p>
                    <div className="flex gap-3 mb-5">
                         <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
                         <Input type="number" placeholder="1000" min={100} max={1000} />
                    </div>
                    <RangeSlider min={0} max={500} step={10} value={[0, 500]} />
               </div>

               <div className="mt-5">
                    <CheckboxFiltersGroup
                         title="Список товаров"
                         limit={6}
                         items={products}
                         defaultItems={products}
                    />
               </div>
          </div>
     )
}