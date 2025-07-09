import { PizzaSizes, PizzaType } from "@/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";

interface Props {
     items: ProductItem[];
     ingredients: Ingredient[];
     type: PizzaType;
     size: PizzaSizes;
     selectedIngredients: Set<number>;
}

export const calcTotalPizzaPrice = ({
     items,
     ingredients,
     type,
     size,
     selectedIngredients
}: Props) => {
     const pizzaPrice =
          items.find((item) => item.pizzaType === type && item.size === size)
               ?.price || 0;

     const totalIngredientsPrice = ingredients
          .filter((ingredient) => selectedIngredients.has(ingredient.id))
          .reduce((acc, ingredient) => acc + ingredient.price, 0);

     return pizzaPrice + totalIngredientsPrice;
}