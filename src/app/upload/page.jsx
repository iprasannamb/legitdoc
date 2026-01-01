"use client";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";

export default function Page() {
  const [file, setFile] = useState(null);
  const [prev, setPrev] = useState(null);
  const [error, setError] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  // Cleanup object URL on unmount or when file changes
  useEffect(() => {
    return () => {
      if (prev) {
        URL.revokeObjectURL(prev);
      }
    };
  }, [prev]);

  const validateFile = (file) => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      setError("Please upload a valid image file (JPEG, PNG, GIF, or WebP)");
      return false;
    }

    if (file.size > maxSize) {
      setError("File size must be less than 5MB");
      return false;
    }

    setError(null);
    return true;
  };

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    if (validateFile(selectedFile)) {
      // Revoke previous object URL to prevent memory leak
      if (prev) {
        URL.revokeObjectURL(prev);
      }
      setFile(selectedFile);
      setPrev(URL.createObjectURL(selectedFile));
    }
  };

  const fileHandle = (e) => {
    const selectedFile = e.target.files[0];
    handleFile(selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const clearFile = () => {
    if (prev) {
      URL.revokeObjectURL(prev);
    }
    setFile(null);
    setPrev(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Upload Your Document</h1>
      
      {/* File Input Section */}
      <div className="mb-6">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="w-full bg-gray-100 cursor-pointer"
            onChange={fileHandle}
          />
          <p className="mt-4 text-sm text-gray-500">
            or drag and drop your image here
          </p>
          <p className="mt-2 text-xs text-gray-400">
            Supported formats: JPEG, PNG, GIF, WebP (Max 5MB)
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* File Info */}
        {file && !error && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-green-800">{file.name}</p>
              <p className="text-xs text-green-600">
                {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>
            <button
              onClick={clearFile}
              className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Clear
            </button>
          </div>
        )}
      </div>

      {/* Preview Section */}
      <div className="border rounded-lg overflow-hidden bg-gray-50">
        <div className="bg-gray-200 px-4 py-2 border-b">
          <h2 className="text-lg font-semibold">Preview</h2>
        </div>
        <div className="flex items-center justify-center h-96 w-full p-4">
          {!prev ? (
            <div className="text-center">
              <svg
                className="mx-auto h-16 w-16 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-gray-400 text-sm">No file selected</p>
              <p className="text-gray-400 text-xs mt-1">
                Upload an image to see preview
              </p>
            </div>
          ) : (
            <img
              src={prev}
              alt="Image preview"
              className="max-h-full max-w-full object-contain rounded shadow-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
}
