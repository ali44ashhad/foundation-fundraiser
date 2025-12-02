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

  const innerHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  return (
    <>

  {/* HERO */}
     <motion.div
  className="relative w-full h-[70vh] min-h-[300px] overflow-hidden flex flex-col items-center justify-center px-4 text-center"
  initial="hidden"
  whileInView="visible"
>
  {/* Background Image */}
  <motion.img
    src="" // Add your hero image here
    alt="Hands stacked in different skin tones"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay content */}
  <motion.div className="relative z-10 flex flex-col items-center justify-center space-y-4 max-w-3xl">
    {/* Main Heading */}
    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest uppercase px-4">
      Team Members
    </h1>

    {/* Subparagraph */}
    <motion.p
      className="text-gray-300 text-base sm:text-lg md:text-xl font-light max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      Meet the passionate individuals behind our success. Our team combines expertise,
      creativity, and dedication to deliver outstanding results and drive innovation.
    </motion.p>
  </motion.div>

  {/* Optional overlay for better contrast */}
  <div className="absolute inset-0 bg-black/30 z-0"></div>
</motion.div>




        <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
         <div className="flex min-h-screen">
           <div
            className="w-1/2 h-screen sticky top-0 flex flex-col justify-center px-12 py-12 bg-white transition-all duration-500"
            style={{ transform: "none" }}
          >
            <div className="max-w-md">
              <h1 className="text-5xl font-bold text-black mb-4">
                Why People Love Our
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]">
                  Team
                </span>
              </h1>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-3xl text-[#AFDE00]">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-black text-lg font-semibold mb-8">
                Meet Our Leadership
              </p>

            </div>
          </div>

          {/* Right Scrollable Section */}
          <div className="w-1/2">
            <div className="space-y-0">
         {teamMembers.map((member, index) => (
  <div key={member.id} className="w-full flex justify-center px-4 py-8">
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
      <div className="relative w-full h-80 md:h-96 lg:h-[28rem] rounded-t-2xl overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-8 py-8 md:py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
          {member.name}
        </h2>

        <p className="text-[#E70C80] font-bold text-lg sm:text-xl mb-4">
          {member.title}
        </p>

        <div className="mb-6 h-1 w-16 bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] rounded-full" />

        <div className="space-y-4">
          {member.description.split("\n\n").map((paragraph, idx) => (
            <p
              key={idx}
              className="text-black leading-relaxed text-base sm:text-lg"
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
