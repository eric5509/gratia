import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import Button from "./Button";
import { PhoneCall } from "lucide-react";

export default function Environment() {
  return (
    <div className="bg-blue-200 text-center md:text-start py-16 md:py-20">
      <div className="grid items-center container3 gap-10 grid-cols-1 md:grid-cols-[1fr_2fr]">
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start gap-5">
          <div className="text-2xl font-semibold">
            <p>We maintain healthy, </p>
            <p>Environment through</p>
            <p>our service</p>
          </div>
          <p>
            We prioritize the use of eco-friendly cleaning products and best
            practices to ensure a healthy and safe environment for you, your
            family as well as your colleagues
          </p>
          <Link href={"/contact"} className="duration-300 active:scale-95">
            <Button text="Contact Us" icon={<PhoneCall size={22}/>} before={true} width="200px" backgroundColor="orange"/>
          </Link>
        </div>
        <div className="order-1 md:order-2 relative rounded-sm overflow-hidden min-h-96">
          <img
            src="https://images.unsplash.com/photo-1723984834599-5357b87f727c?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-full w-full absolute top-0 left-0 object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
