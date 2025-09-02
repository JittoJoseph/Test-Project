"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [bgColorIndex, setBgColorIndex] = useState(0);

  const backgroundColors = [
    "bg-gray-50",
    "bg-blue-50",
    "bg-green-50",
    "bg-yellow-50",
    "bg-red-50",
    "bg-purple-50",
    "bg-pink-50",
    "bg-indigo-50",
    "bg-orange-50",
    "bg-teal-50",
  ];

  const incrementCounter = () => {
    setCount((c) => c + 1);
    setBgColorIndex((prevIndex) => (prevIndex + 1) % backgroundColors.length);
  };

  const resetCounter = () => {
    setCount(0);
    setBgColorIndex(0);
  };

  return (
    <div
      className={`min-h-screen ${backgroundColors[bgColorIndex]} flex items-center justify-center p-8 transition-colors duration-500`}
    >
      <div className="text-center bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">🔢 Counter</h1>

        <div className="text-7xl font-bold text-gray-900 mb-6 bg-gray-100 rounded-lg py-4">
          {count}
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={incrementCounter}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
          >
            Add
          </button>

          <button
            onClick={resetCounter}
            className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}
