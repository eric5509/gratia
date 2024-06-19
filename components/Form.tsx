"use client";
import { useState } from "react";

export default function Form() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    if (
      !values.firstname.trim() ||
      !values.lastname.trim() ||
      !values.subject.trim() ||
      !values.subject.trim() ||
      !values.message.trim()
    ) {
      return setErrors({
        firstname: !values.firstname.trim()
          ? "Please input your Firstname"
          : "",
        lastname: !values.lastname.trim() ? "Please input your Lastname" : "",
        email: !values.email.trim() ? "Please input your Email" : "",
        subject: !values.subject.trim() ? "Please input your Subject" : "",
        message: !values.message.trim() ? "Please input your Message" : "",
      });
    }
    setErrors({
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const label = "text-xs font-normal text-gray-400";
  return (
    <div className=" py-40 text-base bg-gray-100">
      <div className="grid container lg:grid-cols-2">
        <p className="text-3xl md:text-4xl lg:text-5xl mb-7 lg:mb-0">
          Curious? E-mail us.
        </p>
        <div className="flex text-base md:text-[17px] flex-col gap-5">
          <div className="">
            <p className="mb-2 font-semibold">
              Name <span className={`${label}`}>(required)</span>
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              <div className="">
                <p className="text-xs">First Name</p>
                <div
                  className={`h-12 border rounded-sm bg-white mt-1 ${
                    errors.firstname ? "border-[red]" : "border-gray-500"
                  }`}
                >
                  <input
                    type="text"
                    value={values.firstname}
                    name="firstname"
                    onChange={onChange}
                    className="h-full w-full outline-none border-none bg-transparent pl-3"
                  />
                </div>
                <div
                  className={`${
                    errors.firstname ? "h-6" : "h-0"
                  } duration-500 flex items-end overflow-hidden`}
                >
                  <p className={`text-sm  text-[red]`}>{errors.firstname}</p>
                </div>
              </div>
              <div className="">
                <p className="text-xs">Last Name</p>
                <div
                  className={`h-12 border rounded-sm bg-white mt-1 ${
                    errors.lastname ? "border-[red]" : "border-gray-500"
                  }`}
                >
                  <input
                    type="text"
                    value={values.lastname}
                    name="lastname"
                    onChange={onChange}
                    className="h-full w-full outline-none border-none bg-transparent pl-3"
                  />
                </div>
                <div
                  className={`${
                    errors.lastname ? "h-6" : "h-0"
                  } duration-500 flex items-end overflow-hidden`}
                >
                  <p className={`text-sm  text-[red]`}>{errors.lastname}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="font-semibold">
              Email <span className={`${label}`}>(required)</span>
            </p>
            <div
              className={`h-12 border rounded-sm bg-white mt-1 ${
                errors.email ? "border-[red]" : "border-gray-500"
              }`}
            >
              <input
                type="text"
                value={values.email}
                name="email"
                onChange={onChange}
                className="h-full w-full outline-none border-none bg-transparent pl-3"
              />
            </div>
            <div
              className={`${
                errors.email ? "h-6" : "h-0"
              } duration-500 flex items-end overflow-hidden`}
            >
              <p className={`text-sm  text-[red]`}>{errors.email}</p>
            </div>
          </div>
          <div className="">
            <p className="font-semibold">
              Subject <span className={`${label}`}>(required)</span>
            </p>
            <div
              className={`h-12 border rounded-sm bg-white mt-1 ${
                errors.subject ? "border-[red]" : "border-gray-500"
              }`}
            >
              <input
                type="text"
                value={values.subject}
                name="subject"
                onChange={onChange}
                className="h-full w-full outline-none border-none bg-transparent pl-3"
              />
            </div>
            <div
              className={`${
                errors.subject ? "h-6" : "h-0"
              } duration-500 flex items-end overflow-hidden`}
            >
              <p className={`text-sm  text-[red]`}>{errors.subject}</p>
            </div>
          </div>
          <div className="">
            <p className=" font-semibold">
              Message <span className={`${label}`}>(required)</span>
            </p>
            <div
              className={`h-40 border rounded-sm bg-white mt-1 ${
                errors.message ? "border-[red]" : "border-gray-500"
              }`}
            >
              <textarea
                value={values.message}
                name="message"
                onChange={onChange}
                className="w-full h-full bg-transparent p-3 outline-none border-none"
              ></textarea>
            </div>
            <div
              className={`${
                errors.message ? "h-6" : "h-0"
              } duration-500 flex items-end overflow-hidden`}
            >
              <p className={`text-sm  text-[red]`}>{errors.message}</p>
            </div>
          </div>
          <p
            onClick={handleSubmit}
            className="px-8 md:px-10 py-4 md;py-5 bg-blue-950 hover:bg-cyan-950 shadow-md rounded-sm duration-300 active:scale-95 text-white text-lg md:text-xl font-semibold w-fit cursor-pointer"
          >
            GET IN TOUCH
          </p>
        </div>
      </div>
    </div>
  );
}
