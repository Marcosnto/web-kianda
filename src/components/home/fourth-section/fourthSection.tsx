"use client";
import { ItalicTitle } from "@/components/general";
import { useForthSection } from "./fourthSection.hook";
import { Card } from "@/components/card";

export function ForthSection() {
  const { blogCards } = useForthSection();

  return (
    <section>
      <span className="text-center">
        <ItalicTitle className="p-8 text-xl text-k_brown">
          Blog e Artigos
        </ItalicTitle>
      </span>
      <div className="flex w-full flex-col items-center bg-k_beige text-k_brown">
        {blogCards.map((card) => (
          <Card
            bodyClassName="pl-4 pr-8"
            key={card.id}
            label={card.label}
            summary={card.summary}
            createdData={card.createdData}
            imageAlt={card.imageAlt}
            imageURL={card.imageURL}
          />
        ))}
      </div>
    </section>
  );
}
