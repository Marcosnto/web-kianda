"use client";
import useHeader from "./header.hook";
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

export default function Header() {
  const { menuOptions, isOpen, toggleMenu, moveToSection } = useHeader();

  return (
    <section className="lg:relative lg:mb-[22px]">
      <div className="z-50 mb-[6px] flex h-[72px] items-center justify-between bg-k_green_dark pr-[21px] text-k_yellow_light md:mb-[14px] md:h-[132px] md:pr-[41px] lg:hidden">
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
      <div
        className={`mx-4 h-[400px] rounded-xl bg-header-image_mobile bg-cover bg-center md:h-[936px] lg:mx-0 lg:h-[890px] lg:rounded-none lg:bg-header-image lg:bg-cover xl:h-[1080px]`}
      >
        <div
          className="hidden p-4 lg:block"
          style={{ backgroundColor: "rgba(40, 54, 24, 0.5)" }}
        >
          <nav className="flex w-full flex-row items-center justify-center gap-6 font-medium leading-[37.8px] text-white opacity-[100%] lg:text-[20px] xl:text-[28px]">
            {menuOptions.map((option) => (
              <a
                href={option.path}
                key={option.path}
                onClick={(e) => moveToSection(option.path, false, e)}
              >
                {option.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
