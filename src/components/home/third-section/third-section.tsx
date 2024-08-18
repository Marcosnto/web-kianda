import home_adelmo from "@/../public/imgs/home_adelmo.png";
import { BoldTitle, ItalicTitle } from "@/components/general";
import Image from "next/image";

import { Syne } from "next/font/google";

const syneFont = Syne({
  subsets: ["latin"],
});

export function ThirdSection() {
  const responsiveCSS = "";

  return (
    <section className="bg-k_beige pb-16 md:pb-0 xl:max-h-[47.25] xl:min-w-[90rem]">
      <div className="flex flex-col md:flex-row-reverse">
        <div className="flex grow md:w-5/12 lg:grow-0 xl:max-h-[47rem]">
          <Image
            className="md:object-cover 2xl:object-contain"
            alt="adelmo"
            src={home_adelmo}
            quality={100}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="p-10 text-justify text-k_brown md:flex md:w-7/12 md:flex-col md:p-20 md:align-middle">
          <span className="flex flex-col items-center">
            <h4
              className={`${syneFont.className} text-[2.5rem]/[3.85rem] leading-[2.9rem]`}
            >
              <span className="font-bold">Olá, eu sou</span>
              <br />
              <span className="font-georgia italic tracking-wider">
                Adelmo Filho
              </span>
            </h4>
          </span>
          <br />
          <span className="leading-6 xl:pl-16 xl:pr-16">
            <p>
              Sou um parágrafo. Aqui você pode adicionar seu próprio texto. É
              fácil, é só clicar em "Editar texto" ou clicar duas vezes sobre
              mim para editar seu conteúdo e alterar a fonte. Você também pode
              me arrastar e soltar em qualquer lugar da página. Sou um ótimo
              espaço para você compartilhar a sua história.
            </p>
            <br />
            <p>
              Use este espaço para escrever um texto longo sobre sua empresa e
              sobre os serviços que você oferece. Conte aos visitantes a
              história de como você teve a ideia de criar essa empresa e o que o
              torna diferente de seus concorrentes. Você pode apresentar a sua
              equipe, seus projetos e metas. Faça com que a sua empresa se
              destaque e mostre aos visitantes quem você é. Clique em "Editar
              texto" para começar.
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}
