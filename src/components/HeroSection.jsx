// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, BookOpen } from "lucide-react";
import sarah from "../assets/slide6.png";

const HeroSection = () => {
  return (
    <section className="hero3 bg-cover min-h-screen relative z-10 py-10">
      <div className="container mx-auto px-6 pb-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text Column */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="sub-title text-18 leading-18 white1 uppercase mb-5 font-medium inline-block"
            >
              Real Humans Powered By Community ❤️
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-lime-400 via-pink-500 to-orange-500 text-transparent bg-clip-text leading-tight"
            >
              Integrated Solutions
              <br /> Helping Everyday People
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              WE HAVE MORE THAT CONNECTS US, THAN WHAT SEPARATES US. Join our
              movement to promote racial harmony through education, training,
              and social welfare initiatives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <Link to="/get-involved">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-lime-500 to-pink-600 hover:from-lime-600 hover:to-pink-700 text-white font-semibold rounded-2xl shadow-2xl shadow-lime-500/25 transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <Users className="w-5 h-5" />
                  Join Our Movement
                </motion.button>
              </Link>

              <Link to="/programs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold rounded-2xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <BookOpen className="w-5 h-5" />
                  Our Programs
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right — Responsive Image + Circles */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">
            <div className="relative flex justify-center items-center 
                            w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] 
                            md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]">

              {/* Rotating Dotted Circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border-4 border-dotted border-pink-500 
                           w-full h-full"
              ></motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border-8 border-dotted border-lime-400 
                           w-[85%] h-[85%]"
              ></motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border-[14px] border-dotted border-orange-400 
                           w-[65%] h-[65%]"
              ></motion.div>

              {/* Center Image */}
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                src={sarah}
                alt="Volunteer"
                className="relative z-10 rounded-3xl shadow-2xl object-cover 
                           w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] 
                           md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
