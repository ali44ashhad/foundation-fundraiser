import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/ISHEP-logo.avif";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="text-center relative">
        {/* Rotating Gradient Ring (separate layer) */}
        <motion.div
          className="absolute inset-0 w-28 h-28 rounded-full bg-gradient-to-r from-lime-400 via-pink-500 to-orange-500"
          style={{
            maskImage:
              "radial-gradient(circle, transparent 60%, black 62%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 60%, black 62%)",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        ></motion.div>

        {/* Static Logo */}
        <div className="relative w-28 h-28 rounded-full flex items-center justify-center bg-transparent">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 rounded-full object-contain"
          />
        </div>

        {/* Pulsing Text */}
        <motion.p
          className="text-gray-400 text-lg font-medium mt-6"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
