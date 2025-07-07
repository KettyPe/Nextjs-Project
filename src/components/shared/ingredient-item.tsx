import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const IngredientItem = ({
  imageUrl,
  name,
  price,
  active,
  onClick,
  className,
}: Props) => {
  return (
    <div
      className={cn(
        "relative flex w-32 flex-col items-center rounded-md p-1 text-center",
        "cursor-pointer border border-transparent bg-white shadow-md",
        { "border border-primary": active },
        className
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className="absolute right-2 top-2 text-primary" />
      )}
      <img width={110} height={110} src={imageUrl} alt={name} />
      <span className="mb-1 text-xs">{name}</span>
      <span className="font-bold">{price} ₽</span>
    </div>
  );
};
