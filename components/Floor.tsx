import { PhoneCall } from "lucide-react";
import Button from "./Button";
import Link from "next/link";

export default function Floor() {
  return (
    <div>
      <div className="bg-blue-950 text-center lg:text-start text-white">
        <div className="container flex-col lg:flex-row flex gap-2 items-center h-full py-7">
          <div className="flex-1">
            <p className="text-2xl font-semibold mb-2">
              Call Now and Get A Service in the same DAY!
            </p>
            <p>
              Experience fast and efficient service tailored to your
              needs—schedule today and enjoy a spotless space by evening!
            </p>
          </div>
          <Link href="tel:+2348123248444">
            <Button
              icon={<PhoneCall size={18} />}
              before={true}
              text="Call Us"
              width="200px"
              backgroundColor="green"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
