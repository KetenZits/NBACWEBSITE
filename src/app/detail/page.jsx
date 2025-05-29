"use client";

import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer"
import Magnet from "../components/Magnet/Magnet";
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
  FileText,
} from "lucide-react";

const detail = () => {

  const document = [
    {
      id: 1,
      title: "AI Chat Bot โรงเรียน",
      file:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    },
  ]

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
          

          <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <Magnet padding={50} disabled={false} magnetStrength={5}>
                <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-2 mb-6">
                  <FileText className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-blue-700">Trophy</span>
                </div>
              </Magnet>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 pt-5">
                เกี่ยวกับวิทยาลัยเทคโนโลยีนาคประสิทธิ์
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                ข้อมูลต่างๆที่เกี่ยวกับวิทยาลัยของเรา 💫
              </p>
            </div>
          </div>
        </div>
        </div>
        <Footer />
      </>
  );
};

export default detail;
