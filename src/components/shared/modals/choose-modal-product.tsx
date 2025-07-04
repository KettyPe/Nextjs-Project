'use client'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Product } from "@prisma/client"
import { Title } from '../title';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '@/components/shared/modals-content';

interface Props {
     product: Product
     className?: string
}

export const ChooseModalProduct = ({ product, className}: Props) => {
     const router = useRouter()
     return (
          <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
               <DialogContent className={cn(
                    'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', 
                    className
               )}>
                    <DialogTitle className='hidden'>{product.name}</DialogTitle>

                    <ChooseProductForm imageUrl={product.imageUrl} name={product.name}/>
               </DialogContent>
          </Dialog>
     )
}