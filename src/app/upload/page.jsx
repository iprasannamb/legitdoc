"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function page() {
  // const [file, setFile] = useState(null);
  const [prev, setPrev] = useState(null);
  const fileHandle = (e) => {
    const file = e.target.files[0]
    setPrev(URL.createObjectURL(file));
  };
  return (
    <>
      <div className="flex h-52 items-center justify-center">
        <Input
          type="file"
          placeholder="Email"
          className={"w-50 bg-gray-100"}
          onChange={fileHandle}
        />
      </div>
      <div
        id="preview"
        className="flex items-center justify-center h-96 w-full "
      >
        {!prev ? (
          <p className="text-gray-400 text-sm">No file selected</p>
        ) : (
          <img
            src={prev}
            alt="Image preview"
            className="max-h-full max-w-full object-contain rounded"
          />
        )}
      </div>

    </>
  );
}
