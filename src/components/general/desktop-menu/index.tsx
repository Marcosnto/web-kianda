import useHeader from "@/components/header/header.hook";
import React from "react";

export default function DesktopMenu({ path, label }: { key: string; path: string; label: string }) {
  const { moveToSection } = useHeader();

  return (
    <button key={`desktopMenu-'${path}`} onClick={() => moveToSection(path, false)}>
      {label}
    </button>
  );
}
