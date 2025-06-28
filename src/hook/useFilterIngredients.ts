"use client";

import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { useSet } from 'react-use';
import React from "react";

interface Props {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIngredients: Set<string>;
  onAddId: (id: string) => void
}

export const useFilterIngredients = (): Props => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(true)
  const [selectedValues, { toggle }] = useSet(new Set<string>([]))

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true)
        const ingredients = await Api.ingredients.getAllIngredient();
        setIngredients(ingredients);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    }

    fetchIngredients();
  }, []);

  return { ingredients, loading, onAddId: toggle, selectedIngredients: selectedValues};
};
