import { Categories, Container, Title, SortPopup, TopBar, Filtres } from "@/components/shared";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Container className="mt-10">
      <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      
    </Container>
    <TopBar />
    <Container className="mt-10 pb-14">
      <div className="flex gap-[60px]">
        {/*Фильтр */}
        <div className="w-[250px]">
          <Filtres />
        </div>
        {/*Список товаров */}
        <div className="flex-1">
          <div className="flex flex-col gap-16">Список товаров</div>
        </div>
      </div>
    </Container>
    </>
  );
}
