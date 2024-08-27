import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => {
  const links = [
    ["home", ""],
    ["services", "services"],
    ["book", "book"],
    ["contact us", "contact"],
  ];
  return (
    <>
      <div className="bg-gray-950 text-white">
        <div className="w-full container  pt-20 pb-5 gap-3 md:gap-6 flex flex-col">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="flex flex-col sm:flex-row items-center justify-between  gap-3">
              <img
                src="/logo.png"
                alt="Footer_logo"
                className="w-20  object-cover rounded-full "
              />
              <p className="font-bold text-xl font-sans">GRATIA OF-GAD</p>
            </div>

            <div className="flex justify-center gap-4 items-center md:gap-6 flex-wrap  p-1 ">
              {links.map((el, index) => (
                <Link
                  href={`/${el[1]}`}
                  key={index}
                  className="font-semibold capitalize hover:scale-105 duration-200  p-1 hover:text-blue-600 text-sm "
                >
                  {el[0]}
                </Link>
              ))}
            </div>

            <div className=" flex justify-between gap-5 md:gap-7">
              <FaTwitter className="stroke-2 text-xl hover:cursor-pointer hover:scale-105 duration-200" />
              <FaFacebook className="stroke-2 text-xl hover:cursor-pointer hover:scale-105 duration-200" />
              <FaInstagram className="stroke-2 text-xl hover:cursor-pointer hover:scale-105 duration-200" />
              <FaWhatsapp className="stroke-2 text-xl hover:cursor-pointer hover:scale-105 duration-200" />
            </div>
          </div>
          <div className="w-fit  mx-auto my-5">
            <p className="mx-auto text-13 font-medium">
              © 2024 GRATIA OF-GAD{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
