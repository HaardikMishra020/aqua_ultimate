import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Wrench, Ban, Heart, Shield, Zap } from 'lucide-react';

const FeaturesBar = () => {
  const features = [
    {
      imgUrl: 'https://res.cloudinary.com/dvragaic8/image/upload/v1755499927/generated-image_9_nh7bgu.png',
      title: 'Better Hair',
      description: 'Softer, healthier hair',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      imgUrl: 'https://res.cloudinary.com/dvragaic8/image/upload/v1755500377/pexels-ximenamora-1727200_rpaw9i.png',
      title: 'Skin Safe',
      description: 'Gentle on your skin',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      imgUrl: 'https://res.cloudinary.com/dvragaic8/image/upload/v1755501139/generated-image_11_lddhqd.png',
      title: 'Activate Soap',
      description: 'Soap lathers better',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      imgUrl: 'https://res.cloudinary.com/dvragaic8/image/upload/v1755499773/generated-image_8_pq8zkf.png',
      title: 'Protect Clothes',
      description: 'Protect clothes from fading',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      imgUrl: 'https://res.cloudinary.com/dvragaic8/image/upload/v1755499440/generated-image_7_ywb2pl.png',
      title: 'No Maintenance',
      description: 'Set it and forget it',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      imgUrl: 'https://res.cloudinary.com/dvragaic8/image/upload/v1755498958/generated-image_6_yvs4vb.png',
      title: '15 Year Life',
      description: 'Long-lasting performance',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    }
   
    
  ];

  return (
    <section className="bg-yellow-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Why Choose Aqua Ultimate Water Conditioner?
          </h2>
          <p className=" text-xl max-w-2xl mx-auto">
            Experience the difference with our innovative water conditioning technology
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <div className='bg-white rounded-lg p-4'>
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`${feature.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <img src={feature.imgUrl} className="w-40 object-contain rounded-xl mb-2"
                    draggable={false}/>
              </div>
              <h3 className="font-semibold text-text mb-2 text-md">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {feature.description}
              </p>
            </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar; 