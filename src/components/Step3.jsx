"use client";
import { Header } from "./Header";
import { Input } from "./Input";
import Button from "./Button";
import { ChevronLeft } from "lucide-react";
import { ProfileImg } from "./ProfileImg";

export function Step3({ setCurrentStep, handleChange }) {
  return (
    <div className="bg-[#FFFFFF] w-[490px] h-[680px] rounded-[8px] p-8">
      <Header />
      <Input
        label="Date of birth"
        placeholder="--/--/--"
        handleChange="{printEmail}"
      />
      <ProfileImg placeholder="" />
      <div className=" flex gap-2 w-[100%]">
        <button className="flex justify-center items-center gap-1 bg-white border text-black rounded-md w-[416px] h-[44px] p-[10px 12px] mt-40">
          <ChevronLeft />
          Back
        </button>
        <Button
          buttonText="Continue 2/3"
          setCurrentStep={setCurrentStep}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}
