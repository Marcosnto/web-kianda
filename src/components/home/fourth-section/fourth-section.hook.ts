import blog_1 from "@/../public/imgs/blog_1.png";
import blog_2 from "@/../public/imgs/blog_2.png";
import blog_3 from "@/../public/imgs/blog_3.png";
import { CardType } from "@/components/card/card";

export function useForthSection() {
  const blogCards: CardType[] = [
    {
      id: "1",
      label: "Donec orci lectus aliquam ut asdadsdsdsdad",
      author: "Marcos Neto",
      summary:
        "Donec orci lectus aliquam utDonec orci lectus aliquam utDonec orci lectus aliquam ut",
      imageURL: blog_1,
      imageAlt: "Alt descricao 1",
      createdData: new Date("10/31/2022"),
    },
    {
      id: "2",
      label: "Nunc interdum lacus sit amet falling love",
      author: "Marcos Neto",
      summary:
        "Etiam feugiat lorem non metus. Phasellus dolor. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Proin sapien ipsum, porta a, auctor .",
      imageURL: blog_2,
      imageAlt: "Alt descricao 2",
      createdData: new Date("10/31/2022"),
    },
    {
      id: "3",
      label: "Título do post de blog",
      author: "Marcos Neto",
      summary:
        "Crie um subtítulo que resuma de forma curta e atraente o seu post do blog para que seus visitantes queiram ler…",
      imageURL: blog_3,
      imageAlt: "Alt descricao 3",
      createdData: new Date("10/31/2022"),
    },
  ];

  return {
    blogCards,
  };
}
