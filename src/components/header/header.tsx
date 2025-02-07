"use client";
import useHeader from "./header.hook";
import KiandaLogo from "@/../public/imgs/kianda_name.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { SearchInput } from ".";
import Link from "next/link";

export default function Header() {
  const { menuOptions, isOpen, toggleMenu, moveToSection } = useHeader();

  return (
    <div className="flex h-20 w-full items-center bg-k_green_dark p-4 align-middle font-rasputin text-k_bronze">
      <div className="z-50 flex items-center">
        <Drawer direction="left" shouldScaleBackground open={isOpen}>
          <DrawerTrigger asChild onClick={toggleMenu}>
            <AiOutlineMenu className="text-4xl" />
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
                    onClick={() => moveToSection(option.path)}
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
      <div className="flex w-full items-center justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:transform">
        <Link href="/">
          <KiandaLogo
            alt="imagem svg escrita Kianda"
            className="fill-k_bronze"
          />
        </Link>
      </div>

      <div className="ml-auto hidden w-[200px] text-white lg:block xl:w-[230px] 2xl:w-[267px]">
        {/* <SearchInput /> */}
      </div>
    </div>
  );
}
