import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PrivacyPolicy from '../components/PrivacyPolicy';

export default function Privacy() {
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
            <PrivacyPolicy/>
            <Footer/>
        </div>
    );
  }