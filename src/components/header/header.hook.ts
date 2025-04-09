"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type OptionsTypes = {
  label: string;
  path: string;
  isPage: boolean;
};

export default function useHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  const searchParams = useSearchParams();

  const scrollTo = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTo]);

  const toggleMenu = () => setIsOpen(!isOpen);

  function moveToEspecificElementOnPage(
    id: string,
    time: number = 400,
    event?: React.MouseEvent,
  ) {
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }, time);
  }

  function moveToSection(
    id: string,
    isMobile: boolean,
    event?: React.MouseEvent,
  ) {
    if (isMobile) toggleMenu();

    if (pathName !== "/") {
      router.push(`/?scrollTo=${id}`);

      return;
    }

    moveToEspecificElementOnPage(id, undefined, event);
  }

  const menuOptions: OptionsTypes[] = [
    {
      label: "Como atuamos",
      path: "#howKiandaAct",
      isPage: false,
    },
    {
      label: "Cursos e aulas",
      path: "#courses",
      isPage: false,
    },
    {
      label: "Sobre",
      path: "#about",
      isPage: false,
    },
    {
      label: "Artigos e Publicações",
      path: "/posts",
      isPage: true,
    },
    {
      label: "Contato",
      path: "#contact",
      isPage: false,
    },
  ];

  return {
    menuOptions,
    isOpen,
    toggleMenu,
    moveToSection,
    moveToEspecificElementOnPage,
  };
}
