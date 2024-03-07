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
          <p>Menu</p>
        </div>
        <div className="el">
          <p>Close</p>
        </div>
      </motion.div>
    </div>
  );
}
function Btn({ className, children }: any) {
  return <button className={className}>Click</button>;
}
