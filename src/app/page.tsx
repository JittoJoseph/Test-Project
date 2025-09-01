"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Counter</h1>

        <div className="text-6xl font-bold text-gray-900 mb-8">{count}</div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={incrementCounter}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            +1
          </button>

          <button
            onClick={resetCounter}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
