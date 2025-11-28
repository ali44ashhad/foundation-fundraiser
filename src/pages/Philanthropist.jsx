import React from 'react'
import images from '../assets/images';
import { gridData, philanthropySteps, newsInsights, benefits } from './data/data';
import { motion } from 'framer-motion';
import { BackgroundLines } from "../components/ui/BackgroundLines";

// Reusable motion variants
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 }
  }
}

const directional = (side = 'left') => ({
  hidden: { opacity: 0, x: side === 'left' ? -80 : 80, y: 12 },
  visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 140, damping: 20 } }
})

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 160, damping: 20 } }
}

const imagePop = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } }
}

const Philanthropist = () => {
  return (
    <>

      {/* HERO */}
      <motion.div
        className="relative w-full h-[80vh] min-h-[300px] overflow-hidden"
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
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={fadeUp}
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest uppercase text-center px-4">
            PHILANTHROPIST
          </h1>
        </motion.div>
      </motion.div>


      {/* INTRO / TITLE */}

      <motion.section
        className="py-12 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold text-center text-black mb-10 uppercase tracking-wider">
          BECOMING A
          <span className="bg-gradient-to-r from-[#afde00] via-[#e70c80] to-[#ff8000] bg-clip-text text-transparent"> PHILANTHROPIST</span>
          <br />
          IN THE MODERN WORLD
        </motion.h1>

        {/* GRID — NO GAP - Stagger children so each tile animates when it scrolls into view */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-7xl mx-auto" variants={staggerContainer}>
          {gridData.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative h-80 md:h-96 overflow-hidden bg-gray-900 group cursor-pointer"
              variants={directional(index % 2 === 0 ? 'left' : 'right')}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="absolute inset-0">
                <motion.img
                  src={item.imageSrc}
                  alt={item.heading}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.05]"
                  variants={{ hidden: { scale: 1.02, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } } }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-opacity" />
              </div>

              <motion.div className="absolute bottom-0 left-0 p-4 md:p-8 text-white z-10" variants={directional(index % 2 === 0 ? 'right' : 'left')}>
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold uppercase rounded-full mb-3`}
                  style={{ backgroundColor: ["#afde00", "#e70c80", "#ff8000"][index % 3], color: '#000' }}
                >
                  {item.tags}
                </span>

                <h2 className="text-xl md:text-2xl font-bold mb-2 leading-tight">{item.heading}</h2>
                <p className="text-sm md:text-base text-gray-200">{item.content}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* BENEFITS LIST + IMAGE */}
      <motion.section
        className="bg-white w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div
          className="flex text-black flex-col lg:flex-row items-center w-11/12 md:w-7xl m-auto h-auto pt-16 pb-20"
        >
          {/* Left Side: Title and Benefits List */}
          <motion.div
            className="lg:w-1/2 w-full mb-12 lg:mb-0 lg:pr-8"
            variants={directional('left')}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #afde00 0%, #e70c80 50%, #ff8000 100%)" }}
            >
              Benefits of Racial Harmony
            </h2>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.25 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl shadow transition duration-300 hover:bg-white/20"
                >
                  <svg className="w-6 h-6 flex-shrink-0 mt-1 mr-3" fill="none" stroke="#afde00" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7"></path>
                  </svg>

                  <div>
                    <p className="text-lg md:text-xl font-semibold">{benefit.label}</p>
                    <p className="text-sm text-gray-500 hidden md:block">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Image with Content */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center lg:justify-end"
            variants={directional('right')}
          >
            <motion.div
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              variants={imagePop}
            >
              <motion.img
                src={images.professionalWoman || images.skill3}
                alt="Professional woman explaining racial harmony concept"
                className="w-full h-auto object-cover rounded-xl shadow-2xl"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200, damping: 16 }}
                style={{ transformOrigin: "center" }}
              />

              {/* decorative gradient behind image */}
              <span
                aria-hidden
                className="absolute -inset-1 rounded-xl blur-3xl opacity-50 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 10% 20%, rgba(175,222,0,0.12), transparent 10%), radial-gradient(circle at 90% 80%, rgba(231,12,128,0.06), transparent 18%)",
                  zIndex: -1,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>



      {/* STEPS / PHILANTHROPY PROCESS */}
      <motion.section
        className="w-full py-12 md:py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={staggerContainer}
      >
        <motion.div className="text-center mb-8 md:mb-12" variants={fadeUp}>
          <p className="text-pink-700 font-semibold tracking-wide">HOW IT WORKS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Philanthropy Work Process</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
          {philanthropySteps.map((step, i) => (
            <motion.div
              key={step.id}
              className={`flex flex-col items-center text-center`}
              variants={directional(i % 2 === 0 ? 'left' : 'right')}
              whileHover={{ scale: 1.03 }}
            >
              <motion.img
                src={step.image}
                alt={step.title}
                className="rounded-xl shadow-lg w-full h-44 md:h-56 object-cover transition-transform duration-300 ease-out hover:scale-105"
                variants={imagePop}
              />

              <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                className={`w-12 h-12 flex items-center justify-center text-white ${step.bgColor} rounded-full mt-4 text-lg font-bold`}
                variants={fadeUp}
              >
                {step.id}
              </motion.div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-4">{step.title}</h3>
              <p className="mt-2 text-gray-700 leading-relaxed text-sm md:text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>


      {/* BACKGROUND / ROLE OF PRH EDUCATION */}
      <motion.section
        className="relative w-full overflow-hidden min-h-[60vh] md:min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={staggerContainer}
      >
        <motion.img src={images.skill4} alt="Abstract background representing harmony and growth" className="absolute inset-0 w-full h-full object-cover object-center" variants={directional('left')} />

        <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col items-center" variants={fadeUp}>
          <div className="w-full mt-8 text-white text-base md:text-lg space-y-4 pt-6 border-t border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">The Role of PRH Education</h3>
            <p>
              Incorporating critical perspectives into educational curricula can empower individuals to critically analyse and deconstruct racial ideologies. Literature has evolved to not only articulate the struggles of racial identity but also envision a future of harmony.
            </p>
            <p>
              The United Kingdom, a melting pot of cultures and backgrounds, is enriched by the diversity of its population. In a world where global connections are increasingly essential, adopting a deep understanding of diverse cultural expressions is paramount.
            </p>
            <p className="mt-6 text-center text-lg font-semibold pt-4 border-t border-white/30">Contact us to learn more about our course timetable</p>
          </div>
        </motion.div>
      </motion.section>


      {/* PRH EDUCATION / NEWS & INSIGHTS */}
      <motion.section className="py-12 md:py-16 bg-gray-50" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={staggerContainer}>
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" variants={fadeUp}>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Promoting Racial Harmony</h2>
            <p className="mt-3 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">At the heart of promoting racial harmony in the educational environment lie three foundational concepts: <strong>Equality</strong>, <strong>Diversity</strong>, and <strong>Inclusion</strong> (EDI).</p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {newsInsights.map((item, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                  variants={directional(isReversed ? 'right' : 'left')}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className={`w-full md:w-2/5 min-h-[150px] md:min-h-full ${isReversed ? 'md:order-last' : 'md:order-first'}`}>
                      <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${item.imageUrl})` }}>
                        <img src={item.imageUrl} alt={item.imageAlt} className="w-full h-full object-cover md:h-full opacity-0" aria-hidden="true" />
                      </div>
                    </div>

                    <div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-tight">{item.title}</h3>
                      </div>
                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full text-blue-700 bg-blue-100">{tag}</span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-base md:text-lg text-gray-700 font-semibold mb-3">Investigating why EDI matters with ISHEP Foundation, is a duty to all of us.</p>
            <a href="#" className="inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out shadow">Contact Us to Learn More About Our Course Timetable</a>
          </div>
        </motion.div>
      </motion.section>

    </>
  )
}

export default Philanthropist
