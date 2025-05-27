"use client";

import React, { useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Squares from "../components/SquareBackground/Square";
import Magnet from "../components/Magnet/Magnet";
import FollowCursor from "../components/FollowCursor/FollowCursor";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Star,
  School,
} from "lucide-react";

const Department = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("ขอบคุณสำหรับข้อความค่ะ! เราจะติดต่อกลับโดยเร็วที่สุด 💕");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "LINE",
      icon: "💬",
      url: "#",
      handle: "@school_official",
      color: "from-green-400 to-green-600",
      hoverColor: "hover:shadow-green-500/25",
    },
    {
      name: "Facebook",
      icon: "📘",
      url: "#",
      handle: "School Official Page",
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:shadow-blue-500/25",
    },
    {
      name: "TikTok",
      icon: "🎵",
      url: "#",
      handle: "@school_tiktok",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:shadow-pink-500/25",
    },
    {
      name: "Instagram",
      icon: "📸",
      url: "#",
      handle: "@school_insta",
      color: "from-purple-500 to-pink-500",
      hoverColor: "hover:shadow-purple-500/25",
    },
  ];

  const contactInfo1 = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["123 School Road", "test, Thailand 10110"],
      color: "text-pink-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["Main: 081-234-5678", "Admissions: 081-234-5679"],
      color: "text-blue-500",
    },
  ];

  const contactInfo2 = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["test@school.ac.th", "test@school.ac.th"],
      color: "text-purple-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: ["Mon-Fri: 8:00 AM - 4:00 PM", "Sat: 9:00 AM - 12:00 PM"],
      color: "text-indigo-500",
    },
  ];

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
          {/* Header Section */}
          <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Magnet padding={50} disabled={false} magnetStrength={5}>
                <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-2 mb-6">
                  <Star className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-blue-700">Another Department</span>
                </div>
              </Magnet>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500  to-pink-500 bg-clip-text text-transparent mb-6">
                Another Department
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                แผนกอื่นๆในเครือนาคประสิทธิ์ ✨
              </p>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Contact Information */}
              <div className="space-y-6 ">
                {contactInfo1.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white/70 hover:skew-y-1 hover:skew-x-1 backdrop-blur-xl border border-blue-200/50 rounded-3xl p-6 hover:bg-white/80 hover:shadow-xl hover:shadow-blue-200/20 transition-all duration-500 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`${info.color} text-2xl`}>
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600  transition-colors">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-gray-600 hover:text-gray-800 transition-colors"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {contactInfo2.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white/70 hover:-skew-y-1 hover:-skew-x-1 backdrop-blur-xl border border-blue-200/50 rounded-3xl p-6 hover:bg-white/80 hover:shadow-xl hover:shadow-blue-200/20 transition-all duration-500 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`${info.color} text-2xl`}>
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-gray-600 hover:text-gray-800 transition-colors"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Department;
