"use client";
import Image from "next/image";
import { Step1 } from "@/components/Step1";
import { Step2 } from "@/components/Step2";
import { Step3 } from "@/components/Step3";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(2);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div>
      {currentStep === 0 ? <Step1 /> : ""}
      {currentStep === 1 ? <Step2 /> : ""}
      {currentStep === 1 ? <Step3 /> : ""}
      {/* <Step1 /> */}
    </div>
  );
}
