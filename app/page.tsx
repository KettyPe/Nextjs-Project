import { Container, Title, TopBar, Filters, ProductCard } from "@/components/shared"
import { ProductGroupList } from "@/components/shared/products/product-group-list";

const products = [
  {
    id: 1,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d612a1c13cbbfcc286c332d7762.avif',
    name: "Четыре сыра",
    price: 550,
    items: [{ price: 550 }]
  },
  {
    id: 2,
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif',
    name: "Охотничья",
    price: 669,
    items: [{ price: 669 }]
  },
  {
    id: 3,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif',
    name: "Креветка и песто",
    price: 749,
    items: [{ price: 749 }]
  },
  {
    id: 4,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.avif',
    name: "Пепперони фрэш",
    price: 289,
    items: [{ price: 289 }]
  },
]

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pt-14">
        <div className="flex gap-[60px] pb-40">

          {/* Filters */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList title="Пиццы" items={products} categoryId={1} />
              <ProductGroupList title="Комбо" items={products} categoryId={2} />
              <ProductGroupList title="Закуски" items={products} categoryId={3} />
              <ProductGroupList title="Коктейли" items={products} categoryId={4} />
              <ProductGroupList title="Кофе" items={products} categoryId={5} />
              <ProductGroupList title="Напитки" items={products} categoryId={6} />
              <ProductGroupList title="Десерты" items={products} categoryId={7} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
