import { ProductCard } from "@/components/shared/products/product-card"
import { Title } from "@/components/shared/title"
import { cn } from "@/lib/utils"
import React from "react"

interface Props {
     title: string
     items: any[]
     categoryId: number
     className?: string
     listclassName?: string
}

export const ProductGroupList: React.FC<Props> = ({
     title,
     items,
     categoryId,
     className,
     listclassName
}) => {
     return (
          <div className={cn('', className)}>
               <Title text={title} size="lg" className="font-extrabold mb-5" />

               <div className={cn('grid grid-cols-3 gap-[50px]', listclassName)}>
                    {items.map((item, i) => (
                         <ProductCard
                              key={item.id}
                              id={item.id}
                              name={item.name}
                              imageUrl={item.imageUrl}
                              price={item.items[0].price}
                         />
                    ))}
               </div>
          </div>
     )
}