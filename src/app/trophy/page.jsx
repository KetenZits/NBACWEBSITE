"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import {
  Star,
  Award,
  Eye,
  Heart,
  Filter,
  Search,
  Calendar,
  User,
  Trophy,
  Camera,
  Palette,
  Code,
  Music,
  BookOpen,
  Zap,
} from "lucide-react";
import Magnet from "../components/Magnet/Magnet";

const page = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "ทั้งหมด", icon: <Star className="w-4 h-4" /> },
    { id: "art", name: "ศิลปะ", icon: <Palette className="w-4 h-4" /> },
    { id: "tech", name: "เทคโนโลยี", icon: <Code className="w-4 h-4" /> },
    { id: "music", name: "ดนตรี", icon: <Music className="w-4 h-4" /> },
    { id: "academic", name: "วิชาการ", icon: <BookOpen className="w-4 h-4" /> },
    { id: "photo", name: "ภาพถ่าย", icon: <Camera className="w-4 h-4" /> },
  ];
  //เพิ่มข้อมูลผลงานนักเรียน
  const portfolios = [
    {
      id: 1,
      title: "test",
      student: "testname",
      class: "test",
      category: "tech",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      description: "test",
      likes: 245,
      views: 1520,
      date: "2024-03-15",
      tags: ["AI", "Python", "Machine Learning"],
      award: "test",
    },
    {
      id: 2,
      title: "test",
      student: "testname",
      class: "test",
      category: "test",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=300&fit=crop",
      description: "test",
      likes: 189,
      views: 890,
      date: "2024-03-12",
      tags: ["Digital Art", "Anime", "Illustration"],
      award: null,
    },
    {
      id: 3,
      title: "test",
      student: "testname",
      class: "test",
      category: "music",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
      description: "test'",
      likes: 167,
      views: 743,
      date: "2024-03-10",
      tags: ["Original Song", "Performance", "Theater"],
      award: "test",
    },
    {
      id: 4,
      title: "test",
      student: "testname",
      class: "test",
      category: "test",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&h=300&fit=crop",
      description: "test",
      likes: 134,
      views: 567,
      date: "2024-03-08",
      tags: ["Science", "Research", "Environment"],
      award: "test",
    },
    {
      id: 5,
      title: "test",
      student: "testname",
      class: "test",
      category: "photo",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
      description: "test",
      likes: 203,
      views: 1234,
      date: "2024-03-05",
      tags: ["Nature", "Photography", "School Life"],
      award: null,
    },
    {
      id: 6,
      title: "test",
      student: "testname",
      class: "test",
      category: "tech",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      description: "test",
      likes: 298,
      views: 1876,
      date: "2024-03-01",
      tags: ["Web Development", "Next.js", "React"],
      award: "test",
    },
    {
      id: 7,
      title: "test",
      student: "testname",
      class: "test",
      category: "science",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      description: "test",
      likes: 15000,
      views: 20000,
      date: "2024-04-015",
      tags: ["science", "physic"],
      award: "test",
    },
  ];
  //เพิ่มข้อมูลผลงานนักเรียน
  const filteredPortfolios = portfolios.filter((portfolio) => {
    const matchesFilter =
      activeFilter === "all" || portfolio.category === activeFilter;
    const matchesSearch =
      portfolio.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      portfolio.student.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <Magnet padding={50} disabled={false} magnetStrength={5}>
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-2 mb-6">
                <Trophy className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-blue-700">Student Showcase</span>
              </div>
              </Magnet>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                ผลงานนักเรียน
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                ชมผลงานสร้างสรรค์และนวัตกรรมจากน้องๆ
                นักเรียนโรงเรียนนาคประสิทธิ์ ✨
              </p>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
            <div className="bg-white/70 backdrop-blur-xl border border-blue-200/50 rounded-3xl p-6">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="ค้นหาผลงาน..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered w-full pl-12 bg-white/80 border-blue-200 focus:border-blue-400"
                  />
                </div>

                {/* Filter Categories */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`btn btn-sm gap-2 transition-all duration-300 ${
                        activeFilter === category.id
                          ? "btn-primary bg-gradient-to-r from-blue-500 to-purple-500 border-none text-white"
                          : "btn-ghost bg-white/60 hover:bg-white/80"
                      }`}
                    >
                      {category.icon}
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolios.map((portfolio) => (
                <div
                  key={portfolio.id}
                  className="card bg-white/80 backdrop-blur-xl border border-blue-200/50 hover:bg-white/90 hover:shadow-2xl hover:shadow-blue-200/20 transition-all duration-500 hover:-translate-y-2 group"
                >
                  {/* Image */}
                  <figure className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={portfolio.image}
                      alt={portfolio.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {portfolio.award && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        รางวัล
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {portfolio.views.toLocaleString()}
                    </div>
                  </figure>

                  <div className="card-body p-6">
                    {/* Title */}
                    <h3 className="card-title text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {portfolio.title}
                    </h3>

                    {/* Student Info */}
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{portfolio.student}</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {portfolio.class}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {portfolio.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {portfolio.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="badge badge-outline badge-sm border-blue-300 text-blue-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Award */}
                    {portfolio.award && (
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-3 mb-4">
                        <div className="flex items-center gap-2 text-yellow-700">
                          <Trophy className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {portfolio.award}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-blue-100">
                      <div className="flex items-center gap-4 text-gray-500">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{portfolio.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{portfolio.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredPortfolios.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-600 mb-2">
                  ไม่พบผลงาน
                </h3>
                <p className="text-gray-500">
                  ลองเปลี่ยนคำค้นหาหรือหมวดหมู่ดูนะ
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
