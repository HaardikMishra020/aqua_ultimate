import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Zap, Heart, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Droplets,
      title: 'Hard Water Enters',
      description: 'Your home\'s water supply contains calcium and magnesium ions',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      icon: Zap,
      title: 'Aqua Ultimate Activates',
      description: 'Our advanced technology transforms hard water molecules',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      icon: Heart,
      title: 'Soft Water Delivered',
      description: 'Enjoy soft, healthy water throughout your home',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      icon: CheckCircle,
      title: 'Continuous Protection',
      description: '24/7 protection for your skin, hair, and appliances',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    }
  ];

  return (
    <section id="how-it-works" className="bg-backgroundLight py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            How Aqua Ultimate Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our innovative technology transforms hard water into soft, healthy water in just seconds
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="card p-8 text-center h-full">
                <div className={`w-20 h-20 ${step.bgColor} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                  <step.icon size={36} className={step.color} />
                </div>
                
                <h3 className="text-xl font-bold text-text mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text mb-4">
              Ready to Transform Your Water?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of families who have already experienced the Aqua Ultimate difference
            </p>
            <button className="btn-primary">
              Get Aqua Ultimate Today
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HowItWorks; 