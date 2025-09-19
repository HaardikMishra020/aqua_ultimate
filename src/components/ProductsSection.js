import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, Eye, Heart } from 'lucide-react';
import { cld } from '../utils/cloudinary';
import {AdvancedImage} from '@cloudinary/react';
import { scale } from "@cloudinary/url-gen/actions/resize";


const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState('Water Conditioner');
  const [visibleCount, setVisibleCount] = useState(3); // default for small screens
  const [isMobile, setIsMobile] = useState(false);
  const [likes, setLikes] = useState({});

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id], // toggle heart for this product
    }));
  };

  const products = [
    {
      "id":1,
      "name": "1000 LPH Water Conditioner",
      "priceINR": 24500,
      "priceActual": 18500,
      "currency": "INR",
      "category": "Water Conditioner",
      "rating": 4,
      "type": "existing",
      "imgUrl":"a04_yea3eh"
    },
    {
      "id":2,
      "name": "Manual 10",
      "priceINR": 8990,
      "currency": "INR",
      "category": "RO System",
      "rating": 5,
      "type": "existing",
      "imgUrl":"6_gvr00w"
    },
    {
      "id":3,
      "name": "Manual 20",
      "priceINR": 11990,
      "currency": "INR",
      "category": "RO System",
      "rating": 5,
      "type": "existing",
      "imgUrl":"6_gvr00w"
    },
    {
      "id":4,
      "name": "SF",
      "priceINR": 14500,
      "currency": "INR",
      "category": "RO System",
      "rating": 5,
      "type": "existing",
      "imgUrl":"Untitled_design_2_d9m8vo"
    },
    {
      "id":5,
      "name": "PW 31",
      "priceINR": 10490,
      "currency": "INR",
      "category": "RO System",
      "rating": 5,
      "type": "existing",
      "imgUrl":"1_vhnj8b"
    },
    {
      "id":6,
      "name": "Commercial 40 ltr/hr",
      "priceINR": 29990,
      "currency": "INR",
      "category": "RO System",
      "rating": 5,
      "type": "existing",
      "imgUrl":"Untitled_design_3_fvrnwd"
    },
    {
      "id":7,
      "name": "Industrial 1000 Ltr/hr",
      "priceINR": 240000,
      "currency": "INR",
      "category": "RO System",
      "rating": 5,
      "type": "existing",
      "imgUrl":"3_je0lnj"
    },
    {
      "id":8,
      "name": "15 lph Alkaline",
      "priceINR": 13990,
      "currency": "INR",
      "category": "RO System",
      "rating": 5,
      "type": "existing",
      "imgUrl":"5_zagyy7"
      // "imgUrl":"https://res.cloudinary.com/dvragaic8/image/upload/v1755672978/ChatGPT_Image_Aug_20_2025_12_25_12_PM_czjle9.png"
    },
    {
      "id":9,
      "name": "Under Sink",
      "priceINR": 15490,
      "currency": "INR",
      "category": "RO System",
      "rating": 5,
      "type": "existing",
      "imgUrl":"2_vnspya"
    },
    {
      "id":10,
      "name": "650 LPH Water Conditioner",
      "priceINR": 14999,
      "priceActual": 9990,
      "currency": "INR",
      "category": "Water Conditioner",
      "rating":4,
      "type": "new",
      "imgUrl":"IMG20250122144729-Photoroom_oj0cw1"
    },
    {
      "id":11,
      "name": "Shower Conditioner",
      "priceINR": null,
      "currency": "INR",
      "category": "Water Conditioner",
      "type": "coming_soon",
      "imgUrl":null
    },
    {
      "id":12,
      "name":"Water Softener",
      "priceINR":95000,
      "currency":"INR",
      "rating": 5,
      "category":"Water Softener",
      "type":"existing",
      "imgUrl":"Untitled_design_4_c0hwcv"
    }
  ];

  const categories = ['Water Conditioner', 'RO System', 'Water Softener'];
  
  const filteredProducts = products.filter(product => product.category === activeTab);

  const formatPrice = (price) => {
    if (price === null || price === undefined) return '';
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const getProductImage = (category) => {
    switch (category) {
      case 'Water Conditioner':
        return '💧';
      case 'RO System':
        return '🔧';
      case 'Water Softener':
        return '🌊';
      default:
        return '💧';
    }
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case 'new':
        return <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">New</span>;
      case 'coming_soon':
        return <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">Coming Soon</span>;
      default:
        return null;
    }
  };
  const displayedProducts = isMobile
    ? filteredProducts.slice(0, visibleCount)
    : filteredProducts;

  const handleBuyNow = (productName) => {
    // TODO: Replace with actual Amazon URL for each product
    let amazonUrl='';
    if (productName === '1000 LPH Water Conditioner')
    amazonUrl = 'https://www.amazon.in/gp/product/B0DCJKY89P'
    else if (productName === '650 LPH Water Conditioner')
    amazonUrl = 'https://www.amazon.in/gp/product/B0DV98879N'
    else amazonUrl = ''
    window.open(amazonUrl, '_blank');
  };

  return (
    <section id="products" className="section-padding bg-text">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Range of Products
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Discover our comprehensive range of water treatment solutions designed to provide you with the purest, healthiest water possible.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category
                  ? 'bg-white text-grey-700 shadow-lg'
                  : 'bg-black text-white hover:bg-white hover:text-black border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {displayedProducts.map((product, index) => {
            const cldImg=cld.image(`${product.imgUrl}`).format("auto").quality("auto").resize(scale().width(300))
            return(
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-white flex items-center justify-center">
              {product.imgUrl ? (
                <AdvancedImage key={product.imgUrl} cldImg={cldImg} className="max-h-full max-w-full object-contain"/>
                // <img 
                //   src={product.imgUrl} 
                //   alt={product.name}
                //   className="max-h-full max-w-full object-contain"
                // />
              ) : (
                <div className="text-6xl">{getProductImage(product.category)}</div>
              )}
              {getTypeBadge(product.type) && (
                <div className="absolute top-3 right-3">
                  {getTypeBadge(product.type)}
                </div>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center mb-3">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                  </div>
                )}

                {/* Price */}
                <div className="mb-4 flex items-center gap-2">
                  {product.priceActual
                    ? (
                      <>
                        <span className="text-2xl font-bold text-gray-400 line-through">
                          {formatPrice(product.priceINR)}
                        </span>
                        <span className="text-2xl font-bold text-accent">{formatPrice(product.priceActual)}</span>
                        {/* Optionally, calculate and show percent off */}
                      </>
                    )
                    : (
                      <span className="text-2xl font-bold text-gray-900">{formatPrice(product.priceINR)}</span>
                    )
                  }
                </div>
                {/* <span className="text-2xl md:text-3xl font-semibold text-gray-400 line-through">₹24,500</span>
                  <span className="text-3xl md:text-4xl font-bold text-accent">₹18,500</span>
                  <span className="text-base md:text-lg font-semibold text-green-600 bg-green-100 rounded px-2 py-0.5 ml-2">25% OFF</span>
                 */}

                {/* Action Buttons - Only for Water Conditioner category */}
                {product.category === 'Water Conditioner' && (
                  <div className="flex gap-2">
                    {product.type !== 'coming_soon' ? (
                      <button 
                        onClick={() => handleBuyNow(product.name)}
                        className="flex-1 bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                      >
                        <ExternalLink size={16} />
                        Buy Now
                      </button>
                    ) : (
                      <button className="flex-1 bg-gray-200 text-gray-600 py-2 px-4 rounded-lg font-semibold cursor-not-allowed">
                        Coming Soon
                      </button>
                    )}
                    
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300">
                      <Eye size={16} className="text-gray-600" />
                    </button>
                    
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300" onClick={() => handleLike(product.id)}>
                      {likes[product.id] ? <Heart size={16} fill='red' className='text-red-600'/>:<Heart size={16} className="text-gray-600" />}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )})}
        </motion.div>
        {/* See More button - only on mobile if more products exist */}
        {isMobile && visibleCount < filteredProducts.length && (
          <div className="text-center mt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-6 py-3 bg-white rounded-lg font-semibold transition-all duration-300 shadow-md"
            >
              See More
            </button>
          </div>
        )}
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
            <p className="text-white">We're working on adding products to this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection; 