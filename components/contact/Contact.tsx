"use client";
import { useState } from "react";

import { FaFacebook } from "react-icons/fa";
import Input from "../Input";
import Button from "../Button";
import Textarea from "../Textarea";
import Link from "next/link";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const submit = async () => {
    const { name, subject, message, email } = values;
    if (!name.trim() || !subject.trim() || !message.trim())
      return setErrors({
        name: !name.trim() ? "Please fill in your Name" : "",
        subject: !subject.trim() ? "Please fill in your Subject" : "",
        message: !message.trim() ? "Please fill in your Message" : "",
        email: !email.trim() ? "Please fill in your Email" : "",
      });

    await fetch("/api/emails", {
      method: "POST",
      body: JSON.stringify(values),
    });
  };

  return (
    <div className="relative text-white pb-12">
      <div className="h-24"></div>
      <img
        src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
        className="absolute top-0 left-0 h-full w-full z-0"
        alt=""
      />
      <div className="absolute top-0 left-0  h-full w-full z-0 bg-black/85"></div>
      <div className="grid container z-20 relative gap-5 md:gap-0 grid-cols-1 md:grid-cols-[2fr_1fr] ">
        <div className=" md:p-10 md:pt-2">
          <p className="text-xl text-center md:text-start md:text-2xl text-white font-bold mb-10 md:mb-5">
            We would love to hear from you
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
            <Input
              error={errors.name}
              name="name"
              label="Name"
              onChange={onChange}
              value={values.name}
              labelStyle="mb-2 text-15 font-semibold"
            />
            <Input
              error={errors.email}
              name="email"
              label="Email"
              onChange={onChange}
              value={values.email}
              labelStyle="mb-2 text-15 font-semibold"
            />

            <Input
              error={errors.subject}
              name="subject"
              label="Subject"
              onChange={onChange}
              value={values.subject}
              labelStyle="mb-2 text-15 font-semibold"
            />
            <div className=""></div>
          </div>
          <Textarea
            height="150px"
            label="Message"
            labelStyle="mb-2 font-semibold"
            error={errors.message}
            value={values.message}
            onChange={onChange}
          />
          <div onClick={submit} className="">
            <Button text="Submit" />
          </div>
        </div>
        <div className="md:p-3 flex flex-col justify-center mb-0 sm:mb-24 md:mb-28 lg:mb-36  text-center mt-10 md:text-start md:mt-0">
          <p className="text-2xl font-semibold">Get In Touch</p>
          <p className="my-4">
            You can get in touch with us with the email provided
          </p>
          <p className="text-15">
            Email:{" "}
            <Link
              href="mailto:email@gratia.com"
              className="font-semibold text-blue-600"
            >
              email@gratia.com
            </Link>
          </p>
          <p className="text-15 mt-2">
            Phone:{" "}
            <Link
              href="tel:+2348123248444"
              className="font-semibold text-blue-600"
            >
              +2348123248444
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
