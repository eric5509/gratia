"use client";
import { motion } from "framer-motion";
import Form from "@/components/Form";
import Main from "@/components/Main";
import Nav from "@/components/Nav";
import Photo from "@/components/Photo";
import Ventures from "@/components/Ventures";

export default function Root() {
  const variant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };
  return (
    <motion.div variants={variant} initial="initial" animate="animate">
      <Nav />
      <Main />
      <Photo />
      <Ventures />
      <Form /> 
      {/* 
      */}
    </motion.div>
  );
}
