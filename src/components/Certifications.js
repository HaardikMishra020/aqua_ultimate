import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: Shield,
      title: 'BIS Certified',
      description: 'Bureau of Indian Standards approved',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Award,
      title: 'Made in India',
      description: 'Supporting Indian manufacturing',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: CheckCircle,
      title: '15 Year Warranty',
      description: 'Complete peace of mind',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Star,
      title: 'ISO Certified',
      description: 'International quality standards',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Shield,
      title: 'CE Marked',
      description: 'European safety standards',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Award,
      title: 'Energy Efficient',
      description: 'Eco-friendly technology',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    }
  ];

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
            Trusted & Certified
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Aqua Ultimate meets the highest standards of quality and safety
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`w-16 h-16 ${cert.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon size={28} className={cert.color} />
              </div>
              <h3 className="font-semibold text-text mb-2 text-sm">
                {cert.title}
              </h3>
              <p className="text-gray-500 text-xs">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Why Trust Aqua Ultimate?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-sm opacity-90">Years of Innovation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Patents & Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 