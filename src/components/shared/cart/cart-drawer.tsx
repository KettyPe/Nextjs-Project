'use client'

import { Button } from "@/components/ui"
import {
     Sheet,
     SheetClose,
     SheetContent,
     SheetDescription,
     SheetFooter,
     SheetHeader,
     SheetTitle,
     SheetTrigger,
} from "@/components/ui/sheet"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { PropsWithChildren } from "react"
import { CartDrawerItem } from "@/components/shared/cart/cart-drawer-item"
import { getCartItemDetails } from "@/lib/get-cart-item-details"

interface Props {
     className?: string
}

export const CartDrawer = ({ children, className }: PropsWithChildren<Props>) => {
     return (
          <Sheet>
               <SheetTrigger asChild>{children}</SheetTrigger>
               <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
                    <SheetHeader>
                         <SheetTitle>
                              В корзине <span className="font-bold">3 товара</span>
                         </SheetTitle>
                    </SheetHeader>

                    <div className="-mx-6 mt-5 overflow-auto flex-1">
                         <CartDrawerItem
                              id={1}
                              imageUrl={"https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp"}
                              name="Чоризо фреш"
                              details={getCartItemDetails(2, 30, [{name: 'Цыпленок'}, {name: 'Сыр'}])}
                              price={490}
                              quantity={1}
                         />
                    </div>

                    <SheetFooter className="-mx-6 bg-white p-8">
                         <div className="w-full">
                              <TotalAmount />

                              <Link href="/cart">
                                   <Button
                                        type="submit"
                                        className="w-full h-12 text-base">
                                        Оформить заказ
                                        <ArrowRight className="w-5 ml-2" />
                                   </Button>
                              </Link>
                         </div>
                    </SheetFooter>
               </SheetContent>
          </Sheet>
     )
}

const TotalAmount = () => {
     return (
          <div className="flex mb-4">
               <span className="flex flex-1 text-lg text-neutral-500">
                    Итого
                    <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
               </span>

               <span className="font-bold text-lg">500 ₽</span>
          </div>
     )
}