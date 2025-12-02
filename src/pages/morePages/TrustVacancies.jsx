import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/data';

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

const fadeIn = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { delay, duration, ease: 'easeOut' } },
});

const slideInSide = (side = 'left', delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, x: side === 'left' ? -18 : 18 },
  visible: { opacity: 1, x: 0, transition: { delay, duration, ease: 'easeOut' } },
  hover: {
    scale: 1.03,
    transition: { duration: 0.22, ease: 'easeInOut' },
  },
});

const spinOnce = {
  hidden: { rotate: 0 },
  visible: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: { duration: 0.62, ease: 'easeInOut' },
  },
};

const TrustVacancies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));

  const nextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));

  const goToSlide = (slideIndex) => setCurrentIndex(slideIndex);

  const currentTestimonial = testimonials[currentIndex] || testimonials[0];

  const ChevronLeft = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );

  const ChevronRight = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );

  return (
    <>
      {/* HERO - constrained to navbar width (7xl) */}
      <motion.div
        className="w-full bg-cover bg-center"
        initial="hidden"
        animate="visible"            // ensure animation runs on mount (mobile)
        whileInView="visible"        // and still animate on scroll for desktop
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        aria-hidden
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="relative w-full h-[48vh] sm:h-[48vh] md:h-[40vh] lg:h-[36vh] overflow-hidden rounded-2xl"
            variants={fadeIn(0, 0.6)}
          >
            {/* Optional background image: replace src="" with your image path or leave empty */}
            <motion.img src="" alt="Hands stacked in different skin tones" className="w-full h-full object-cover" />

            <motion.div className="absolute inset-0 flex items-center justify-center px-4" variants={fadeIn(0.08, 0.6)}>
              <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest uppercase text-center">
                Trust Vacancies
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* MAIN CONTENT - all constrained to max-w-7xl */}
      <motion.div
        className="w-full bg-white"
        initial="hidden"
        animate="visible"            // animate on mount for mobile
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          {/* Intro block */}
          <motion.div
            className="bg-white/80 dark:bg-slate-900/70 p-4 sm:p-6 md:p-10 rounded-lg"
            variants={fadeIn(0.06, 0.55)}
          >
            <header className="mb-4 sm:mb-6">
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight
                bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]
                bg-clip-text text-transparent"
              >
                ISHEP is looking for passionate individuals to join our trustee board!
              </h2>
            </header>

            <motion.div className="prose prose-slate max-w-none text-left dark:prose-invert text-black" variants={fadeIn(0.12, 0.5)}>
              <p>
                As a trustee, you will play a vital role in shaping the future of ISHEP. Our Board
                of Trustees is responsible for setting the strategic direction of the organisation,
                ensuring sound governance, and overseeing financial and operational performance.
                Trustees work alongside the management team to ensure we continue to provide
                high-quality, accessible advice to the people who need it most.
              </p>

              <p>
                Being a trustee is an opportunity to use your skills and experience to make a
                meaningful impact. Whether you bring lived experience or expertise in equity,
                diversity and inclusion, communications, digital or legal knowledge, your
                contribution will help ISHEP grow and adapt.
              </p>
            </motion.div>
          </motion.div>

          {/* Why join us */}
          <motion.div
            className="mt-8 sm:mt-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"            // ensure it animates on mount (mobile)
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
          >
            <motion.h3
              className="text-lg sm:text-xl md:text-2xl font-semibold 
                         bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] 
                         text-transparent bg-clip-text 
                         mb-3 sm:mb-4 max-w-7xl mx-auto px-4"
              variants={fadeIn(0.08, 0.5)}
            >
              Why join us as a trustee?
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Step 1 */}
              <motion.article
                className="flex items-start gap-3 sm:gap-4 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] p-3 sm:p-5 rounded-lg"
                variants={slideInSide('left', 0.05)}
                whileHover="hover"   // desktop hover
                whileTap="hover"     // mobile tap -> trigger same hover variant
                style={{ transformOrigin: 'center' }}
              >
                <motion.div
                  className="flex-none w-12 h-12 sm:w-14 sm:h-14 text-xl rounded-full flex items-center justify-center font-bold bg-gradient-to-br from-[#AFDE00] via-[#E70C80] to-[#FF8000] text-white"
                  variants={spinOnce}
                  whileTap="hover"   // allow number to spin on mobile tap as well
                  whileHover="hover"
                  style={{ transformOrigin: '50% 50%' }}
                >
                  1
                </motion.div>

                <div>
                  <h4 className="font-semibold text-black">Champion our mission</h4>
                  <p className="text-sm max-w-prose text-black">
                    Champion our mission and help shape the future of our services.
                  </p>
                </div>
              </motion.article>

              {/* Step 2 */}
              <motion.article
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-5 rounded-lg bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"
                variants={slideInSide('right', 0.06)}
                whileHover="hover"
                whileTap="hover"
                style={{ transformOrigin: 'center' }}
              >
                <motion.div
                  className="flex-none w-12 h-12 sm:w-14 sm:h-14 text-xl rounded-full flex items-center justify-center font-bold bg-gradient-to-br from-[#AFDE00] via-[#E70C80] to-[#FF8000] text-white"
                  variants={spinOnce}
                  whileTap="hover"
                  whileHover="hover"
                  style={{ transformOrigin: '50% 50%' }}
                >
                  2
                </motion.div>

                <div>
                  <h4 className="font-semibold text-black">Support Charity</h4>
                  <p className="text-sm max-w-prose text-black">
                    Support a newly registered charity in making a tangible difference in young people’s lives.
                  </p>
                </div>
              </motion.article>

              {/* Step 3 */}
              <motion.article
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-5 rounded-lg bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"
                variants={slideInSide('left', 0.07)}
                whileHover="hover"
                whileTap="hover"
                style={{ transformOrigin: 'center' }}
              >
                <motion.div
                  className="flex-none w-12 h-12 sm:w-14 sm:h-14 text-xl rounded-full flex items-center justify-center font-bold bg-gradient-to-br from-[#AFDE00] via-[#E70C80] to-[#FF8000] text-white"
                  variants={spinOnce}
                  whileTap="hover"
                  whileHover="hover"
                  style={{ transformOrigin: '50% 50%' }}
                >
                  3
                </motion.div>

                <div>
                  <h4 className="font-semibold text-black">Develop Skills</h4>
                  <p className="text-sm max-w-prose text-black">
                    Develop new skills and experience, working alongside passionate professionals.
                  </p>
                </div>
              </motion.article>

              {/* Step 4 */}
              <motion.article
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-5 rounded-lg bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"
                variants={slideInSide('right', 0.08)}
                whileHover="hover"
                whileTap="hover"
                style={{ transformOrigin: 'center' }}
              >
                <motion.div
                  className="flex-none w-12 h-12 sm:w-14 sm:h-14 text-xl rounded-full flex items-center justify-center font-bold bg-gradient-to-br from-[#AFDE00] via-[#E70C80] to-[#FF8000] text-white"
                  variants={spinOnce}
                  whileTap="hover"
                  whileHover="hover"
                  style={{ transformOrigin: '50% 50%' }}
                >
                  4
                </motion.div>

                <div>
                  <h4 className="font-semibold text-black">Drive Advocacy</h4>
                  <p className="text-sm max-w-prose text-black">
                    Play a crucial role in advocacy and social change for the vulnerable in our community.
                  </p>
                </div>
              </motion.article>
            </div>
          </motion.div>
        </section>
      </motion.div>

      {/* TESTIMONIALS - constrained to 7xl */}
      <motion.section
        className="py-8 sm:py-12 bg-gray-50"
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
  <motion.h2
    className="text-lg sm:text-xl font-semibold text-center text-gray-900 mb-6 sm:mb-8"
    variants={fadeIn(0.04)}
  >
    What our Trustees say
  </motion.h2>

  <div className="relative flex items-center justify-center">
    {/* Prev */}
    <button
      onClick={prevSlide}
      aria-label="Previous testimonial"
      className="absolute left-0 p-2 text-gray-500 hover:text-gray-700 transition duration-150 -translate-y-1/2 top-1/2"
    >
      <ChevronLeft className="w-7 h-7 text-[#E70C80]" />
    </button>

    {/* Card (swipeable) */}
    <motion.div
      className="w-full max-w-2xl mx-auto text-center p-3 sm:p-4 touch-pan-y"
      variants={fadeIn(0.06)}
      drag="x"                            // enable horizontal dragging
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.18}                  // a little elasticity for natural feel
      onDragEnd={(_, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        const swipe = offset + velocity * 50; // combine offset + velocity
        // threshold: ~60px effective swipe
        if (swipe < -60) {
          nextSlide();
        } else if (swipe > 60) {
          prevSlide();
        }
      }}
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div className="flex justify-center mb-4 sm:mb-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-full ring-2 ring-[#E70C80] shadow-lg">
          <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <motion.div className="h-20 sm:h-28 flex items-center justify-center mb-4 sm:mb-6 px-3" variants={fadeIn(0.08)}>
        <p className="text-base sm:text-lg italic text-gray-700 transition duration-500 ease-in-out">
          {currentTestimonial.quote}
        </p>
      </motion.div>

      <p className="text-base font-medium text-gray-900">{currentTestimonial.name}</p>
      <p className="text-sm text-gray-500">{currentTestimonial.title}</p>
    </motion.div>

    {/* Next */}
    <button
      onClick={nextSlide}
      aria-label="Next testimonial"
      className="absolute right-0 p-2 text-gray-500 hover:text-gray-700 transition duration-150 -translate-y-1/2 top-1/2"
    >
      <ChevronRight className="w-7 h-7 text-[#E70C80]" />
    </button>
  </div>

  {/* Dots */}
  <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
    {testimonials.map((_, slideIndex) => (
      <button
        key={slideIndex}
        onClick={() => goToSlide(slideIndex)}
        aria-label={`Go to slide ${slideIndex + 1}`}
        className={`w-3 h-3 rounded-full transition-colors duration-300 ${slideIndex === currentIndex ? 'bg-[#E70C80]' : 'bg-gray-300 hover:bg-gray-400'}`}
      />
    ))}
  </div>
</div>

      </motion.section>

      {/* HOW TO APPLY - constrained to 7xl */}
      <motion.section className="bg-white" initial="hidden" animate="visible" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
          <motion.div className="bg-white dark:bg-slate-900/70 p-4 sm:p-6 md:p-10 rounded-lg" variants={fadeIn(0.08)}>
            <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-semibold
                bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]
                bg-clip-text text-transparent"
              >
                How to apply
              </h2>

              <a
                href="#"
                className="px-4 py-2 sm:px-5 sm:py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] shadow-md hover:opacity-90 transition"
              >
                Apply Now
              </a>
            </div>

            <motion.div className="prose prose-slate max-w-none text-gray-500 text-left dark:prose-invert" variants={fadeIn(0.12)}>
              <p>
                In the first instance, all expressions of interest and any further questions regarding this
                position must come via the Apply Now button.
              </p>

              <p>
                An informal discussion with our Chair, or Vice-chair can be arranged before application.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default TrustVacancies;
