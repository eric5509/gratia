export default function Approach() {
  const data = [
    {
      title: "Book a Service",
      text: "Easily schedule your cleaning service by selecting the type of cleaning you need, choosing a convenient date and time, and confirming the booking—all in just a few clicks. Our online booking system is designed to make the process hassle-free and transparent.",
      src: "https://images.unsplash.com/photo-1688989666504-c2de3f266d36?q=80&w=1573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Team Arrives",
      text: "Our highly trained and fully vetted cleaning professionals will arrive at your location on time, ready to get to work. Equipped with industry-grade cleaning supplies and tools, they are prepared to tackle any cleaning challenge with precision and care.",
      src: "https://resolvejanitorial.com/wp-content/uploads/2022/04/AdobeStock_412590144.jpg",
    },
    {
      title: "Cleaning Process",
      text: "Our team follows a comprehensive cleaning checklist tailored to your specific needs. From deep cleaning hard-to-reach areas to sanitizing surfaces with eco-friendly products, we ensure your space is left spotless, fresh, and hygienic. We pay attention to every detail, so nothing is overlooked.",
      src: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Final Result",
      text: "After our thorough cleaning process, we review the entire space to ensure everything meets our high standards. You’ll walk into a sparkling clean environment, whether it’s your home, office, or commercial property. We guarantee satisfaction, or we’ll come back to make it right.",
      src: "https://images.unsplash.com/photo-1569152811536-fb47aced8409?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="mb-20 mt-24">
      <p className="text-center italic">-Our Work Process</p>
      <div className="text-center text-2xl md:text-4xl space-y-2 font-semibold mt-4 mb-10 md:mb-16">
        <p>Our Methodical Approach </p>
        <p>To Cleaning</p>
      </div>
      <div className="flex flex-col gap-12">
        {data.map((elem, key) => (
          <div
            className={`container3 grid grid-cols-1 md:gap-0 md:grid-cols-[1fr_100px_1fr]`}
          >
            <div
              className={`bg-sky-200 rounded-t-none md:rounded-t-md relative ${
                key % 2 === 0 ? "order-2 md:order-1" : "order-2 md:order-3"
              } shadow-md p-5 md:p-7 lg:p-10 rounded-md flex-1`}
            >
              <p className="text-lg font-semibold mb-3">{elem.title}</p>

              <p>{elem.text}</p>
            </div>
            <div className="hidden md:flex order-2 rounded-md gap-2 flex-col items-center">
              <p className="text-base font-semibold">0{key + 1}</p>
              <div className="flex-1 border-dotted border-gray-400 border-l-2 w-[1px]"></div>
            </div>
            <div
              className={`bg-sky-200 relative h-64 md:h-auto shadow-md w-full rounded-md flex-1 ${
                key % 2 === 0 ? "order-1 md:order-3" : "order-1"
              }`}
            >
              <img
                src={elem.src}
                className="w-full h-full object-cover rounded-md  md:rounded-b-md rounded-b-none border-none origin-top absolute inset-0"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
