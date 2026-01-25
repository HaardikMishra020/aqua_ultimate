import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook,  Instagram,  Send, Youtube } from 'lucide-react';
import { cld } from '../utils/cloudinary';
import {AdvancedImage} from '@cloudinary/react';
import { scale } from "@cloudinary/url-gen/actions/resize";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/Aqua-Ultimate-Softening-solution/100054273500171', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/aqua_ultimate11/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@aquaultimate17', label: 'Youtube' }
  ];
  const cldImg=cld.image('logo_geplrr').format("auto").quality("auto").resize(scale().width(100))

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <AdvancedImage cldImg={cldImg} className="w-8 h-auto object-contain mr-3" />
              <span className="font-bold text-xl">Aqua Ultimate</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footer.companyDesc')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3" />
                <span>+91 - 7217438330</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3" />
                <span>aquaultimate11@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-3" />
                <span>Agra, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">{t('footer.product')}</h3>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">{t('howItWorks.title')}</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">{t('featuresBar.title')}</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-white transition-colors">{t('testimonials.title')}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">{t('footer.support')}</h3>
            <ul className="space-y-3">
              <li><a href="#additional-info" className="text-gray-400 hover:text-white transition-colors">{t('additionalInfo.options.2.title')}</a></li>
              <li><a href="#additional-info" className="text-gray-400 hover:text-white transition-colors">{t('additionalInfo.options.1.title')}</a></li>
              <li><a href="#faqs" className="text-gray-400 hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#faqs" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">{t('footer.newsletterTitle')}</h3>
            <p className="text-gray-400 mb-6">
              {t('footer.newsletterDesc')}
            </p>
            
            <div className="flex">
              <input
                type="email"
                placeholder={t('footer.newsletterPlaceholder')}
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
                  rel="noreferrer"
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
              {t('footer.copyright')}
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">{t('footer.privacyPolicy')}</Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors">{t('footer.disclaimer')}</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 