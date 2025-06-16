import { ItalicTitle } from "@/components/general";
import { useSecondSection } from "./second-section.hook";
import StaticCard from "@/components/card/static-card/static-card";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import HomePageSection from "@/components/home-page-section/home-page-section";

export function SecondSection() {
  const { whatKiandaDoCards, plugin } = useSecondSection();

  return (
    <HomePageSection id="howKiandaAct" className="mb-5">
      <ItalicTitle className="" iconType="halfMoon" showDivider>
        Como a Kianda atua
      </ItalicTitle>
      <div className="relative">
        <Carousel plugins={[plugin.current]} className="md:hidden" opts={{ loop: true }}>
          <CarouselContent className="flex">
            {whatKiandaDoCards.map((card) => (
              <CarouselItem className="flex basis-full justify-center sm:basis-1/2" key={card.id}>
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

      <div className="fullHD:!gap-x-[25px] mb-[87.5px] hidden w-full flex-wrap gap-x-3 gap-y-[58px] md:flex md:justify-center md:justify-items-center 2xl:gap-9 [@media(min-width:810px)]:gap-x-[34px] [@media(min-width:90rem)]:gap-x-[125px]">
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
