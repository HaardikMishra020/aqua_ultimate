import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Zap, Heart, CheckCircle } from 'lucide-react';
import Working from '../assets/working.png';


const HowItWorks = () => {

  return (
    <section id="how-it-works" className="bg-[#f5f5f7] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            How Water Conditioner Works
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Our innovative technology transforms hard water into soft, healthy water in just seconds
          </p>
        </motion.div>

        <div className="flex justify-center">
          <img src={Working}></img>
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