"use client";

import useFooter from "./footer.hook";
import Link from "next/link";
import FormButton from "./components/formButton";
import FormInput from "./components/formInput";
import BoldTitle from "../general/boldTitle";

export default function Footer() {
  const {} = useFooter();

  return (
    <footer className={`flex flex-col gap-5 bg-k_beige p-10 pb-2 text-k_brown`}>
      <BoldTitle className="w-10/12">
        <h1>Receba nossos conteúdos por email</h1>
      </BoldTitle>

      <div className="mb-[3.188rem] flex flex-col gap-2">
        <FormInput label="Email" isRequired type="email" id="newsLetter" />

        <FormButton
          label="Assinar"
          onClick={() => console.log("enviar email")}
        />
      </div>

      <BoldTitle className="mb-[3.188rem] flex flex-col gap-7">
        <Link href="www.google.com">Instagram</Link>
        <Link href="www.google.com">Facebook</Link>
        <Link href="www.google.com">Youtube</Link>
        <Link href="www.google.com">TikTok</Link>
      </BoldTitle>

      <form className="mb-10 flex flex-col gap-2">
        <BoldTitle>
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

      <div className="mb-7 flex flex-col gap-3">
        <p>Política de Privicidade</p>
        <p>Política de Cookies</p>
      </div>

      <div className="flex justify-center text-sm">
        <p>© 2024 por Marcos Neto</p>
      </div>
    </footer>
  );
}
