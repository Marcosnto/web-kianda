"use client";

import Link from "next/link";
import FormButton from "./components/formButton";
import { BoldTitle } from "../general";
import { FormInput } from "./components";
import { ContactForm } from "./components/forms/contactForm/contactForm";
import { Button } from "../ui/button";
import { NewsletterForm } from "./components/forms/newsletter/newsletterForm";

export default function Footer() {
  return (
    <footer
      id="contact"
      className={`grid gap-12 bg-k_beige p-10 text-k_brown md:grid-cols-3 md:gap-10 lg:gap-0`}
    >
      <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
        <BoldTitle className="w-10/12 text-xl/7">
          <h1>Receba nossos conteúdos por email</h1>
        </BoldTitle>

        <div className="flex flex-col gap-2">
          <NewsletterForm />
        </div>
      </div>

      <div className="row-span-2 md:flex md:items-center md:justify-end lg:items-start lg:justify-center">
        <BoldTitle className="flex flex-col gap-7 text-xl/7">
          <Link href="https://www.instagram.com/kiandadiversidade/">
            Instagram
          </Link>
          <Link href="www.google.com">Facebook</Link>
          <Link href="www.google.com">Youtube</Link>
          <Link href="www.google.com">TikTok</Link>
        </BoldTitle>
      </div>

      <div className="flex flex-col gap-4 md:col-span-2 lg:col-start-3">
        <BoldTitle className="text-xl/7">
          <h1>Entre em contato</h1>
        </BoldTitle>

        <ContactForm />
      </div>

      <div className="mb-7 flex flex-col gap-3 md:col-span-3">
        <Link href="/privacy-police">Política de Privicidade</Link>
        <Link href="/cookies-police">Política de Cookies</Link>
      </div>

      <div className="flex justify-center text-sm md:col-span-3">
        <p>© 2024 por Marcos Neto</p>
      </div>
    </footer>
  );
}
