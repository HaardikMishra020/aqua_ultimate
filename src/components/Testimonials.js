import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      text: 'Aqua Ultimate has completely transformed our water quality. My skin feels so much softer and my hair is no longer dry and frizzy. The installation was simple and the results were immediate. Highly recommend!',
      avatar: 'PS'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi, NCR',
      rating: 5,
      text: 'After struggling with hard water for years, Aqua Ultimate was a game-changer. Our bathroom tiles stay clean, appliances last longer, and the water feels amazing. Best investment for our home!',
      avatar: 'RK'
    },
    {
      name: 'Anita Patel',
      location: 'Bangalore, Karnataka',
      rating: 5,
      text: 'I was skeptical at first, but the difference is incredible. My kids\' skin rashes have completely disappeared, and our clothes feel softer after washing. Aqua Ultimate truly delivers on its promises.',
      avatar: 'AP'
    },
    {
      name: 'Suresh Menon',
      location: 'Chennai, Tamil Nadu',
      rating: 5,
      text: 'Professional installation, excellent customer service, and outstanding results. Our water quality has improved dramatically. The 15-year warranty gives us complete peace of mind.',
      avatar: 'SM'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="reviews" className="bg-backgroundLight py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
            className="card p-8 md:p-12 text-center relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary opacity-20">
              <Quote size={48} />
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
              "{testimonials[currentTestimonial].text}"
            </p>

            {/* Customer Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold">
                {testimonials[currentTestimonial].avatar}
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-text">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentTestimonial].location}
                </p>
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
                  index === currentTestimonial ? 'bg-accent' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 