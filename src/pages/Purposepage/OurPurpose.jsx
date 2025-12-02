import React from 'react';
import { purposeData, whyData } from '../data/data';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import images from '../../assets/images';


const ICON_COLOR = '#e70c80'; // Deep Pink

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const imgVariant = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: { opacity: 1, scale: 1 },
};

const iconVariant = {
  hidden: { opacity: 0, scale: 0.8, rotate: -8 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
  hover: { scale: 1.12, rotate: 6 },
};

const cardHover = { translateY: -6, boxShadow: '0 18px 40px rgba(2,6,23,0.10)' };

const OurPurpose = () => {
  if (!whyData || !Array.isArray(whyData)) return null;

  return (
    <>
      {/* hero section */}
    <motion.div className="relative w-full h-[80vh] min-h-[300px] overflow-hidden">
  {/* Background Image */}
  <img
    src=""
    alt="Hands stacked in different skin tones"
    className="w-full h-full object-cover"
    aria-hidden="true"
  />

  {/* Overlay */}
  <div className="absolute inset-0 w-full h-full bg-[#1D2837]" />

  {/* Text Overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest uppercase">
      Our Purpose
    </h1>

    {/* Paragraph */}
    <p className="text-white max-w-2xl mt-4 text-base sm:text-lg lg:text-xl leading-relaxed">
      We are committed to promoting racial harmony, empowering communities, and creating
      opportunities where dignity, inclusion, and equal access thrive for everyone.
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-wrap gap-4 justify-center">
      <button
        className="px-6 py-3 rounded-full text-white font-semibold 
        bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] hover:opacity-90 transition-all"
      >
        Learn More
      </button>

      <button
        className="px-6 py-3 rounded-full text-white font-semibold 
        border-2 border-white hover:bg-white/20 transition-all"
      >
        Join Us
      </button>
    </div>
  </div>
</motion.div>


      <div className="min-h-screen bg-gray-50 font-inter py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <header className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-2">
              SOCIAL ENTERPRISE COMMUNITY SPOT
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight max-w-4xl mx-auto">
              Our Purpose and Why
            </h1>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Dedicated to supporting young people in their transition to adulthood through focused community and vocational programs.
            </p>
          </header>

          {/* Purpose Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
  {purposeData.map((feature, index) => (
    <motion.article
      key={index}
      variants={{
        hidden: { opacity: 0, y: 18, scale: 0.995 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { ease: "easeOut", duration: 0.6 },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ scale: 1.02, y: -6 }}
      className="relative group"
      style={{ willChange: "transform" }}
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-xl pointer-events-none">
        <div className="animated-moving-border" />
      </div>

      {/* Card */}
      <div className="relative bg-white rounded-xl overflow-hidden m-[1.5px]">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10, scale: 1.02 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.7 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="relative h-48 sm:h-56 bg-gray-200"
        >
          <motion.img
            src={feature.imagePlaceholder}
            alt={feature.imageAlt}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x400/6B7280/FFFFFF?text=Image+Not+Found";
            }}
            transition={{ duration: 0.35 }}
            whileHover={{ scale: 1.04 }}
          />
        </motion.div>

        <div className="p-6 flex flex-col flex-grow">
          <motion.h3
            className="text-xl font-bold text-gray-900 mb-3 leading-snug"
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {feature.title}
          </motion.h3>

          <motion.p
            className="text-sm text-gray-600 mb-4 flex-grow whitespace-pre-wrap"
            variants={{
              hidden: { opacity: 0, y: 6 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, delay: 0.06 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {feature.content}
          </motion.p>

          <motion.a
            href="#"
            className="flex items-center text-pink-600 font-semibold text-sm hover:text-blue-800 transition duration-150 mt-auto pt-4 border-t border-gray-100"
            onClick={(e) => e.preventDefault()}
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            whileHover={{ x: 8 }}
          >
            VIEW DETAILS
            <ChevronRight className="w-4 h-4 ml-1" />
          </motion.a>
        </div>
      </div>

      {/* Animated gradient border CSS */}
      <style>{`
        .animated-moving-border {
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          padding: 1.5px;
        }

        .animated-moving-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(90deg, #AFDE00, #E70C80, #FF8000, #AFDE00);
          background-size: 300% 100%;
          animation: gradientMove 3.5s linear infinite;
          opacity: 0;
          transition: opacity .35s ease;
        }

        .group:hover .animated-moving-border::before {
          opacity: 1;
        }

        @media (max-width: 640px) {
          .animated-moving-border::before {
            opacity: 1;
          }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.article>
  ))}
</div>

        </div>
      </div>

      {/* whyData section (2x2 grid style) */}
     <div className="bg-white w-full">
  <section className="w-full max-w-6xl mx-auto px-4 py-12">

    {/* SECTION HEADING */}
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
        Why We Do What We Do
      </h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
        The core reasons behind our mission, values, and long-term commitment to the community.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {whyData.map((feature, idx) => {
        const Icon = feature.icon;

        return (
        <motion.article
  key={idx}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
  variants={fadeUp}
  transition={{ duration: 0.55, delay: idx * 0.06 }}
  whileHover="hover"   // <--- parent hover controls icon also
  className="relative p-6  hover:bg-gradient-to-br from-[#eee3d7] via-white to-[#ffe4f2]
  active:hover:bg-gradient-to-br from-[#eee3d7] via-white to-[#ffe4f2]
rounded-xl bg-white border border-gray-100 transition overflow-hidden"
>
  {/* PINK BACK BUBBLE */}
  <motion.div
    className="absolute inset-0 -z-10 opacity-40 "
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 0.4 }}
    transition={{ duration: 0.8, delay: idx * 0.1 }}
  >
    <div
      className="absolute w-48 h-48 bg-[#e70c80] blur-3xl rounded-full"
      style={{ top: "-20%", left: "-15%" }}
    />
    <div
      className="absolute w-40 h-40 bg-[#ff80c0] blur-3xl rounded-full opacity-70"
      style={{ bottom: "-20%", right: "-10%" }}
    />
  </motion.div>

  {/* ICON - controlled by parent's hover */}
  <motion.div
    className="flex-shrink-0"
    variants={{
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
      hover: { scale: 1.2, rotate: 8 } // <--- icon animation on card hover
    }}
    transition={{ type: "spring", stiffness: 250, damping: 12 }}
  >
    {Icon && <Icon className="w-9 h-9" style={{ color: ICON_COLOR }} />}
  </motion.div>

  {/* CONTENT */}
  <div className="mt-4">
    <motion.h3
      className="text-lg font-semibold text-gray-900"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {feature.title}
    </motion.h3>

    <motion.p
      className="text-sm text-gray-600 whitespace-pre-wrap mt-2"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.05 }}
    >
      {feature.content}
    </motion.p>
  </div>
</motion.article>

        );
      })}
    </div>
  </section>
</div>

    </>
  );
};

export default OurPurpose;
