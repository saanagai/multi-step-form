"use client";

import { ChevronRight } from "lucide-react";

export default function Button() {
  return (
    <div>
      <div className="Flex justify-center items-center">
        <button className="flex justify-center items-center gap-1 bg-[yellow] rounded-md w-[216px] h-[44px] p-[10px 12px] mt-40">
          Continue 1/3
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
