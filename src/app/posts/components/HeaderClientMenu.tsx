"use client";
import DesktopMenu from "@/components/general/desktop-menu";
import useHeader from "@/components/header/header.hook";

export default function HeaderClientMenu() {
  const { menuOptions } = useHeader();
  return (
    <div className="hidden p-4 lg:block" style={{ backgroundColor: "rgba(40, 54, 24, 0.5)" }}>
      <nav className="flex w-full flex-row items-center justify-center gap-6 font-medium text-white opacity-[100%] lg:text-[20px] xl:text-[28px]">
        {menuOptions.map((option) => (
          <DesktopMenu key={option.path} path={option.path} label={option.label} />
        ))}
      </nav>
    </div>
  );
}
