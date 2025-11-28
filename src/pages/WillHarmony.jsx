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

const directional = (side = 'left') => ({
  hidden: { opacity: 0, x: side === 'left' ? -80 : 100, y: 12, scale: 0.98 },
  visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { type: 'spring', stiffness: 140, damping: 20 } }
})

const fadeUp = {
  hidden: { opacity: 0, y: 18, scale: 0.99 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 160, damping: 20 } }
}

const imagePop = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } }
}

const smallPop = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 220, damping: 22 } }
}

const WillHarmony = () => {
  return (
    <>
      <BackgroundBeamsWithCollision beamCount={20}>
        <motion.div
          className="relative w-full h-[60vh] min-h-[300px] overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.img
            src=""
            alt="Hands stacked in different skin tones"
            className="w-full h-full object-cover"
            variants={directional('left')}
            loading="eager"
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={fadeUp}
          >
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest uppercase text-center px-4">
              A WILL HARMONY
            </h1>
          </motion.div>
        </motion.div>
      </BackgroundBeamsWithCollision>

      {/* Gift Sections */}
      <div className='w-[100%] h-auto bg-white'>
        {giftData.map((item, index) => {
          const fromSide = index % 2 !== 0 ? 'right' : 'left'
          const textSide = index % 2 !== 0 ? 'left' : 'right'
          return (
            <section key={index} className="w-7xl m-auto bg-[#fefefe] py-20">
              <motion.div
                className="container mx-auto px-4 py-8 lg:py-16 max-w-7xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                variants={staggerContainer}
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Image */}
                  <motion.div className="w-full lg:w-1/2 flex-shrink-0" variants={imagePop}>
                    <motion.img
                      src={item.img}
                      alt={item.subtitle}
                      className="w-full h-64 sm:h-96 lg:h-[420px] object-cover rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-[1.02]"
                      loading="lazy"
                      variants={imagePop}
                    />
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    className="w-full lg:w-1/2"
                    variants={directional(textSide)}
                  >
                    <motion.h1
                      className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] text-transparent bg-clip-text"
                      variants={smallPop}
                    >
                      {item.title}
                    </motion.h1>

                    <motion.h2 className="mt-3 text-lg sm:text-xl text-gray-600 font-medium" variants={fadeUp}>
                      {item.subtitle}
                    </motion.h2>

                    <motion.p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed" variants={fadeUp}>
                      {item.description}
                    </motion.p>

                    <motion.div className="mt-8 flex flex-wrap gap-3" variants={staggerContainer}>
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

      {/* harmony card data */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        {/* Header Section */}
        <motion.div className="max-w-7xl mx-auto text-center mb-12" variants={fadeUp}>
          <motion.h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] bg-clip-text text-transparent" variants={smallPop}>
            The Power of a Gift in Your Will to ISHEP
          </motion.h2>

          <motion.p className="mt-4 text-base sm:text-lg text-gray-600 max-w-4xl mx-auto" variants={fadeUp}>
            Believe it or not, each and every one of us weaves a unique thread, contributing to the rich fabric of our shared human experience. Leaving a gift in your will is a profound way to create a lasting legacy.
          </motion.p>
        </motion.div>

        {/* Cards Grid - 2x2 layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {harmonyData.map((card, i) => {
            const fromSide = i % 2 === 0 ? 'left' : 'right'
            return (
              <motion.div
                key={card.id}
                className="relative p-0.5 rounded-lg overflow-hidden bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 group hover:animate-shine-border"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                <motion.div className="bg-white rounded-lg shadow-md h-full flex flex-col transform transition duration-300 group-hover:scale-[1.01] group-hover:shadow-xl" variants={directional(fromSide)}>
                  <motion.div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-lg" variants={imagePop}>
                    <motion.img
                      className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                      src={card.image}
                      alt={card.title}
                      variants={imagePop}
                    />
                  </motion.div>

                  <motion.div className="p-6 flex-grow" variants={fadeUp}>
                    <motion.h3 className={`text-xl font-bold mb-3 ${card.statistic ? 'text-blue-700' : 'text-gray-900'}`} variants={smallPop}>
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
            )
          })}
        </div>
      </motion.section>
    </>
  )
}

export default WillHarmony
