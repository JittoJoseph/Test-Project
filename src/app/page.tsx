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
    <div className="font-sans flex items-center justify-center min-h-screen p-8">
      <main className="flex flex-col gap-8 items-center text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Button Click Counter
        </h1>

        <div className="flex flex-col items-center gap-6">
          <div className="text-6xl font-bold text-blue-600 dark:text-blue-400">
            {count}
          </div>

          <div className="text-lg text-gray-600 dark:text-gray-300">
            {count === 1 ? "1 click" : `${count} clicks`}
          </div>

          <div className="flex gap-4">
            <button
              onClick={incrementCounter}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Click Me!
            </button>

            <button
              onClick={resetCounter}
              className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Reset
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
