import React from "react";

type Props = {
  name: string;
  label: string;
  value: string;
  error: string;
  onChange: any;
};

export default function Input({ name, value, label, onChange, error }: Props) {
  const options = [
    "Regular House Cleaning",
    "Deep Cleaning",
    "Move-In/Move-Out Cleaning",
    "Post-Construction Cleaning",
    "Office Cleaning",
    "Retail Space Cleaning",
    "Industrial Cleaning",
    "Hotel Cleaning",
    "Pest Control ",
    "Rodent Control",
    "Insect Extermination",
    "Organizing and Decluttering",
    "Seasonal Cleaning ",
    "Holiday and Special Event Cleaning",
  ];

  return (
    <div>
      {name !== "serviceType" ? (
        <div className="">
          <p className="font-semibold">{label}</p>
          <div className="h-12 shadow-md mt-2">
            <input
              type="text"
              onChange={onChange}
              name={name}
              value={value}
              className={`h-full border-2 rounded duration-500 w-full pl-3 bg-transparent outline-none ${
                value.length > 0
                  ? "border-green-600 focus:border-green-600"
                  : `${error.length > 0 ? "border-red-500" : "border-gray-300"}`
              }`}
            />
          </div>
          <p
            className={`text-red-500 mt-1 duration-500 overflow-hidden ${
              error.length > 0
                ? "opacity-100 visible h-5"
                : "opacity-0 h-0 invisible"
            }`}
          >
            {error}
          </p>
        </div>
      ) : (
        <div className="">
          <p>{label}</p>
          <div className="h-12 shadow-md mt-2">
            <select
              onChange={onChange}
              name={name}
              value={value}
              className={`h-full border-2  rounded duration-500 w-full pl-3 bg-transparent outline-none ${
                value.length > 0
                  ? "border-green-600 focus:border-green-600"
                  : `${error.length > 0 ? "border-red-500" : "border-gray-300"}`
              }`}
            >
              <option value=""></option>
              {options.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </div>
          <p
            className={`text-red-500 mt-1 duration-500 overflow-hidden ${
              error.length > 0
                ? "opacity-100 visible h-5"
                : "opacity-0 h-0 invisible"
            }`}
          >
            {error}
          </p>
        </div>
      )}
    </div>
  );
}
