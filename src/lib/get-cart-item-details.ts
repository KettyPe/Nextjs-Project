import { mapPizzaType, PizzaSizes, PizzaType } from "@/shared/constants/pizza";
import { Ingredient } from "@prisma/client";

interface Props {
     ingredients: Ingredient[],
     pizzaType?: PizzaType,
     pizzaSize?: PizzaSizes,
}

export const getCartItemDetails = ( props: Props ): string => {
     const { ingredients, pizzaType, pizzaSize } = props

     const details = [];

     if (pizzaSize && pizzaType) {
          const typeName = mapPizzaType[pizzaType];
          details.push(`${typeName} ${pizzaSize} см`);
     }

     if (ingredients) {
          details.push(...ingredients.map((ingredient) => ingredient.name));
     }

     return details.join(', ');
};