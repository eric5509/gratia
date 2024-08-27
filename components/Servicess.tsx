import Link from "next/link";
import Button from "./Button";
import { Pen } from "lucide-react";

export default function Servicess() {
  const cleaningServicesWithDescription = [
    {
      title: "Regular Cleaning",
      text: "A standard cleaning service for maintaining cleanliness on a regular basis, covering dusting, sweeping, and wiping.",
    },
    {
      title: "Deep Cleaning",
      text: "A more thorough cleaning that reaches the deep grime and dirt in your home, including areas often missed in regular cleaning.",
    },
    {
      title: "Move-In/Move-Out Cleaning",
      text: "Specialized cleaning to prepare a new home for move-in or to clean up after moving out of a space.",
    },
    {
      title: "Post-Construction Cleaning",
      text: "A detailed cleaning service to remove dust, debris, and residues left after construction or renovation work.",
    },
    {
      title: "Carpet Cleaning",
      text: "A dedicated service for cleaning and refreshing carpets, removing stains, dirt, and allergens.",
    },
    {
      title: "Window Cleaning",
      text: "A professional cleaning service for both the interior and exterior of windows, ensuring a spotless finish.",
    },
    {
      title: "Upholstery Cleaning",
      text: "Cleaning services to remove stains, dirt, and allergens from fabric and leather furniture.",
    },
    {
      title: "Disinfection Services",
      text: "A focused cleaning service that includes disinfection of surfaces to eliminate germs, bacteria, and viruses.",
    },
    {
      title: "Floor Polishing and Waxing",
      text: "A service that revitalizes flooring through polishing and waxing, restoring shine and protecting surfaces.",
    },
    {
      title: "Pressure Washing",
      text: "A high-pressure water cleaning service to remove dirt, grime, mold, and other debris from exterior surfaces.",
    },
    {
      title: "Green Cleaning (Eco-Friendly)",
      text: "Eco-friendly cleaning services that use non-toxic, biodegradable products for a healthier environment.",
    },
    {
      title: "Janitorial Services",
      text: "Regular maintenance cleaning services for commercial buildings, ensuring cleanliness and order.",
    },
    {
      title: "Pest Control",
      text: "A service to eliminate pests such as insects and rodents, ensuring a clean and safe environment.",
    },
    {
      title: "Specialized Equipment Cleaning",
      text: "A cleaning service focused on maintaining and sanitizing specialized equipment in commercial or industrial settings.",
    },
    {
      title: "Emergency Cleaning (for spills, accidents)",
      text: "On-demand cleaning services available for unexpected spills, accidents, or urgent cleaning needs.",
    },
  ];

  return (
    <div className="pb-16 relative">
      <div className=" container3 pt-28">
        <img
          src="https://images.unsplash.com/photo-1721742125396-2388746e993c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute top-0 left-0  h-full w-full z-0"
          alt=""
        />
        <div className="absolute top-0 left-0  h-full w-full z-0 bg-black/20"></div>
        <div className="relative z-30">
          <p className="text-xl md:text-3xl text-white font-bold">Services we OFFER</p>
          <div className="grid mt-5 gap-5 grid-cols-1 md:grid-cols-3">
            {cleaningServicesWithDescription.map((el, key) => (
              <div className="bg-black/10 backdrop-blur-3xl duration-300 text-center p-8 text-gray-50 shadow-black rounded-md shadow-md">
                <p className="text-[17px] mb-2 font-bold">{el.title}</p>
                <p className="text-13">{el.text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href={"/book"} className="mt-5 hover:scale-105 w-fit duration-300 ">
              <Button
                text="Book a Service"
                borderRadius="100vmax"
                backgroundColor="darkblue"
                color="white"
                height="55px"
                fontSize="15px"
                width="300px"
                icon={<Pen size={18} />}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
