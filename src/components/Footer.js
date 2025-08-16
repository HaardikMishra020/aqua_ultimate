import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Features', href: '#features' },
      { name: 'Reviews', href: '#reviews' },
      { name: 'Pricing', href: '#pricing' }
    ],
    support: [
      { name: 'Installation Guide', href: '#additional-info' },
      { name: 'Warranty', href: '#additional-info' },
      { name: 'Customer Support', href: '#' },
      { name: 'FAQ', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Contact', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/Aqua-Ultimate-Softening-solution/100054273500171', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/aqua_ultimate11/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@aquaultimate17', label: 'Youtube' }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-2">
                <span className="text-accent font-bold text-sm">AU</span>
              </div>
              <span className="font-bold text-xl">Aqua Ultimate</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming hard water into soft, healthy water for homes across India. 
              Experience the difference with our innovative water conditioning technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3" />
                <span>hello@aquaultimate.in</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-3" />
                <span>Agra, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates, tips, and exclusive offers delivered to your inbox.
            </p>
            
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-accent rounded-r-full hover:bg-accent hover:text-white transition-colors">
                <Send size={20} />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-accent transition-colors"
                  aria-label={social.label}
                  target="_blank"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Aqua Ultimate. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 