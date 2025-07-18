/* eslint-disable @next/next/no-img-element */
"use client";

import { ItalicTitle } from "@/components/general";
import HomePageSection from "@/components/home-page-section/home-page-section";

export function ThirdSection() {
  return (
    <HomePageSection id="about" className="mb-[22.5px] bg-k_green_light pt-[22.5px] md:bg-transparent">
      <ItalicTitle
        className="justify-self-center pb-4 pl-4 text-k_yellow_light md:pb-0 md:pl-0 md:text-k_green_dark"
        iconType="halfMoon"
        borderColor="border-k_yellow_light md:border-black"
        showDivider={true}
      >
        Sobre
      </ItalicTitle>
      <div className="xl: grid items-center bg-k_green_light pb-[28px] md:flex md:grid-cols-[38%_62%] md:rounded-xl md:px-[13px] md:pb-[45px] md:pt-[37px] lg:rounded-2xl lg:px-[101px] lg:pt-[70px] xl:pt-[93px] 2xl:p-[5.8rem]">
        <section className="lg:grid-about-area-layout text-justify text-[16px] font-light text-k_yellow_light md:text-[22.69px] md:text-white lg:gap-x-10 2xl:text-[36px]">
          <p className="lg:area-text">
            A <b className="font-semibold">KIANDA</b> é uma empresa comprometida em tornar os ambientes empresariais e
            educacionais mais <b className="font-semibold">diversos, inclusivos e saudáveis.</b> Em um contexto de
            retrocessos nas políticas sociais, diversas instituições têm buscado implementar programas de equidade e
            inclusão para pessoas negras, indígenas, pessoas com deficiência e outros grupos minoritários. No entanto,{" "}
            <i>garantir o acesso nem sempre é suficiente para assegurar a permanência.</i>
          </p>
          <span className="area-figure flex w-full justify-center">
            <img alt="img img" className="sm:hidden" src="/imgs/about_mobile.svg" />
            <img alt="img img" className="mt-5 hidden sm:block lg:hidden" src="/imgs/about_middle.svg" />
            <img alt="img img" className="mt-5 hidden lg:block" src="/imgs/about_full.svg" />
          </span>
          <br />
          <p className="lg:area-text2">
            Por isso, a <b className="font-semibold">KIANDA</b> foi criada para oferecer serviços que garantam a
            permanência e o desenvolvimento desses grupos, promovendo cuidado, saúde mental e bem-estar. Nossos serviços
            incluem consultorias e treinamentos, eventos e workshops, atendimentos psicoterapêuticos e grupos
            terapêuticos, com foco em instituições públicas e privadas, além de profissionais de diferentes áreas do
            mercado de trabalho.
          </p>
        </section>
      </div>
    </HomePageSection>
  );
}
