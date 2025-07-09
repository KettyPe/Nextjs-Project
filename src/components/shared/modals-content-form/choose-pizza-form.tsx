import { ProductGroupVariants } from "@/components/shared/products/product-group-variants";
import { PizzaSizes, PizzaType, pizzaType } from "@/shared/constants/pizza";
import { PizzaImage } from "@/components/shared/products/pizza-image";
import { IngredientItem, Title } from "@/components/shared";
import { usePizzaOptions } from "@/hook/use-pizza-options";
import { getPizzaDetails } from "@/lib";
import { Ingredient, ProductItem } from "@prisma/client";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onClickAddCart?: () => void;
  className?: string;
}

export const ChoosePizzaForm = ({
  name,
  ingredients,
  items,
  imageUrl,
  onClickAddCart,
  className,
  loading,
}: Props) => {
  const {
    size,
    type,
    selectedIngredients,
    availableSizes,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  } = usePizzaOptions(items);

  const { descriptionPizza, totalPrice } = getPizzaDetails({
    items,
    ingredients,
    type,
    size,
    selectedIngredients
  })

  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log({
      size,
      type,
      ingredients: selectedIngredients,
    });
  };

  return (
    <div className={cn("flex flex-1", className)}>
      <div className="relative flex w-full flex-1 items-center justify-center">
        <PizzaImage imageUrl={imageUrl} size={size} />

        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title text={name} size="md" className="mb-1 font-extrabold" />

          <p className="text-grey-400">{descriptionPizza}</p>

          <div className="mt-5 flex flex-col gap-3">
            <ProductGroupVariants
              items={availableSizes}
              value={String(size)}
              onClick={(value) => setSize(Number(value) as PizzaSizes)}
            />
            <ProductGroupVariants
              items={pizzaType}
              value={String(type)}
              onClick={(value) => setType(Number(value) as PizzaType)}
            />
          </div>

          <IngredientsList
            ingredients={ingredients}
            addIngredient={addIngredient}
            selectedIngredients={selectedIngredients}
          />

          <Button
            onClick={handleClickAdd}
            className="mt-10 h-[55px] w-full rounded-[18px] px-10 text-base"
          >
            Добавить в корзину за {totalPrice} ₽
          </Button>
        </div>
      </div>
    </div>
  );
};


const IngredientsList = ({
  ingredients,
  addIngredient,
  selectedIngredients
}: {
  ingredients: Ingredient[];
  addIngredient: (value: number) => void;
  selectedIngredients: Set<number>
}) => {
  return (
    <div className="scrollbar mt-5 h-[420px] overflow-auto rounded-md bg-gray-50 p-5">
      <div className="grid grid-cols-3 gap-3">
        {ingredients.map((ingredient, id) => {
          const { id: ingredientId, name, price, imageUrl } = ingredient;
          return (
            <IngredientItem
              key={ingredientId}
              name={name}
              price={price}
              imageUrl={imageUrl}
              onClick={() => addIngredient(ingredientId)}
              active={selectedIngredients.has(ingredientId)}
            />
          );
        })}
      </div>
    </div>
  )
}