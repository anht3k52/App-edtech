"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, ArrowLeft } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import p5 component to avoid SSR issues
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function PendulumLabPage() {
  const [length, setLength] = useState(200);
  const [angle, setAngle] = useState(30);
  const [gravity, setGravity] = useState(9.8);
  const [isRunning, setIsRunning] = useState(false);
  const [period, setPeriod] = useState(0);

  // P5 simulation state
  const angleRadRef = useRef(0);
  const angularVelRef = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    // Calculate theoretical period: T = 2π√(L/g)
    const T = 2 * Math.PI * Math.sqrt(length / (gravity * 100));
    setPeriod(T);
  }, [length, gravity]);

  const setup = (p5: any, canvasParentRef: Element) => {
    p5.createCanvas(600, 500).parent(canvasParentRef);
    angleRadRef.current = (angle * Math.PI) / 180;
  };

  const draw = (p5: any) => {
    p5.background(240, 245, 255);

    // Draw ceiling
    p5.stroke(100);
    p5.strokeWeight(4);
    p5.line(0, 100, 600, 100);

    // Pivot point
    const pivotX = 300;
    const pivotY = 100;

    // Calculate pendulum position
    const bobX = pivotX + length * Math.sin(angleRadRef.current);
    const bobY = pivotY + length * Math.cos(angleRadRef.current);

    // Draw string
    p5.stroke(60);
    p5.strokeWeight(2);
    p5.line(pivotX, pivotY, bobX, bobY);

    // Draw bob
    p5.fill(59, 130, 246);
    p5.noStroke();
    p5.circle(bobX, bobY, 30);

    // Physics simulation
    if (isRunning) {
      const angleAccel = (-gravity / (length / 100)) * Math.sin(angleRadRef.current);
      angularVelRef.current += angleAccel * 0.016; // assuming ~60fps
      angleRadRef.current += angularVelRef.current * 0.016;
      angularVelRef.current *= 0.999; // slight damping
      timeRef.current += 0.016;
    }

    // Display info
    p5.fill(60);
    p5.noStroke();
    p5.textSize(14);
    p5.text(`Góc hiện tại: ${(angleRadRef.current * 180 / Math.PI).toFixed(1)}°`, 10, 30);
    p5.text(`Thời gian: ${timeRef.current.toFixed(1)}s`, 10, 50);
  };

  const handleReset = () => {
    angleRadRef.current = (angle * Math.PI) / 180;
    angularVelRef.current = 0;
    timeRef.current = 0;
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <Link
          href="/lab"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Quay lại Phòng Lab
        </Link>

        <h1 className="text-4xl font-bold mb-2">Con Lắc Đơn</h1>
        <p className="text-gray-600 mb-8">
          Mô phỏng dao động điều hoà của con lắc đơn
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Simulation Canvas */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <Sketch setup={setup} draw={draw} />

              {/* Controls */}
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  {isRunning ? (
                    <>
                      <Pause className="w-5 h-5" /> Tạm dừng
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" /> Chạy
                    </>
                  )}
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" /> Reset
                </button>
              </div>
            </div>
          </div>

          {/* Parameters */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Thông Số</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Chiều dài dây (cm): {length}
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="300"
                    value={length}
                    onChange={(e) => {
                      setLength(Number(e.target.value));
                      if (!isRunning) handleReset();
                    }}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Góc ban đầu (độ): {angle}
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="80"
                    value={angle}
                    onChange={(e) => {
                      setAngle(Number(e.target.value));
                      if (!isRunning) handleReset();
                    }}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Gia tốc trọng trường (m/s²): {gravity}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="0.1"
                    value={gravity}
                    onChange={(e) => setGravity(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Theory */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-blue-900">Công Thức</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-3 rounded font-mono">
                  T = 2π√(L/g)
                </div>
                <p className="text-gray-700">
                  <strong>Chu kỳ lý thuyết:</strong> {period.toFixed(2)}s
                </p>
                <p className="text-gray-600 text-xs mt-4">
                  T: Chu kỳ (s)<br />
                  L: Chiều dài dây (m)<br />
                  g: Gia tốc trọng trường (m/s²)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
