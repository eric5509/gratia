"use client";
import Select from "../Select";
import { data } from "../data";
import Input from "../Input";
import Button from "../Button";
import { useState } from "react";
import { TErrors, TValues } from "./type";
import { SubmitFunction } from "./function";
import { ArrowRight } from "lucide-react";
import { cleaningFrequency, cleaningServices, facilityTypes } from "./data";
import Link from "next/link";

export default function Book() {
  const [values, setValues] = useState<TValues>({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    facilityType: "",
    serviceType: "",
    cleaningFrequency: "",
  });
  const [errors, setErrors] = useState<TErrors>({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    facilityType: "",
    serviceType: "",
    cleaningFrequency: "",
  });
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const Submit = () => {
    SubmitFunction(values, setErrors, setLoading, loading, setServerError);
  };

  return (
    <div>
      <div className="grid min-h-screen pt-24 pb-10 container gap-5 grid-cols-1 md:grid-cols-2 ">
        <div className="text-center gap-3 pb-0 md:pb-20 flex h-full items-center flex-col justify-center">
          <p className="font-bold text-3xl">Book a Service</p>
          <p className="text-base font-semibold">
            Need a More Detailed Service?
          </p>
          <Link href="/contact" className="flex items-center mt-3 gap-1 cursor-pointer">
            <p className="text-blue-600 font-semibold text-base">Contact Us</p>
            <ArrowRight className="text-blue-600" size={18} />
          </Link>
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Name"
              labelStyle="mb-1 font-semibold"
              onChange={onChange}
              value={values.name}
              error={errors.name}
              name="name"
            />
            <Input
              label="Phone"
              labelStyle="mb-1 font-semibold"
              onChange={onChange}
              value={values.phone}
              error={errors.phone}
              name="phone"
            />
            <Input
              label="Email"
              labelStyle="mb-1 font-semibold"
              onChange={onChange}
              value={values.email}
              error={errors.email}
              name="email"
            />
            <Input
              label="Residential / Company Address"
              labelStyle="mb-1 font-semibold"
              onChange={onChange}
              value={values.address}
              error={errors.address}
              name="address"
            />
            <Input
              label="City"
              labelStyle="mb-1 font-semibold"
              onChange={onChange}
              value={values.city}
              error={errors.city}
              name="city"
            />
            <Input
              label="State"
              labelStyle="mb-1 font-semibold"
              onChange={onChange}
              value={values.state}
              error={errors.state}
              name="state"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Select
              options={facilityTypes}
              labelStyle="mb-1 font-semibold"
              label="Facility Type"
              onChange={onChange}
              value={values.facilityType}
              error={errors.facilityType}
              name="facilityType"
            />
            <Select
              options={cleaningServices}
              labelStyle="mb-1 font-semibold"
              label="Service Type"
              onChange={onChange}
              value={values.serviceType}
              error={errors.serviceType}
              name="serviceType"
            />
            <Select
              options={cleaningFrequency}
              labelStyle="mb-1 font-semibold"
              label="Cleaning Frequency "
              onChange={onChange}
              value={values.cleaningFrequency}
              error={errors.cleaningFrequency}
              name="cleaningFrequency"
            />
          </div>
          <div className="" onClick={Submit}>
            <Button
              marginBottom="10px"
              loading={false}
              shadow="shadow-md shadow-gray-600"
              text="Book a Service"
            />
          </div>
          <p className=" text-[red]">{serverError}</p>
        </div>
      </div>
    </div>
  );
}
