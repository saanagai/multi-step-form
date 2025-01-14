"use client";

// const label = {
//   Firstname: " ",
//   Lastname: " ",
//   Username: " ",
// };
export function Input(label) {
  return (
    <div className="w-[416px] h-[68px]">
      <p>
        First name
        <span className="text-red-600">*</span>
      </p>
      <input
        type="text"
        className="bg-white w-[100%] h-[44px] rounded-[8px]"
        label={label}
        placeholder=""
      />
    </div>
  );
}
