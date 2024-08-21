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

export default function Header() {
  const { menuOptions } = useHeader();

  return (
    <div className="flex h-20 w-full items-center bg-k_brown p-4 align-middle font-rasputin text-white">
      <div className="flex items-center">
        <Drawer direction="left" shouldScaleBackground>
          <DrawerTrigger>
            <AiOutlineMenu className="text-4xl" />
          </DrawerTrigger>
          <DrawerContent className="p-2">
            <div className="flex w-auto justify-end pr-1 text-gray-400">
              <DrawerClose>
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
                  key={option}
                >
                  {option}
                </DrawerDescription>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      <Image
        className="h-6 flex-grow self-center md:h-8 lg:h-9 lg:pl-[17%] 2xl:h-10"
        src={kianda_name}
        alt="imagem svg escrita Kianda"
      />
      <div className="hidden w-[200px] text-white lg:block xl:w-[230px] 2xl:w-[267px]">
        <SearchInput />
      </div>
    </div>
  );
}
