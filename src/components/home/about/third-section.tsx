import About from "@/../public/imgs/about.svg";

import { ItalicTitle } from "@/components/general";
import AboutImage from "@/../public/imgs/about-image.svg";

export function ThirdSection() {
  return (
    <section id="about" className="bg-k_green_light px-[16px] pt-[0.5rem]">
      <ItalicTitle
        className="mb-[24px] justify-self-center text-k_yellow_light"
        iconType="halfMoon"
        showDivider={false}
      >
        Sobre
      </ItalicTitle>
      <div className="grid items-center bg-k_green_light pb-14 md:grid-cols-[38%_62%] lg:ml-[50px] lg:mr-[50px] lg:rounded-2xl lg:p-[5.8rem]">
        <span className="hidden w-[620px] lg:inline">
          <About />
        </span>
        <section className="text-justify text-[16px] font-normal text-k_yellow_light lg:text-[36px]">
          <p>
            A <b>KIANDA</b> é uma empresa comprometida em tornar os ambientes
            empresariais e educacionais mais{" "}
            <b>diversos, inclusivos e saudáveis.</b> Em um contexto de
            retrocessos nas políticas sociais, diversas instituições têm buscado
            implementar programas de equidade e inclusão para pessoas negras,
            indígenas, pessoas com deficiência e outros grupos minoritários. No
            entanto,{" "}
            <i>
              garantir o acesso nem sempre é suficiente para assegurar a
              permanência.
            </i>
          </p>
          <AboutImage style={{ height: "19rem", width: "fit-content" }} />
          <br />
          <p>
            Por isso, a KIANDA foi criada para oferecer serviços que garantam a
            permanência e o desenvolvimento desses grupos, promovendo cuidado,
            saúde mental e bem-estar. Nossos serviços incluem consultorias e
            treinamentos, eventos e workshops, atendimentos psicoterapêuticos e
            grupos terapêuticos, com foco em instituições públicas e privadas,
            além de profissionais de diferentes áreas do mercado de trabalho.
          </p>
        </section>
      </div>
    </section>
  );
}
