import { Title } from "@/components/shared/title";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Props {
  imageUrl: string;
  name: string;
  price?: number;
  loading?: boolean;
  onSubmit?: VoidFunction;
  className?: string;
}

export const ChooseProductForm = ({
  name,
  imageUrl,
  price = 350,
  onSubmit,
  className,
  loading,
}: Props) => {
  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="relative flex w-full flex-1 items-center justify-center">
        <ProductImage imageUrl={imageUrl} name={name} />

        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title text={name} size="md" className="mb-1 font-extrabold" />

          <p className="text-grey-400">Какое то описание товара</p>

          <Button className="mt-10 h-[55px] w-full rounded-[18px] px-10 text-base">
            Добавить в корзину за {price} ₽
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProductImage = ({
  name,
  imageUrl,
}: {
  imageUrl: string;
  name: string;
}) => {
  return (
    <img
      src={imageUrl}
      alt={name}
      className="relative left-2 top-2 z-10 h-[350px] w-[350px] transition-all duration-300"
    />
  );
};
