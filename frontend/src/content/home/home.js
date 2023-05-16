import React, { useEffect } from "react";
import Navbar from "../../component/navbar/navbar";
import HeroSection from "./heroSection/heroSection";
import MainContent from "./mainContent/mainContent";
import Footer from "../../component/footer/footer";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection
        headLine="Welcome to Find The Way"
        description="Kami adalah teman bagi anda dalam menentukan penjurusan kuliah mana yang sesuai dengan minat dan bakat yang kalian miliki, jangan ragu untuk menjadi diri sendiri, karena itu adalah keputusan yang terbaik."
        alt="Hero Section"
      />
      <MainContent />
      <Footer />
    </>
  );
}

export default Home;
