import { Title } from "./title"
import { Plus } from "lucide-react"
import { Button } from "../ui"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

interface Props {
     id: number
     imageUrl: string
     name: string
     price: number
     className?: string
}

interface PropsImage {
     src: string
     alt: string
     className?: string
}

export const ProductCard: React.FC<Props> = ({ id, name, imageUrl, price, className }) => {
     return (
          <div className={cn('', className)}>
               <Link href={`/product/${id}`}>
                    <Image src={imageUrl} alt={name} />
                    <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
                    <p className="text-sm text-gray-400 mb-4">
                         Описание товара
                    </p>
                    <div className="flex items-center justify-between">
                         <span className="text-[20px]">
                              от <b>{price} ₽</b>
                         </span>

                         <Button variant="secondary" className="text-base font-bold">
                              <Plus size={20} className="mr-1" />
                              Добавить
                         </Button>
                    </div>
               </Link>
          </div>
     )
}

const Image: React.FC<PropsImage> = ({ src, alt, className }) => {
     return (
          <div className={cn("flex justify-center p-6 bg-secondary rounded-lg h-[260px]", className)}>
               <img className="w-[215px] h-[215px]" src={src} alt={alt} />
          </div>
     )
}