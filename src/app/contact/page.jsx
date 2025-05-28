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
} from "lucide-react";

const ContactPage = () => {
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
                  <span className="text-sm text-blue-700">Get In Touch</span>
                </div>
              </Magnet>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500  to-pink-500 bg-clip-text text-transparent mb-6">
                Contact Us
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Ready to join our amazing school community? We'd love to hear
                from you! Reach out through any of these channels and let's
                start your journey! ✨
              </p>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 mb-16">
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

              {/* Quick Contact Actions */}
              {/* <div className="bg-white/70 backdrop-blur-xl border border-pink-200/50 rounded-3xl p-8 hover:bg-white/80 hover:shadow-xl hover:shadow-pink-200/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Quick Contact</h2>
              </div>

              <div className="space-y-4">
                <a 
                  href="tel:+66812345678"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Phone className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Call Now</div>
                    <div className="text-sm opacity-90">081-234-5678</div>
                  </div>
                </a>

                <a 
                  href="mailto:info@school.ac.th"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Mail className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-sm opacity-90">info@school.ac.th</div>
                  </div>
                </a>

                <a 
                  href="https://line.me/R/ti/p/@school"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">LINE Chat</div>
                    <div className="text-sm opacity-90">@school_official</div>
                  </div>
                </a>
              </div>
            </div> */}
            </div>

            {/* Social Media Section */}
            <div className="bg-white/70 backdrop-blur-xl border border-blue-200/50 rounded-3xl p-8 mb-16 hover:bg-white/80 hover:shadow-xl hover:shadow-blue-200/20 transition-all duration-500">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Follow Us on Social Media
                </h2>
                <p className="text-gray-600 text-lg">
                  Stay connected and see what's happening at our school! 📱
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`group relative bg-gradient-to-br ${social.color} p-6 rounded-2xl hover:skew-3 transition-all duration-300 hover:shadow-2xl ${social.hoverColor} overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="text-4xl mb-3">{social.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {social.name}
                      </h3>
                      <p className="text-white/80 text-sm">{social.handle}</p>
                    </div>

                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white/70 backdrop-blur-xl border border-pink-200/50 rounded-3xl p-8 hover:bg-white/80 hover:shadow-xl hover:shadow-pink-200/20 transition-all duration-500">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Find Us
                </h2>
                <p className="text-gray-600 text-lg">
                  Come visit our beautiful campus!
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-8 text-center border border-blue-200/30">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Our School
                </h3>
                <p className="text-gray-600 mb-4">
                  123 School Road, Bangkok, Thailand 10110
                </p>
                <button className="bg-gradient-to-r from-blue-400 to-pink-400 hover:from-blue-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Padding */}
          <div className="h-20"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
