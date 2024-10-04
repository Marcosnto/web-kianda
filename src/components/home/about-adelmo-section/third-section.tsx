import home_adelmo from "@/../public/imgs/home_adelmo.png";
import Image from "next/image";

import { Syne } from "next/font/google";

const syneFont = Syne({
  subsets: ["latin"],
});

export function ThirdSection() {
  return (
    <section id="about" className="bg-k_beige pb-16 md:pb-0">
      <div className="grid md:grid-cols-2">
        <div className="md:col-span-1 lg:max-h-[60ch]">
          <Image
            className="md:object-cover"
            alt="adelmo"
            src={home_adelmo}
            quality={75}
            width={389}
            height={517}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="md:p-15 p-10 text-justify text-k_brown md:col-start-1 md:row-start-1 md:align-middle">
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
              fácil, ou clicar duas vezes sobre mim para editar seu conteúdo e
              alterar a fonte. Você também pode me arrastar e soltar em qualquer
              lugar da página. Sou um ótimo espaço para você compartilhar a sua
              história.
            </p>
            <br />
            <p>
              Use este espaço para escrever um texto longo sobre sua empresa e
              sobre os serviços que você oferece. Conte aos visitantes a
              história de como você teve a ideia de criar essa empresa e o que o
              torna diferente de seus concorrentes. Você pode apresentar a sua
              equipe, seus projetos e metas. Faça com que a sua empresa se
              destaque e mostre aos visitantes quem você é.
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}
