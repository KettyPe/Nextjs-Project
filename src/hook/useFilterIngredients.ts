"use client";

import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";

interface Props {
  ingredients: Ingredient[];
}

export const useFilterIngredients = (): Props => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await Api.ingredients.getAllIngredient();
        setIngredients(ingredients);
      } catch (error) {
        console.error(error);
      }
    }

    fetchIngredients();
  }, []);

  return { ingredients };
};
