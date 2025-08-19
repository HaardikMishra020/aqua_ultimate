import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

const BeforeAfter = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "Skin Transformation",
      before: {
        title: "Before",
        description:
          "Hard water often leaves skin dry, itchy, and irritated. Daily showers can strip away natural oils, making your skin feel rough and uncomfortable.",
        imageUrl:
          "https://res.cloudinary.com/dvragaic8/image/upload/v1752999194/generated-image_3_pp2omw.png",
      },
      after: {
        title: "After",
        description:
          "With conditioned water, your skin stays naturally moisturized and smooth. Customers notice softer, healthier skin that feels nourished after every wash.",
        imageUrl:
          "https://res.cloudinary.com/dvragaic8/image/upload/v1752999195/generated-image_2_l55aqk.png",
      },
    },
    {
      title: "Hair Health",
      before: {
        title: "Before",
        description:
          "Hard water causes mineral buildup that makes hair brittle, dull, and difficult to manage. Even good shampoos often fail to lather properly.",
        imageUrl:
          "https://res.cloudinary.com/dvragaic8/image/upload/v1752990217/generated-image_hzm8uz.png",
      },
      after: {
        title: "After",
        description:
          "With conditioned water, hair feels softer, shinier, and easier to style. Customers experience healthier growth and fewer bad hair days.",
        imageUrl:
          "https://res.cloudinary.com/dvragaic8/image/upload/v1752990217/generated-image_1_p1wxy1.png",
      },
    },
    {
      title: "Plants Growth",
      before: {
        title: "Before",
        description:
          "Excess salts and minerals in hard water can hinder plant growth. Leaves turn yellow and soil becomes less fertile over time.",
        imageUrl:
          "https://res.cloudinary.com/dvragaic8/image/upload/v1753000429/generated-image_5_aqoejo.png",
      },
      after: {
        title: "After",
        description:
          "Using conditioned water helps plants absorb nutrients more effectively. The result is greener leaves, stronger roots, and faster, healthier growth.",
        imageUrl:
          "https://res.cloudinary.com/dvragaic8/image/upload/v1753000430/generated-image_4_p4fccm.png",
      },
    },
  ];

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
<section className="bg-blue-200 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            See the Difference
          </h2>
          <p className="text-gray-600 text-lg">
          Use the slider (◀ ▶) to experience how Aqua Ultimate Water Conditioner improves your everyday life.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Carousel */}
          <div className="flex flex-col items-center">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center"
            >
              <BeforeAfterSlider
                before={slides[current].before}
                after={slides[current].after}
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
          <div className="bg-gray-900 rounded-3xl py-12 px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {slides[current].title}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-red-600">{slides[current].before.title}</h4>
                <p className="text-white">{slides[current].before.description}</p>
              </div>
              <div>
                <h4 className="font-medium text-green-600">{slides[current].after.title}</h4>
                <p className="text-white">{slides[current].after.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
