"use client";

import useFooter from "./footer.hook";
import Link from "next/link";
import FormButton from "./components/formButton";
import FormInput from "./components/formInput";
import { BoldTitle } from "../general";

export default function Footer() {
  const {} = useFooter();

  return (
    <footer
      className={`grid gap-12 bg-k_beige p-10 text-k_brown md:grid-cols-3 md:gap-10 lg:gap-0`}
    >
      <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
        <BoldTitle className="w-10/12 text-xl/7">
          <h1>Receba nossos conteúdos por email</h1>
        </BoldTitle>

        <div className="flex flex-col gap-2">
          <FormInput label="Email" isRequired type="email" id="newsLetter" />

          <FormButton
            label="Assinar"
            onClick={() => console.log("enviar email")}
          />
        </div>
      </div>

      <div className="row-span-2 md:flex md:items-center md:justify-end lg:items-start lg:justify-center">
        <BoldTitle className="flex flex-col gap-7 text-xl/7">
          <Link href="www.google.com">Instagram</Link>
          <Link href="www.google.com">Facebook</Link>
          <Link href="www.google.com">Youtube</Link>
          <Link href="www.google.com">TikTok</Link>
        </BoldTitle>
      </div>

      <div className="flex flex-col gap-4 md:col-span-2 lg:col-start-3">
        <form className="flex flex-col gap-4">
          <BoldTitle className="text-xl/7">
            <h1>Entre em contato</h1>
          </BoldTitle>

          <FormInput label="Nome" isRequired type="text" id="contactName" />
          <FormInput label="Email" isRequired type="email" id="contactEmail" />
          <FormInput
            label="Mensagem"
            type="text"
            id="contactMessage"
            className="mb-6"
          />

          <FormButton
            label="Enviar"
            onClick={() => console.log("enviar contato")}
          />
        </form>
      </div>

      <div className="mb-7 flex flex-col gap-3 md:col-span-3">
        <p>Política de Privicidade</p>
        <p>Política de Cookies</p>
      </div>

      <div className="flex justify-center text-sm md:col-span-3">
        <p>© 2024 por Marcos Neto</p>
      </div>
    </footer>
  );
}
