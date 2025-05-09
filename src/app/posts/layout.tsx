"use client";
import useHeader from "@/components/header/header.hook";
import React from "react";

export default function PostLayout({ children }: { children: React.ReactNode }) {
  const { menuOptions, moveToSection } = useHeader();
  return (
    <>
      <div className="hidden p-4 lg:block" style={{ backgroundColor: "rgba(40, 54, 24, 0.5)" }}>
        <nav className="flex w-full flex-row items-center justify-center gap-6 font-medium text-white opacity-[100%] lg:text-[20px] xl:text-[28px]">
          {menuOptions.map((option) => (
            <a href={option.path} key={option.path} onClick={(e) => moveToSection(option.path, false, e)}>
              {option.label}
            </a>
          ))}
        </nav>
      </div>
      {children}
    </>
  );
}
