"use client";
import { Header } from "./Header";
import { Input } from "./Input";
import Button from "./Button";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export const Step1 = ({ label, placeholder, setCurrentStep, errortext }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleClick = () => {
    const { firstName, lastName, userName } = formValues;
    if (!firstName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        firstName: "Нэрээ оруулна уу!",
      }));
    } else if (/[^a-zA-Z]/.test(firstName)) {
      setFormErrors((prev) => ({
        ...prev,
        firstName: "Текст оруулна уу!",
      }));
    }
    if (!lastName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        lastName: "Овог нэрээ оруулна уу!",
      }));
    } else if (/[^a-zA-Z]/.test(lastName)) {
      setFormErrors((prev) => ({
        ...prev,
        lastName: "Текст оруулна уу!",
      }));
    }
    if (!userName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        userName: "Хэрэглэгчийн нэрээ оруулна уу!",
      }));
    } else if (/[^a-zA-Z]/.test(lastName)) {
      setFormErrors((prev) => ({
        ...prev,
        userName: "Текст оруулна уу!",
      }));
    } else {
      setCurrentStep(setCurrentStep + 1);
    }
    // setCurrentStep();
  };
  return (
    <div className="Flex justify-between items-start bg-[#FFFFFF] w-[480px] h-[655px] rounded-[8px] p-8">
      <Header />
      <div className="flex flex-col mt-6 ">
        <Input
          label={"first Name"}
          placeholder={"Your first Name"}
          handleChange={"printFirstName"}
          error={formErrors.firstName}
        />
        <Input
          label={"lastName"}
          placeholder={"Your last Name"}
          handleChange={"printFirstName"}
          error={formErrors.lastName}
        />
        <Input
          label={"Username"}
          placeholder={"Your user name"}
          handleChange={"printFirstName"}
          error={formErrors.userName}
        />
      </div>
      <div className=" ">
        <Button buttonText="Continue 1/3" setCurrentStep={handleClick} />
      </div>
    </div>
  );
};
