import {
  Container,
  ProductGroupVariants,
  ProductImage,
  Title,
} from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
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
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="my-10 flex flex-col">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} size={40} />

        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title
            text={product.name}
            size="md"
            className="mb-1 font-extrabold"
          />

          <ProductGroupVariants
            selectedValue="2"
            items={ProductGroupVariantsList}
          />
        </div>
      </div>
    </Container>
  );
}
