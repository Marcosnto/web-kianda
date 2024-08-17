"use client";
import { ItalicTitle } from "@/components/general";
import { useSecondSection } from "./secondSection.hook";
import { Card } from "@/components/card";

export function SecondSection() {
  const { whatKiandaDoCards } = useSecondSection();

  return (
    <section className="mb-14 flex flex-col items-center">
      <span className="text-center">
        <ItalicTitle className="p-8 text-xl">Como a Kianda atua</ItalicTitle>
      </span>
      <div className="ml-2 mr-2 w-80 gap-7">
        {whatKiandaDoCards.map((card) => (
          <Card
            key={card.id}
            imageClassname="w-80 h-auto"
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
