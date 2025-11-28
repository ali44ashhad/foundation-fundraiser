import React from "react";
import { motion } from "framer-motion";

const DonationSection = () => {
  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          Make a Donation
        </motion.h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Your contribution helps us fund education, workshops, and programs
          that foster understanding, inclusion, and social progress.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-4 bg-pink-600 text-white font-bold rounded-xl hover:bg-pink-500 transition"
        >
          Donate Now
        </motion.button>
      </div>
    </section>
  );
};

export default DonationSection;
