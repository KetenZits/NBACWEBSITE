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
    author: "สาขาการบัญชี",
    class: "บริหารธุรกิจ",
  },
  {
    id: 2,
    image: "/img/background/background5.jpg",
    quote:
      "สาขาการเทคโนโลยีสารสนเทศและอุตสาหกรรมดิจิทัลมีหลักสูตรที่ทันสมัย ครอบคลุมเนื้อหาทางด้านไอทีอย่างครบถ้วน ทั้งการเขียนโปรแกรม การออกแบบระบบ และการวิเคราะห์ข้อมูล ซึ่งช่วยเสริมสร้างทักษะที่จำเป็นต่อการทำงานในยุคดิจิทัลได้เป็นอย่างดี",
    author: "สาขาการเทคโนโลยีสารสนเทศและอุตสาหกรรมดิจิตัล",
    class: "บริหารธุรกิจ",
  },
  {
    id: 3,
    image: "/img/background/background5.jpg",
    quote:
      "สาขาการตลาดเปิดโอกาสให้นักเรียนได้เรียนรู้กลยุทธ์ทางการตลาด การวางแผนธุรกิจ และการบริหารแบรนด์ ผ่านการทำโครงการและกิจกรรมที่หลากหลาย ช่วยพัฒนาทักษะการคิดวิเคราะห์และความคิดสร้างสรรค์ให้สามารถต่อยอดได้ในอนาคต",
    author: "สาขาการตลาด",
    class: "บริหารธุรกิจ",
  },
  {
    id: 4,
    image: "/img/background/background5.jpg",
    quote:
      "การเรียนในสาขาคหกรรมเปิดโอกาสให้นักเรียนได้ฝึกฝนทักษะด้านงานบ้าน งานฝีมือ และการประกอบอาหารอย่างมืออาชีพ โดยเน้นทั้งความรู้ภาคทฤษฎีและการปฏิบัติจริง ซึ่งเป็นพื้นฐานสำคัญในการประกอบอาชีพและดูแลครอบครัวได้อย่างมีคุณภาพ",
    author: "สาขาคหกรรม",
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

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-gradient-to-br from-white via-blue-400/25 to-pink-300/35 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:50px_50px]"></div>
        </div>

        {/* Large Quote Marks */}
        <div className="absolute top-12 left-12 text-pink-400 text-8xl font-serif opacity-30 z-10">
          "
        </div>
        <div className="absolute bottom-12 right-12 text-pink-400 text-8xl font-serif opacity-30 z-10 rotate-180">
          "
        </div>

        {/* Main Content */}
        <div className="relative z-20 min-h-screen flex items-center justify-center px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="min-w-full">
                      <div className="flex flex-col w-7/12 sm:w-full mx-auto lg:flex-row items-center gap-12 p-8">
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2">
                          <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <img
                              src={testimonial.image}
                              alt={`Testimonial from ${testimonial.author}`}
                              className="relative rounded-2xl shadow-2xl w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full lg:w-1/2 text-white">
                          <div className="relative">
                            {/* Quote Content */}
                            {/* Author Info */}
                            <div className="flex items-center gap-4">
                              <div className="h-12 w-1 bg-gradient-to-b from-blue-400 to-pink-500 rounded-full"></div>
                              <div>
                                <p className="text-blue-600 font-semibold text-lg">
                                  {testimonial.author}
                                </p>
                                <p className="text-pink-400 text-sm font-light">
                                  {testimonial.class}
                                </p>
                              </div>
                            </div>
                            <blockquote className="text-xl lg:text-2xl leading-relaxed mb-8 font-light text-pink-400">
                              {testimonial.quote}
                            </blockquote>

                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="hidden absolute sm:left-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full sm:flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group z-30"
              >
                <svg
                  className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="hidden absolute sm:right-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full sm:flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group z-30"
              >
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-12 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-yellow-400 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-6 max-w-md mx-auto">
              <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-pink-500 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      ((currentSlide + 1) / testimonials.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      <Footer />
    </>
  );
};

export default page;
