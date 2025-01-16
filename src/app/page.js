"use client";
import Image from "next/image";
import { Step1 } from "@/components/Step1";
import { Step2 } from "@/components/Step2";
import { Step3 } from "@/components/Step3";
import { useState } from "react";
import { Success } from "@/components/Success";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const FormSteps = [Step1, Step2, Step3, Success][currentStep];
  const setCurrentSteps = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="flex flex-col gap-5 mt-40 ml-40">
      <FormSteps setCurrentStep={setCurrentSteps} currentStep={currentStep} />
      <button
        onclick={() => {
          setCurrentStep(currentStep + 1);
        }}
      ></button>
      {/* <Success /> */}
    </div>
  );
}
