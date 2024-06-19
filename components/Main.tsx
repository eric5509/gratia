import React from "react";

export default function Main() {
  return (
    <div>
      <div className="container tracking-wider min-h-[calc(100vh-96px)] py-10 flex flex-col gap-10 items-center justify-center">
        <p className="text-2xl mt-5 md:mt-0 font-semibold md:text-4xl lg:text-5xl text-center">Hi, I’m Brian Wong.</p>
        <div className=" lg:w-[850px] flex flex-col gap-7 text-15 md:text-base">
          <p>I’m a Canadian founder & CEO residing in New York City. </p>
          <p>
            I graduated college at the age of the 18, after skipping 4 grades.
            In 2010, I started Kiip, one of the largest mobile advertising
            platforms in the world. We raised over $40mm in venture capital from
            True Ventures, HWVP, Verizon Ventures, Interpublic Group, Amex
            Ventures, and more. Kiip was acquired in 2019.
          </p>
          <p>
            In 2016, I published my first book with Crown/Penguin Randomhouse,
            called The Cheat Code.
          </p>
          <p>
            Now, I spend my time with fellow Web2 and Web3 entrepreneurs and
            executives, helping them grow through investment or advisory.
          </p>
        </div>
      </div>
    </div>
  );
}
