"use client";

import { useState } from "react";
import { Search, BookOpen, ChevronRight } from "lucide-react";
import knowledgeData from "@/data/knowledge.json";
import { motion } from "framer-motion";

type Lesson = {
  id: string;
  title: string;
  content: string;
  formulas?: string[];
  concepts: string[];
};

type Chapter = {
  id: string;
  name: string;
  lessons: Lesson[];
};

type Subject = {
  id: string;
  name: string;
  icon: string;
  color: string;
  chapters: Chapter[];
};

export default function KnowledgePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const subjects = knowledgeData.subjects as Subject[];

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subject.chapters.some((chapter) =>
      chapter.lessons.some((lesson) =>
        lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <BookOpen className="w-10 h-10 text-blue-600" />
            Kho Kiến Thức
          </h1>
          <p className="text-gray-600 text-lg">
            Khám phá kho tài liệu chuẩn hoá về Vật Lý, Hoá Học, Sinh Học
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm bài học, khái niệm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Subjects List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-xl font-bold mb-4">Môn Học</h2>
              <div className="space-y-2">
                {filteredSubjects.map((subject) => (
                  <button
                    key={subject.id}
                    onClick={() => {
                      setSelectedSubject(subject);
                      setSelectedLesson(null);
                    }}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      selectedSubject?.id === subject.id
                        ? "bg-blue-100 border-2 border-blue-500"
                        : "hover:bg-gray-100 border-2 border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{subject.icon}</span>
                      <div className="flex-1">
                        <div className="font-semibold">{subject.name}</div>
                        <div className="text-sm text-gray-500">
                          {subject.chapters.reduce(
                            (acc, ch) => acc + ch.lessons.length,
                            0
                          )}{" "}
                          bài học
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chapters & Lessons */}
          <div className="lg:col-span-2">
            {!selectedSubject ? (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">
                  Chọn một môn học để xem nội dung
                </p>
              </div>
            ) : !selectedLesson ? (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">{selectedSubject.icon}</span>
                  {selectedSubject.name}
                </h2>
                <div className="space-y-6">
                  {selectedSubject.chapters.map((chapter) => (
                    <div key={chapter.id}>
                      <h3 className="text-xl font-semibold mb-3 text-gray-700">
                        {chapter.name}
                      </h3>
                      <div className="space-y-2">
                        {chapter.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => setSelectedLesson(lesson)}
                            className="w-full text-left p-4 rounded-lg hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{lesson.title}</span>
                              <ChevronRight className="w-5 h-5 text-gray-400" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm p-8"
              >
                <button
                  onClick={() => setSelectedLesson(null)}
                  className="mb-4 text-blue-600 hover:text-blue-700 flex items-center gap-2"
                >
                  ← Quay lại
                </button>
                <h2 className="text-3xl font-bold mb-4">{selectedLesson.title}</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 text-lg mb-6">
                    {selectedLesson.content}
                  </p>

                  {selectedLesson.formulas && selectedLesson.formulas.length > 0 && (
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <h3 className="text-xl font-semibold mb-4 text-blue-900">
                        Công Thức
                      </h3>
                      <div className="space-y-2">
                        {selectedLesson.formulas.map((formula, idx) => (
                          <div
                            key={idx}
                            className="bg-white p-3 rounded font-mono text-lg"
                          >
                            {formula}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-green-900">
                      Khái Niệm Chính
                    </h3>
                    <ul className="space-y-3">
                      {selectedLesson.concepts.map((concept, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span className="text-gray-700">{concept}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
