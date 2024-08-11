"use client";

import useFooter from "./footer.hook";
import Link from "next/link";
import FormButton from "./components/formButton";
import FooterTitle from "./components/footerTitle";
import FormInput from "./components/formInput";

export default function Footer() {
  const {} = useFooter();

  return (
    <footer className={`bg-k_beige text-k_brown flex flex-col gap-5 p-10 pb-2`}>
      <FooterTitle className="w-9/12">
        <h1>Receba nossos conteúdos por email</h1>
      </FooterTitle>

      <div className="mb-[3.188rem] flex flex-col gap-2">
        <FormInput label="Email" isRequired type="email" id="newsLetter" />

        <FormButton
          label="Assinar"
          onClick={() => console.log("enviar email")}
        />
      </div>

      <FooterTitle className="mb-[3.188rem] flex flex-col gap-7">
        <Link href="www.google.com">Instagram</Link>
        <Link href="www.google.com">Facebook</Link>
        <Link href="www.google.com">Youtube</Link>
        <Link href="www.google.com">TikTok</Link>
      </FooterTitle>

      <form className="mb-10 flex flex-col gap-2">
        <FooterTitle>
          <h1>Entre em contato</h1>
        </FooterTitle>

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
