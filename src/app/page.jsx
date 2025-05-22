import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Section from "./components/section/Section";
import Activity from "./components/activity/Activity";
import Footer from "./components/footer/Footer";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Header />
      <Section />
      <Activity />
      <Footer />
      <BackToTopButton />
    </div>
  );
}
