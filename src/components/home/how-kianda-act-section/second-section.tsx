import { ItalicTitle } from "@/components/general";
import { useSecondSection } from "./second-section.hook";
import StaticCard from "@/components/card/static-card/static-card";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRef } from "react";
import HomePageSection from "@/components/home-page-section/home-page-section";

export function SecondSection() {
  const { whatKiandaDoCards } = useSecondSection();

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnFocusIn: true, jump: false, playOnInit: true }),
  );

  return (
    <HomePageSection id="howKiandaAct" className="mb-5 2xl:mb-[209px]">
      <ItalicTitle className="mb-4 2xl:mb-[28px]" iconType="halfMoon" showDivider>
        Como a Kianda atua
      </ItalicTitle>
      <div className="relative">
        <Carousel plugins={[plugin.current]} className="md:hidden" opts={{ loop: true }}>
          <CarouselContent className="flex">
            {whatKiandaDoCards.map((card) => (
              <CarouselItem className="basis-full sm:basis-1/2" key={card.id}>
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
          <CarouselPrevious className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow" />
          <CarouselNext className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow" />
        </Carousel>
      </div>

      <div className="hidden w-full flex-wrap gap-6 md:flex md:justify-center md:justify-items-center 2xl:gap-9">
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
    </HomePageSection>
  );
}
