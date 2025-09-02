"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [bgColorIndex, setBgColorIndex] = useState(0);
  const [step, setStep] = useState(1);
  const [target, setTarget] = useState(10);
  const [history, setHistory] = useState<number[]>([0]);
  const [autoIncrement, setAutoIncrement] = useState(false);

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

  // Auto increment effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoIncrement && count < target) {
      interval = setInterval(() => {
        setCount((c) => {
          const newCount = c + step;
          setBgColorIndex(
            (prevIndex) => (prevIndex + 1) % backgroundColors.length
          );
          setHistory((prev) => [...prev, newCount]);
          return newCount;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [autoIncrement, count, target, step, backgroundColors.length]);

  const incrementCounter = () => {
    const newCount = count + step;
    setCount(newCount);
    setBgColorIndex((prevIndex) => (prevIndex + 1) % backgroundColors.length);
    setHistory((prev) => [...prev, newCount]);
  };

  const resetCounter = () => {
    setCount(0);
    setBgColorIndex(0);
    setHistory([0]);
    setAutoIncrement(false);
  };

  const undoLast = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      const previousCount = newHistory[newHistory.length - 1];
      setCount(previousCount);
      setHistory(newHistory);
      setBgColorIndex((prevIndex) => Math.max(0, prevIndex - 1));
    }
  };

  const jumpToTarget = () => {
    setCount(target);
    setHistory((prev) => [...prev, target]);
    setBgColorIndex(target % backgroundColors.length);
  };

  const isAtTarget = count >= target;
  const canUndo = history.length > 1;

  return (
    <div
      className={`min-h-screen ${backgroundColors[bgColorIndex]} flex items-center justify-center p-8 transition-colors duration-700 bg-gradient-to-br from-current to-transparent`}
    >
      <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-10 max-w-md mx-auto border border-white/20">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          🔢 Counter App
        </h1>

        {/* Target Achievement Banner */}
        {isAtTarget && (
          <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded-lg">
            <p className="text-green-800 font-semibold">🎉 Target Reached!</p>
          </div>
        )}

        {/* Settings Controls */}
        <div className="mb-6 space-y-3">
          <div className="flex gap-2 items-center justify-center">
            <label className="text-sm font-medium text-gray-700">Step:</label>
            <input
              type="number"
              value={step}
              onChange={(e) =>
                setStep(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-16 px-2 py-1 border rounded text-center text-sm"
              min="1"
            />
            <label className="text-sm font-medium text-gray-700 ml-4">
              Target:
            </label>
            <input
              type="number"
              value={target}
              onChange={(e) =>
                setTarget(Math.max(1, parseInt(e.target.value) || 10))
              }
              className="w-20 px-2 py-1 border rounded text-center text-sm"
              min="1"
            />
          </div>
        </div>

        <div className="text-8xl font-black text-gray-900 mb-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl py-6 px-4 border-2 border-gray-300 shadow-inner relative">
          {count}
          {/* Progress indicator */}
          <div className="absolute bottom-2 left-2 right-2 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300 rounded-full"
              style={{ width: `${Math.min(100, (count / target) * 100)}%` }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <button
            onClick={incrementCounter}
            disabled={autoIncrement}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ➕ Add {step}
          </button>

          <button
            onClick={() => setAutoIncrement(!autoIncrement)}
            disabled={isAtTarget}
            className={`px-6 py-3 bg-gradient-to-r font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95 text-white disabled:opacity-50 disabled:cursor-not-allowed ${
              autoIncrement
                ? "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                : "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
            }`}
          >
            {autoIncrement ? "⏸️ Stop" : "▶️ Auto"}
          </button>

          <button
            onClick={jumpToTarget}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95"
          >
            🎯 Jump to {target}
          </button>
        </div>

        {/* Secondary Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={undoLast}
            disabled={!canUndo}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ↩️ Undo
          </button>

          <button
            onClick={resetCounter}
            className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95"
          >
            🔄 Reset
          </button>
        </div>

        {/* Stats */}
        <div className="mt-6 text-sm text-gray-600 space-y-1">
          <p>Steps taken: {history.length - 1}</p>
          <p>Progress: {Math.min(100, Math.round((count / target) * 100))}%</p>
        </div>
      </div>
    </div>
  );
}
