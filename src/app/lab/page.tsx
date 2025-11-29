"use client";

import Link from "next/link";
import { FlaskConical, Zap, Waves, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LabPage() {
  const labs = [
    {
      id: "pendulum",
      title: "Con Lắc Đơn",
      subject: "Vật Lý - Cơ Học",
      description: "Mô phỏng dao động của con lắc đơn, quan sát chu kỳ và năng lượng",
      icon: Waves,
      color: "from-blue-500 to-cyan-500",
      href: "/lab/pendulum",
    },
    {
      id: "ohm-law",
      title: "Định Luật Ohm",
      subject: "Vật Lý - Điện Học",
      description: "Thí nghiệm mạch điện, thay đổi điện trở và quan sát dòng điện",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      href: "/lab/ohm-law",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 flex items-center gap-3">
            <FlaskConical className="w-12 h-12 text-purple-600" />
            Phòng Thí Nghiệm 2D
          </h1>
          <p className="text-gray-600 text-xl">
            Khám phá khoa học qua các thí nghiệm mô phỏng tương tác
          </p>
        </div>

        {/* Labs Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {labs.map((lab, index) => {
            const Icon = lab.icon;
            return (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={lab.href}>
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                    <div className={`h-40 bg-gradient-to-r ${lab.color} flex items-center justify-center`}>
                      <Icon className="w-20 h-20 text-white" />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">{lab.subject}</div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                        {lab.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{lab.description}</p>
                      <div className="flex items-center text-purple-600 font-semibold group-hover:gap-3 transition-all">
                        Bắt đầu thí nghiệm
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Features */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Tính Năng Virtual Lab</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Tương Tác Trực Quan</h3>
              <p className="text-gray-600 text-sm">
                Kéo thả, chỉnh thông số và xem kết quả ngay lập tức
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold mb-2">Biểu Đồ Thời Gian Thực</h3>
              <p className="text-gray-600 text-sm">
                Quan sát đồ thị và số liệu cập nhật liên tục
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="font-bold mb-2">Reset & Thử Lại</h3>
              <p className="text-gray-600 text-sm">
                Thí nghiệm không giới hạn, học qua thực hành
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
