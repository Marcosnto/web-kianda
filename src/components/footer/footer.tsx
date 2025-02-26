"use client";

import Link from "next/link";
import { BoldTitle, ItalicTitle } from "../general";
import { NewsletterForm } from "./components/forms/newsletter/newsletterForm";
import { AiOutlineInstagram } from "react-icons/ai";
import FooterSvg from "@/../public/imgs/footer.svg";

export default function Footer() {
  return (
    <footer id="contact">
      <div className={`grid grid-cols-[55%_45%] p-10 pb-0 text-k_brown`}>
        <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
          <svg width="995" height="794">
            <FooterSvg />
          </svg>

          <div className="">
            <BoldTitle className="text-[36px] font-normal leading-[48.6px]">
              <h1>Receba nossos conteúdos por email:</h1>
            </BoldTitle>
            <NewsletterForm />
          </div>
        </div>

        <div className="row-span-2 flex flex-col place-content-between">
          <div className="flex flex-col items-center gap-4 pt-[6.25rem]">
            <BoldTitle className="flex flex-col items-center gap-7 text-[36px] font-medium leading-[48.6px]">
              Canais para contato
            </BoldTitle>

            <div className="">
              <Link href="https://www.instagram.com/kiandadiversidade/">
                <span className="flex h-[75px] w-[75px] gap-2 rounded-xl bg-black">
                  <AiOutlineInstagram color="white" className="h-auto w-auto" />
                </span>
              </Link>
            </div>

            <BoldTitle className="flex flex-col items-center gap-7 text-[30px] font-medium leading-[40.5px]">
              contato@kiandadiversidade.com
            </BoldTitle>
          </div>
          <div className="flex flex-col items-end text-[21px]">
            <span className="">Salvador, BA</span>
            <hr className="h-[2px] w-7 bg-black" />
            <span>contato@kiandadiversidade.com</span>
          </div>
        </div>
      </div>
      <ItalicTitle className="justify-self-center" iconType="completeMoon">
        2025
      </ItalicTitle>

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
