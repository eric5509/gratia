import Link from "next/link";
import Button1 from "./Button";
import CompC from "./CompC";

export default function Hero() {
  return (
    <div>
      <div className="h-screen flex relative items-center shadow-md">
        <img
          src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-full w-full absolute top-0 left-0 object-cover z-10"
        />
        <div className="h-full w-full absolute top-0 left-0 object-cover z-10 bg-black/80"></div>
        <div className="hidden z-30 md:block absolute -bottom-28 left-0 w-full">
          <CompC />
        </div>
        <div className="container2 z-30 grid items-center justify-center text-center">
          <div className="text-white flex flex-col items-center justify-center">
            <p className="text-2xl pt-5 md:pt-0 md:text-5xl leading-normal font-semibold">
              An <span className="">Expert</span> Cleaning Service <br />
              You can <span className="">TRUST</span>{" "}
            </p>
            <div className="">
              <p className="mt-3 container1 text-15 leading-loose">
                At <strong>GRATIA OF-GAD</strong>, we bring expert-level
                cleaning solutions that are not only thorough but reliable. Our
                team is trained to meet the highest standards, ensuring your
                space is pristine and welcoming. From homes to offices, we
                handle each task with precision and care, delivering results you
                can count on, every time. Trust us to make your environment
                cleaner, healthier, and more comfortable!
              </p>
            </div>
            <Link href={"/book"}>
              <Button1 width="150px" text="Book a Service" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
