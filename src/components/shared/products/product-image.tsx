import { cn } from "@/lib/utils";

interface Props {
  size: number;
  imageUrl: string;
  className?: string;
}

export const ProductImage = ({ size, imageUrl, className }: Props) => {
  return (
    <div
      className={cn(
        "relative flex w-full flex-1 items-center justify-center",
        className
      )}
    >
      <img
        src={imageUrl}
        alt="Logo"
        className={cn(
          "relative left-2 top-2 z-10 transition-all duration-300",
          {
            "h-[300px] w-[300px]": size === 20,
            "h-[400px] w-[400px]": size === 30,
            "h-[500px] w-[500px]": size === 40,
          }
        )}
      />

      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200"></div>
      <div className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dotted border-gray-100"></div>
    </div>
  );
};
