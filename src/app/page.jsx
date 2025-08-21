"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
      <img
        src={logo}
        alt="logo"
        className="max-w-[100px] lg:max-w-[150px] relative -top-[20px]"
        data-aos="fade-down"
      />
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 text-blue-500/85 drop-shadow-[0_0_2px_white]">
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
      <div className="text-[24px] sm:text-4xl mb-8 text-pink-500/85 drop-shadow-[0_0_2px_white]">
        <SplitText
          text="NBAC WEBSITE"
          className="font-semibold text-center"
          delay={200}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>
      <a
        data-aos="zoom-in"
        className="bg-white text-blue-400 hover:text-pink-400 cursor-pointer font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition ring-2 ring-blue-500/50 hover:ring-pink-500/50"
        data-aos-delay="450"
        href="/home"
      >
        เข้าสู่เว็บไซต์
      </a>
    </main>
  );
}
