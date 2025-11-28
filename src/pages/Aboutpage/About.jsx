import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import images from '../../assets/images';
import { timelineData, featureData } from '../data/data';
import Lamp from '../../components/ui/Lamp'


const COLORS = {
  green: '#afde00',
  pink: '#e70c80',
  orange: '#ff8000',
};

const waves = [
  // each item: [left%, top%, size(px), delay(s), duration(s)]
  ["8%", "20%", 44, 0, 5],
  ["25%", "60%", 34, 0.6, 6.5],
  ["50%", "18%", 28, 0.3, 5.5],
  ["75%", "48%", 36, 1.0, 6],
  ["50%", "90%", 70, 1.6, 5.2],
  ["88%", "22%", 30, 1.6, 5.2],
  ["88%", "22%", 30, 1.6, 5.2],
  ["88%", "22%", 30, 1.6, 5.2],
  ["90%", "22%", 30, 1.6, 5.2],
];

// Helper to conditionally return motion props (respects reduced motion)
const useMotionProps = (duration = 0.6, distance = 24) => {
  const reduce = useReducedMotion();
  if (reduce) return {};

  return {
    initial: { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration },
  };
};

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  // Ref to measure the total height and position of the timeline container
  const timelineRef = useRef(null);

  const handleScroll = () => {
    if (timelineRef.current) {
      const timelineTop = timelineRef.current.offsetTop;
      const timelineHeight = timelineRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;


      const distanceScrolled = scrollY - timelineTop + (viewportHeight / 2);

      let progress = (distanceScrolled / timelineHeight) * 100;

      progress = Math.min(100, Math.max(0, progress));

      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sectionMotion = useMotionProps(0.7, 18);
  const timelineItemMotion = useMotionProps(0.6, 28);
  const featureMotionShort = useMotionProps(0.55, 22);
  const ctaMotion = useMotionProps(0.8, 18);

  return (
    <>
      {/* Hero */}
    <Lamp>
    </Lamp>

      {/* // about second section // */}
      <div className='w-full bg-[linear-gradient(to_bottom_right,#e2d9e2,white,#caedcd)]'>
        <div className="container mx-auto max-w-7xl p-4 sm:p-8">

          {/* Header Section */}
          <motion.header {...sectionMotion} className="text-center py-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#B2DF0A] via-[#E70C80] to-[#FF850B] bg-clip-text text-transparent">
                ISHEP Foundation – Vision & Operational Summary
              </span>
            </h1>


            {/* Paragraph Content */}
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The ISHEP exists to promote racial harmony and strengthen community resilience through PRH – Education, STEAM – Training support, and Social welfare initiatives. Our vision is to nurture inclusive, empowered communities where opportunity and dignity are accessible to all—especially those most often overlooked.
            </p>
          </motion.header>

          {/* Timeline Sections Container - Ref is attached here */}
          <div ref={timelineRef} className="relative md:border-l-0">
            <div
              style={{
                backgroundColor: COLORS.orange,
                height: `${scrollProgress}%`,
                width: '2px',
                position: 'absolute',
                top: 0,
                left: 'calc(25% - 2px)',
                transition: 'height 0.1s linear',
                zIndex: 1,
              }}
              className="hidden md:block"
            ></div>

            {/* Mapped Timeline Items */}
            {timelineData.map((item, index) => (
              <motion.div key={item.year} {...timelineItemMotion} className={`relative flex ${index === timelineData.length - 1 ? '' : 'pb-20'}`}>

                {/* Left Side: Year (Sticky on large screens) */}
                <div className="w-1/4 pr-8 hidden md:block">
                  {/* STICKY CLASS: Keeps the year fixed */}
                  <div style={{ color: COLORS.green }} className="sticky top-20 text-4xl font-extrabold">
                    {item.year}
                  </div>
                </div>

                {/* Middle Separator Line and Dot */}
                <div className="flex flex-col items-center mr-4 md:mr-0 z-20">
                  {/* Static Background Line (Subtle gray track for the unfilled portion) */}
                  <div className="w-px h-full bg-gray-200 absolute left-4 md:left-auto md:relative"></div>

                  {/* Timeline Dot (Green: #afde00) */}
                  <div style={{ backgroundColor: COLORS.green }} className="w-4 h-4 rounded-full relative -left-0.5 md:relative md:-ml-0"></div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-3/4 pl-6 md:pl-0 z-10">

                  {/* Display Year on mobile screens */}
                  <div style={{ color: COLORS.green }} className="md:hidden text-2xl font-extrabold mb-4">
                    {item.year}
                  </div>

                  {/* Image and Content Block */}
                  <div className="p-4 bg-white rounded-lg mb-4 shadow-md">
                    <img
                      src={item.imageSrc}
                      alt={`Year ${item.year} event`}
                      className="w-full h-auto object-cover rounded mb-4"
                    />

                    {/* Title Color (Pink: #e70c80) */}
                    <h3 style={{ color: COLORS.pink }} className="text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      <motion.div {...sectionMotion} className="min-h-screen bg-[linear-gradient(to_top_right,#e8d2ea,white,#caedcd)] font-sans p-4 sm:p-8 md:p-12">
        <div className="max-w-7xl mx-auto">

          {/* Header Section */}
          <motion.header {...sectionMotion} className="text-center mb-16 pt-8">
            {/* Accent line using the requested colors: #e70c80 and #afde00 */}
            <div className="mx-auto w-12 h-1 bg-gradient-to-r from-[#e70c80] to-[#afde00] rounded-full mb-4"></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              STEM Skill Training & Holistic Support
            </h1>

          </motion.header>

          {/* Features Grid - All rendering logic is contained here in the map function */}
          <div className="space-y-16 md:space-y-24">
            {featureData.map((feature, index) => {
              const { title, description, image, alt, icon: Icon } = feature;
              const isReversed = index % 2 !== 0;

              // Alternates layout based on index for responsive design
              const layoutClasses = isReversed
                ? 'md:flex-row-reverse'
                : 'md:flex-row';

              // Slightly stagger durations for alternating items so they feel natural
              const duration = isReversed ? 0.6 : 0.7;
              const motionProps = useMotionProps(duration, 22);
              return (
                <motion.div
                  key={index}
                  {...motionProps}
                  className={`flex flex-col ${layoutClasses} gap-6 md:gap-12 items-center w-full p-4`}
                >
                  {/* Image Block */}
                  {/* Image Block */}
                  <div className="
  w-full md:w-1/2 overflow-hidden 
  rounded-xl shadow-xl border-2 border-gray-100
  transition-all duration-500 ease-out
  hover:shadow-2xl
  hover:scale-[1.02] hover:-translate-y-2 hover:rounded-br-[20%]
  hover:rounded-tl-[20%]
  active:rounded-tl-[20%] active:rounded-br-[20%]

">
                    <img
                      src={image}
                      alt={alt}
                      className="
      w-full h-full object-cover 
      aspect-video md:aspect-auto 
      transition-transform duration-500 ease-out
      hover:scale-105
    "
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          'https://placehold.co/600x400/6B7280/FFFFFF?text=Image+Not+Found';
                      }}
                    />
                  </div>


                  {/* Content Block */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center space-x-3 mb-2">
                      {/* Icon uses #e70c80 */}
                      {Icon && <Icon className="w-6 h-6 text-[#e70c80]" aria-hidden="true" />}
                      <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-2 text-lg text-gray-700 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Closing Call to Action / Summary */}
          <motion.div {...ctaMotion} className="mt-24 bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-[#ff8000]">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              The <span className='text-pink-600'> Relief</span> of Those in Need
            </h2>

            <p className="text-lg text-gray-700 mb-4">
              At ISHEP, we believe that everyone deserves the opportunity to thrive, regardless of their circumstances. Through our dedicated programs—from empowering youth and supporting the elderly, to providing essential financial relief—we strive to make a positive, lasting impact on the lives of those facing hardship, building a more secure and dignified future for all.
            </p>

            <p className="text-lg text-gray-700">
              <span className="font-semibold">The Encouragement of the Army Cadet Force (ACF)</span><br />
              Our founder is committed to empowering young people, and ensuring their voices are heard and valued in decisions that affect them. He believes in the untapped potential of collaborative work to drive positive outcomes for young people, alongside allied professionals, including the Army Cadet Force (ACF).
            </p>
          </motion.div>

        </div>
      </motion.div>
    </>


  );
};

export default About;
