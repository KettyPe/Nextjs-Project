import * as CartItem from "@/components/shared/cart-item-details"
import { cn } from '@/lib/utils';
import { CartItemProps } from "@/components/shared/cart-item-details/type";

interface Props extends CartItemProps {
     className?: string;
}

export const CartDrawerItem = ({
     imageUrl,
     name,
     details,
     className
}: Props) => {
     <div className={cn('flex bg-white p-5 gap-6', className)}>
          <CartItem.Image src={imageUrl} />

          <div className="flex-1">
               <CartItem.Info name={name} details={details}/>

               <hr className="my-3" />

               <div className="flex items-center justify-between">

               </div>
          </div>
     </div>
}