"use client";
import { useState } from "react";

export function ProfileImg() {
  const [imageUrl, setImageUrl] = useState();
  const onFileUpload = (event) => {
    const file = event.target.files[0];
    setImageUrl(URL.createObjectURL(file));
  };
  return (
    <div>
      Profile image<span className="text-red-600">*</span>
      <div className="sixe-100 bg-zinc-200 rounded-md cursor-pointer flex justify-center items-center">
        <label
          htmlFor="file-input"
          className="bg-zinc-300 rounded-md cursor-pointer size-40"
        >
          <input hidden id="file-input" type="file" onChange={onFileUpload} />
          <img className="size-40" src={imageUrl} alt="" />
          <p>Add image</p>
        </label>
      </div>
    </div>
  );
}
