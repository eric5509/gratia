"use client";
import { motion } from "framer-motion";
import Contact from "./Contact";
import { framer } from "@/utils/framer";

export default function Base() {
  return (
    <motion.div initial="initial" animate="animate" variants={framer}>
      <Contact />
    </motion.div>
  );
}
