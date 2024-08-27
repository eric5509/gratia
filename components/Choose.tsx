import {
  Activity,
  CalendarCheck2,
  Check,
  CheckCircle,
  Cuboid,
  HandCoins,
} from "lucide-react";

export default function Choose() {
  const data = [
    {
      title: "Start Guaranteed",
      text: "We guarantee a reliable and efficient start to your cleaning service, ensuring your satisfaction from the moment we begin. Our team arrives on time, ready to deliver exceptional results.",
      icon: <CheckCircle size={35} color="red" />,
    },
    {
      title: "It's Convenient",
      text: "Booking our cleaning services is quick and easy. With flexible scheduling options and online booking, you can arrange a cleaning service that fits perfectly into your busy life.",
      icon: <Cuboid size={35} color="blue" />,
    },
    {
      title: "Flexible Schedule",
      text: "Our cleaning services are available at times that work best for you. Whether you need a one-time deep clean or regular upkeep, we offer a schedule that suits your lifestyle.",
      icon: <CalendarCheck2 size={35} color="purple" />,
    },
    {
      title: "Affordable",
      text: "We provide top-tier cleaning services at affordable rates. No hidden fees, just transparent pricing that ensures you get the best value for your money.",
      icon: <HandCoins size={35} color="green" />,
    },
    {
      title: "Competitive Rates",
      text: "Our rates are designed to be highly competitive without compromising on quality. Enjoy premium cleaning services at prices that beat the competition.",
      icon: <Activity size={35} color="orange" />,
    },
  ];

  return (
    <div className="py-8 mb-20">
      <div className="container3">
        <p className="text-center font-semibold mb-10 text-2xl md:text-3xl">
          Why{" "}
          <span className="text-3xl md:text-4xl text-blue-600 border-b-2 border-blue-600">
            Choose
          </span>{" "}
          Us?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10 ">
          <div className="bg- gradient rounded-md shadow-md shadow-gray-400 flex flex-col justify-center gap-3 text-white font-semibold text-xl p-8 text-center md:text-start md:p-5">
            <p>We are Available</p>
            <p>24/7</p>
            <p>to answer any Questions</p>
          </div>
          {data.map((elem, key) => (
            <div className="flex border-gray-300 gap-3 md:border-l-2 p-2 md:p-5">
              <span className="shrink-0">{elem.icon}</span>
              <div className="">
                <p className="mb-2 font-semibold text-base">{elem.title}</p>
                <p>{elem.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
