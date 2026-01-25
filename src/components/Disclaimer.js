import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function Disclaimer() {
  const { t } = useTranslation();
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
          {t('disclaimer.heading')}
        </motion.h2>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-white text-left space-y-6"
        >
          {t('disclaimer.content', { returnObjects: true }).map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
