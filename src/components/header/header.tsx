"use client";
import useHeader from "./header.hook";
import KiandaLogo from "@/../public/imgs/kianda_name.svg";
import MenuHamburguer from "@/../public/imgs/menu_icon.svg";
import MenuHamburguer_2 from "@/../public/imgs/menu_icon_2.svg";
import { AiOutlineClose } from "react-icons/ai";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  const { menuOptions, isOpen, toggleMenu, moveToSection } = useHeader();

  return (
    <section className="lg:relative lg:mb-[22px]">
      <div className="z-50 mb-[6px] flex h-[72px] items-center justify-between bg-k_green_dark pr-[21px] text-k_yellow_light md:mb-[14px] md:h-[132px] md:pr-[41px] lg:hidden">
        <span className="flex items-center justify-center md:h-[72px] md:w-[357px]">
          <KiandaLogo
            alt="imagem svg escrita Kianda"
            className="scale-[0.59] fill-k_bronze md:scale-150"
          />
        </span>
        <Drawer direction="left" shouldScaleBackground open={isOpen}>
          <DrawerTrigger asChild onClick={toggleMenu}>
            <span>
              <MenuHamburguer className="md:hidden" />
              <MenuHamburguer_2 className="hidden md:block" />
            </span>
          </DrawerTrigger>
          <DrawerContent
            className="p-2"
            autoFocus
            onEscapeKeyDown={() => console.log("Pressed ESC")}
            onPointerDownOutside={toggleMenu}
            onInteractOutside={toggleMenu}
          >
            <div className="mr-auto pr-1 text-gray-400">
              <DrawerClose onClick={toggleMenu}>
                <AiOutlineClose />
              </DrawerClose>
            </div>
            <DrawerHeader>
              <DrawerTitle className="text-k_brown">Kianda Menu</DrawerTitle>

              <DrawerDescription>Escolha uma sessão</DrawerDescription>
            </DrawerHeader>

            <div className="flex flex-col gap-10 p-5">
              {menuOptions.map((option) => {
                if (option.isPage) {
                  return (
                    <Link
                      href={option.path}
                      onClick={toggleMenu}
                      key={option.path}
                    >
                      <DrawerDescription className="hover:bg-k_brown_light w-auto text-base text-k_brown">
                        {option.label}
                      </DrawerDescription>
                    </Link>
                  );
                }

                return (
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={(e) => moveToSection(option.path, true, e)}
                    key={option.path}
                  >
                    <DrawerDescription className="hover:bg-k_brown_light w-auto text-base text-k_brown">
                      {option.label}
                    </DrawerDescription>
                  </a>
                );
              })}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
}
