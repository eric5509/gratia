import { Dispatch, SetStateAction } from "react";
import { TValues, TErrors } from "./type";

export const SubmitFunction = async (
  values: TValues,
  setErrors: Dispatch<SetStateAction<TErrors>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  loading: boolean,
  setServerError: Dispatch<SetStateAction<string>>
) => {
  const {
    name,
    address,
    city,
    email,
    facilityType,
    phone,
    cleaningFrequency,
    serviceType,
    state,
  } = values;

  if (
    !name.trim() ||
    !address.trim() ||
    !city.trim() ||
    !email.trim() ||
    !facilityType.trim() ||
    !phone.trim() ||
    !cleaningFrequency.trim() ||
    !serviceType.trim() ||
    !state.trim()
  ) {
    return setErrors({
      name: name.trim() ? "" : "Please fill in your Name",
      phone: phone.trim() ? "" : "Please fill in your Phone",
      email: email.trim() ? "" : "Please fill in your Email",
      address: address.trim() ? "" : "Please fill in your Address",
      city: city.trim() ? "" : "Please fill in your City",
      state: state.trim() ? "" : "Please fill in your State",
      facilityType: facilityType.trim()
        ? ""
        : "Please select a type of Facility",
      serviceType: serviceType.trim() ? "" : "Please select a type of Service",
      cleaningFrequency: cleaningFrequency.trim()
        ? ""
        : "How regular would you want us to serve you?",
    });
  }

  const reqData = await fetch("/api/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  console.log("Request Status:", reqData.status);
  console.log("Request Status Text:", reqData.statusText);
  console.log("Response Headers:", reqData.headers);

  const resData = await reqData.json();
console.log("Response Data:", resData);
};
