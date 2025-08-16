import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Wrench, Ban, Heart, Shield, Zap } from 'lucide-react';

const FeaturesBar = () => {
  const features = [
    {
      icon: Clock,
      title: '15 Year Life',
      description: 'Long-lasting performance',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      icon: Wrench,
      title: 'No Maintenance',
      description: 'Set it and forget it',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      icon: Ban,
      title: 'No Salt',
      description: 'Chemical-free solution',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      icon: Heart,
      title: 'Better Hair',
      description: 'Softer, healthier hair',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      icon: Shield,
      title: 'Skin Safe',
      description: 'Gentle on your skin',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      icon: Zap,
      title: 'Install & Forget',
      description: 'Simple installation',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Why Choose Aqua Ultimate Water Conditioner?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the difference with our innovative water conditioning technology
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={28} className={feature.color} />
              </div>
              <h3 className="font-semibold text-text mb-2 text-sm">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar; 