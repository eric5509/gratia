import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BsArrowRight, BsDashCircle } from "react-icons/bs";

export default function Services() {
  const services = [
    {
      title: "Regular House Cleaning",
      text: "Routine upkeep of your home with tasks like dusting, vacuuming, and mopping to keep it fresh and tidy.",
      img: "/house.png",
    },
    {
      title: "Industrial Cleaning",
      text: "Specialized cleaning for industrial facilities, including machinery, floors, and high-traffic areas, to ensure a safe and clean working environment",
      img: "https://cdn-icons-png.flaticon.com/512/4514/4514899.png",
    },
    {
      title: "Hotel Cleaning",
      text: "Thorough cleaning of hotel rooms and common areas, including bed making, bathroom sanitation, and lobby maintenance, to provide a comfortable guest experience.",
      img: "https://cdn-icons-png.freepik.com/256/13407/13407257.png?semt=ais_hybrid",
    },
    {
      title: "Office Cleaning",
      text: "Regular cleaning of office spaces, including desks, floors, and common areas, to maintain a professional and hygienic work environment.",
      img: "https://cdn-icons-png.flaticon.com/512/6917/6917648.png",
    },
    {
      title: "Fumigation",
      text: "Effective solutions for managing and removing rodent problems, including traps, baits, and exclusion methods to protect your property",
      img: "https://cdn-icons-png.flaticon.com/512/616/616569.png",
    },
  ];

  return (
    <div className="py-28 bg-blue-50">
      <p className="text-2xl md:text-3xl font-semibold text-center">
        <span className="text-blue-600">Cleaning</span> Services we <span className="font-bold border-b-[3px] border-blue-600">Render</span>
      </p>

      <div className="grid container2 grid-cols-1 md:grid-cols-3 gap-10 mt-14">
        {services.map((service) => (
          <div className="flex text-black flex-col text-center p-5 rounded-md shadow-md justify-center items-center gap-3 ">
            <div
              className="h-14 w-14 flex items-center justify-center rounded-full"
            >
              <img src={`${service?.img}`} alt="" />
            </div>
            <p className="text-15 font-semibold">{service.title}</p>
            <p className="text-13">{service.text}</p>
          </div>
        ))}
        <Link
          href={"/services"}
          className="h-full w-full gap-2 group cursor-pointer bg-cyan-800 text-white p-5 shadow-md rounded-md flex flex-col items-center md:items-center justify-center"
        >
          <p className="text-2xl  duration-500 group-hover:translate-x-4 font-bold">
            12+ <span className="font-normal text-15">Services</span>
          </p>
          <p className="text-15 duration-700 group-hover:translate-x-8">
            You can Explore
          </p>
          <BsArrowRight className="text-2xl duration-1000 group-hover:translate-x-12" />
        </Link>
      </div>
    </div>
  );
}
