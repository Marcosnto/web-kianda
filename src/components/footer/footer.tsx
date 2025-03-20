"use client";

import Link from "next/link";
import { BoldTitle, ItalicTitle } from "../general";
import { NewsletterForm } from "./components/forms/newsletter/newsletterForm";
import FooterSvg from "@/../public/imgs/footer.svg";
import SocialMediaIcon from "./components/socialIcons/socialMediaIcon";
import { socialMediaInfos } from "./utils/socialMediaInfos";

export default function Footer() {
  return (
    <footer id="contact">
      <div
        className={`flex flex-col-reverse pb-0 text-k_yellow_light lg:grid lg:grid-cols-[55%_45%] lg:p-10 lg:text-k_brown`}
      >
        <div className="mb-6 flex flex-col-reverse px-[12px] md:col-span-2 lg:col-span-1 lg:gap-4">
          <FooterSvg />

          <div className="">
            <BoldTitle className="mb-1 mt-[10px] flex justify-start text-[13px] font-normal text-black lg:text-[36px] lg:leading-[48.6px]">
              <h1>Receba nossos conteúdos por email:</h1>
            </BoldTitle>
            <NewsletterForm />
          </div>
        </div>

        <div className="row-span-2 flex h-[254px] flex-col place-content-between bg-k_green_medium pb-[61px] pl-[29px] pr-[18px] pt-[22px]">
          <div className="flex flex-col items-start gap-2 lg:items-center lg:gap-4 lg:pt-[6.25rem]">
            <BoldTitle className="text-[18px] font-medium lg:text-[36px] lg:leading-[48.6px]">
              Canais para contato
            </BoldTitle>

            <div className="mb-[10px] w-[28ch] text-xs">
              Não perca nenhuma novidade! Acompanhe nossas últimas notícias e
              postagens.
            </div>

            <div className="flex max-w-[19ch] flex-wrap gap-2">
              {socialMediaInfos.map((icon) => (
                <SocialMediaIcon key={icon.key} link={icon.link}>
                  {icon.icon}
                </SocialMediaIcon>
              ))}
            </div>

            <BoldTitle className="hidden flex-col items-center gap-7 font-medium leading-[40.5px] lg:flex lg:text-[30px]">
              contato@kiandadiversidade.com
            </BoldTitle>
          </div>
          <div className="flex flex-col items-end text-[10px] lg:text-[21px]">
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
