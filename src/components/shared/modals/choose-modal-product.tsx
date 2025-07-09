"use client";
import { ProductWithRelations } from "@/@types/prisma";
import {
  ChoosePizzaForm,
  ChooseProductForm,
} from "@/components/shared/modals-content-form";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseModalProduct = ({ product, className }: Props) => {
  const router = useRouter();

  const isPizzaForm = Boolean(product.items[0].pizzaType);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "min-h-[500px] w-[1060px] max-w-[1060px] overflow-hidden bg-white p-0",
          className
        )}
      >
        <DialogTitle className="hidden">{product.name}</DialogTitle>

        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
          />
        ) : (
          <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
        )}
      </DialogContent>
    </Dialog>
  );
};
