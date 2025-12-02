import React from "react";
import { motion } from "framer-motion";
import images from "../../assets/images";

const FreeData = () => {
  return (
    <>
      {/* first section - hero */}
      <motion.div
        className="relative w-full h-[80vh] min-h-[300px] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.img
          src="" // Add your hero image URL here
          alt="Hands stacked in different skin tones"
          className="w-full h-full object-cover"
          loading="eager"
        />

        <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest uppercase">
            FREE DATA
          </h1>

          {/* Paragraph */}
          <p className="mt-4 text-white max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
            Empowering communities with compassion, unity, and a shared vision for a better tomorrow.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#learn"
              className="px-6 py-3 rounded-full font-semibold text-white 
                bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]
                hover:opacity-90 transition-all"
            >
              Learn More
            </a>

            <motion.a
              href="#apply"
              className="px-6 py-3 rounded-full text-white font-semibold 
                border-2 border-white bg-white/5 backdrop-blur-sm inline-flex items-center justify-center"
              whileTap={{ scale: 0.98 }}
            >
              Join us
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* second section - main info (no shadow, no rounded, max-w-7xl) */}
      <div className="w-full bg-gray-50 flex items-center justify-center px-4 sm:px-8 lg:px-12 py-12">
        <div className="w-full max-w-7xl bg-white overflow-hidden p-6 sm:p-10 lg:p-16 space-y-12">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 text-center leading-tight">
            ISHEP Foundation – Digital Inclusion & Social Welfare
          </h1>

          {/* Main Paragraph */}
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
            ISHEP Foundation is committed to delivering PRH Education, STEM training support, and acts of good will in Social welfare. As part of our social welfare initiatives, we are proud to be a Digital Inclusion Hub within the National Digital Inclusion Network, comprising over 5,000+ organisations across the UK.
            <br />
            <br />
            Part of ISHEP’s mission is to help fix the digital divide within our communities. We deliver free digital inclusion services to help people access and learn how to use the internet. As a trusted Digital Inclusion Hub, we engage individuals who aren’t online through local interventions and informal support. Our focus is on distributing internet access, devices, and free digital skills sessions, addressing all three barriers to digital inclusion.
          </p>

          {/* Image with text overlay */}
          <div className="relative w-full m-auto max-w-4xl h-[50vh] overflow-hidden flex justify-center">
        <img
    src={images.freeData}
    alt="Digital Inclusion"
    className="w-full h-[50vh] object-contain"
  />


            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#AFDE00]/70 via-[#E70C80]/70 to-[#FF8000]/70 flex flex-col items-center justify-center p-6 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-snug drop-shadow-lg">
                Empowering Communities
                <br />
                Through Digital Inclusion
              </h2>

              <p className="mt-4 text-white text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
                ISHEP Foundation distributes devices, provides internet access and runs free digital skills sessions to help people overcome the barriers to digital inclusion.
              </p>
            </div> */}
          </div>
        </div>
      </div>

      {/* third section - sticky left image, right content, no shadow/rounded, max-w-7xl */}
      <div className="w-full bg-gray-50 flex items-center justify-center p-4 sm:p-8 lg:p-12">
        <div className="w-full max-w-7xl bg-white overflow-hidden p-6 sm:p-10 lg:p-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-8 lg:gap-12">
            {/* LEFT - sticky image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-md lg:max-w-none overflow-hidden lg:sticky lg:top-16">
                <div className="h-64 sm:h-80 md:h-96 lg:h-[520px]">
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=2074&q=80"
                    alt="Mobile Data Initiative"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT - content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              {/* Tag Header */}
              <div className="mb-6 lg:mb-8">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]">
                  Mobile Data Initiative
                </span>
              </div>

              {/* Eligibility & Access */}
              <div className="border-l-4 border-[#E70C80] pl-4 py-4 mb-8 bg-gradient-to-r from-[#AFDE00]/10 via-[#E70C80]/10 to-[#FF8000]/10">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Eligibility and Access</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>18+ years old and from a <strong>low-income household</strong></li>
                  <li>Have <strong>no or insufficient internet access</strong> at home</li>
                  <li>Have <strong>no or insufficient internet access</strong> away from home</li>
                  <li><strong>Unable to afford</strong> an existing monthly contract or top-up</li>
                </ul>
              </div>

              {/* Stats / Action */}
              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12 pt-4 border-t border-gray-200">
                <div className="text-center sm:text-left">
                  <p className="text-5xl font-extrabold text-[#AFDE00] mb-1">100%</p>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500">Focus on Data Access</p>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-5xl font-extrabold text-[#FF8000] mb-1">Apply Now</p>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500">Register Your Need</p>
                </div>
              </div>

              {/* Button */}
              <div className="mt-8">
                <a
                  href="#register"
                  className="inline-block px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] hover:opacity-90 transition duration-300 transform hover:scale-105"
                >
                  Apply for a Free SIM CARD
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeData;
