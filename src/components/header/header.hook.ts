"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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

  const toggleMenu = () => setIsOpen(!isOpen);

  function moveToEspecificElementOnPage(id: string, delay: number = 400) {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, delay);
  }

  function moveToSection(pathID: string, isMobile: boolean) {
    if (isMobile) toggleMenu();
    console.log("pathIDName", pathID[0]);
    if (pathID[0] === "/") {
      router.replace(`${pathID}`);
    } else {
      router.replace(`/?scrollTo=${pathID}`);
      moveToEspecificElementOnPage(pathID);
    }
  }

  useEffect(() => {
    const target = searchParams.get("scrollTo");
    if (target && pathName === "/") {
      const el = document.getElementById(target);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathName, searchParams]);

  const menuOptions: OptionsTypes[] = [
    { label: "Como atuamos", path: "howKiandaAct", isPage: false },
    // { label: "Cursos e aulas", path: "courses", isPage: false },
    { label: "Sobre", path: "about", isPage: false },
    { label: "Artigos e Publicações", path: "/posts", isPage: true },
    { label: "Contato", path: "contact", isPage: false },
  ];

  return {
    menuOptions,
    isOpen,
    toggleMenu,
    moveToSection,
    moveToEspecificElementOnPage,
  };
}
