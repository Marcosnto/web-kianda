"use client";

import useHeader from "./header.hook";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const { menuOptions, open, setOpen, showDrawer, onClose } = useHeader();

  return (
    <div className="font-rasputin bg-k_brown flex h-20 w-full items-center justify-center p-4 align-middle text-white">
      <h1 className="grow text-center text-4xl">kianda</h1>
      <div className="grow-0">
        <AiOutlineMenu
          className="text-4xl"
          onClick={() => setOpen((e) => !e)}
        />
        {/* <Drawer
          title="Kianda - Menu"
          placement="right"
          closable={true}
          onClose={onClose}
          open={open}
          key="right"
        >
          <div className="flex flex-col items-center gap-10 pt-4">
            {menuOptions.map((option) => (
              <p className="w-auto hover:bg-k_brown_light" key={option}>
                {option}
              </p>
            ))}
          </div>
        </Drawer> */}
      </div>
    </div>
  );
}
