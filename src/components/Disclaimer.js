import { motion } from "framer-motion";

export default function Disclaimer() {
  return (
    <section className="relative bg-gray-50 py-12">
      {/* Overlay Card */}
      <div className="relative max-w-6xl mx-auto bg-text rounded-2xl shadow-lg p-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-8"
        >
          Disclaimer
        </motion.h2>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-white text-left space-y-6"
        >
          <p>
        The Site, and all content, materials, information, and services
        provided on the Site, are offered on an{" "}
        <span className="italic">"as is"</span> and{" "}
        <span className="italic">"as available"</span> basis.
      </p>

      <p>
        <span className="font-bold">Aqua Ultimate</span> explicitly disclaims
        all warranties of any kind, whether express or implied, including, but
        not limited to, the implied warranties of fitness for a particular
        purpose and non-infringement.
      </p>

      <p>
        While utmost care has been taken to ensure the authenticity and
        accuracy of the information provided,{" "}
        <span className="font-bold">Aqua Ultimate</span> disclaims liability
        for the correctness, completeness, or infallibility of such
        information.
      </p>
        </motion.div>
      </div>
    </section>
  );
}
