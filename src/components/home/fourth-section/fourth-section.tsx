"use client";
import { ItalicTitle } from "@/components/general";
import { useForthSection } from "./fourth-section.hook";
import { Card } from "@/components/card";

export function ForthSection() {
  const { blogCards } = useForthSection();

  return (
    <section>
      <span className="text-center">
        <ItalicTitle className="p-8 text-xl text-k_brown sm:text-2xl md:text-3xl">
          Blog e Artigos
        </ItalicTitle>
      </span>
      <div className="flex flex-wrap bg-k_beige text-k_brown md:justify-around md:bg-transparent lg:justify-around xl:justify-center xl:gap-12">
        {blogCards.map((card, index) => (
          <Card
            className={`vs:w-full md:w-[unset] md:rounded md:bg-k_beige md:shadow-md lg:w-[20.375rem] xl:w-[24.375rem]`}
            bodyClassName=""
            summaryClassName="text-sm/relaxed"
            key={card.id}
            label={card.label}
            summary={card.summary}
            createdData={card.createdData}
            imageAlt={card.imageAlt}
            imageURL={card.imageURL}
            showFooterLine={true}
          />
        ))}
      </div>
    </section>
  );
}
