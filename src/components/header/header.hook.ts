"use client";
import { useEffect, useState } from "react";

type OptionsTypes = {
  label: string;
  path: string;
  isPage: boolean;
};

export default function useHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  function moveToSection(id: string) {
    toggleMenu();
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 400);
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
