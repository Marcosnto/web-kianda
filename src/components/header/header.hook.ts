"use client";
import { useState } from "react";

type OptionsTypes = {
  label: string;
  path: string;
};

export default function useHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const menuOptions: OptionsTypes[] = [
    {
      label: "Como a Kianda Atua",
      path: "#aboutKianda",
    },
    {
      label: "Blog e Artigos",
      path: "/posts",
    },
    {
      label: "Redes Sociais",
      path: "#socialMedias",
    },
    {
      label: "Sobre",
      path: "#about",
    },
    {
      label: "Contato",
      path: "#contact",
    },
  ];

  return {
    menuOptions,
    isOpen,
    setIsOpen,
  };
}
