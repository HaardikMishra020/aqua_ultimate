import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How does the Aqua Ultimate Water Conditioner work?",
      answer: "The Aqua Ultimate Water Conditioner uses a high-power magnetic field to break down hardness particles into nano-sized particles and polarize them. This process enhances soap effectiveness, reduces roughness caused by hard water, and improves the experience of bathing, washing, and cleaning for hair, skin, and clothes."
    },
    {
      id: 2,
      question: "Does it require maintenance?",
      answer: "No. The Aqua Ultimate Water Conditioner has no filters or consumables, which means it requires no servicing or maintenance throughout its lifespan."
    },
    {
      id: 3,
      question: "What is the lifespan of the Aqua Ultimate Water Conditioner?",
      answer: "On average, water conditioners have a lifespan of around 15 years, ensuring long-term performance without the need for replacement or upkeep."
    },
    {
      id: 4,
      question: "Does it make water drinkable?",
      answer: "No. The Aqua Ultimate Water Conditioner does not make drinking water. Instead, it provides a cosmetic treatment to water, offering benefits for bathing, washing, laundry, skin, hair, plants, and overall household use."
    }
  ];
  

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '9219265755'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hi! I\'m interested in Aqua Ultimate Water Conditioner. Can you provide more information?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };
  
  const handleCall = () => {
    window.location.href = "tel:+919219265755";
  };

  return (
    <section className="bg-blue-900 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
              <HelpCircle size={24} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Get answers to the most common questions about Aqua Ultimate water conditioner
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-blue-600" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-blue-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-blue-100 mb-6">
              Our customer support team is here to help you with any questions about Aqua Ultimate
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
            
              <button className="flex gap-3 bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors" onClick={handleCall}>
              <Phone/><span>Call us</span>
              </button>
              
              <button className="flex gap-3 bg-white border-2 border-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-900 transition-colors" onClick={handleWhatsAppClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#128c7e" }}
                viewBox="0 0 24 24"
                >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp us</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 