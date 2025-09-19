import React,{useEffect} from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import WAVES from 'vanta/dist/vanta.waves.min'
import { cld } from '../utils/cloudinary';
import {AdvancedImage} from '@cloudinary/react';
import { scale } from "@cloudinary/url-gen/actions/resize";
import { useMediaQuery } from 'react-responsive';


const HeroSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const handleBuyNow = () => {
    // TODO: Replace with actual Amazon URL for the main product
    const amazonUrl = 'https://www.amazon.in/gp/product/B0DCJKY89P'
    window.open(amazonUrl, '_blank');
  };

  useEffect(()=>{
    WAVES({
      el:"#home",
      color:0x003459,
      mouseControls: true,
      touchControls: true,
      waveSpeed: 1.20,
      zoom: 1.04
    })
  },[]);

  const cldmodel=cld.image('Model_t1ftpm').format("auto").quality("auto").resize(scale().width(500))
  const cldmodelmob=cld.image('a04-removebg-preview_aqr7al').format("auto").quality("auto").resize(scale().width(500))
  return (
    // <div className= 'app'>
    //   <div className='bg' id='home'></div>
    // </div>
    <section id="home" className="relative max-h-screen flex items-center overflow-hidden pt-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12  items-center">
          {/* Product Image - Left Side */}
          <div className="relative flex justify-center items-center lg:justify-start order-1 lg:order-1">
            {isMobile ?(
              <AdvancedImage key={cldmodelmob} cldImg={cldmodelmob}
              alt="Aqua Ultimate Product"
              style={{ height: 'auto', width: '90vw', maxWidth: '100%', objectFit: 'contain', borderRadius: '2rem' }}
              className="block"
            />
            ):(<AdvancedImage key={cldmodel} cldImg={cldmodel}
              alt="Aqua Ultimate Product"
              style={{ height: '88vh', width: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: '2rem' }}
              className="block"
            />)}
          </div>

          {/* Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-outline-black text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Smart Water Conditioner for Healthy Living
                {/* <span className="text-outline-black text-white">Healthy Living</span> */}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-md md:text-xl text-white mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Transform your hard water into soft, healthy water that's gentle on your skin, hair, and appliances. 
              Experience the difference with Aqua Ultimate.
            </motion.p>

            {/* Price & Add to Cart Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-white rounded-lg p-6 shadow-lg mb-8 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2 space-x-3">
                  <span className="text-2xl md:text-3xl font-semibold text-gray-400 line-through">₹24,500</span>
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">₹18,500</span>
                  <span className="text-base md:text-lg font-semibold text-green-600 bg-green-100 rounded px-2 py-0.5 ml-2">25% OFF</span>
                </div>
                <div className="text-sm text-gray-600 mb-4">2 Years Warranty • 15 Years Lifetime (Approx)</div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={handleBuyNow}
                    className="btn-primary flex items-center justify-center group"
                  >
                    Buy Now
                    <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  {/* <button className="btn-secondary">
                    Learn More
                  </button> */}
                </div>
              </div>
            </motion.div>

            {/* Payment Icons - Monochrome Style */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 text-gray-600"
            >
              <div className="flex items-center space-x-2">
                <Shield size={20} className="text-gray-500" />
                <span className="text-sm font-medium">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck size={20} className="text-gray-500" />
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard size={20} className="text-gray-500" />
                <span className="text-sm font-medium">Easy Returns</span>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 