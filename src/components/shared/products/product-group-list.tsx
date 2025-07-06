"use client";

import { ProductCard } from "@/components/shared/products/product-card";
import { Title } from "@/components/shared/title";
import { cn } from "@/lib/utils";
import { useCategoryState } from "@/shared/store/category";
import React from "react";
import { useIntersection } from "react-use";

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listclassName?: string;
}

export const ProductGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  className,
  listclassName,
}) => {
  const setActiveCategoryId = useCategoryState((state) => state.setActiveId);
  const intersectionRef = React.useRef<HTMLDivElement>(null);
  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLDivElement>,
    {
      threshold: 0.4,
    }
  );

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={cn("", className)} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listclassName)}>
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
  );
};
