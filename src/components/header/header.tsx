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
    <div className="">
      {/* <div className="z-50 flex items-center">
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
      </div> */}
      {/* <menu className="flex w-full flex-row items-center justify-center gap-6">
        {menuOptions.map((option) => (
          <li key={option.label}>{option.label}</li>
        ))}
      </menu> */}
    </div>
  );
}
