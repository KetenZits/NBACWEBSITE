"use client";

import React, { useState, useEffect } from 'react';
import { School, Star, X, Phone, Mail, MapPin, Clock, Users, Award } from 'lucide-react';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Magnet from '../components/Magnet/Magnet';
import AOS from 'aos';
import "aos/dist/aos.css";

const DepartmentPage = () => {

  useEffect(() => {
      AOS.init({
        duration: 1000, // ระยะเวลาของแอนิเมชัน (ms)
        once: false, // ให้เล่นซ้ำเมื่อเลื่อนกลับมา
        mirror: true, // เล่นซ้ำแม้ว่าองค์ประกอบจะออกจากหน้าจอแล้วกลับมา
      });
    }, []);

  const [selectedDepartment, setSelectedDepartment] = useState(null);

  // Modal content สำหรับแต่ละแผนก
  const departmentModalContent = {
    kindergarten: {
      title: "แผนกอนุบาล",
      color: "pink",
      bgGradient: "from-pink-100 to-pink-50",
      borderColor: "border-pink-200",
      buttonColor: "bg-pink-500 hover:bg-pink-600",
      content: {
        description: "test",
        features: [
          "test",
          "test",
          "test",
          "test"
        ],
        contact: {
          phone: "02-XXX-XXXX",
          email: "test@school.ac.th",
          location: "test tower",
          hours: "จันทร์-ศุกร์ 07:30-16:00"
        }
      }
    },
    primary: {
      title: "แผนกประถม",
      color: "blue",
      bgGradient: "from-blue-100 to-blue-50",
      borderColor: "border-blue-200",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      content: {
        description: "test",
        features: [
          "test",
          "test",
          "test",
          "test"
        ],
        contact: {
          phone: "02-XXX-XXXX", 
          email: "test@school.ac.th",
          location: "test tower",
          hours: "จันทร์-ศุกร์ 07:30-16:30"
        }
      }
    },
    secondary: {
      title: "แผนกมัธยม",
      color: "purple",
      bgGradient: "from-purple-100 to-purple-50",
      borderColor: "border-purple-200",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      content: {
        description: "test",
        features: [
          "test",
          "test",
          "test",
          "test"
        ],
        contact: {
          phone: "02-XXX-XXXX",
          email: "test@school.ac.th", 
          location: "test tower",
          hours: "จันทร์-ศุกร์ 07:30-17:00"
        }
      }
    },
    college: {
      title: "แผนกวิทยาลัย",
      color: "indigo",
      bgGradient: "from-indigo-100 to-indigo-50",
      borderColor: "border-indigo-200",
      buttonColor: "bg-indigo-500 hover:bg-indigo-600",
      content: {
        description: "test",
        features: [
          "test",
          "test",
          "test",
          "test"
        ],
        contact: {
          phone: "02-XXX-XXXX",
          email: "test@school.ac.th",
          location: "test tower", 
          hours: "จันทร์-ศุกร์ 08:00-18:00"
        }
      }
    }
  };

  const contactInfo1 = [
    {
      icon: <School className="w-6 h-6" />,
      title: "แผนกอนุบาล",
      details: ["กดเพื่อดูข้อมูลเพิ่มเติม", "Click for more info"],
      color: "text-pink-500",
      modalKey: "kindergarten"
    },
    {
      icon: <School className="w-6 h-6" />,
      title: "แผนกประถม", 
      details: ["กดเพื่อดูข้อมูลเพิ่มเติม", "Click for more info"],
      color: "text-blue-500",
      modalKey: "primary"
    },
  ];

  const contactInfo2 = [
    {
      icon: <School className="w-6 h-6" />,
      title: "แผนกมัธยม",
      details: ["กดเพื่อดูข้อมูลเพิ่มเติม", "Click for more info"],
      color: "text-purple-500",
      modalKey: "secondary"
    },
    {
      icon: <School className="w-6 h-6" />,
      title: "แผนกวิทยาลัย",
      details: ["กดเพื่อดูข้อมูลเพิ่มเติม", "Click for more info"],
      color: "text-indigo-500", 
      modalKey: "college"
    },
  ];

  const openModal = (modalKey) => {
    setSelectedDepartment(modalKey);
  };

  const closeModal = () => {
    setSelectedDepartment(null);
  };

  const currentModal = selectedDepartment ? departmentModalContent[selectedDepartment] : null;

  return (
    <>
    <Navbar />
      <div className="min-h-[75vh] bg-gradient-to-br from-blue-50 via-pink-50 to-blue-100 relative overflow-hidden">
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
                <span className="text-sm text-blue-700">Department</span>
              </div>
              </Magnet>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-6" data-aos="fade-up">
                Another Department
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="250">
                แผนกอื่นๆในเครือนาคประสิทธิ์ ✨
              </p>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 mb-16">
              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo1.map((info, index) => (
                  <div
                    key={index}
                    onClick={() => openModal(info.modalKey)}
                    className="bg-white/70 hover:skew-y-1 hover:skew-x-1 backdrop-blur-xl border border-blue-200/50 rounded-3xl p-6 hover:bg-white/80 hover:shadow-xl hover:shadow-blue-200/20 transition-all duration-500 group cursor-pointer" data-aos="fade-right"
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
              
              <div className="space-y-6">
                {contactInfo2.map((info, index) => (
                  <div
                    key={index}
                    onClick={() => openModal(info.modalKey)}
                    className="bg-white/70 hover:-skew-y-1 hover:-skew-x-1 backdrop-blur-xl border border-blue-200/50 rounded-3xl p-6 hover:bg-white/80 hover:shadow-xl hover:shadow-blue-200/20 transition-all duration-500 group cursor-pointer" data-aos="fade-left"
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

      {/* Modal */}
      {selectedDepartment && currentModal && (
        <div className="fixed inset-0  backdrop-blur-sm z-50 flex items-center justify-center p-4" data-aos="zoom-out">
          <div className={`bg-gradient-to-br ${currentModal.bgGradient} border ${currentModal.borderColor} rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative`}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className={`text-${currentModal.color}-500 text-3xl`}>
                  <School className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  {currentModal.title}
                </h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {currentModal.content.description}
              </p>
            </div>

            {/* Modal Content */}
            <div className="px-8 pb-6">
              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  จุดเด่นของแผนก
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentModal.content.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white/60 rounded-lg p-3">
                      <div className={`w-2 h-2 bg-${currentModal.color}-500 rounded-full`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white/60 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  ข้อมูลติดต่อ
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{currentModal.content.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{currentModal.content.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{currentModal.content.contact.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{currentModal.content.contact.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-8 pt-0">
              <button
                onClick={closeModal}
                className={`w-full ${currentModal.buttonColor} text-white font-semibold py-3 rounded-xl transition-colors`}
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default DepartmentPage;