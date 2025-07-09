import { mapPizzaType, PizzaSizes, PizzaType } from "@/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";

interface Props {
     items: ProductItem[];
     ingredients: Ingredient[];
     type: PizzaType;
     size: PizzaSizes;
     selectedIngredients: Set<number>;
}

export const getPizzaDetails = ({
     items,
     ingredients,
     type,
     size,
     selectedIngredients
}: Props) => {
     const descriptionPizza = `${size} см, ${mapPizzaType[type]} пицца`;
     const totalPrice = calcTotalPizzaPrice({
          items,
          ingredients,
          type,
          size,
          selectedIngredients
     })

     return { descriptionPizza, totalPrice }
}