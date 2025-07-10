"use client";
import useHeader from "./header.hook";
import KiandaLogo from "@/../public/imgs/kianda_name.svg";
import MenuHamburguer from "@/../public/imgs/menu_icon.svg";
import { GoDotFill } from "react-icons/go";
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
import { OptionIcon } from "lucide-react";

export default function Header() {
  const { menuOptions, isOpen, toggleMenu, moveToSection } = useHeader();

  const OptionIcon = ({ label }: { label: string }) => {
    return (
      <DrawerDescription className="hover:bg-k_brown_light flex w-auto items-center gap-2 text-base text-k_brown">
        <GoDotFill color="#FFB703" />
        {label}
      </DrawerDescription>
    );
  };

  return (
    <section className="mb-[21px] lg:hidden">
      <div className="z-50 mb-[6px] flex h-[72px] items-center justify-between bg-k_green_dark px-[16px] py-[18px] text-k_yellow_light md:mb-[14px] md:h-[132px] md:px-[32px] md:py-[30px] md:pr-[41px] lg:hidden">
        <span className="flex items-center justify-center md:h-[72px] md:w-[357px]">
          <KiandaLogo
            alt="imagem svg escrita Kianda"
            className="h-[37px] w-[181px] fill-k_bronze md:h-[72px] md:w-[357px]"
            viewBox="0 0 208 42"
          />
        </span>
        <Drawer direction="left" shouldScaleBackground open={isOpen}>
          <DrawerTrigger asChild onClick={toggleMenu}>
            <span>
              <MenuHamburguer
                className="h-[21px] w-[27px] transition-all duration-300 md:h-[35px] md:w-[47px]"
                viewBox="0 0 21 17"
                xmlns="http://www.w3.org/2000/svg"
              />
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

            <div className="flex flex-col items-start gap-10 p-5">
              {menuOptions.map((option) => {
                if (option.isPage) {
                  return (
                    <Link href={option.path} onClick={toggleMenu} key={option.path}>
                      <OptionIcon label={option.label} />
                    </Link>
                  );
                }

                return (
                  <button
                    style={{ cursor: "pointer" }}
                    key={option.path}
                    type="button"
                    onClick={() => moveToSection(option.path, true)}
                  >
                    <DrawerDescription className="hover:bg-k_brown_light w-auto text-base text-k_brown">
                      <OptionIcon label={option.label} />
                    </DrawerDescription>
                  </button>
                );
              })}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
}
