import { ItalicTitle } from "@/components/general";
import { useSecondSection } from "./second-section.hook";
import StaticCard from "@/components/card/static-card/static-card";

export function SecondSection() {
  const { whatKiandaDoCards } = useSecondSection();
  const responsiveBodyCSS = "";

  return (
    <section id="aboutKianda" className="mb-14 flex flex-col items-center">
      <span className="text-center">
        <ItalicTitle className="p-8 text-xl sm:text-2xl md:text-3xl">
          Como a Kianda atua
        </ItalicTitle>
      </span>
      <div className={`flex flex-wrap gap-12 ${responsiveBodyCSS}`}>
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
