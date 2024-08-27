"use client"
import { motion } from 'framer-motion'
import Servicess from "@/components/Servicess";
import { framer } from '@/utils/framer';

export default function page() {
  return (
    <motion.div variants={framer} initial="initial" animate="animate">
        <Servicess />
    </motion.div>
  )
}
