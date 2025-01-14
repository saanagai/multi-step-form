"use client";
import { Header } from "./Header";
import { Input } from "./Input";
import Button from "./Button";
import { ChevronLeft } from "lucide-react";

export function Step3() {
  return (
    <div className="bg-slate-400 w-[490px] h-[680px] rounded-[8px] p-8">
      <Header />
      <Input />
      <ProfileImg />
      <div className=" flex flex-row gap-2">
        <button className="bg-white flex border-[8px] w-[128px] h-[44px]">
          <ChevronLeft />
          Back
        </button>
        <Button />
      </div>
    </div>
  );
}
