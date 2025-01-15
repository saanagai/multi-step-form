"use client";

// const label = {
//   Firstname: " ",
//   Lastname: " ",
//   Username: " ",
// };
export function Input({ label, placeholder, handleChange, errortext }) {
  return (
    <div className="w-[416px] h-[68px]">
      <p>
        {label}
        <span className="text-red-600">*</span>
      </p>
      <input
        type="text"
        className="bg-white w-[100%] h-[44px] rounded-[8px] border border-slate-600"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <p className="text-[#E14942] text-[13px]">{errortext}</p>
    </div>
  );
}
