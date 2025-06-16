import home_card_1 from "@/../public/imgs/home_card_1.png";
import home_card_2 from "@/../public/imgs/home_card_2.png";
import home_card_3 from "@/../public/imgs/home_card_3.png";
import home_card_4 from "@/../public/imgs/home_card_4.png";
import { StaticCardType } from "@/components/card/static-card/static-card";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function useSecondSection() {
  const whatKiandaDoCards: StaticCardType[] = [
    {
      id: "1",
      title: "Consultoria para</br>Empresas",
      summary:
        "Serviço desenvolvido para identificar as necessidades do cliente e fornecer recursos para ações de melhoria no clima organizacional, promovendo um ambiente de trabalho mais inclusivo, saudável e diverso.",
      imageURL: home_card_1,
      imageAlt: "Alt descricao 1",
      backgroundColor: "greenDark",
    },
    {
      id: "2",
      title: "Eventos e</br>Workshop",
      summary:
        "Encontros que visam promover um espaço de inclusão, conscientizar sobre equidade social e estimular a troca de experiências para criar ambientes que sejam mais diversos e desenvolvidos.",
      imageURL: home_card_2,
      imageAlt: "Alt descricao 2",
      backgroundColor: "greenLight",
    },
    {
      id: "3",
      title: "Acompanhamento</br>Psicoterapêutico",
      summary:
        "Auxílio individual nos processos mentais e emocionais, realizado por profissionais experientes em diversidade, com o objetivo de oferecer cuidado e acolhimento a diferentes grupos sociais.",
      imageURL: home_card_3,
      imageAlt: "Alt descricao 3",
      backgroundColor: "cinnamon",
    },
    {
      id: "4",
      title: "Grupos</br>Terapêuticos",
      summary:
        "Espaço coletivo para promoção da saúde mental, composto por um pequeno grupo de pessoas e um profissional facilitador, com o objetivo de compartilhar experiências e sentimentos comuns.",
      imageURL: home_card_4,
      imageAlt: "Alt descricao 4",
      backgroundColor: "orange",
    },
  ];

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnFocusIn: true, jump: false, playOnInit: true }),
  );

  return {
    plugin,
    whatKiandaDoCards,
  };
}
