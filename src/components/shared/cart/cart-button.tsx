import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { CartDrawer } from "@/components/shared/cart/cart-drawer";

interface Props {
     className?: string
}

export const CartButton = ({ className }: Props) => {
     return (
          <CartDrawer>
               <Button className={cn("group relative", className)}>
                    <b>520 ₽</b>
                    <span className="mx-3 h-full w-[1px] bg-white/30" />
                    <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                         <ShoppingCart size={16} className="relative" strokeWidth={2} />
                         <b>3</b>
                    </div>
                    <ArrowRight
                         size={20}
                         className={cn(
                              "absolute right-5 -translate-x-2 opacity-0 transition",
                              "duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                         )}
                    />
               </Button>
          </CartDrawer>
     )
}

