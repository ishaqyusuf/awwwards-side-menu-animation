import { motion } from "framer-motion";

export default function index({ isActive, setIsActive }: any) {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={`header ${isActive ? "active" : ""}`}
    >
      <motion.div
        className=""
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      ></motion.div>
    </div>
  );
}
