import React from 'react'
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { volunteerData } from '../data/data';
import images from '../../assets/images';



const Volunteer = () => {
  return (
    <>
      {/* hero section */}
      <motion.div
  className="relative w-full h-[70vh] min-h-[300px] overflow-hidden flex items-center justify-center"
  initial="hidden"
  whileInView="visible"
>
  {/* Background Image */}
  <motion.img
    src=""
    alt="Hands stacked in different skin tones"
    className="w-full h-full object-cover"
  />

  {/* Content */}
  <motion.div
    className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-4 md:space-y-6"
  >
    {/* Heading */}
    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest uppercase">
      VOLUNTEER
    </h1>

    {/* Paragraph */}
    <p className="text-white/90 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed">
      Join us in making a lasting impact. Your contribution, time, and skills can 
      bring hope and support to countless lives in our community.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
      <button className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-lime-500 to-pink-600 shadow-lg hover:scale-105 transition-all">
        Join Now
      </button>

      <button className="px-6 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-white to-gray-200 shadow-lg hover:scale-105 transition-all">
        Learn More
      </button>
    </div>
  </motion.div>
</motion.div>



      <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
        <div className="max-w-6xl mx-auto">

          {/* Gradient Heading */}
          <header className="mb-12 text-center">
            <h1
              className="text-5xl md:text-7xl font-extrabold text-black tracking-tight"
            >
              Empower Your Vision, Achieve Greatness
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the core pillars that drive success and meaningful impact in your projects and community.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">

              {/* Feature 1 */}
              <div className="mb-8 w-full">
                <div className="flex items-start mb-2">
                  <Check className="mr-3 flex-shrink-0" size={24} strokeWidth={3} color="#AFDE00" />
                  <h3 className="text-xl font-bold text-gray-800 leading-snug">Champion Our Mission & Values</h3>
                </div>
                <div className="ml-9 text-gray-700 text-base">
                  <p>Help shape the future of our services and make a real difference in your local community by upholding core principles of integrity and service.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="mb-8 w-full">
                <div className="flex items-start mb-2">
                  <Check className="mr-3 flex-shrink-0" size={24} strokeWidth={3} color="#AFDE00" />
                  <h3 className="text-xl font-bold text-gray-800 leading-snug">Support Existing & New Members</h3>
                </div>
                <div className="ml-9 text-gray-700 text-base">
                  <p>Be part of a growing organisation dedicated to improving the lives of people by offering guidance, mentorship, and support to new joiners.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="mb-8 w-full">
                <div className="flex items-start mb-2">
                  <Check className="mr-3 flex-shrink-0" size={24} strokeWidth={3} color="#AFDE00" />
                  <h3 className="text-xl font-bold text-gray-800 leading-snug">Foster Collaborative Growth</h3>
                </div>
                <div className="ml-9 text-gray-700 text-base">
                  <p>Engage in cross-functional teams to share knowledge, solve complex problems, and drive innovation across all departments.</p>
                </div>
              </div>

            </div>

            {/* Right Column: Image Block (Placeholder) */}
            <div className="order-1 md:order-2">
              <div
                className="w-full bg-gray-200 flex items-center justify-center rounded-xl shadow-2xl overflow-hidden mb-8 md:mb-0"
                style={{
                  height: '500px',
                  border: '6px solid #E70C80'
                }}
              >
                <img
                  src={images.volunteer1}
                  alt="Device Distribution"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

          {/* --- Section 2: Image (Left) & Points (Right) --- */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image Block (Placeholder) */}
            <div className="order-2 md:order-1">
              <div
                className="w-full h-[500px] flex items-center justify-center rounded-xl shadow-2xl overflow-hidden mb-8 md:mb-0 border-[6px] border-[#AFDE00]"
                style={{ background: 'linear-gradient(135deg, #AFDE00, #FF8000)' }}
              >
                <img
                  src={images.volunteer2}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Right Column: Feature Points (Manually added content) */}
            <div className="order-1 md:order-2">

              {/* Feature 4 */}
              <div className="mb-8 w-full">
                <div className="flex items-start mb-2">
                  <Check className="mr-3 flex-shrink-0" size={24} strokeWidth={3} color="#AFDE00" />
                  <h3 className="text-xl font-bold text-gray-800 leading-snug">Develop New Skills & Expertise</h3>
                </div>
                <div className="ml-9 text-gray-700 text-base">
                  <p>Work alongside passionate and skilled professionals, gaining valuable experience and enhancing your skill set through practical application and dedicated training.</p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="mb-8 w-full">
                <div className="flex items-start mb-2">
                  <Check className="mr-3 flex-shrink-0" size={24} strokeWidth={3} color="#AFDE00" />
                  <h3 className="text-xl font-bold text-gray-800 leading-snug">Advocate For Social Change</h3>
                </div>
                <div className="ml-9 text-gray-700 text-base">
                  <p>Play a crucial role in ensuring that the most vulnerable in our community receive the support they need to thrive and achieve equity.</p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="mb-8 w-full">
                <div className="flex items-start mb-2">
                  <Check className="mr-3 flex-shrink-0" size={24} strokeWidth={3} color="#AFDE00" />
                  <h3 className="text-xl font-bold text-gray-800 leading-snug">Inspire Innovation & Creativity</h3>
                </div>
                <div className="ml-9 text-gray-700 text-base">
                  <p>Contribute fresh ideas and creative solutions that challenge the status quo and lead to more effective and efficient community initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* third section  */}
      <div className="p-4 md:p-8 bg-gray-50">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
          Why Volunteer with ISHEP?
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {volunteerData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-white rounded-xl shadow-2xl transition duration-300 hover:shadow-3xl transform hover:-translate-y-1 border-t-8 border-t-[#AFDE00] md:border-t-0 md:border-l-8 md:border-l-[#AFDE00]"
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-4">
                <span className={`text-4xl ${card.accentColor} mr-3`}>{card.icon}</span>
                <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
              </div>

              {/* Summary */}
              <p className="text-gray-600 mb-4 flex-grow">{card.summary}</p>

              {/* Key Content List */}
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                {card.content.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} className="text-sm"></li>
                ))}
              </ul>

              {/* CTA Button (Only for the third card) */}
              {card.cta && (
                <button className={`${card.cta.color} text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:opacity-90 transition duration-150`}>
                  {card.cta.text}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Volunteer