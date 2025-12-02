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
  {/* Hero image (fills) */}
  <motion.img
    src={images.hero || ""}
    alt="Hands stacked in different skin tones"
    className="absolute inset-0 w-full h-full object-cover object-center"
    variants={directional('left')}
    loading="eager"
  />

  {/* Overlay: bottom-aligned on mobile, centered on >=sm */}
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

      <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          className="px-5 sm:px-6 py-2.5 rounded-full font-semibold text-white 
            bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]
            hover:opacity-95 transition-all whitespace-nowrap"
        >
          Learn More
        </button>

        <motion.button
          className="px-5 sm:px-6 py-2.5 rounded-full text-white font-semibold 
            border-2 border-white bg-white/5 backdrop-blur-sm"
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

        {/* Intro Section with 4 image blocks */}
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
              className="mt-3 text-base sm:text-lg text-black max-w-3xl mx-auto leading-relaxed"
              variants={fadeUp}
            >
              Believe it or not, each and every one of us weaves a unique thread,
              contributing to the rich fabric of our shared human experience. As we
              journey through life, we accumulate not just possessions but also values,
              beliefs, and a desire to make a lasting impact. One of the most profound
              ways to ensure your legacy endures is by leaving a gift in your will to a
              cause close to your heart.
            </motion.p>
          </motion.div>

          {/* 4 image blocks — responsive grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                 { id: 1, img: images.gift1 },
                 { id: 2, img: images.gift2 },
                 { id: 3, img: images.gift3 },
                 { id: 4, img: images.gift4 }].map((item, index) => (
                   <motion.div
                     key={item.id}
                     variants={fadeUp}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                     className=" h-58 w-full transition-all duration-300"
                   >
                     <img
                       src={item.img}
                       alt="Gallery Image"
                       className="w-full h-full object-contain transform transition duration-500 hover:scale-105"
                     />
                  </motion.div>

                ))}



            </div>
          </div>
        </motion.section>

        {/* Gift detail sections (left/right alternating) */}
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
                    <motion.div className="w-full lg:w-1/2 flex-shrink-0" variants={imagePop}>
                      <motion.img
                        src={item.img}
                        alt={item.subtitle || item.title}
                        className="w-full h-56 sm:h-72 md:h-96 lg:h-[420px] object-cover rounded-2xl shadow-lg"
                        loading="lazy"
                        variants={imagePop}
                      />
                    </motion.div>

                    {/* Text */}
                    <motion.div className="w-full lg:w-1/2" variants={directional(textSide)}>
                      <motion.h1
                        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] text-transparent bg-clip-text"
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

                      <motion.div className="mt-6 flex flex-col sm:flex-row gap-3" variants={staggerContainer}>
                        <motion.button
                          className="px-5 py-3 rounded-lg bg-[#afde00] text-white font-medium shadow hover:bg-[#ff8204] transition"
                          variants={smallPop}
                        >
                          Get Started
                        </motion.button>
                        <motion.button
                          className="px-5 py-3 rounded-lg bg-gray-100 text-gray-800 font-medium shadow hover:bg-gray-200 transition"
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
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4
                bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] bg-clip-text text-transparent"
              variants={smallPop}
            >
              The Power of a Gift in Your Will to ISHEP
            </motion.h2>

            <motion.p
              className="mt-4 text-base sm:text-lg text-gray-600 max-w-4xl mx-auto"
              variants={fadeUp}
            >
              Believe it or not, each and every one of us weaves a unique thread, contributing to the rich fabric of our shared human experience. Leaving a gift in your will is a profound way to create a lasting legacy.
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
                    className="bg-white rounded-lg h-full flex flex-col transform transition duration-300"
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
                        variants={imagePop}
                        loading="lazy"
                      />
                    </motion.div>

                    <motion.div className="p-6 flex-grow" variants={fadeUp}>
                      <motion.h3
                        className={`text-xl font-bold mb-3 ${card.statistic ? 'text-blue-700' : 'text-gray-900'}`}
                        variants={smallPop}
                      >
                        {card.title}
                      </motion.h3>

                      <motion.p className="text-gray-600 text-base" variants={fadeUp}>
                        {card.id === 3 ? (
                          <>
                            <strong className="text-red-600 font-extrabold block mb-2">
                              Black people are nearly twice as likely to be in poverty as white people.
                            </strong>
                            ISHEP PRH – Education unlocks social cohesion by providing dedicated bespoke resources, empowering individuals with the knowledge and skills they need to succeed.
                          </>
                        ) : (
                          card.content
                        )}
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
