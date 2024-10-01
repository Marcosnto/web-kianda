"use client";
import useHeader from "./header.hook";
import kianda_name from "@/../public/imgs/kianda_name.svg";
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
  const { menuOptions, isOpen, setIsOpen } = useHeader();

  return (
    <div className="flex h-20 w-full items-center bg-k_brown p-4 align-middle font-rasputin text-white">
      <div className="z-50 flex items-center">
        <Drawer direction="left" shouldScaleBackground open={isOpen}>
          <DrawerTrigger asChild onClick={() => setIsOpen(true)}>
            <AiOutlineMenu className="text-4xl" />
          </DrawerTrigger>
          <DrawerContent
            className="p-2"
            autoFocus
            onEscapeKeyDown={() => console.log("Pressed ESC")}
            onPointerDownOutside={() => setIsOpen(false)}
            onInteractOutside={() => setIsOpen(false)}
          >
            <div className="mr-auto pr-1 text-gray-400">
              <DrawerClose onClick={() => setIsOpen(false)}>
                <AiOutlineClose />
              </DrawerClose>
            </div>
            <DrawerHeader>
              <DrawerTitle className="text-k_brown">Kianda Menu</DrawerTitle>

              <DrawerDescription>Escolha uma sessão</DrawerDescription>
            </DrawerHeader>

            <div className="flex flex-col gap-10 p-5">
              {menuOptions.map((option) => (
                <DrawerDescription
                  className="hover:bg-k_brown_light w-auto text-base text-k_brown"
                  key={option.path}
                >
                  <Link href={option.path}>{option.label}</Link>
                </DrawerDescription>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="flex w-full items-center justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:transform">
        <Link href="/">
          <Image
            src={kianda_name}
            alt="imagem svg escrita Kianda"
            className="h-6 md:h-8 lg:h-9 2xl:h-10"
          />
        </Link>
      </div>

      <div className="ml-auto hidden w-[200px] text-white lg:block xl:w-[230px] 2xl:w-[267px]">
        <SearchInput />
      </div>
    </div>
  );
}
