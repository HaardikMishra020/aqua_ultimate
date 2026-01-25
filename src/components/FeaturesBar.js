import React from 'react';
import { motion } from 'framer-motion';
import { cld } from '../utils/cloudinary';
import { AdvancedImage } from '@cloudinary/react';
import { scale } from "@cloudinary/url-gen/actions/resize";
import { useTranslation } from 'react-i18next';

const FeaturesBar = () => {
  const { t } = useTranslation();
  const featuresData = [
    'generated-image_9_nh7bgu',
    'pexels-ximenamora-1727200_rpaw9i',
    'generated-image_11_lddhqd',
    'generated-image_8_pq8zkf',
    'generated-image_7_ywb2pl',
    'generated-image_6_yvs4vb'
  ];
  const features = t('featuresBar.features', { returnObjects: true });

  return (
    <section id="features" className="bg-yellow-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            {t('featuresBar.title')}
          </h2>
          <p className=" text-md md:text-xl mx-auto">
            {t('featuresBar.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => {
            const cldImg = cld.image(featuresData[index]).format("auto").quality("auto").resize(scale().width(150));
            return (
              <div className='bg-white rounded-lg p-4' key={feature.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <AdvancedImage key={featuresData[index]} cldImg={cldImg} className="w-40 object-contain rounded-xl mb-2" />
                  </div>
                  <h3 className="font-semibold text-text mb-2 text-md">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar; 