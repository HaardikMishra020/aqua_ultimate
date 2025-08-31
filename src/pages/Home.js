import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesBar from '../components/FeaturesBar';
import HowItWorks from '../components/HowItWorks';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';
import MapSection from '../components/MapSection';
import FAQSection from '../components/FAQSection';
import Certifications from '../components/Certifications';
import ProductsSection from '../components/ProductsSection';
import WaterConditionerInfo from '../components/WaterConditionerInfo';
import AdditionalInfo from '../components/AdditionalInfo';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Trial from '../components/Trial';

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";

function Home() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      // You can customize options here
      smooth: true,
      lerp: 0.1,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WaterConditionerInfo />
      <FeaturesBar />
      <HowItWorks />
      {/* <Trial/> */}
      <BeforeAfter />
      <ProductsSection />
      <MapSection />
      <Testimonials />
      <FAQSection />
      {/* <AdditionalInfo /> */}
      {/* <Certifications /> */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Home; 