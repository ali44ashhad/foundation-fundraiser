import React from 'react'
import { DataDeviceData } from '../data/data'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const DataAndDevice = () => {
  return (
    <>
      {/* hero section */}
    <motion.div
  className="relative w-full h-[80vh] min-h-[300px] overflow-hidden flex flex-col items-center justify-center px-4 text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  {/* Background Image */}
  <motion.img
    src=""
    alt="Hands stacked in different skin tones"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay content */}
  <motion.div
    className="relative z-10 flex flex-col items-center justify-center space-y-6 max-w-3xl"
  >
    <h1 className="text-gradient-stroke text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-widest uppercase">
      DATA AND DEVICE
    </h1>

    {/* Subparagraph */}
    <motion.p
      className="text-white text-lg sm:text-xl md:text-2xl font-medium max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      Explore the latest insights, tutorials, and hands-on guides on data and device management. 
      Empower yourself with knowledge to stay ahead in technology.
    </motion.p>

    {/* Buttons */}
    <motion.div
      className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <a
        href="/learn-more"
        className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#B2DF0A] via-[#E70C80] to-[#FF850B] hover:opacity-90 transition"
      >
        Learn More
      </a>

     
    </motion.div>
  </motion.div>

  {/* Optional: Overlay dark layer for contrast */}
  <div className="absolute inset-0 bg-black/40 z-0"></div>
</motion.div>



    <div className="w-full bg-white py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-8">

    {/* Responsive Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

     {DataDeviceData.map((post, index) => (
  <div
    key={index}
    className="
      bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl 
      transition-all duration-300 
      border border-transparent
      ring-2 ring-transparent
      hover:-translate-y-1
      flex flex-col
    "
    style={{
      borderColor: 'transparent',
      background:
        "border-gray-200 border-box",
      borderWidth: "3px",
      borderStyle: "solid",
    }}
  >
    {/* Image */}
    <div className="w-full h-auto md:h-64 rounded-none overflow-hidden flex items-center justify-center bg-gray-50 rounded-br-[30%]">
      <img
        src={post.image}
        alt={post.title}
        className="object-cover w-full h-auto rounded-br-[30%]"
      />
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-grow">
      <h2 className="text-xl font-bold mb-3 text-gray-900 leading-snug">
        {post.title}
      </h2>

      <p className="text-gray-600 mb-4 flex-grow">
        {post.excerpt.split('—')[0]}…
      </p>

      {/* Single Button per Card */}
      <div className="mt-4">
        {index === 0 && (
          <a
            href="/free-data-1"
            className="block w-full text-center py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-[#B2DF0A] via-[#E70C80] to-[#FF850B] shadow-md hover:opacity-95 transition"
          >
            Free Data
          </a>
        )}
        {index === 1 && (
          <Link
            to="/device-bank"
            className="block w-full text-center py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-[#B2DF0A] via-[#E70C80] to-[#FF850B] shadow-md hover:opacity-95 transition"
          >
            Free Data
          </Link>
        )}
        {index === 2 && (
          <a
            href="/free-skill"
            className="block w-full text-center py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-[#B2DF0A] via-[#E70C80] to-[#FF850B] shadow-md hover:opacity-95 transition"
          >
            Free Skill
          </a>
        )}
      </div>

     
    </div>
  </div>
))}


    </div>
  </div>
</div>

    </>
  )
}

export default DataAndDevice