import home_card_1 from "@/../public/imgs/home_card_1.png";
import home_card_2 from "@/../public/imgs/home_card_2.png";
import home_card_3 from "@/../public/imgs/home_card_3.png";
import { CardType } from "@/components/card/card";

export function useSecondSection() {
  const whatKiandaDoCards: CardType[] = [
    {
      id: "1",
      label: "Acompanhamento psicológico",
      summary:
        "Crie um subtítulo que resuma de forma curta e atraente o seu post do blog para que seus visitantes queiram ler…",
      imageURL: home_card_1,
      imageAlt: "Alt descricao 1",
    },
    {
      id: "2",
      label: "Consultoria empresarial",
      summary:
        "Crie um subtítulo que resuma de forma curta e atraente o seu post do blog para que seus visitantes queiram ler…",
      imageURL: home_card_2,
      imageAlt: "Alt descricao 2",
    },
    {
      id: "3",
      label: "Eventos e Workshops",
      summary:
        "Crie um subtítulo que resuma de forma curta e atraente o seu post do blog para que seus visitantes queiram ler…",
      imageURL: home_card_3,
      imageAlt: "Alt descricao 3",
    },
  ];

  return {
    whatKiandaDoCards,
  };
}
