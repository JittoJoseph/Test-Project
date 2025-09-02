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
      className={`min-h-screen ${backgroundColors[bgColorIndex]} flex items-center justify-center p-8 transition-colors duration-700 bg-gradient-to-br from-current to-transparent`}
    >
      <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-10 max-w-md mx-auto border border-white/20">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
          🔢 Counter App
        </h1>

        <div className="text-8xl font-black text-gray-900 mb-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl py-6 px-4 border-2 border-gray-300 shadow-inner">
          {count}
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={incrementCounter}
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg transform active:scale-95"
          >
            ➕ Add One
          </button>

          <button
            onClick={resetCounter}
            className="px-10 py-4 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg transform active:scale-95"
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}
