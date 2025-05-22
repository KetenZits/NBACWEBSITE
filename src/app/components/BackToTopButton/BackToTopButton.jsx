"use client";

// components/BackToTopButton.js
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // หรือใช้ icon อื่นก็ได้

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200); // แสดงปุ่มเมื่อ scroll เกิน 200px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black/60 text-white shadow-lg transition-opacity duration-300 cursor-pointer ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
}
