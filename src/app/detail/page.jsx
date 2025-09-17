"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import {
  FileText,
  Download,
  Calendar,
  Users,
  Award,
  MapPin,
  Clock,
  Eye,
  Search,
  Filter,
} from "lucide-react";

const SchoolPage = () => {
  const [activeTab, setActiveTab] = useState("documents");
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [counters, setCounters] = useState({
    students: 0,
    years: 0,
    teachers: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fake PDF data
  const pdfFiles = [
    {
      id: 1,
      name: "หลักสูตรการเรียนการสอนบัญชี 2562",
      category: "curriculum",
      size: "2.3 MB",
      downloads: 245,
      date: "2024-01-15",
      url: "/pdf/plan_accounting.pdf",
    },
    {
      id: 2,
      name: "ข้อมูลครู",
      category: "rules",
      date: "2024-02-01",
      url: "/pdf/info_teachers.pdf"
    },
    {
      id: 3,
      name: "ปฏิทินการศึกษา 2567",
      category: "calendar",
      size: "3.2 MB",
      downloads: 332,
      date: "2024-01-10",
    },
    {
      id: 4,
      name: "คู่มือผู้ปกครอง",
      category: "guide",
      size: "4.1 MB",
      downloads: 156,
      date: "2024-02-15",
    },
    {
      id: 5,
      name: "แผนพัฒนาการศึกษา",
      category: "development",
      size: "2.8 MB",
      downloads: 98,
      date: "2024-03-01",
    },
    {
      id: 6,
      name: "กิจกรรมพิเศษ",
      category: "activity",
      size: "1.5 MB",
      downloads: 203,
      date: "2024-03-10",
    },
  ];

  const historyData = [
    {
      year: "2510",
      event: "testevent",
      detail: "testdetail",
      color: "from-blue-400 to-purple-400",
    },
    {
      year: "2520",
      event: "testevent",
      detail: "testdetail",
      color: "from-purple-400 to-pink-400",
    },
    {
      year: "2535",
      event: "testevent",
      detail: "testdetail",
      color: "from-pink-400 to-blue-400",
    },
    {
      year: "2550",
      event: "testevent",
      detail: "testdetail",
      color: "from-blue-400 to-cyan-400",
    },
    {
      year: "2567",
      event: "ปัจจุบัน",
      detail: "testdetail",
      color: "from-cyan-400 to-pink-400",
    },
  ];

  const categories = {
    curriculum: {
      name: "หลักสูตร",
      color: "from-blue-500 to-purple-500",
      icon: "📚",
    },
    rules: { name: "ระเบียบ", color: "from-pink-500 to-red-500", icon: "📋" },
    calendar: {
      name: "ปฏิทิน",
      color: "from-green-400 to-blue-500",
      icon: "📅",
    },
    guide: { name: "คู่มือ", color: "from-purple-500 to-pink-500", icon: "📖" },
    development: {
      name: "พัฒนา",
      color: "from-orange-400 to-pink-500",
      icon: "🚀",
    },
    activity: {
      name: "กิจกรรม",
      color: "from-cyan-400 to-purple-500",
      icon: "🎨",
    },
  };

  // Counter animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCounters((prev) => ({
        students: prev.students < 999 ? prev.students + 20 : 1000,
        years: prev.years < 99 ? prev.years + 1 : 99,
        teachers: prev.teachers < 99 ? prev.teachers + 1 : 99,
      }));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handlePdfClick = (pdf) => {
    setSelectedPdf(pdf);
    document.getElementById("pdf_modal").showModal();
  };

  const filteredPdfs = pdfFiles.filter((pdf) => {
    const matchesSearch = pdf.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || pdf.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Animated Background */}
      <Navbar />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20">
            <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              NBAC
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              สร้างเสริมคุณธรรม ก้าวนำการเรียนรู้ พัฒนาสู่มาตรฐานวิชาชีพ
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="backdrop-blur-md bg-white/20 rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-500 group">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {counters.students}
                </div>
                <div className="text-blue-100">นักเรียน</div>
              </div>

              <div className="backdrop-blur-md bg-white/20 rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-500 group">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {counters.years}
                </div>
                <div className="text-purple-100">ปีที่ก่อตั้ง</div>
              </div>

              <div className="backdrop-blur-md bg-white/20 rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-500 group">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                  {counters.teachers}
                </div>
                <div className="text-pink-100">ครูผู้สอน</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="relative z-20 -mt-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="backdrop-blur-md bg-white/20 rounded-2xl p-2 border border-white/30 shadow-xl">
              <div className="flex space-x-2">
                <button
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "documents"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
                  }`}
                  onClick={() => setActiveTab("documents")}
                >
                  <FileText className="w-5 h-5 mr-2 inline" />
                  เอกสารและไฟล์
                </button>
                <button
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "history"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
                  }`}
                  onClick={() => setActiveTab("history")}
                >
                  <Clock className="w-5 h-5 mr-2 inline" />
                  ประวัติโรงเรียน
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Documents Tab */}
        {activeTab === "documents" && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                เอกสารและไฟล์ดาวน์โหลด
              </h2>
              <p className="text-gray-600 text-lg">
                รวบรวมเอกสารสำคัญทั้งหมดไว้ในที่เดียว
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="ค้นหาเอกสาร..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 bg-white/80 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 placeholder-gray-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  className="pl-12 pr-8 py-4 rounded-2xl border-0 bg-white/80 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 appearance-none cursor-pointer"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">ทุกหมวดหมู่</option>
                  {Object.entries(categories).map(([key, cat]) => (
                    <option key={key} value={key}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(categories).map(([key, cat]) => (
                <div
                  key={key}
                  className={`px-6 py-3 rounded-full bg-gradient-to-r ${cat.color} text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.name}
                </div>
              ))}
            </div>

            {/* PDF Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPdfs.map((pdf) => (
                <div key={pdf.id} className="group relative">
                  <div className="backdrop-blur-md bg-white/50 rounded-3xl px-9 py-9 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/90">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`px-4 py-2 rounded-xl bg-gradient-to-r ${
                          categories[pdf.category].color
                        } text-white text-sm font-semibold shadow-lg`}
                      >
                        <span className="mr-2">
                          {categories[pdf.category].icon}
                        </span>
                        {categories[pdf.category].name}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="dropdown dropdown-end">
                          <label
                            tabIndex={0}
                            className="btn btn-ghost btn-sm rounded-full hover:bg-purple-100"
                          >
                            ⋮
                          </label>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow-xl bg-white/90 backdrop-blur-md rounded-2xl w-52 border border-white/50"
                          >
                            <li>
                              <a
                                onClick={() => handlePdfClick(pdf)}
                                className="rounded-xl hover:bg-purple-100"
                              >
                                <Eye className="w-4 h-4" />
                                ดูตัวอย่าง
                              </a>
                            </li>
                            <li>
                              <a className="rounded-xl hover:bg-purple-100">
                                <Download className="w-4 h-4" />
                                ดาวน์โหลด
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-bold text-gray-800 mb-4 text-lg leading-tight">
                      {pdf.name}
                    </h3>

                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <span className="bg-gray-100 px-3 py-1 rounded-full">
                        {pdf.date}
                      </span>
                    </div>

                    {/* <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                      <div className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
                        <Download className="w-4 h-4 text-green-600" />
                        <span className="text-green-700 font-semibold">
                          {pdf.downloads} ครั้ง
                        </span>
                      </div>
                    </div> */}

                    <button
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      onClick={() => handlePdfClick(pdf)}
                    >
                      <Eye className="w-5 h-5 mr-2 inline" />
                      ดูเอกสาร
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === "history" && (
  <div className="space-y-8 md:space-y-12">
    <div className="text-center mb-8 md:mb-16 px-4">
      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
        ประวัติความเป็นมา
      </h2>
      <p className="text-gray-600 text-base md:text-lg">
        เส้นทางการเติบโตของโรงเรียนตลอด 57 ปี
      </p>
    </div>

    {/* Timeline */}
    <div className="relative px-4">
      {/* Center line - ซ่อนบนมือถือ แสดงบน desktop */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
      
      {/* Left line สำหรับมือถือ */}
      <div className="md:hidden absolute left-8 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>

      <div className="space-y-8 md:space-y-16">
        {historyData.map((item, index) => (
          <div
            key={index}
            className={`flex items-start md:items-center gap-4 md:gap-8 ${
              // บน desktop สลับซ้าย-ขวา
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Content Card */}
            <div className="flex-1 md:w-5/12 md:flex-none">
              <div
                className={`backdrop-blur-md bg-white/80 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  // บน desktop ถ้าเป็น index คู่ให้ text-right
                  index % 2 === 0 ? "md:text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block px-4 py-2 md:px-6 md:py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-sm md:text-lg mb-3 md:mb-4 shadow-lg`}
                >
                  {item.year}
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
                  {item.event}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>

            {/* Center dot */}
            <div className="relative flex-shrink-0 md:hidden">
              <div
                className={`w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-r ${item.color} shadow-lg border-2 md:border-4 border-white`}
              ></div>
              <div
                className={`absolute inset-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-r ${item.color} animate-ping opacity-30`}
              ></div>
            </div>

            {/* Center dot สำหรับ desktop */}
            <div className="hidden md:block relative">
              <div
                className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} shadow-lg border-4 border-white`}
              ></div>
              <div
                className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r ${item.color} animate-ping opacity-30`}
              ></div>
            </div>

            {/* Empty space สำหรับ desktop */}
            <div className="hidden md:block w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
      </div>
      {/* PDF Modal */}
        <dialog id="pdf_modal" className="modal">
          <div className="modal-box w-11/12 max-w-5xl h-[90vh] bg-white/95 backdrop-blur-md border border-white/50 rounded-3xl flex flex-col">
            {/* ปุ่มปิด */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 hover:bg-red-100 hover:text-red-600"
              onClick={() => document.getElementById("pdf_modal").close()}
            >
              ✕
            </button>
            {selectedPdf && (
              <div className="flex flex-col h-full pt-8">
                {/* Title */}
                <h3 className="font-bold text-2xl mb-4 text-gray-800">
                  {selectedPdf.name}
                </h3>
                {/* PDF Viewer */}
                <div className="flex-1 border border-gray-200 rounded-xl overflow-hidden">
                  <iframe
                    src={selectedPdf.url}
                    className="w-full h-full"
                  />
                </div>
                {/* Download Button */}
                <div className="mt-4 text-right">
                  <a
                    href={selectedPdf.url}
                    download
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    ดาวน์โหลดไฟล์
                  </a>
                </div>
              </div>
            )}
          </div>
          {/* backdrop */}
          <div
            className="modal-backdrop bg-black/50 backdrop-blur-sm"
            onClick={() => document.getElementById("pdf_modal").close()}
          ></div>
        </dialog>
      <Footer />
    </div>
  );
};

export default SchoolPage;
