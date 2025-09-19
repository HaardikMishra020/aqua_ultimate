import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
          Privacy Policy
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
        We respect and humbly value the privacy of every visitor to our
        website. Under no circumstances will{" "}
        <span className="font-bold">Aqua Ultimate</span> share or disclose your
        personal information to external parties, unless we are legally
        obligated to do so.
      </p>

      <p>
        All personal information provided to{" "}
        <span className="font-bold">Aqua Ultimate</span>, whether through our
        website or by other means, is securely protected. At the time of
        collecting personal information, individuals will be clearly informed
        about:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>What information is being collected</li>
        <li>The purpose for which it is collected</li>
        <li>Their right to access or update this information</li>
      </ul>

      <p>
        By using our website, you acknowledge and agree to the terms of this
        Privacy Policy. <span className="font-bold">Aqua Ultimate</span>{" "}
        reserves the right to update, modify, or amend this policy at any time.
        Any changes will be effective immediately upon posting on our website.
      </p>

      <p>
        Continued use of our website after such updates will be considered as
        acceptance of those changes.
      </p>
        </motion.div>
      </div>
    </section>
  );
}
