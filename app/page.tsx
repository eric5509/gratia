"use client"
import Approach from "@/components/Approach";
import Choose from "@/components/Choose";
import CompA from "@/components/CompA";
import CompB from "@/components/CompB";
import CompC from "@/components/CompC";
import Environment from "@/components/Environment";
import Floor from "@/components/Floor";
import Hero from "@/components/Hero";
import Quality from "@/components/Quality";
import Services from "@/components/Services";
import { framer } from "@/utils/framer";
import { motion } from 'framer-motion'
import Link from "next/link";

export default function Home() {
  const data = [
    {
      title: "Residential Cleaning",
      text: "Our residential cleaning services are designed to provide a spotless and welcoming home environment. From routine cleanings to deep cleaning sessions, we ensure every corner of your home is meticulously cared for. Whether you need help with everyday upkeep or a thorough top-to-bottom clean, our team is here to make your home shine.",
      src: "https://images.unsplash.com/photo-1580256081112-e49377338b7f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Industrial Cleaning",
      text: "Our industrial cleaning services cater to large-scale facilities that require thorough and specialized cleaning solutions. We are equipped to handle the unique challenges of industrial spaces, ensuring safety, compliance, and cleanliness at all times. From warehouses to manufacturing plants, we deliver reliable and efficient cleaning services to keep your operations running smoothly.",

      src: "https://images.pexels.com/photos/4099263/pexels-photo-4099263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Commercial Cleaning",
      text: "We offer comprehensive commercial cleaning services tailored to the needs of offices, corporate spaces, and business environments. From daily office cleanups to specialized deep cleaning, our team ensures a pristine and professional workspace. We help create a clean and comfortable atmosphere for employees and visitors, enhancing productivity and maintaining a high standard of cleanliness.",
      src: "https://plus.unsplash.com/premium_photo-1679920025550-75324e59680f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Retail Store Cleaning",
      text: "A clean and inviting retail environment is crucial for attracting customers and maintaining a positive shopping experience. Our retail store cleaning services focus on keeping your space spotless and organized, from the sales floor to the back rooms. We understand the importance of first impressions, and our team works hard to help your store shine and leave a lasting impact on your customers.",

      src: "https://images.unsplash.com/photo-1610141160723-d2d346e73766?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <motion.div variants={framer} initial="initial" animate="animate">
      <Hero />
      <div className="h-0 md:h-48"></div>
      <div className="my-10 md:hidden">
        <CompC />
      </div>
      <Choose />

      <div className="mb-5">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-16">
          - Service We Provide -
        </p>
        <div className="flex flex-col gap-10 md:gap-0">
          {data.map((elem, key) => (
            <CompA
              key={key}
              title={elem.title}
              text={elem.text}
              imageFirst={key % 2 === 0}
              src={elem.src}
            />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link
            href={"/services"}
            className="text-base px-8 rounded-sm shadow-md duration-300 active:scale-95 mt-20 py-4 bg-blue-600 text-white font-semibold"
          >
            See All Services we OFFER
          </Link>
        </div>
      </div>
      <Quality />
      <Environment />
      <Services />
      <Approach />
      <CompB />
      <Floor />
    </motion.div>
  );
}
