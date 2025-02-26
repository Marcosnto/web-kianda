import About from "@/../public/imgs/about.svg";

import { Syne } from "next/font/google";
import { ItalicTitle } from "@/components/general";

export function ThirdSection() {
  return (
    <section id="about" className="">
      <ItalicTitle className="justify-self-center" iconType="halfMoon">
        Sobre
      </ItalicTitle>
      <div className="ml-[50px] mr-[50px] grid items-center rounded-2xl bg-k_green_light p-[5.8rem] md:grid-cols-[38%_62%]">
        <span className="w-[620px]">
          <About />
        </span>
        <section className="text-[36px] font-normal text-white">
          <p>
            A <b>KIANDA</b> é uma empresa comprometida em tornar os ambientes
            empresariais e educacionais mais diversos, inclusivos e saudáveis.
            Em um contexto de retrocessos nas políticas sociais, diversas
            instituições têm buscado implementar programas de equidade e
            inclusão para pessoas negras, indígenas, pessoas com deficiência e
            outros grupos minoritários. No entanto, garantir o acesso nem sempre
            é suficiente para assegurar a permanência.
          </p>
          <br />
          <p>
            Por isso, a <b>KIANDA</b> foi criada para oferecer serviços que
            garantam a permanência e o desenvolvimento desses grupos, promovendo
            cuidado, saúde mental e bem-estar. Nossos serviços incluem
            consultorias e treinamentos, eventos e workshops, atendimentos
            psicoterapêuticos e grupos terapêuticos, com foco em instituições
            públicas e privadas, além de profissionais de diferentes áreas do
            mercado de trabalho.
          </p>
        </section>
      </div>
    </section>
  );
}
