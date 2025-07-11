import { ChooseModalProduct } from "@/components/shared";
import { prisma } from "@/shared/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseModalProduct product={product} />;
}
