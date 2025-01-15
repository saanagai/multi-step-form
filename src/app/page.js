"use client";
import Image from "next/image";
import { Step1 } from "@/components/Step1";
import { Step2 } from "@/components/Step2";
import { Step3 } from "@/components/Step3";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const FormSteps = [Step1, Step2, Step3][currentStep];
  const setCurrentSteps = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleChange = (event) => {
    console.log(event.target.name);
  };
  return (
    <div className="flex flex-col gap-5 mt-40 ml-40">
      <FormSteps
        setCurrentStep={setCurrentSteps}
        currentStep={currentStep}
        handleChange={handleChange}
      />
      {/* {currentStep === 0 ? <Step1 /> : ""}
      {currentStep === 1 ? <Step2 /> : ""}
      {currentStep === 1 ? <Step3 /> : ""} */}
      {/* <Step1 /> */}
    </div>
  );
}
