import { Container, Title, TopBar, Filters, ProductCard } from "@/components/shared"

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pt-14">
        <div className="flex gap-[60px]">

          {/* Filters */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              Список товаров
              <ProductCard
                id={1}
                imageUrl={'https://media.dodostatic.net/image/r:292x292/11ee7d612a1c13cbbfcc286c332d7762.jpg'}
                name="Четыре сыра"
                price={569}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
