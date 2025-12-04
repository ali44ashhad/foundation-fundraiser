import React from 'react';
import { launchData } from '../data/data';
import { motion } from 'framer-motion';

const stats = [
  {
    id: 1,
    heading: "Pound of Purpose",
    text: "A £1-a-month campaign empowering collective action for racial harmony and social justice."
  },
  {
    id: 2,
    heading: "Small Gifts, Big Change",
    text: "Your monthly £1 combines with others to support education, equality, and inclusive community programs."
  },
  {
    id: 3,
    heading: "Education Support",
    text: "Funds help us build racial literacy programs, train educators, and run awareness workshops."
  },
  {
    id: 4,
    heading: "Community Impact",
    text: "Your support strengthens welfare initiatives and community events that foster unity and understanding."
  }
];

const Launch = () => {
  // Framer motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeUpDelay = (delay) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } }
  });

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[60vh] sm:h-[80vh] min-h-[300px] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.img
          src="" /* add hero image src */
          alt="Hands stacked in different skin tones"
          className="w-full h-full object-cover"
          variants={fadeUp}
        />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
        >
          {/* Main Heading */}
          <motion.h1
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest uppercase mb-4"
            variants={fadeUp}
          >
            Launch...
          </motion.h1>

          {/* Paragraph below heading */}
          <motion.p
            className="text-white/90 text-base sm:text-lg mb-6 max-w-lg sm:max-w-2xl px-2"
            variants={fadeUpDelay(0.3)}
          >
            Join our movement to empower communities, promote equality, and make a real impact.
          </motion.p>

          {/* Button */}
          <motion.a
            href="#join"
            className="inline-block px-5 sm:px-6 py-2.5 rounded-full font-semibold text-white shadow-lg
                      bg-gradient-to-r from-[#B2DF0A] via-[#E70C80] to-[#FF850B]
                      hover:opacity-95 transition"
            variants={fadeUpDelay(0.6)}
          >
            Join the Movement
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Stats Row */}
      <div className="w-full bg-white">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.id}
                className="px-6 py-6 bg-gray-100/60 rounded-xl shadow-sm border border-gray-200 backdrop-blur-sm min-w-0"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
              >
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#B2DF0A] via-[#E70C80] to-[#FF850B] bg-clip-text text-transparent break-words">
                  {s.heading}
                </div>

                <div className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  {s.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      {/* Launch data sections */}
      <div className="space-y-16 px-4 sm:px-6 lg:px-8 py-10 w-full bg-[linear-gradient(to_bottom_right,#e2d9e2,white,#caedcd)]">
        {launchData.map((item) => {
          const isLeft = item.align === "left";
          return (
            <section
              key={item.id}
              className="relative overflow-hidden rounded-2xl shadow-lg max-w-7xl mx-auto my-10"
            >
              <div
                className="w-full h-[360px] sm:h-[420px] md:h-[480px] relative rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/45"></div>

                <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                  <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    {/* Left Column (text block) */}
                    <div className={`${isLeft ? "order-1" : "order-2 lg:order-1"} flex justify-start`}>
                      {isLeft && (
                        <motion.div
                          className="w-full max-w-2xl min-w-0 text-white py-8 sm:py-12"
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight break-words max-w-prose">
                            {item.title}
                          </h2>

                          <div className="mt-4 sm:mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-white/90 break-words">
                            {item.paragraphs.map((p, i) => (
                              <p key={i}>{p}</p>
                            ))}
                          </div>

                          <div className="mt-6">
                            <a
                              href="#join"
                              className="inline-block px-5 py-2.5 rounded-full font-semibold text-white shadow-lg
                                         bg-gradient-to-r from-[#B2DF0A] via-[#E70C80] to-[#FF850B]
                                         hover:opacity-95 transition"
                            >
                              Join the Movement
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Right Column (text block) */}
                    <div className={`${!isLeft ? "order-1 lg:order-2" : "order-2 lg:order-1"} flex justify-end`}>
                      {!isLeft && (
                        <motion.div
                          className="w-full max-w-2xl min-w-0 text-white py-8 sm:py-12 text-right lg:text-left"
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight break-words max-w-prose">
                            {item.title}
                          </h2>

                          <div className="mt-4 sm:mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-white/90 break-words">
                            {item.paragraphs.map((p, i) => (
                              <p key={i}>{p}</p>
                            ))}
                          </div>

                          <div className="mt-6 lg:mt-8">
                            <a
                              href="#join"
                              className="inline-block px-5 py-2.5 rounded-full font-semibold text-white shadow-lg
                                         bg-gradient-to-r from-[#B2DF0A] via-[#E70C80] to-[#FF850B]
                                         hover:opacity-95 transition"
                            >
                              Join the Movement
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Launch;
