// src/components/HeroSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, BookOpen, Sun, Moon } from "lucide-react";
import sarah from "../../assets/slide6.png";

const HeroSection = () => {
  const [theme, setTheme] = useState("dark"); // 'dark' or 'light'
  const isDark = theme === "dark";

  return (
   <section
      className={`transition-colors duration-300 ease-in-out ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } min-h-screen flex items-start`}
      aria-label="Hero section"
      // ensure mobile safe-area padding (works in modern mobile browsers)
      style={{ paddingTop: "env(safe-area-inset-top, 16px)" }}
    >
      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Top row: theme toggle */}
        <div className="flex justify-end py-4">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-pressed={!isDark}
            aria-label="Toggle theme"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full border transition-shadow shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 text-yellow-400" />
                <span className="sr-only">Switch to light theme</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-blue-600" />
                <span className="sr-only">Switch to dark theme</span>
              </>
            )}
          </button>
        </div>

        {/* Use min-height + padding instead of a locked viewport height */}
        <div className="min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh] flex items-center py-6 md:py-12">
          <div className="w-full lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Text Column */}
            <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`sub-title inline-block uppercase mb-5 font-medium ${
                  isDark ? "text-gray-200" : "text-gray-600"
                }`}
              >
                Real Humans Powered By Community ❤️
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl sm:text-5xl max-w-2xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-lime-400 via-pink-500 to-orange-500 text-transparent bg-clip-text leading-tight"
              >
                Integrated Solutions
                <br /> Helping Everyday People
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className={`text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                WE HAVE MORE THAT CONNECTS US, THAN WHAT SEPARATES US. Join our
                movement to promote racial harmony through education, training,
                and social welfare initiatives.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start"
              >
                <Link to="/get-involved" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-lime-500 to-pink-600 hover:from-lime-600 hover:to-pink-700 text-white font-semibold rounded-2xl shadow-2xl shadow-lime-500/20 transition-all flex items-center justify-center gap-3"
                  >
                    <Users className="w-5 h-5" />
                    Join Our Movement
                  </motion.button>
                </Link>

                <Link to="/pricing" className="w-full sm:w-auto ">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full sm:w-auto px-6 py-3 backdrop-blur-md border rounded-2xl transition-all flex items-center justify-center gap-3 font-semibold ${
                      isDark
                        ? "bg-white/6 border-white/20 text-white hover:bg-white/10"
                        : "bg-black/4 border-black/10 text-gray-900 hover:bg-black/6"
                    }`}
                  >
                    <BookOpen className="w-5 h-5" />
                    Our Programs
                  </motion.button>
                </Link>
              </motion.div>
            </div>
{/* right side */}
      <div className="flex justify-center items-center p-6">
  <div className="relative w-[200px] sm:w-[280px] md:w-[360px] lg:w-[480px] aspect-square">
    
    {/* IMAGE */}
    <img
      src={sarah}
      alt="Volunteer"
      className="w-full h-full object-cover rounded-3xl md:rounded-[24%] block"
    />

    {/* SVG border outside image */}
    <svg
      className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] z-20 pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff4da6" />
          <stop offset="50%" stopColor="#b38fff" />
          <stop offset="100%" stopColor="#4b7dda" />
        </linearGradient>
      </defs>

      {/* Rectangle path */}
     <rect
  id="rectPath"
  x="0.5"
  y="0.5"
  width="99"
  height="99"
  rx="22"
  ry="22"
  fill="none"
  stroke="url(#gradientLine)"
  strokeWidth="0.4"               // ⭐ Thinner border
  strokeDasharray="100"           // Keeps only a moving segment
  strokeDashoffset="0"
  style={{ animation: "dashMove 10s linear infinite" }}  
/>

      {/* Moving circle */}
      {/* <circle
        r="1.2"
        fill="#fff"
        stroke="#ff4da6"
        strokeWidth="0.4"
      >
        <animateMotion dur="3.5s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#rectPath" />
        </animateMotion>
      </circle> */}

      <style>{`
        @keyframes dashMove {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -396; } /* negative for smooth continuous motion */
        }
      `}</style>
    </svg>
  </div>
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
