"use client";

import About from "@/../public/imgs/about.svg";

import { ItalicTitle } from "@/components/general";
import AboutImage from "@/../public/imgs/about-image.svg";
import AboutImageMedium from "@/../public/imgs/about_image_medium.png";
import { useEffect, useState } from "react";
import Image from "next/image";
import HomePageSection from "@/components/home-page-section/home-page-section";

export function ThirdSection() {
  const [isNotMobileScreen, setIsNotMobileScreen] = useState(false);

  useEffect(() => {
    setIsNotMobileScreen(window.innerWidth > 767);
  }, []);

  return (
    <HomePageSection
      id="about"
      className="mb-14 bg-k_green_light md:bg-transparent"
    >
      <ItalicTitle
        className="justify-self-center text-k_yellow_light md:text-[18px] md:text-k_green_dark"
        iconType="halfMoon"
        showDivider={isNotMobileScreen}
      >
        Sobre
      </ItalicTitle>
      <div className="grid items-center bg-k_green_light pb-14 md:flex md:grid-cols-[38%_62%] md:rounded-xl lg:rounded-2xl lg:px-[50px] 2xl:p-[5.8rem]">
        <section className="lg:grid-about-area-layout text-justify text-[16px] font-light text-k_yellow_light md:px-[13px] md:pt-[37px] md:text-[22.69px] md:text-white lg:gap-x-10 lg:pt-[50px] xl:text-[36px]">
          <p className="lg:area-text">
            A <b className="font-semibold">KIANDA</b> é uma empresa comprometida
            em tornar os ambientes empresariais e educacionais mais{" "}
            <b className="font-semibold">diversos, inclusivos e saudáveis.</b>{" "}
            Em um contexto de retrocessos nas políticas sociais, diversas
            instituições têm buscado implementar programas de equidade e
            inclusão para pessoas negras, indígenas, pessoas com deficiência e
            outros grupos minoritários. No entanto,{" "}
            <i>
              garantir o acesso nem sempre é suficiente para assegurar a
              permanência.
            </i>
          </p>
          <span className="area-figure my-5 flex h-[431px] w-full justify-center">
            <Image src={AboutImageMedium} alt="" className="h-full" />
          </span>
          <br />
          <p className="lg:area-text2">
            Por isso, a KIANDA foi criada para oferecer serviços que garantam a
            permanência e o desenvolvimento desses grupos, promovendo cuidado,
            saúde mental e bem-estar. Nossos serviços incluem consultorias e
            treinamentos, eventos e workshops, atendimentos psicoterapêuticos e
            grupos terapêuticos, com foco em instituições públicas e privadas,
            além de profissionais de diferentes áreas do mercado de trabalho.
          </p>
        </section>
      </div>
    </HomePageSection>
  );
}
