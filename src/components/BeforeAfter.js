import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { useTranslation } from 'react-i18next';


const BeforeAfter = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();
  const slidesData = [
    {
      beforeImg: "generated-image_3_pp2omw",
      afterImg: "generated-image_2_l55aqk"
    },
    {
      beforeImg: "generated-image_hzm8uz",
      afterImg: "generated-image_1_p1wxy1"
    },
    {
      beforeImg: "generated-image_12_gfsrwh",
      afterImg: "generated-image_13_bymtao"
    },
    {
      beforeImg: "generated-image_5_aqoejo",
      afterImg: "generated-image_4_p4fccm"
    }
  ];
  const slides = t('beforeAfter.slides', { returnObjects: true });

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-blue-200 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            {t('beforeAfter.title')}
          </h2>
          <p className="text-gray-600 text-md md:text-xl">
            {t('beforeAfter.subtitle')}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Carousel */}
          <div className="flex flex-col items-center order-2 lg:order-1">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center"
            >
              <BeforeAfterSlider
                before={{
                  title: slides[current].beforeTitle,
                  description: slides[current].beforeDescription,
                  imageUrl: slidesData[current].beforeImg
                }}
                after={{
                  title: slides[current].afterTitle,
                  description: slides[current].afterDescription,
                  imageUrl: slidesData[current].afterImg
                }}
              />
            </motion.div>

            {/* Prev/Next buttons below slider */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-50 transition"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-50 transition"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === current ? "bg-accent" : "bg-gray-900"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Details Box */}
          <div className="bg-gray-900 rounded-3xl py-6 md:py-12 px-4 sm:px-6 lg:px-8 order-1 lg:order-2">
            <h3 className="text-xl md:text-4xl font-semibold text-white mb-2">
              {slides[current].title}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-md md:text-xl text-red-600">{slides[current].beforeTitle}</h4>
                <p className="text-white text-sm md:text-xl">{slides[current].beforeDescription}</p>
              </div>
              <div>
                <h4 className="text-md md:text-xl text-green-600">{slides[current].afterTitle}</h4>
                <p className="text-white text-sm md:text-xl">{slides[current].afterDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
