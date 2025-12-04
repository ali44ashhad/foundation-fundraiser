import React from 'react'
import { giftData, harmonyData } from './data/data'
import { motion } from 'framer-motion'
import images from '../assets/images'
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

// Reusable motion variants
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 }
  }
}

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const smallPop = {
  hidden: { opacity: 0, y: 6, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 110, damping: 14, duration: 0.5 },
  },
};

const imagePop = {
  hidden: { opacity: 0, y: 8, scale: 1 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const directional = (side = 'left') => ({
  hidden: { opacity: 0, x: side === 'left' ? -20 : 20, y: 6 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
});

const WillHarmony = () => {
  return (
    <>
      {/* HERO */}
      <BackgroundBeamsWithCollision beamCount={20} className='w-full'>
        <motion.div
          className="relative w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
          variants={staggerContainer}
        >
          {/* Hero image */}
          <motion.img
            src={images.hero || ""}
            alt="Hands stacked in different skin tones"
            className="absolute inset-0 w-full h-full object-cover object-center"
            variants={directional('left')}
            loading="eager"
          />

          {/* Overlay */}
          <motion.div
            className="
              absolute inset-0 z-10 flex px-6 sm:px-8
              items-end sm:items-center justify-center
              pb-6 sm:pb-0
              bg-gradient-to-t from-[rgba(0,0,0,0.45)] via-[rgba(0,0,0,0.18)] to-[rgba(0,0,0,0)]
            "
            variants={fadeUp}
          >
            <div className="w-full max-w-3xl text-center">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight sm:tracking-wider">
                A WILL HARMONY
              </h1>

              <p className="mt-3 text-white text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
                Empowering communities with compassion, unity, and a shared vision for a better tomorrow.
              </p>

              {/* UPDATED BUTTONS */}
              <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">

                {/* Smaller on mobile */}
                <button
                  className="
                    px-4 py-2 text-sm
                    sm:px-6 sm:py-2.5 sm:text-base
                    rounded-full font-semibold text-white 
                    bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]
                    hover:opacity-95 transition-all whitespace-nowrap
                  "
                >
                  Learn More
                </button>

                <motion.button
                  className="
                    px-4 py-2 text-sm
                    sm:px-6 sm:py-2.5 sm:text-base
                    rounded-full text-white font-semibold 
                    border-2 border-white bg-white/5 backdrop-blur-sm
                  "
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </BackgroundBeamsWithCollision>

      {/* MAIN WRAPPER */}
      <div className='w-full bg-white'>

        {/* Intro Section */}
        <motion.section
          className="py-12 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
          variants={sectionVariants}
        >
          <motion.div
            className="max-w-7xl mx-auto text-center mb-10"
            variants={fadeUp}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4
                bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] bg-clip-text text-transparent"
              variants={smallPop}
            >
              The Power of a Gift in Your Will to ISHEP
            </motion.h2>

            <motion.p
              className="mt-3 text-base sm:text-lg text-black max-w-6xl mx-auto leading-relaxed"
              variants={fadeUp}
            >
              Believe it or not, each and every one of us weaves a unique thread...
            </motion.p>
          </motion.div>

          {/* 4 image blocks */}
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4">
            {[
              { id: 1, img: images.gift1, alt: "Gift 1" },
              { id: 2, img: images.gift2, alt: "Gift 2" },
              { id: 3, img: images.gift3, alt: "Gift 3" },
              { id: 4, img: images.gift4, alt: "Gift 4" },
            ].map((item) => (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="w-auto h-48 flex items-center justify-center rounded-xl"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-300 ease-out hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Gift detail sections */}
        <div className="bg-[#fefefe]">
          {giftData.map((item, index) => {
            const reverse = index % 2 !== 0;
            const textSide = reverse ? 'left' : 'right';
            return (
              <section key={index} className="py-10 lg:py-16">
                <motion.div
                  className="max-w-7xl mx-auto px-4 sm:px-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.28 }}
                  variants={staggerContainer}
                >
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${reverse ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Image */}
                    <motion.div className="w-full lg:w-1/2" variants={imagePop}>
                      <motion.img
                        src={item.img}
                        alt={item.subtitle || item.title}
                        className="w-full h-56 sm:h-72 md:h-96 lg:h-[420px] object-cover rounded-2xl shadow-lg"
                        loading="lazy"
                      />
                    </motion.div>

                    {/* Text */}
                    <motion.div className="w-full lg:w-1/2" variants={directional(textSide)}>
                      <motion.h1
                        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] text-transparent bg-clip-text"
                        variants={smallPop}
                      >
                        {item.title}
                      </motion.h1>

                      <motion.h2 className="mt-3 text-base sm:text-lg text-gray-600 font-medium" variants={fadeUp}>
                        {item.subtitle}
                      </motion.h2>

                      <motion.p className="mt-6 text-sm sm:text-base text-gray-700 leading-relaxed" variants={fadeUp}>
                        {item.description}
                      </motion.p>

                      {/* UPDATED BUTTONS */}
                      <motion.div className="mt-6 flex flex-col sm:flex-row gap-3" variants={staggerContainer}>
                        
                        <motion.button
                          className="
                            px-4 py-2 text-sm
                            sm:px-5 sm:py-3 sm:text-base
                            rounded-lg bg-[#afde00] text-white font-medium shadow 
                            hover:bg-[#ff8204] transition
                          "
                          variants={smallPop}
                        >
                          Get Started
                        </motion.button>

                        <motion.button
                          className="
                            px-4 py-2 text-sm
                            sm:px-5 sm:py-3 sm:text-base
                            rounded-lg bg-gray-100 text-gray-800 font-medium shadow 
                            hover:bg-gray-200 transition
                          "
                          variants={smallPop}
                        >
                          Learn More
                        </motion.button>

                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </section>
            )
          })}
        </div>

        {/* Harmony cards */}
        <motion.section
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionVariants}
        >
          <motion.div className="max-w-7xl mx-auto text-center mb-12" variants={fadeUp}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] bg-clip-text text-transparent"
              variants={smallPop}
            >
              The Power of a Gift in Your Will to ISHEP
            </motion.h2>

            <motion.p className="mt-4 text-base sm:text-lg text-gray-600 max-w-4xl mx-auto" variants={fadeUp}>
              Believe it or not, each and every one of us weaves a unique thread…
            </motion.p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {harmonyData.map((card, i) => {
              const fromSide = i % 2 === 0 ? 'left' : 'right';
              return (
                <motion.div
                  key={card.id}
                  className="relative rounded-lg overflow-hidden"
                  variants={fadeUp}
                >
                  <motion.div
                    className="bg-white rounded-lg h-full flex flex-col"
                    variants={directional(fromSide)}
                  >
                    <motion.div
                      className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-lg"
                      variants={imagePop}
                    >
                      <motion.img
                        className="w-full h-full object-cover"
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                      />
                    </motion.div>

                    <motion.div className="p-6 flex-grow" variants={fadeUp}>
                      <motion.h3 className="text-xl font-bold mb-3 text-gray-900" variants={smallPop}>
                        {card.title}
                      </motion.h3>

                      <motion.p className="text-gray-600 text-base" variants={fadeUp}>
                        {card.content}
                      </motion.p>
                    </motion.div>

                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default WillHarmony
