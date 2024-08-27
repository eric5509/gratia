"use client"
import { framer } from "@/utils/framer";
import Book from "./Book";
import { motion } from 'framer-motion'
export default function Base() {
  return (
    <motion.div variants={framer} initial="initial" className="relative" animate="animate">
      <img
        src="https://images.unsplash.com/photo-1724582586529-62622e50c0b3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute top-0 left-0  h-full w-full z-0"
        alt=""
      />
      <div className="absolute top-0 left-0  h-full w-full z-0 bg-white/55"></div>
      <div className="relative z-20">
        <Book />
      </div>
    </motion.div>
  );
}
