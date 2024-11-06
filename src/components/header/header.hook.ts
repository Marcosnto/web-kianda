"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type OptionsTypes = {
  label: string;
  path: string;
  isPage: boolean;
};

export default function useHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  function moveToEspecificElementOnPage(id: string, time: number = 400) {
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }, time);
  }

  function moveToSection(id: string) {
    toggleMenu();

    if (pathName !== "/") {
      router.push("/");

      moveToEspecificElementOnPage(id);

      return;
    }

    moveToEspecificElementOnPage(id);
  }

  const menuOptions: OptionsTypes[] = [
    {
      label: "Como a Kianda Atua",
      path: "aboutKianda",
      isPage: false,
    },
    {
      label: "Blog e Artigos",
      path: "/posts",
      isPage: true,
    },
    {
      label: "Redes Sociais",
      path: "socialMedias",
      isPage: false,
    },
    {
      label: "Sobre",
      path: "about",
      isPage: false,
    },
    {
      label: "Contato",
      path: "contact",
      isPage: false,
    },
  ];

  return {
    menuOptions,
    isOpen,
    toggleMenu,
    moveToSection,
  };
}
