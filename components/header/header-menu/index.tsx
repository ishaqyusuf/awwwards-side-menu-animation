"use client";

import { motion } from "framer-motion";
import "./style.css";
interface Props {
  isActive?: any;
  setIsActive?: any;
}
export default function HeaderMenu({ isActive, setIsActive }: Props) {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={`header ${isActive ? "active" : ""} anim-menu-btn`}
    >
      <motion.div
        className="slider"
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="el">
          <PerspectiveText label={"Menu"} />
        </div>
        <div className="el">
          <PerspectiveText label={"Close"} close />
        </div>
      </motion.div>
    </div>
  );
}
function PerspectiveText({ label, close }: { label: string; close?: boolean }) {
  return (
    <div className="perspectiveText w-full h-full flex justify-center items-center">
      <p className={`${close ? "" : "absolute"}`}>{label}</p>
    </div>
  );
}
function Btn({ className, children }: any) {
  return <button className={"w-"}>Click</button>;
}
