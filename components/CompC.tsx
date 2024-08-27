import { BatteryCharging, Handshake, ShieldCheck, ThumbsUp } from "lucide-react";

export default function CompC() {
  const data = [
    {
      title: "Trustworthiness",
      text: "Our team is committed to providing reliable and dependable services, ensuring your peace of mind with every job.",
      icon: <Handshake size={35} />,
    },
    {
      title: "Professionalism",
      text: "We uphold the highest standards of professionalism, from punctuality to the quality of service we deliver.",
      icon: <ShieldCheck size={35} />,
    },
    {
      title: "Customer Satisfaction",
      text: "Your satisfaction is our top priority. We work closely with you to meet your expectations and ensure an exceptional experience.",
      icon: <ThumbsUp size={35} />,
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 container2">
        {data.map((elem, key) => (
          <div className="shadow-lg border-2 bg-white border-blue-600 glass2 shadow-gray-400 rounded-md p-6">
            <span className="text-blue-600">{elem.icon}</span>
            <p className="text-lg font-semibold mb-5 mt-8 text-white">{elem.title}</p>
            <p className="text-13 font-semibold">{elem.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
