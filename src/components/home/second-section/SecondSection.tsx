"use client";
import { ItalicTitle } from "@/components/general";
import { useSecondSection } from "./secondSection.hook";
import { Card } from "@/components/card";

export function SecondSection() {
  const { whatKiandaDoCards } = useSecondSection();
  const responsiveBodyCSS =
    "md:justify-evenly xl:ml-11 xl:mr-11 xl:ml-32 xl:mr-32";

  return (
    <section className="mb-14 flex flex-col items-center">
      <span className="text-center">
        <ItalicTitle className="p-8 text-xl sm:text-2xl md:text-3xl">
          Como a Kianda atua
        </ItalicTitle>
      </span>
      <div
        className={`ml-2 mr-2 flex flex-wrap justify-center gap-4 ${responsiveBodyCSS}`}
      >
        {whatKiandaDoCards.map((card) => (
          <Card
            key={card.id}
            className="pl-3 pr-3 md:w-[30ch]"
            imageClassName="md:max-w-none w-full"
            label={card.label}
            summary={card.summary}
            imageAlt={card.imageAlt}
            imageURL={card.imageURL}
          />
        ))}
      </div>
    </section>
  );
}
