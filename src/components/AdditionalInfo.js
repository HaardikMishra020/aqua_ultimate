import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Wrench, Users, Play, Contact } from 'lucide-react';

const AdditionalInfo = () => {
  const [selectedOption, setSelectedOption] = useState('contact');

  const options = [
    {
      id: 'contact',
      title: 'Contact Details',
      icon: Contact,
      content: {
        title: 'Get in Touch',
        description: 'Have questions? We’re here to help.',
        details: [
          'Phone Number - +91-9219265755',
          'Office Address - 73 Roshan Bagh, Dayal Bagh, Agra, Uttar Pradesh 282005',
          'Email Address - aquaultimate13@gmail.com',
        ],
        videoUrl: null, // Add video URL if available
        map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.9009750233545!2d77.99661047589507!3d27.222258646718604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397479e0f9283c25%3A0x5d8cd89f945e38ce!2sAqua%20Ultimate%20Water%20Conditioner!5e0!3m2!1sen!2sin!4v1755366500613!5m2!1sen!2sin'
      }
    },
    {
      id: 'warranty',
      title: 'Warranty Details',
      icon: Shield,
      content: {
        title: '15-Year Comprehensive Warranty',
        description: 'We stand behind our products with one of the industry\'s longest warranty periods.',
        details: [
          'Full coverage for all mechanical parts',
          'Free replacement of defective components',
          'No hidden terms or conditions',
          'Transferable warranty to new homeowners',
          '24/7 customer support for warranty claims'
        ],
        videoUrl: null,
        map:null // Add video URL if available
      }
    },
    {
      id: 'installation',
      title: 'Installation Details',
      icon: Wrench,
      content: {
        title: 'Professional Installation Service',
        description: 'Our certified technicians ensure proper installation for optimal performance.',
        details: [
          'Free professional installation included',
          'Certified technicians with 5+ years experience',
          'Installation completed within 2-4 hours',
          'Post-installation testing and verification',
          'Comprehensive installation guide provided'
        ],
        videoUrl: null,
        map:null // Add video URL if available
      }
    },
    {
      id: 'referral',
      title: 'Referral Program',
      icon: Users,
      content: {
        title: 'Earn While You Share',
        description: 'Join our referral program and earn rewards for every successful referral.',
        details: [
          '₹2,000 cash reward per successful referral',
          'No limit on number of referrals',
          'Rewards paid within 30 days of installation',
          'Easy referral tracking system',
          'Exclusive member benefits and discounts'
        ],
        videoUrl: null,
        map:null // Add video URL if available
      }
    }
  ];

  const currentContent = options.find(option => option.id === selectedOption)?.content;

  return (
    <section className="bg-gray-900 text-white py-20" id="additional-info">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Additional Information
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to know about warranty, installation, and our referral program
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Dynamic Content */}
          <motion.div
            key={selectedOption}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-2xl p-8"
          >
            {currentContent && (
              <>
                <h3 className="text-2xl font-bold mb-4 text-accent">
                  {currentContent.title}
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  {currentContent.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {currentContent.details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{detail}</p>
                    </div>
                  ))}
                </div>

                {/* Video Section - Only show if video URL exists */}
                {currentContent.videoUrl && (
                  <div className="mt-8">
                    <div className="relative bg-gray-700 rounded-xl overflow-hidden">
                      <video 
                        className="w-full h-64 object-cover"
                        controls
                        poster={currentContent.videoUrl}
                      >
                        <source src={currentContent.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play size={48} className="text-white opacity-80" />
                      </div>
                    </div>
                  </div>
                )}

                  {currentContent.map && (
                    <div className="relative aspect-video overflow-hidden">
                   <iframe src={currentContent.map} 
                   width="500" 
                   height="400"  
                   allowfullscreen="" 
                   referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                  
                  )}


                {/* CTA Button */}
                {/* <div className="mt-8">
                  <button className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 flex items-center gap-2">
                    Learn More
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </button>
                </div> */}
              </>
            )}
          </motion.div>

          {/* Right Side - Options */}
          <div className="space-y-4">
            {options.map((option) => {
              const IconComponent = option.icon;
              return (
                <motion.button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                    selectedOption === option.id
                      ? 'bg-accent text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${
                      selectedOption === option.id
                        ? 'bg-white/20'
                        : 'bg-gray-700'
                    }`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {option.title}
                      </h3>
                      <p className="text-sm opacity-80">
                        Click to learn more
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo; 