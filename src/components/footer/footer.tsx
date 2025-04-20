"use client";

import Link from "next/link";
import { BoldTitle, ItalicTitle } from "../general";
import { NewsletterForm } from "./components/forms/newsletter/newsletterForm";
import FooterPNG from "@/../public/imgs/footer_img.png";
import FooterPNGHD from "@/../public/imgs/footer_img-fullhd.png";
import SocialMediaIcon from "./components/socialIcons/socialMediaIcon";
import { socialMediaInfos } from "./utils/socialMediaInfos";
import { JSXElementConstructor, ReactElement } from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="md:px-[16px] md:pt-[0.5rem]">
      <ItalicTitle
        className="mb-[24px] hidden md:flex"
        iconType="halfMoon"
        showDivider={true}
      />

      <div
        className={`mb-10 flex flex-col-reverse pb-0 text-k_yellow_light md:grid md:grid-cols-[55%_45%] lg:text-k_brown`}
      >
        <div className="mb-6 flex flex-col-reverse px-3 md:col-span-1 md:mb-0 md:flex-col lg:gap-4 xl:max-w-[813px]">
          <span className="h-[275px] w-full md:flex md:h-[371px] md:justify-center xl:hidden">
            <Image src={FooterPNG} alt="" className="h-full object-contain" />
          </span>
          <span className="hidden h-[649px] w-full xl:flex">
            <Image src={FooterPNGHD} alt="" className="h-full object-cover" />
          </span>

          <div className="">
            <BoldTitle className="mb-1 mt-[10px] flex justify-start text-[13px] font-normal text-black md:text-[16px] lg:text-[28px] xl:text-[36px]">
              <h1>Receba nossos conteúdos por email:</h1>
            </BoldTitle>
            <NewsletterForm />
          </div>
        </div>

        <div className="row-span-2 flex h-[254px] flex-col place-content-between bg-k_green_medium pb-[61px] pl-[29px] pr-[18px] pt-[22px] md:mr-[36px] md:h-auto md:items-end md:justify-between md:bg-transparent md:p-0 md:pl-[1rem] md:text-k_green_medium lg:mr-0 lg:text-black">
          <div className="flex flex-col items-start gap-2 lg:items-start lg:gap-4 lg:pr-10 xl:items-center">
            <BoldTitle className="text-[18px] font-medium md:text-[28px] md:font-semibold xl:text-[36px]">
              Canais para contato
            </BoldTitle>

            <div className="mb-[10px] w-[28ch] text-xs md:w-[34ch] md:text-[14px] xl:hidden">
              Não perca nenhuma novidade! Acompanhe nossas últimas notícias e
              postagens.
            </div>

            <div className="flex max-w-[19ch] flex-wrap gap-2 md:max-w-[27ch] lg:max-w-[36ch]">
              {socialMediaInfos.map((icon) => (
                <SocialMediaIcon
                  key={icon.key}
                  link={icon.link}
                  icon={
                    icon.icon as ReactElement<
                      any,
                      string | JSXElementConstructor<any>
                    >
                  }
                />
              ))}
            </div>

            <BoldTitle className="hidden flex-col items-center gap-7 font-medium lg:flex lg:w-full xl:text-[30px]">
              contato@kiandadiversidade.com
            </BoldTitle>
          </div>
          <div className="flex flex-col items-end text-[10px] md:text-[16px] xl:text-[21px]">
            <span className="">Salvador, BA</span>
            <hr className="h-[2px] w-7 border-none bg-k_cinnamon" />
            <span>contato@kiandadiversidade.com</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-sm md:col-span-3">
        <div className="flex gap-3 md:col-span-3">
          <Link href="/privacy-police">Política de Privicidade</Link>
          <Link href="/cookies-police">Política de Cookies</Link>
        </div>
        <p>
          © Feito por{" "}
          <Link href="https://www.linkedin.com/in/marcosnto/" target="_blank">
            Marcos Neto
          </Link>
        </p>
      </div>
    </footer>
  );
}
