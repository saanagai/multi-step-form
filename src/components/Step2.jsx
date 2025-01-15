"use client";
import { Header } from "./Header";
import { Input } from "./Input";
import Button from "./Button";
import { ChevronLeft } from "lucide-react";

export function Step2({ setCurrentStep }) {
  return (
    <div className="bg-white w-[490px] h-[680px] rounded-[8px] p-8">
      <Header />
      <Input
        label="Email"
        placeholder="YourEmail@example.com"
        handleChange="{printEmail}"
      />
      <Input
        label="Phone number"
        placeholder="YourPhoneNumber"
        handleChange="{printPhoneNumber}"
      />
      <Input
        label="Password"
        placeholder="******"
        handleChange="{printPassword}"
      />
      <Input
        label="confirm password"
        placeholder="******"
        handleChange="{printComfirmPassword}"
      />
      <div className=" flex gap-2 w-[100%]">
        <button className="flex justify-center items-center gap-1 bg-white border text-black rounded-md w-[416px] h-[44px] p-[10px 12px] mt-40">
          <ChevronLeft />
          Back
        </button>
        <Button buttonText="Continue 2/3" setCurrentStep={setCurrentStep} />
      </div>
    </div>
  );
}
