"use client";

export function Success() {
  return (
    <div>
      <div className="w-[480px] h-[193px] bg-green-300 p-8 rounded-[8px]">
        <img src="./pinecone-logo.svg" alt="" />
        <h3 className="text-[26px] font-semibold">You're All Set 🔥</h3>
        <p className="text-[#8E8E8E]">
          We have received your submission.Thank you!
        </p>
      </div>
    </div>
  );
}
