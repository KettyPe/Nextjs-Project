import * as CartItem from "@/components/shared/cart-item-details"
import { cn } from '@/lib/utils';
import { CartItemProps } from "@/components/shared/cart-item-details/type";
import { CountButton } from "@/components/shared/buttons/count-button";
import { Trash2Icon } from "lucide-react";

interface Props extends CartItemProps {
     className?: string;
}

export const CartDrawerItem = ({
     imageUrl,
     name,
     details,
     quantity,
     price,
     className
}: Props) => {
     return (
          <div className={cn('flex bg-white p-5 gap-6', className)}>
               <CartItem.Image src={imageUrl} />

               <div className="flex-1">
                    <CartItem.Info name={name} details={details} />

                    <hr className="my-3" />

                    <div className="flex items-center justify-between">
                         <CountButton onClick={(value) => console.log(value)} value={quantity} />
                         <div className="flex items-center gap-3">
                              <CartItem.Price value={price} />
                              <Trash2Icon className="text-gray-400 cursor-pointer hover:text-gray-600" size={16} />
                         </div>
                    </div>
               </div>
          </div>
     )
}