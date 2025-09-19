import { motion } from "framer-motion";
import Goals from "../components/Goals";
import { cld } from '../utils/cloudinary';
import {AdvancedImage} from '@cloudinary/react';
import { scale } from "@cloudinary/url-gen/actions/resize";

export default function AboutUs() {
  const cldAboutbg=cld.image(`about-bg_vpmhuo`).format("auto").quality("auto").resize(scale().width(500))
  const cldAbout01=cld.image(`about-01_v8qtig`).format("auto").quality("auto").resize(scale().width(500))
  const cldAbout02=cld.image(`about-02_dhczwo`).format("auto").quality("auto").resize(scale().width(500))

  return (
    <section className="relative bg-gray-50 py-12">
      {/* Background Image */}
      <div className="absolute inset-0">
      <AdvancedImage key={cldAboutbg} cldImg={cldAboutbg}
          className="w-full h-80 object-cover object-[50%_55%]"
        />
      </div>

      {/* Overlay Card */}
      <div className="relative max-w-6xl mx-auto mt-60 bg-text rounded-2xl shadow-lg p-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-8"
        >
          ABOUT US
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          More than a water solution - We strive for WATER REVOLUTION
        </motion.h2>

        {/* Images + Text Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div>
          <AdvancedImage key={cldAbout01} cldImg={cldAbout01}
              className="w-full h-[75vh] object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <div className="text-lg text-white my-5">
              <span className="font-bold text-xl">Aqua Ultimate </span>
              was founded with a vision to bring safe, affordable, and innovative
              water purification solutions to every home. Backed by over 15 years
              of expertise in the water treatment industry, we have grown from
              offering simple RO systems to delivering advanced, reliable, and
              user-friendly purification technologies. Over the years, we’ve built
              trust through quality products, transparent service, and a strong
              focus on customer satisfaction. Our systems are designed with
              certified components, and cost-effective maintenance—making us a
              preferred choice for families across India. At{" "}
              <span className="font-bold text-xl">Aqua Ultimate </span>, we
              believe we’re not just solving water problems—we’re shaping a
              healthier, cleaner, and more sustainable future.
            </div>
            <AdvancedImage key={cldAbout02} cldImg={cldAbout02}
              className="w-full h-64 object-cover rounded-lg shadow"
            />
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 my-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10,000+</div>
            <div className="text-sm text-white">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-sm text-white">Cities Covered</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="text-3xl font-bold text-white mb-2">4.9★</div>
            <div className="text-sm text-white">Customer Rating</div>
          </div>
        </motion.div>

        {/* Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Goals />
        </motion.div>
      </div>
    </section>
  );
}
