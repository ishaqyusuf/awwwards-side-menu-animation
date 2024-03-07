"use client";
import { motion } from "framer-motion";
import HeaderMenu from "./header-menu";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="h-12 flex p-4">
      <div className="flex-1"></div>
      <HeaderMenu isActive={isActive} setIsActive={setIsActive} />
    </header>
  );
}
