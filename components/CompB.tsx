import { BsGraphDown } from "react-icons/bs";
import Button from "./Button";
import Link from "next/link";

export default function CompB() {
  return (
    <div className="text-white py-20 relative">
      <img
        src="https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="h-full z-10 w-full absolute top-0 left-0 object-cover"
        alt=""
      />
      <div className="h-full z-20 w-full absolute top-0 left-0 object-cover bg-black/90"></div>
      <div className="relative z-30 container1">
        <div className="font-bold flex items-center gap-5 text-2xl sm:text-2xl md:text-3xl mb-5">
          <p>OUR PROMISE TO DELIVER</p>
        </div>
        <p className=" mt-5 leading-loose text-15">
          Our promise is to deliver top-quality cleaning services that leave
          your space spotless and fresh. We pay close attention to detail, using
          eco-friendly products and proven techniques to ensure a thorough clean
          every time. Our trained team works with care and professionalism,
          treating your home or office as if it were their own. We understand
          your unique needs and offer flexible scheduling to fit your lifestyle.
          With reliable service, clear communication, and a commitment to your
          satisfaction, we aim to create a clean and comfortable environment you
          can enjoy. Trust us to deliver results that exceed your expectations."
          This version is more compact while still emphasizing key points.
        </p>
      </div>
      <Link href={'/services'} className="relative hover:scale-105 duration-300 origin-left z-30 flex items-center container1 mt-5">
        <Button
          text="Book a Service"
          width="250px"
          marginTop="30px"
          color="black"
          height="55px"
          backgroundColor="skyblue"
        />
      </Link>
    </div>
  );
}
