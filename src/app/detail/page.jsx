"use client";

import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "../components/navbar/Navbar";

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
          
        </div>
        </div>
      </>
  );
};

export default detail;
