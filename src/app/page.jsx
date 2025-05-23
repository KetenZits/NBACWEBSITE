'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const logo = "/img/logo/logo.png";

  return (
    <main className="min-h-screen
    bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0)),url('/img/background/background5.jpg')]
    bg-cover
    bg-fixed
    bg-center
    bg-no-repeat
    flex items-center justify-center
    shadow-lg
    flex-col
    overflow-x-hidden overflow-y-hidden">
      <div className='flex justify-center items-center flex-col bg-gradient-to-r from-fuchsia-400 to-blue-400 rounded-2xl px-15 py-25 sm:px-20 sm:py-15 border border-4 border-blue-300 text-white'>
        <img src={logo} alt="logo" className="max-w-[100px] lg:max-w-[150px] relative -top-[20px]" data-aos="fade-down"/>
        <h1 data-aos="fade-down" data-aos-delay="250" className="text-3xl lg:text-5xl font-bold mb-4">
        WELCOME TO
      </h1>
      <p data-aos="fade-up" data-aos-delay="350" className="text-xl mb-8">
        NBAC WEBSITE
      </p>
      <button
        onClick={() => router.push('./home')}
        data-aos="zoom-in"
        className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
        data-aos-delay="450"
      >
        เข้าสู่เว็บไซต์
      </button>
      </div>
    </main>
  );
}
