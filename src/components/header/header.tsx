"use client";

import useHeader from "./header.hook";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Header() {
  const { menuOptions } = useHeader();

  return (
    <div className="flex h-20 w-full items-center justify-center bg-k_brown p-4 align-middle font-rasputin text-white">
      <h1 className="grow text-center text-4xl">kianda</h1>
      <div className="grow-0">
        <Drawer direction="right" shouldScaleBackground>
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
    </div>
  );
}
