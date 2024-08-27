import { Check } from "lucide-react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

export default function Quality() {
  return (
    <div className="container3 py-14">
      <div className="p-1 md:p-10 grid gap-10 grid-cols-1 md:grid-cols-[1fr_2fr]">
        <div className="relative min-h-96 shadow-lg rounded-md overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1687362298502-1881385c786f?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-full w-full absolute top-0 left-0 object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-2xl leading-relaxed tracking-wider font-semibold">
            <p>
              We Provide{" "}
              <span className="text-3xl md:text-4xl ml-1 font-bold text-green-600">
                Quality
              </span>{" "}
            </p>
            <p>
              <span className="tex-3xl md:text-3xl text-blue-600 border-blue-600">
                Service
              </span>{" "}
              all the time
            </p>
          </div>
          <p>
            Our team consists of trained and enxperience cleaning professionals
            who take pride in their work. Trust us to handle your space with the
            utmost care, deligence and attention.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <IoShieldCheckmarkSharp className="text-4xl text-green-600" />
              <div className="text-base leading-5 font-semibold">
                <p>100% Client Satisfaction</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <IoShieldCheckmarkSharp className="text-4xl text-green-600" />
              <div className="text-base leading-5 font-semibold">
                <p>Exceeding Expectations Every Time</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <IoShieldCheckmarkSharp className="text-4xl text-green-600" />
              <div className="text-base leading-5 font-semibold">
                <p>Swift and Spotless Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
