import useHeader from "@/components/header/header.hook";
import React from "react";

export default function DesktopMenu({ key, path, label }: { key: string; path: string; label: string }) {
  const { moveToSection } = useHeader();

  return (
    <button key={key} onClick={() => moveToSection(path, false)}>
      {label}
    </button>
  );
}
