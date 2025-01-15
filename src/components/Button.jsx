"use client";

import { ChevronRight } from "lucide-react";

export default function Button({ setCurrentStep, buttonText }) {
  return (
    <div className="Flex justify-center items-center">
      <button
        className="flex justify-center items-center gap-1 bg-black  text-white rounded-md w-[316px] h-[44px] p-[10px 12px] mt-40"
        onClick={setCurrentStep}
      >
        {buttonText}
        <ChevronRight />
      </button>
    </div>
  );
}
