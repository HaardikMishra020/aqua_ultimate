import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cld } from '../utils/cloudinary';
import {AdvancedImage} from '@cloudinary/react';
import { scale } from "@cloudinary/url-gen/actions/resize";
import { useSwipeable } from "react-swipeable";


const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Mr. Harish Kumar',
      rating: 5,
      text: 'Aqua Ultimate Water Conditioner has completely transformed our water quality. My skin feels so much softer and my hair is no longer dry and frizzy. The installation was simple and the results were immediate. Highly recommend!',
      avatar: 'HK',
      img:'1000008624_czfotd',
      videoUrl:null,
    },
    {
      name: 'Mr. Anil Solanki',
      rating: 5,
      text: 'After struggling with hard water for years, This product was a game-changer. Our bathroom tiles stay clean, appliances last longer, and the water feels amazing. Best investment for our home!',
      avatar: 'AS',
      img:'1000008625_tiufyj',
      videoUrl:null,
    },
    {
      name: 'Mr Vinod Bhadauria',
      rating: 4,
      text: 'I was skeptical at first, but the difference is noticable. My kids\' skin rashes have completely disappeared, and our clothes feel softer after washing. Aqua Ultimate Water Conditioner does what it promises.',
      avatar: 'VB',
      img:'1000008626_j98isl',
      videoUrl:null,
    },
    {
      name: 'Ms. Swati Singh',
      rating: 5,
      text: 'I’ve been using Aqua Ultimate Water Conditioner for 2 years now, and the difference is amazing. The water feels softer, my hair doesn’t get dry anymore, and even my washing machine is running better. The best part is – it’s completely maintenance-free. Overall, I’m really happy with the product',
      avatar: 'SS',
      img:null,
      videoUrl:'https://www.youtube.com/embed/yDxKwhVQ-C0?si=Crj6zvqzSVl1CMso&amp;start=0',
    }
  ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  //   }, 20000);

  //   return () => clearInterval(timer);
  // }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,   // swipe left → go next
    onSwipedRight: handlePrev,  // swipe right → go prev
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // allows drag with mouse also
  });

  const cldImg=cld.image(`${testimonials[currentTestimonial].img}`).format("auto").quality("auto").resize(scale().width(700))

  return (
    <section id="reviews" className="py-20 bg-blue-200">
      <div {...handlers} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Real testimonials from families who have experienced the Aqua Ultimate difference
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-8 md:p-12 text-center relative bg-gray-900"
            id="testimonial-card"
          >
            <div className='flex flex-col sm:flex-row items-center'>
              {testimonials[currentTestimonial].img ?
            <div>
              <AdvancedImage key={cldImg} cldImg={cldImg}
                className="w-full h-full object-cover my-5"
              />
            </div>:
            <div>
              <iframe
                className="w-[50vw] md:w-[10vw] h-[40vh] aspect-video rounded-2xl shadow-lg my-5"
                src={testimonials[currentTestimonial].videoUrl}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

            </div>
            }
            <div>
            {/* Quote Icon */}
            {/* <div className="absolute top-6 left-6 text-primary opacity-20">
              <Quote size={48} />
            </div> */}

            {/* Rating */}
            <div className="flex justify-center ml-6 mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg md:text-xl text-white leading-relaxed mb-8 italic px-5">
              "{testimonials[currentTestimonial].text}"
            </p>

            {/* Customer Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold">
                {testimonials[currentTestimonial].avatar}
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-white">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>
            </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-accent' : 'bg-gray-900'
                }`}
              />
            ))}
          </div>
          <div className="flex justify-center items-center mt-6 space-x-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center transition"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center transition"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

        </div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10,000+</div>
            <div className="text-gray-600">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">4.9/5</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15 Years</div>
            <div className="text-gray-600">Warranty</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Testimonials; 