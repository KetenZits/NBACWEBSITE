"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // ระยะเวลาของแอนิเมชัน (ms)
      once: false, // ให้เล่นซ้ำเมื่อเลื่อนกลับมา
      mirror: true, // เล่นซ้ำแม้ว่าองค์ประกอบจะออกจากหน้าจอแล้วกลับมา
    });
  }, []);

  const router = useRouter();

  const logo = "/img/logo/logo.png";
  const linkClass =
    "relative inline-block text-black transition-all duration-300 ease-in-out hover:scale-105 hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-50">
      <div className="flex justify-evenly items-center p-2 background-color-white shadow-xl max-h-[110px]">
        <div
          className="flex justify-center items-center space-x-2"
          data-aos="fade-right"
        >
          <img src={logo} alt="logo" className="max-w-[65px] lg:max-w-[85px]" />
          <h1 className="bg-gradient-to-r from-fuchsia-400 to-blue-400 bg-clip-text text-transparent text-[16px] lg:text-xl font-bold">
            <a href="#" onClick={() => router.push("./home")}>
              วิทยาลัยเทคโนโลยี <br />
              นาคประสิทธิ์บริหารธุรกิจ
            </a>
          </h1>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <ul
            className="font-semibold text-lg hidden lg:flex justify-between items-center space-x-4"
            data-aos="fade-left"
          >
            <li>
              <a href="/detail" className={linkClass}>
                เกี่ยวกับวิทยาลัย
              </a>
            </li>
            <li>
              <a href="/major" className={linkClass}>
                หลักสูตรการศึกษา
              </a>
            </li>
            <li>
              <a href="/department" className={linkClass}>
                แผนกต่างๆ
              </a>
            </li>
            <li>
              <a href="/trophy" className={linkClass}>
                ผลงาน
              </a>
            </li>
            <a
              href="/contact"
              className="btn btn-info text-[16px] text-white hidden lg:flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              ติดต่อเรา
            </a>
          </ul>

          <button
            className="swap swap-rotate lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            className={`absolute top-[80px] left-0 w-full bg-white shadow-xl z-50 overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-[300px]" : "max-h-0"
            }`}
          >
            <ul className="flex flex-col items-center space-y-4 py-4 text-[18px] font-semibold">
              <li>
                <a href="/detail" className={linkClass}>
                  เกี่ยวกับวิทยาลัย
                </a>
              </li>
              <li>
                <a href="/major" className={linkClass}>
                  หลักสูตรการศึกษา
                </a>
              </li>
              <li>
                <a href="/department" className={linkClass}>
                  แผนกต่างๆ
                </a>
              </li>
              <li>
                <a href="/trophy" className={linkClass}>
                  ผลงาน
                </a>
              </li>
              <li>
                <a href="/contact" className="btn btn-info text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
