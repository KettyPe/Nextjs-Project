import {
  Container,
<<<<<<< HEAD
  ProductGroupVariants,
  ProductImage,
  Title,
} from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
=======
  PizzaImage,
  ProductGroupVariants,
  Title,
} from "@/components/shared";
import { prisma } from "@/shared/prisma/prisma-client";
>>>>>>> modal-product-content
import { notFound } from "next/navigation";

const ProductGroupVariantsList = [
  {
    name: "Маленькая",
    value: "1",
  },
  {
    name: "Средняя",
    value: "2",
  },
  {
    name: "Большая",
    value: "3",
  },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="my-10 flex flex-col">
      <div className="flex flex-1">
        <PizzaImage imageUrl={product.imageUrl} size={40} />

        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title
            text={product.name}
            size="md"
            className="mb-1 font-extrabold"
<<<<<<< HEAD
          />

          <ProductGroupVariants
            selectedValue="2"
            items={ProductGroupVariantsList}
=======
>>>>>>> modal-product-content
          />

          <ProductGroupVariants value="2" items={ProductGroupVariantsList} />
        </div>
      </div>
    </Container>
  );
}
