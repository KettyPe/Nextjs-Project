import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductGroupList } from "@/components/shared/products/product-group-list";
import { prisma } from "@/shared/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          items: true,
          ingredients: true
        }
      }
    }
  })

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar categories={categories.filter((category) => category.products.length > 0)}/>
      <Container className="pt-14">
        <div className="flex gap-[60px] pb-40">
          {/* Filters */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map((category) => (
                category.products.length > 0 && (
                  <ProductGroupList
                    key={category.id}
                    title={category.name}
                    items={category.products}
                    categoryId={category.id}
                  />
                )
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
