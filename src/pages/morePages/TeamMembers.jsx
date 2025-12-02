import React, { useState, useEffect } from "react";
import { teamMembers } from "../data/data";
import { motion } from "framer-motion";

const TeamMembers = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HERO */}
     <motion.div
  className="relative w-full min-h-[300px] h-auto md:h-[70vh] overflow-visible flex flex-col items-center justify-center px-4 text-center py-16 sm:py-20 md:py-0"
  initial="hidden"
  whileInView="visible"
>
  {/* Background Image - stays behind content; nudged on mobile so it doesn't cover top */}
  <motion.img
    src="" // Add your hero image here
    alt="Hands stacked in different skin tones"
    className="absolute inset-0 w-full h-full object-cover object-top md:object-center pointer-events-none
               -translate-y-6 md:translate-y-0 transition-transform duration-300"
    style={{ zIndex: 0 }}
  />

  {/* Optional overlay for better contrast */}
  <div className="absolute inset-0 bg-black/30 z-0"></div>

  {/* Overlay content */}
  <motion.div
    className="relative z-10 flex flex-col items-center justify-center space-y-4 max-w-3xl px-4 py-10"
    style={{ transform: "translateZ(0)" }}
  >
    {/* Main Heading: use slightly smaller sizes on very small screens and allow wrapping */}
    <h1
      className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest uppercase
                 bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]
                 bg-clip-text text-transparent leading-snug break-words whitespace-normal"
      style={{ lineHeight: 1.04 }}
    >
      Team Members
    </h1>

    {/* Subparagraph */}
    <motion.p
      className="text-gray-300 text-sm sm:text-base md:text-lg font-light max-w-2xl"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.5 }}
    >
      Meet the passionate individuals behind our success. Our team combines expertise,
      creativity, and dedication to deliver outstanding results and drive innovation.
    </motion.p>

    {/* Buttons Section */}
    <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 z-10">
      <button
        className="px-6 sm:px-8 py-2 rounded-full font-semibold text-white
                   bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]
                   hover:scale-105 transition-transform duration-200"
      >
        Learn More
      </button>

      <button
        className="px-6 sm:px-8 py-2 rounded-full font-semibold
                   text-white border border-white/70 bg-white/10 backdrop-blur-sm
                   hover:bg-white/20 hover:scale-105 transition-all duration-200"
      >
        Contact Us
      </button>
    </div>
  </motion.div>
</motion.div>

      {/* CONTENT: left sticky + right scrollable */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Use column on mobile so left content appears above the list; keep row on md+ */}
          <div className="flex flex-col md:flex-row">
            {/* LEFT PANEL (becomes sticky on md+) */}
            <div
              className="md:w-1/2 w-full md:h-screen md:sticky md:top-0 flex flex-col justify-center px-6 py-8 md:px-12 md:py-12 bg-white transition-all duration-500"
            >
              <div className="max-w-md mx-auto md:mx-0">
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
                  Why People Love Our
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]">
                    Team
                  </span>
                </h1>

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl sm:text-3xl text-[#AFDE00]">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-black text-lg font-semibold mb-8">Meet Our Leadership</p>
              </div>
            </div>

            {/* RIGHT: Team members (stacked on mobile) */}
            <div className="md:w-1/2 w-full">
              <div className="space-y-6 px-4 py-6 md:py-12">
                {teamMembers.map((member) => (
                  <div key={member.id} className="w-full flex justify-center">
                    <div
                      className="w-full max-w-4xl bg-white relative overflow-hidden rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(175, 222, 0, 0.03) 0%, rgba(231, 12, 128, 0.03) 50%, rgba(255, 128, 0, 0.03) 100%)",
                      }}
                    >
                      {/* Decorative background (optional subtle gradients) */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 20% 50%, #AFDE00, transparent 50%), radial-gradient(circle at 80% 80%, #E70C80, transparent 50%)",
                          zIndex: 0,
                        }}
                      />

                      {/* IMAGE */}
                      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-[28rem] rounded-t-2xl overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="relative z-10 px-6 py-6 md:py-10">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">
                          {member.name}
                        </h2>

                        <p className="text-[#E70C80] font-bold text-base sm:text-lg mb-4">
                          {member.title}
                        </p>

                        <div className="mb-6 h-1 w-16 bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] rounded-full" />

                        <div className="space-y-4">
                          {member.description.split("\n\n").map((paragraph, idx) => (
                            <p
                              key={idx}
                              className="text-black leading-relaxed text-sm sm:text-base md:text-lg"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
