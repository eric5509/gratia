import { PhoneCall } from "lucide-react";
import Button from "./Button";
import Link from "next/link";

type Props = {
  imageFirst?: boolean;
  title: string;
  text: string;
  src: string;
};

export default function CompA({ imageFirst, text, title, src }: Props) {
  return (
    <div>
      <div
        className={`flex container gap-5 md:gap-0 ${
          !imageFirst ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
        }`}
      >
        <div className="md:flex-1 h-72 md:h-[400px] relative bg-blue-500">
          <img
            src={src}
            className="h-full w-full object-cover absolute inset-0 "
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col gap-2 justify-center">
          <div className=" sm:p-5 md:p-10">
            <p className="text-xl md:text-2xl font-bold text-blue-600 mb-2">
              {title}
            </p>
            <p>{text}</p>
            <div className="flex items-center w-fit group gap-6">
              <Link href={"/book"}>
                <Button width="150px" backgroundColor="blue" text="Book Now" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
