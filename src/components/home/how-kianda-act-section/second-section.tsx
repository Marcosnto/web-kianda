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
import HomePageSection from "@/components/home-page-section/home-page-section";

export function SecondSection() {
  const { whatKiandaDoCards } = useSecondSection();

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <HomePageSection id="aboutKianda" className="mb-14">
      <ItalicTitle className="" iconType="halfMoon" showDivider>
        Como a Kianda atua
      </ItalicTitle>
      <div>
        <Carousel
          plugins={[plugin.current]}
          className="mb-[30px] w-full md:hidden"
        >
          <CarouselContent>
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
        </Carousel>
      </div>

      <div className="lg:grid-auto-rows-auto hidden grid-cols-2 gap-4 md:mx-auto md:grid lg:grid-cols-4">
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
