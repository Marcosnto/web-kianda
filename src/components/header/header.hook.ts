"use client";

import { useState } from "react";

export default function useHeader() {
  const [open, setOpen] = useState(false);

  const menuOptions = [
    "Blog",
    "Cursos e Aulas",
    "Projetos",
    "Contato",
    "Sobre",
  ];

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return {
    menuOptions,
    open,
    setOpen,
    showDrawer,
    onClose,
  };
}
