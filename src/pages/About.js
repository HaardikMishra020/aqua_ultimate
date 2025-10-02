import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

export default function About() {
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
            <Navbar home={false} />
            <AboutUs/>
            <Footer/>
        </div>
    );
  }