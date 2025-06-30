import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import React from "react";

interface RangePriceProps {
     priceFrom?: number;
     priceTo?: number;
}

interface QueryFiltersProps extends RangePriceProps {
     pizzaTypes: string;
     sizes: string;
     ingredients: string;
}

export interface Filters {
     sizes: Set<string>;
     pizzaTypes: Set<string>;
     selectedIngredients: Set<string>;
     prices: RangePriceProps;
}

interface ReturnProps extends Filters {
     setPrices: (name: keyof RangePriceProps, value: number) => void;
     setPizzaTypes: (value: string) => void;
     setSizes: (value: string) => void;
     setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
     const searchParams = useSearchParams() as unknown as Map<keyof QueryFiltersProps, string>;

     const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
          new Set<string>(searchParams.get('ingredients')?.split(',')),
     );

     const [sizes, { toggle: toggleSizes }] = useSet(
          new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []),
     );

     const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
          new Set<string>(
               searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : [],
          ),
     );

     const [prices, setPrices] = React.useState<RangePriceProps>({
          priceFrom: Number(searchParams.get('priceFrom')) || undefined,
          priceTo: Number(searchParams.get('priceTo')) || undefined,
     });

     const updatePrice = (name: keyof RangePriceProps, value: number) => {
          setPrices((prev) => ({
               ...prev,
               [name]: value,
          }));
     };

return React.useMemo(
    () => ({
      sizes,
      pizzaTypes,
      selectedIngredients,
      prices,
      setPrices: updatePrice,
      setPizzaTypes: togglePizzaTypes,
      setSizes: toggleSizes,
      setSelectedIngredients: toggleIngredients,
    }),
    [sizes, pizzaTypes, selectedIngredients, prices],
  );
};
