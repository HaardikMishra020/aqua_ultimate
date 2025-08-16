import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfter = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      title: 'Skin Transformation',
      before: {
        title: 'Before',
        description: 'Dry, irritated skin from hard water',
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        imageUrl: 'https://res.cloudinary.com/dvragaic8/image/upload/v1752999194/generated-image_3_pp2omw.png'
      },
      after: {
        title: 'After',
        description: 'Soft, smooth, healthy skin',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        imageUrl: 'https://res.cloudinary.com/dvragaic8/image/upload/v1752999195/generated-image_2_l55aqk.png'
      }
    },
    {
      title: 'Hair Health',
      before: {
        title: 'Before',
        description: 'Brittle, dull hair with buildup',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',        
        imageUrl: 'https://res.cloudinary.com/dvragaic8/image/upload/v1752990217/generated-image_hzm8uz.png'

      },
      after: {
        title: 'After',
        description: 'Soft, shiny, manageable hair',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        imageUrl: 'https://res.cloudinary.com/dvragaic8/image/upload/v1752990217/generated-image_1_p1wxy1.png'
      }
    },
    {
      title: 'Plants Growth',
      before: {
        title: 'Before',
        description: 'Plants not growing',
        color: 'text-gray-600',
        bgColor: 'bg-gray-50',
        imageUrl: 'https://res.cloudinary.com/dvragaic8/image/upload/v1753000429/generated-image_5_aqoejo.png'
      },
      after: {
        title: 'After',
        description: 'Plants growing',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
        imageUrl: 'https://res.cloudinary.com/dvragaic8/image/upload/v1753000430/generated-image_4_p4fccm.png'
      }
    }
  ];

  // For demo, use only the 'after' images for the carousel
  const total = slides.length;

  // Get indices for left, center, right (with wrap-around)
  const getIndices = (center) => {
    const left = (center - 1 + total) % total;
    const right = (center + 1) % total;
    return { left, center, right };
  };
  const { left, center, right } = getIndices(current);

  // 3D transform values
  const z = 180; // increased depth
  const x = 260; // increased horizontal offset
  const angle = 45; // deg

  // For animation, use a key on the carousel container
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = () => {
    if (animating) return;
    setDirection(-1);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + total) % total);
      setAnimating(false);
    }, 500);
  };
  const handleNext = () => {
    if (animating) return;
    setDirection(1);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
      setAnimating(false);
    }, 500);
  };

  // Helper for 3D style
  const getStyle = (pos) => {
    let style = {
      position: 'absolute',
      top: 0,
      left: '50%',
      width: '380px', // wider card
      height: '500px', // taller card
      transformStyle: 'preserve-3d',
      boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
      borderRadius: '1.5rem',
      background: '#fff',
      transition: 'transform 0.5s cubic-bezier(.77,0,.18,1), opacity 0.5s',
      cursor: pos === 'center' ? 'default' : 'pointer',
      zIndex: pos === 'center' ? 3 : 2,
      opacity: pos === 'center' ? 1 : 0.7,
    };
    if (pos === 'center') {
      style.transform = `translate(-50%,0) rotateY(0deg) translateZ(${z}px)`;
    } else if (pos === 'left') {
      style.transform = `translate(-50%,0) rotateY(-${angle}deg) translateX(-${x}px) translateZ(0)`;
    } else if (pos === 'right') {
      style.transform = `translate(-50%,0) rotateY(${angle}deg) translateX(${x}px) translateZ(0)`;
    }
    return style;
  };

  // For animation, rotate the whole carousel
  const carouselStyle = {
    position: 'relative',
    width: '900px', // wider
    height: '540px', // taller
    margin: '0 auto',
    perspective: '1600px',
    perspectiveOrigin: '50% 50%',
    overflow: 'visible',
  };
  const rotation = animating ? (direction * -angle) : 0;
  const innerStyle = {
    width: '100%',
    height: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.5s cubic-bezier(.77,0,.18,1)',
    transform: `rotateY(${rotation}deg)`
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            See the Difference
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real results from real customers who switched to Aqua Ultimate
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div style={carouselStyle} className="mb-8">
          <div style={innerStyle}>
            {/* Left */}
            <div
              style={getStyle('left')}
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <div className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-6 p-6">
                {/* Before */}
                <div className="flex-1 flex flex-col items-center">
                  <img
                    src={slides[left].before.imageUrl}
                    alt={slides[left].before.title}
                    className="w-56 h-72 object-contain rounded-xl mb-2"
                    draggable={false}
                  />
                  <span className={`text-base font-semibold ${slides[left].before.color}`}>{slides[left].before.title}</span>
                  <span className="text-sm text-gray-500 text-center">{slides[left].before.description}</span>
                </div>
                {/* After */}
                <div className="flex-1 flex flex-col items-center">
                  <img
                    src={slides[left].after.imageUrl}
                    alt={slides[left].after.title}
                    className="w-56 h-72 object-contain rounded-xl mb-2"
                    draggable={false}
                  />
                  <span className={`text-base font-semibold ${slides[left].after.color}`}>{slides[left].after.title}</span>
                  <span className="text-sm text-gray-500 text-center">{slides[left].after.description}</span>
                </div>
              </div>
            </div>
            {/* Center */}
            <div style={getStyle('center')}>
              <div className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-6 p-6">
                {/* Before */}
                <div className="flex-1 flex flex-col items-center">
                  <img
                    src={slides[center].before.imageUrl}
                    alt={slides[center].before.title}
                    className="w-72 h-96 object-contain rounded-xl mb-2 shadow-lg"
                    draggable={false}
                  />
                  <span className={`text-lg font-semibold ${slides[center].before.color}`}>{slides[center].before.title}</span>
                  <span className="text-base text-gray-500 text-center">{slides[center].before.description}</span>
                </div>
                {/* After */}
                <div className="flex-1 flex flex-col items-center">
                  <img
                    src={slides[center].after.imageUrl}
                    alt={slides[center].after.title}
                    className="w-72 h-96 object-contain rounded-xl mb-2 shadow-lg"
                    draggable={false}
                  />
                  <span className={`text-lg font-semibold ${slides[center].after.color}`}>{slides[center].after.title}</span>
                  <span className="text-base text-gray-500 text-center">{slides[center].after.description}</span>
                </div>
              </div>
            </div>
            {/* Right */}
            <div
              style={getStyle('right')}
              onClick={handleNext}
              aria-label="Next slide"
            >
              <div className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-6 p-6">
                {/* Before */}
                <div className="flex-1 flex flex-col items-center">
                  <img
                    src={slides[right].before.imageUrl}
                    alt={slides[right].before.title}
                    className="w-56 h-72 object-contain rounded-xl mb-2"
                    draggable={false}
                  />
                  <span className={`text-base font-semibold ${slides[right].before.color}`}>{slides[right].before.title}</span>
                  <span className="text-sm text-gray-500 text-center">{slides[right].before.description}</span>
                </div>
                {/* After */}
                <div className="flex-1 flex flex-col items-center">
                  <img
                    src={slides[right].after.imageUrl}
                    alt={slides[right].after.title}
                    className="w-56 h-72 object-contain rounded-xl mb-2"
                    draggable={false}
                  />
                  <span className={`text-base font-semibold ${slides[right].after.color}`}>{slides[right].after.title}</span>
                  <span className="text-sm text-gray-500 text-center">{slides[right].after.description}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-2 space-x-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            disabled={animating}
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          <div className="flex space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => !animating && setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${idx === current ? 'bg-accent' : 'bg-gray-300'}`}
                disabled={animating}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            disabled={animating}
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Slide Title */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mt-6"
        >
          <h3 className="text-xl font-semibold text-text">
            {slides[current].title}
          </h3>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Experience the Transformation
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of families who have already transformed their water quality
            </p>
            <button className="bg-white text-accent px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
              Start Your Transformation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter; 