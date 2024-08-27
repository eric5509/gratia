"use client";
import { PhoneCall } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  const links = [
    ["home", ""],
    ["services", "services"],
    ["book", "book"],
    ["contact us", "contact"],
  ];
  const pathname = usePathname();
  return (
    <div>
      <div className="h-[70px] backdrop-blur-3xl shadow-md bg-white/20 fixed top-0 left-0 w-full z-[500000]">
        {pathname === "/book" && (
          <div className="h-[70px] bg-black/40 fixed w-full origin-top-left z-0"></div>
        )}
        <div className="container z-40 relative items-center h-full flex justify-between">
          <Link
            href={"/"}
            onClick={() => setOpen(false)}
            className="flex items-center gap-1"
          >
            <img src="/logo.png" className="w-20 object-cover" alt="" />
            <p className="font-bold text-base text-white">GRATIA OF-GAD</p>
          </Link>
          <div className="hidden lg:flex gap-6 items-center">
            {links.map((link, key) => (
              <Link
                href={`/${link[1]}`}
                className={`hover:text-blue-600 capitalize font-semibold text-15 duration-300 cursor-pointer ${
                  `/${link[1]}` === pathname ? "text-blue-600" : "text-white"
                }`}
                key={key}
              >
                {link[0]}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="tel:+2348123248444"
              className="hidden lg:flex px-5 hover:bg-blue-700 duration-300 active:scale-95 py-3 rounded-full bg-blue-600 text-sm text-white font-semibold shadow-gray-500 shadow-md cursor-pointer items-center gap-2"
            >
              <p>Call Us</p>
              <PhoneCall size={15} />
            </Link>
            <Link
              href={"https://wa.link/42syle"}
              className="hidden lg:flex px-5 duration-300 hover:bg-green-700 shadow-gray-500 active:scale-95 py-3 rounded-full bg-green-600 text-sm text-white font-semibold shadow-md cursor-pointer items-center gap-2"
            >
              <p>Chat Us</p>
              <BsWhatsapp className="text-lg" />
            </Link>
            <div className="lg:hidden">
              <Hamburger
                size={22}
                color={isOpen ? "black" : "white"}
                toggled={isOpen}
                toggle={setOpen}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`h-screen flex flex-col md:hidden justify-between ${
          isOpen ? "left-0 opacity-100" : "opacity-0 -left-[100vw]"
        } duration-300 w-full bg-white z-[50000] fixed top-0 `}
      >
        <div
          className={`flex flex-col gap-3 justify-center items-center pt-[90px]`}
        >
          {links.map((link, key) => (
            <div className="" onClick={() => setOpen(false)}>
              <Link
                href={`/${link[1]}`}
                className={`capitalize font-semibold ${
                  `/${link[1]}` === pathname ? "text-blue-600" : "text-black"
                }`}
              >
                {link[0]}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center px-4 mb-5 items-center gap-3">
          <Link
            onClick={() => setOpen(false)}
            href="tel:+2348123248444"
            className="flex flex-1 px-5 justify-center hover:bg-blue-700 duration-300 active:scale-95 py-3 rounded-full bg-blue-600 text-sm text-white font-semibold shadow-gray-400 shadow-md cursor-pointer items-center gap-2"
          >
            <p>Call Us</p>
            <PhoneCall size={15} />
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href={"https://wa.link/42syle"}
            className="flex px-5 duration-300 justify-center flex-1 hover:bg-green-700 shadow-gray-400 active:scale-95 py-3 rounded-full bg-green-600 text-sm text-white font-semibold shadow-md cursor-pointer items-center gap-2"
          >
            <p>Chat Us</p>
            <BsWhatsapp className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
}
