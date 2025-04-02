import { ItalicTitle } from "@/components/general";
import { useSecondSection } from "./second-section.hook";
import StaticCard from "@/components/card/static-card/static-card";
import Autoplay from "embla-carousel-autoplay";

// import { Card, CardContent } from "@/components/ui";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";

export function SecondSection() {
  const { whatKiandaDoCards } = useSecondSection();

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section id="aboutKianda" className="mx-[16px]">
      <ItalicTitle className="mb-[12px]" iconType="halfMoon" showDivider>
        Como a Kianda atua
      </ItalicTitle>

      <Carousel
        plugins={[plugin.current]}
        className="mx-[11px] mb-[30px] md:hidden"
      >
        <CarouselContent>
          {whatKiandaDoCards.map((card) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={card.id}>
              <StaticCard
                key={card.id}
                imageAlt={card.imageAlt}
                imageURL={card.imageURL}
                imageHeigth={413}
                imageWidth={413}
                title={card.title}
                summary={card.summary}
                backgroundColor={card.backgroundColor}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="hidden flex-wrap justify-between md:flex">
        {whatKiandaDoCards.map((card) => (
          <StaticCard
            key={card.id}
            imageAlt={card.imageAlt}
            imageURL={card.imageURL}
            imageHeigth={413}
            imageWidth={413}
            title={card.title}
            summary={card.summary}
            backgroundColor={card.backgroundColor}
          />
        ))}
      </div>
    </section>
  );
}
