"use client";

import Link from "next/link";
import { BookOpen, Bot, FlaskConical, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const features = [
    {
      icon: Bot,
      title: "AI Chatbot Học Tập",
      description: "Trợ lý AI thông minh giúp bạn giải đáp mọi thắc mắc học tập",
      href: "/chatbot",
      color: "bg-blue-500",
    },
    {
      icon: BookOpen,
      title: "Kho Kiến Thức",
      description: "Kho tài liệu chuẩn hoá với nội dung Vật Lý, Hoá Học, Sinh Học",
      href: "/knowledge",
      color: "bg-green-500",
    },
    {
      icon: FlaskConical,
      title: "Phòng Thí Nghiệm 2D",
      description: "Mô phỏng thí nghiệm trực quan, tương tác để hiểu sâu hơn",
      href: "/lab",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Học Nhanh Hơn, Dễ Hiểu Hơn
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Nền tảng EdTech kết hợp AI giúp học sinh học tập hiệu quả với chatbot thông minh, 
            kho kiến thức chuẩn hoá và phòng thí nghiệm mô phỏng 2D
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/knowledge"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Khám Phá Ngay
            </Link>
            <Link
              href="/lab"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Thử Phòng Lab
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={feature.href}>
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full border border-gray-100">
                    <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Bài Học</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-blue-100">Thí Nghiệm</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">AI Hỗ Trợ</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
