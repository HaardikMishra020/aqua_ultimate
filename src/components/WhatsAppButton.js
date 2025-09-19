import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9219265755'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hi! I\'m interested in Aqua Ultimate Water Conditioner. Can you provide more information?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <MessageCircle size={24} className="mx-auto" />
      
      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-black border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </div>
    </motion.button>
  );
};

export default WhatsAppButton; 