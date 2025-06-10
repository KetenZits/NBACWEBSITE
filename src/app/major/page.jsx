"use client";

import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      image: "/img/background/background5.jpg",
      quote:
        "การเรียนในสาขาการบัญชีทำให้ข้าพเจ้าได้พัฒนาทักษะด้านการจัดการบัญชีและวางแผนทางการเงินอย่างมีระบบ ด้วยการเรียนรู้ทั้งภาคทฤษฎีและภาคปฏิบัติจากอาจารย์ผู้มีประสบการณ์ ทำให้สามารถประยุกต์ใช้ความรู้ในสถานการณ์จริงได้อย่างมั่นใจ",
      major: "สาขาการบัญชี",
      class: "บริหารธุรกิจ",
    },
    {
      id: 2,
      image: "/img/background/background5.jpg",
      quote:
        "สาขาการเทคโนโลยีสารสนเทศและอุตสาหกรรมดิจิทัลมีหลักสูตรที่ทันสมัย ครอบคลุมเนื้อหาทางด้านไอทีอย่างครบถ้วน ทั้งการเขียนโปรแกรม การออกแบบระบบ และการวิเคราะห์ข้อมูล ซึ่งช่วยเสริมสร้างทักษะที่จำเป็นต่อการทำงานในยุคดิจิทัลได้เป็นอย่างดี",
      major: "สาขาการเทคโนโลยีสารสนเทศและอุตสาหกรรมดิจิตัล",
      class: "บริหารธุรกิจ",
    },
    {
      id: 3,
      image: "/img/background/background5.jpg",
      quote:
        "สาขาการตลาดเปิดโอกาสให้นักเรียนได้เรียนรู้กลยุทธ์ทางการตลาด การวางแผนธุรกิจ และการบริหารแบรนด์ ผ่านการทำโครงการและกิจกรรมที่หลากหลาย ช่วยพัฒนาทักษะการคิดวิเคราะห์และความคิดสร้างสรรค์ให้สามารถต่อยอดได้ในอนาคต",
      major: "สาขาการตลาด",
      class: "บริหารธุรกิจ",
    },
    {
      id: 4,
      image: "/img/background/background5.jpg",
      quote:
        "การเรียนในสาขาคหกรรมเปิดโอกาสให้นักเรียนได้ฝึกฝนทักษะด้านงานบ้าน งานฝีมือ และการประกอบอาหารอย่างมืออาชีพ โดยเน้นทั้งความรู้ภาคทฤษฎีและการปฏิบัติจริง ซึ่งเป็นพื้นฐานสำคัญในการประกอบอาชีพและดูแลครอบครัวได้อย่างมีคุณภาพ",
      major: "สาขาคหกรรม",
      class: "อุตสาหกรรม",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 overflow-hidden">
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgb(59_130_246)_1px,transparent_0)] bg-[length:60px_60px]"></div>
        </div>

        {/* Quote Decorations */}
        <div className="absolute top-8 left-8 md:top-16 md:left-16 text-blue-300/40 text-6xl md:text-8xl font-serif z-10">
          "
        </div>
        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 text-pink-300/40 text-6xl md:text-8xl font-serif z-10 rotate-180">
          "
        </div>

        {/* Main Content */}
        <div className="relative z-20 min-h-screen flex items-center justify-center px-4 md:px-8 py-16">
          <div className="max-w-7xl mx-auto w-full">
            
            {/* Section Title */}
            <div className="text-center mb-16" data-aos="fade-up">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 bg-clip-text text-transparent mb-4">
                สาขาการเรียนที่เปิดสอน
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                ประสบการณ์การเรียนรู้จากนักเรียนในแต่ละสาขาวิชา💫
              </p>
            </div>

            <div className="relative" data-aos="zoom-in" data-aos-delay="200">
              {/* Main Carousel Container */}
              <div className="overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-2xl shadow-blue-500/10">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="min-w-full">
                      {/* Desktop Layout */}
                      <div className="hidden lg:flex items-center gap-8 p-12">
                        {/* Image Section */}
                        <div className="w-1/2">
                          <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-3xl"></div>
                            <img
                              src={testimonial.image}
                              alt={`Testimonial from ${testimonial.author}`}
                              className="relative rounded-3xl shadow-2xl w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500 border border-white/50"
                            />
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-1/2">
                          <div className="space-y-6">
                            {/* Author Info */}
                            <div className="flex items-center gap-4">
                              <div className="h-16 w-1 bg-gradient-to-b from-blue-500 to-pink-500 rounded-full"></div>
                              <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                                  {testimonial.major}
                                </h3>
                                <p className="text-lg text-blue-600 font-medium">
                                  {testimonial.class}
                                </p>
                              </div>
                            </div>

                            {/* Quote */}
                            <blockquote className="text-xl leading-relaxed text-slate-700 font-medium">
                              "{testimonial.quote}"
                            </blockquote>
                          </div>
                        </div>
                      </div>

                      {/* Mobile/Tablet Layout */}
                      <div className="lg:hidden p-6 md:p-8 space-y-6">
                        {/* Image Section */}
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                          <img
                            src={testimonial.image}
                            alt={`Testimonial from ${testimonial.author}`}
                            className="relative rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover border border-white/50"
                          />
                        </div>

                        {/* Content Section */}
                        <div className="space-y-4">
                          {/* Author Info */}
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-1 bg-gradient-to-b from-blue-500 to-pink-500 rounded-full"></div>
                            <div>
                              <h3 className="text-lg md:text-xl font-bold text-slate-800">
                                {testimonial.author}
                              </h3>
                              <p className="text-sm md:text-base text-blue-600 font-medium">
                                {testimonial.class}
                              </p>
                            </div>
                          </div>

                          {/* Quote */}
                          <blockquote className="text-base md:text-lg leading-relaxed text-slate-700 font-medium">
                            "{testimonial.quote}"
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows - Desktop */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-lg border border-white/50 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group shadow-lg z-30 hidden md:flex"
              >
                <svg
                  className="w-6 h-6 text-slate-700 group-hover:-translate-x-0.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-lg border border-white/50 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group shadow-lg z-30 hidden md:flex"
              >
                <svg
                  className="w-6 h-6 text-slate-700 group-hover:translate-x-0.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6 md:hidden">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white/90 backdrop-blur-lg border border-white/50 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
              >
                <svg
                  className="w-5 h-5 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white/90 backdrop-blur-lg border border-white/50 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
              >
                <svg
                  className="w-5 h-5 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-blue-500 to-pink-500 scale-125 shadow-lg"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-6 max-w-md mx-auto">
              <div className="h-2 bg-slate-200/50 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-pink-500 rounded-full transition-all duration-700 shadow-sm"
                  style={{
                    width: `${((currentSlide + 1) / testimonials.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;