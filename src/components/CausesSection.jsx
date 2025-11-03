// src/components/CausesSection.jsx
import React from "react";
import { motion } from "framer-motion";

const featuredCauses = [
  {
    title: "Help Homeless",
    description:
      "Providing emergency accommodation for homeless individuals enrolled in our education and training programs.",
    progress: 10,
    color: "lime",
  },
  {
    title: "Child Education",
    description:
      "Offering child education support, including tutoring, mentorship, and access to resources.",
    progress: 75,
    color: "pink",
  },
  {
    title: "Healthy Minds",
    description:
      "Promoting mental health first aid and support to ensure the well-being of our community.",
    progress: 99,
    color: "orange",
  },
];

const CausesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-lime-600 uppercase font-semibold text-sm tracking-wider mb-3 block">
            Featured Causes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Making a Real Impact
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our mission focuses on enhancing racial harmony education, supporting
            STEM development, and promoting social welfare across communities.
          </p>
        </motion.div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCauses.map((cause, index) => (
            <motion.div
              key={cause.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon Placeholder */}
              <div
                className={`w-16 h-16 bg-gradient-to-r from-${cause.color}-500 to-${cause.color}-600 rounded-2xl flex items-center justify-center mb-6`}
              >
                <i className="fa-solid fa-heart text-white text-2xl"></i>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {cause.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {cause.description}
              </p>

              {/* Progress Bar */}
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${cause.progress}%` }}
                  transition={{ duration: 1 }}
                  className={`h-full bg-gradient-to-r from-${cause.color}-500 to-${cause.color}-600`}
                />
              </div>
              <p className="text-right text-sm font-medium text-gray-600 mb-4">
                {cause.progress}% funded
              </p>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3 bg-gradient-to-r from-${cause.color}-500 to-${cause.color}-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all`}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
