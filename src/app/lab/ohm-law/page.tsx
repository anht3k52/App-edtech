"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Zap } from "lucide-react";
import Link from "next/link";

export default function OhmLawLabPage() {
  const [voltage, setVoltage] = useState(12);
  const [resistance, setResistance] = useState(100);
  const [current, setCurrent] = useState(0);
  const [power, setPower] = useState(0);

  useEffect(() => {
    // Calculate I = V / R
    const I = voltage / resistance;
    setCurrent(I);

    // Calculate P = V * I
    const P = voltage * I;
    setPower(P);
  }, [voltage, resistance]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <Link
          href="/lab"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Quay lại Phòng Lab
        </Link>

        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <Zap className="w-10 h-10 text-orange-600" />
          Định Luật Ohm
        </h1>
        <p className="text-gray-600 mb-8">
          Thí nghiệm mạch điện đơn giản với pin, điện trở và ampe kế
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Circuit Visualization */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Mạch Điện</h3>

            <svg viewBox="0 0 400 300" className="w-full">
              {/* Battery */}
              <g>
                <line x1="50" y1="150" x2="100" y2="150" stroke="#333" strokeWidth="3" />
                <line x1="100" y1="130" x2="100" y2="170" stroke="#dc2626" strokeWidth="4" />
                <line x1="110" y1="140" x2="110" y2="160" stroke="#dc2626" strokeWidth="4" />
                <text x="100" y="200" fontSize="14" textAnchor="middle" fill="#333">
                  {voltage}V
                </text>
              </g>

              {/* Top wire */}
              <line x1="110" y1="150" x2="200" y2="150" stroke="#333" strokeWidth="3" />

              {/* Resistor */}
              <g>
                <rect
                  x="200"
                  y="135"
                  width="80"
                  height="30"
                  fill="#fbbf24"
                  stroke="#333"
                  strokeWidth="2"
                />
                <text x="240" y="155" fontSize="16" textAnchor="middle" fill="#000" fontWeight="bold">
                  R
                </text>
                <text x="240" y="120" fontSize="14" textAnchor="middle" fill="#333">
                  {resistance}Ω
                </text>
              </g>

              {/* Right wire */}
              <line x1="280" y1="150" x2="350" y2="150" stroke="#333" strokeWidth="3" />

              {/* Bottom wire */}
              <line x1="350" y1="150" x2="350" y2="250" stroke="#333" strokeWidth="3" />
              <line x1="350" y1="250" x2="50" y2="250" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="250" x2="50" y2="150" stroke="#333" strokeWidth="3" />

              {/* Ammeter on bottom wire */}
              <circle cx="200" cy="250" r="25" fill="#e0f2fe" stroke="#0284c7" strokeWidth="3" />
              <text x="200" y="255" fontSize="16" textAnchor="middle" fill="#0284c7" fontWeight="bold">
                A
              </text>
              <text x="200" y="290" fontSize="12" textAnchor="middle" fill="#0284c7">
                {current.toFixed(2)}A
              </text>

              {/* Current flow arrows */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="5"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3, 0 6" fill="#ef4444" />
                </marker>
              </defs>
              <line
                x1="150"
                y1="140"
                x2="180"
                y2="140"
                stroke="#ef4444"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
            </svg>

            {/* Results */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {current.toFixed(3)}
                </div>
                <div className="text-sm text-gray-600 mt-1">Dòng điện (A)</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-orange-600">
                  {power.toFixed(2)}
                </div>
                <div className="text-sm text-gray-600 mt-1">Công suất (W)</div>
              </div>
            </div>
          </div>

          {/* Controls & Theory */}
          <div className="space-y-6">
            {/* Parameters */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Điều Chỉnh Thông Số</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Hiệu điện thế (V): {voltage}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="24"
                    value={voltage}
                    onChange={(e) => setVoltage(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1V</span>
                    <span>24V</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Điện trở (Ω): {resistance}
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={resistance}
                    onChange={(e) => setResistance(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10Ω</span>
                    <span>500Ω</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulas */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-orange-900">Công Thức</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded font-mono text-center">
                  V = I × R
                </div>
                <div className="bg-white p-3 rounded font-mono text-center">
                  P = V × I = I²R = V²/R
                </div>
                <div className="text-gray-700 text-xs mt-4 space-y-1">
                  <p><strong>V:</strong> Hiệu điện thế (Volt)</p>
                  <p><strong>I:</strong> Cường độ dòng điện (Ampere)</p>
                  <p><strong>R:</strong> Điện trở (Ohm)</p>
                  <p><strong>P:</strong> Công suất (Watt)</p>
                </div>
              </div>
            </div>

            {/* Key Concepts */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-yellow-900">Ghi Nhớ</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-yellow-600">•</span>
                  <span>Dòng điện tỉ lệ thuận với hiệu điện thế</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600">•</span>
                  <span>Dòng điện tỉ lệ nghịch với điện trở</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600">•</span>
                  <span>Công suất tăng khi điện trở giảm (với V không đổi)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
