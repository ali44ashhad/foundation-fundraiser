import React from 'react'
import { motion } from 'framer-motion'
import images from '../../assets/images'

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.6, ease: "easeOut" }
  })
}

const hoverMotion = {
  whileHover: { y: -8, scale: 1.02, transition: { duration: 0.28, ease: "easeOut" } },
  whileTap: { scale: 0.995 }
}

/* Hero + text variants */
const heroVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.08 } }
}

const imgVariants = {
  hidden: { scale: 1.06, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.9, ease: "easeOut" } }
}

const headingVariants = {
  hidden: { y: 12, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
}

const subVariants = {
  hidden: { y: 8, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.12 } }
}

const ctaVariants = {
  hidden: { scale: 0.98, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.45, ease: "easeOut", delay: 0.18 } },
  hover: { scale: 1.03, y: -4 }
}

const Stem = () => {
  return (
    <>
      {/* HERO */}
      <motion.div
        className="relative w-full h-[70vh] min-h-[300px] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={heroVariants}
      >
        {/* background image with subtle scale-in */}
        <motion.img
          src={images.stemHero || ""} // fallback to empty string if not provided
          alt="Hands stacked in different skin tones"
          className="w-full h-full object-cover"
          variants={imgVariants}
        />

        {/* overlay for gradient / darken */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          variants={headingVariants}
        >
          <motion.h1
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest uppercase px-4"
            variants={headingVariants}
          >
            Stem....
          </motion.h1>

          {/* sub paragraph (you asked for a sub para — short, meaningful) */}
          <motion.p
            className="mt-4 max-w-3xl text-base sm:text-lg text-white/90 leading-relaxed px-2"
            variants={subVariants}
          >
            We prepare curious minds (16–25) with hands-on STEM training — blending practical projects,
            mentor-led labs, and industry-aligned skills so learners step confidently into higher education or the workforce.
          </motion.p>

          {/* buttons */}
          <motion.div className="mt-6 flex gap-4 items-center" variants={ctaVariants}>
            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full font-semibold shadow-lg
                bg-gradient-to-r from-[#B2DF0A] via-[#E70C80] to-[#FF850B]
                text-black/900 hover:opacity-95 transition-all duration-200"
              whileHover="hover"
              variants={{ hover: { scale: 1.03 } }}
              aria-label="Contact us about STEM training"
            >
              Contact
            </motion.a>

            <motion.button
              className="inline-block px-5 py-3 rounded-full font-medium border border-white/30 text-white/95 bg-white/5 hover:bg-white/10 transition"
              onClick={() => {
                // keep it simple: jump to contact section if present
                const el = document.querySelector('#contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.985 }}
            >
              Learn more
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* second section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            variants={containerVariants}
            custom={0}
          >
            <motion.h2 className="text-4xl font-bold text-gray-900" variants={containerVariants} custom={1}>
              Empowering the Next Generation Through STEM
            </motion.h2>

            <motion.p className="text-lg text-gray-700 leading-relaxed" variants={containerVariants} custom={2}>
              STEM training has a profoundly positive impact on young people aged 16-25.
              It empowers them with the skills and confidence needed to succeed in a
              competitive job market.
            </motion.p>

            <motion.p className="text-lg text-gray-700 leading-relaxed" variants={containerVariants} custom={3}>
              By engaging in STEM training, young people develop critical thinking,
              problem-solving, and analytical skills that are highly valued by employers.
              Moreover, STEM training nurtures creativity and innovation, encouraging young
              people to think outside the box and develop new solutions to complex problems.
            </motion.p>

            {/* BUTTON */}
            <motion.a
              href="#contact"
              className="mt-4 inline-block px-8 py-3 font-semibold text-white rounded-full shadow-lg
                bg-gradient-to-r from-[#B2DF0A] via-[#E70C80] to-[#FF850B]
                hover:opacity-90 transition-all duration-300"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.995 }}
              variants={containerVariants}
              custom={4}
              aria-label="Learn more about STEM training"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            className="w-full h- flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }}
            viewport={{ once: true, amount: 0.22 }}
          >
            <motion.img
              src={images.stemRight}
              alt="STEM Training"
              className="w-full max-w-md object-cover"
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Levels section with animated gradient borders */}
      <section className="px-4 py-12 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8">

            {/* Upper full-width block (Level 3) */}
            <motion.article
              aria-labelledby="level3-title"
              className="relative rounded-2xl p-[2px] overflow-hidden group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
              custom={0}
              variants={containerVariants}
              {...hoverMotion}
            >
              <div
                className="absolute inset-0 rounded-2xl animate-spin-slow bg-gradient-anim"
                style={{
                  background: "linear-gradient(120deg, #AFDE00, #E70C80, #FF8000, #AFDE00)"
                }}
              />

              <div className="relative z-10 rounded-2xl bg-white border border-gray-100 shadow-lg p-6 md:p-10">
                <div className="absolute -top-1 left-6 right-6 h-1 rounded-sm"
                     style={{ background: 'linear-gradient(90deg, #AFDE00, #E70C80, #FF8000)' }} />

                <h3
                  id="level3-title"
                  className="text-xl md:text-2xl font-semibold text-indigo-700 inline-flex items-center gap-3"
                >
                  <span className="text-2xl transform-gpu transition-transform duration-300">🔬</span>
                  <span>Level 3 STEM Training</span>
                </h3>

                <div className="mt-4 text-gray-700 space-y-3">
                  <p className="text-sm md:text-base leading-relaxed">
                    Level 3 STEM training focuses on foundational knowledge and skills. It introduces students to core concepts in science, technology, engineering, and mathematics.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    <strong>Equivalency:</strong> Typically equivalent to A-Levels.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    <strong>Outcome:</strong> Provides a solid grounding for further study or entry-level positions in STEM-related fields.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    <strong>Method:</strong> Students gain hands-on experience through practical activities and projects, fostering a deeper understanding.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* Bottom two blocks: side-by-side on md+, stacked on small */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Level 4 */}
              <motion.article
                aria-labelledby="level4-title"
                className="relative rounded-2xl p-[2px] overflow-hidden group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.22 }}
                custom={1}
                variants={containerVariants}
                {...hoverMotion}
              >
                <div
                  className="absolute inset-0 rounded-2xl animate-spin-slow bg-gradient-anim"
                  style={{
                    background: "linear-gradient(120deg, #AFDE00, #E70C80, #FF8000, #AFDE00)"
                  }}
                />

                <div className="relative z-10 rounded-2xl bg-white border border-gray-100 shadow-lg overflow-hidden p-6 md:p-8">
                  <div className="absolute -right-6 -top-6 w-36 h-36 rounded-full blur-2xl opacity-20 bg-rose-300/30 rotate-12 pointer-events-none" />
                  <h3
                    id="level4-title"
                    className="text-xl md:text-2xl font-semibold text-rose-600 inline-flex items-center gap-3"
                  >
                    <span className="text-2xl transition-transform duration-300">🔬</span>
                    <span>Level 4 STEM Training</span>
                  </h3>

                  <div className="mt-4 text-gray-700 space-y-3">
                    <p className="text-sm md:text-base leading-relaxed">
                      Level 4 STEM training builds upon the foundational knowledge acquired at Level 3. It delves deeper into specialized areas within STEM, providing students with advanced skills and knowledge.
                    </p>

                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Equivalency:</strong> Equivalent to the first year of a university degree.
                    </p>

                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Outcome:</strong> Prepares students for higher-level study or specialized roles in the industry.
                    </p>

                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Method:</strong> Often includes more complex projects and research, encouraging students to apply their knowledge in real-world scenarios.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* Level 5 */}
              <motion.article
                aria-labelledby="level5-title"
                className="relative rounded-2xl p-[2px] overflow-hidden group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.22 }}
                custom={2}
                variants={containerVariants}
                {...hoverMotion}
              >
                <div
                  className="absolute inset-0 rounded-2xl animate-spin-slow bg-gradient-anim"
                  style={{
                    background: "linear-gradient(120deg, #AFDE00, #E70C80, #FF8000, #AFDE00)"
                  }}
                />

                <div className="relative z-10 rounded-2xl bg-white border border-gray-100 shadow-lg overflow-hidden p-6 md:p-8">
                  <div className="absolute -left-6 -bottom-6 w-36 h-36 rounded-full blur-2xl opacity-20 bg-emerald-300/30 -rotate-6 pointer-events-none" />
                  <h3
                    id="level5-title"
                    className="text-xl md:text-2xl font-semibold text-emerald-600 inline-flex items-center gap-3"
                  >
                    <span className="text-2xl transition-transform duration-300">🔬</span>
                    <span>Level 5 STEM Training</span>
                  </h3>

                  <div className="mt-4 text-gray-700 space-y-3">
                    <p className="text-sm md:text-base leading-relaxed">
                      Level 5 STEM training is designed for those seeking to advance their careers or pursue further education in STEM fields. It focuses on developing expertise in specific areas.
                    </p>

                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Equivalency:</strong> Equivalent to the second year of a university degree.
                    </p>

                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Method:</strong> Students at this level engage in advanced research projects, internships, and industry collaborations.
                    </p>

                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Outcome:</strong> Students gain valuable experience and insights into the practical applications of STEM.
                    </p>
                  </div>
                </div>
              </motion.article>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Stem
