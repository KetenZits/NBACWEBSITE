"use client";

import { useEffect } from "react";
import SplitText from "./components/SplitText/SplitText";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const logo = "/img/logo/logo.png";

  return (
    <main
      className="min-h-screen
    bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0)),url('/img/background/background5.jpg')]
    bg-cover
    bg-fixed
    bg-center
    bg-no-repeat
    flex items-center justify-center
    shadow-lg
    flex-col
    overflow-x-hidden overflow-y-hidden"
    >
      <div
        className="flex justify-center items-center flex-col 
      bg-[url(/img/banner/banner.jfif)]
      bg-opacity-50
      bg-cover 
      bg-fixed 
      bg-center 
      bg-no-repeat 
      rounded-2xl px-15 py-25 sm:px-20 sm:py-15 ring-2 ring-blue-500/50"
      >
        <div className="flex flex-col items-center justify-center bg-white px-10 py-10 rounded-2xl shadow-lg ring-2 ring-blue-500/50">
          <img
            src={logo}
            alt="logo"
            className="max-w-[100px] lg:max-w-[150px] relative -top-[20px]"
            data-aos="fade-down"
          />
          <h1
            data-aos="fade-down"
            data-aos-delay="250"
            className="text-xl sm:text-3xl lg:text-5xl font-bold mb-4 text-pink-400"
          >
            <SplitText
              text="WELCOME TO"
              className="font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="text-[16px] sm:text-xl mb-8 text-blue-400"
          >
            <SplitText
              text="NBAC WEBSITE"
              className="font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </p>
          <button
            onClick={() => router.push("./home")}
            data-aos="zoom-in"
            className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition animate-bounce"
            data-aos-delay="450"
          >
            เข้าสู่เว็บไซต์
          </button>
        </div>
      </div>
    </main>
  );
}
