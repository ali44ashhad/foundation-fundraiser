// src/components/VolunteerSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const VolunteerSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative">

  {/* Background Image */}    
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <img
      src=""
      alt="background"
      className="w-full h-full object-cover"
    />
    
    {/* White Gradient Overlay */}
    <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
  </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-lime-600 uppercase font-semibold text-sm tracking-wider mb-3 block">
            Get Involved
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Make a Difference — Become a Volunteer
          </h2>

          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join <span className="font-semibold text-pink-600">ISHEP</span> and
            be part of a movement dedicated to promoting racial harmony,
            empowering education, and uplifting communities. As a volunteer,
            your contribution creates real, lasting change.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/volunteer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-lime-500 to-pink-600 text-white font-semibold rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                Join Our Volunteer Team
              </motion.button>
            </Link>

            <Link to="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-lime-500 text-lime-600 font-semibold rounded-2xl hover:bg-lime-50 transition-all duration-300"
              >
                Make a Donation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerSection;