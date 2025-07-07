import { IngredientItem, Title } from "@/components/shared";
import { PizzaImage } from "@/components/shared/products/pizza-image";
import { ProductGroupVariants } from "@/components/shared/products/product-group-variants";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { pizzaSizes, pizzaType } from "@/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import React from "react";
import { useSet } from "react-use";

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
  const [size, setSize] = React.useState<pizzaSizes>(20);
  const [type, setType] = React.useState<pizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const pizzaPrice = items.find(
    (item) => item.pizzaType === type && item.size === size
  )!.price;

  const totalIngredientsPrice = ingredients
  .filter((ingredient) => selectedIngredients.has(ingredient.id))
  .reduce((acc, ingredient) => acc + ingredient.price, 0)

  const totalPrice = pizzaPrice + totalIngredientsPrice

  return (
    <div className={cn("flex flex-1", className)}>
      <div className="relative flex w-full flex-1 items-center justify-center">
        <PizzaImage imageUrl={imageUrl} size={size} />

        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title text={name} size="md" className="mb-1 font-extrabold" />

          <p className="text-grey-400">Какое то описание товара</p>

          <div className="mt-5 flex flex-col gap-3">
            <ProductGroupVariants
              items={pizzaSizes}
              value={String(size)}
              onClick={(value) => setSize(Number(value) as pizzaSizes)}
            />
            <ProductGroupVariants
              items={pizzaType}
              value={String(type)}
              onClick={(value) => setType(Number(value) as pizzaType)}
            />
          </div>

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

          <Button className="mt-10 h-[55px] w-full rounded-[18px] px-10 text-base">
            Добавить в корзину за {totalPrice} ₽
          </Button>
        </div>
      </div>
    </div>
  );
};
