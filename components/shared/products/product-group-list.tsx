'use client'

import { ProductCard } from "@/components/shared/products/product-card"
import { Title } from "@/components/shared/title"
import { useIntersection } from 'react-use'
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
     const intersectionRef = React.useRef(null)
     const intersection = useIntersection(intersectionRef, {
          threshold: 0.4
     })

     React.useEffect(() => {
          if (intersection?.isIntersecting) {
               console.log(title, categoryId)
          }
     }, [categoryId, intersection?.isIntersecting, title])

     return (
          <div className={cn('', className)} id={title} ref={intersectionRef}>
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