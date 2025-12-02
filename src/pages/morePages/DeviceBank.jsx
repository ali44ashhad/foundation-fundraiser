import React from 'react'
import { motion } from 'framer-motion'
import images from '../../assets/images'

const DeviceBank = () => {
  return (
   <>
         <motion.div
        className="relative w-full h-[80vh] min-h-[300px] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.img
          src="" // Add your hero image here
          alt="Hands stacked in different skin tones"
          className="w-full h-full object-cover"
          loading="eager"
        />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest uppercase">
            FREE DEVICES & DIGITAL SKILLS
          </h1>

          {/* Paragraph */}
          <p className="mt-4 text-white max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
            ISHEP Foundation is committed to delivering PRH – Education, STEM training support, and social welfare. We distribute refurbished devices and deliver digital skills so everyone can access the internet and opportunity.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#learn"
              className="px-6 py-3 rounded-full font-semibold text-white 
                        bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]
                        hover:opacity-95 transition-all"
            >
              Learn More
            </a>

            <motion.a
              href="#apply"
              className="px-6 py-3 rounded-full text-white font-semibold 
                         border-2 border-white bg-white/5 backdrop-blur-sm inline-flex items-center justify-center"
              whileTap={{ scale: 0.98 }}
            >
              Apply Now
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* second section */}
      <div className="w-full bg-gray-50 flex items-center justify-center px-4 sm:px-8 lg:px-12 py-12" id="learn">
        <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl overflow-hidden p-6 sm:p-10 lg:p-16 space-y-8">

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 text-center leading-tight">
            ISHEP Foundation – Digital Inclusion & Social Welfare
          </h1>

          {/* Main Paragraph */}
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            ISHEP Foundation is committed to delivering PRH – Education, STEM training Support, and Social welfare. As part of our social welfare initiatives, ISHEP is proud to be a Device Bank Hub within the National Device Bank network, with a growing number of supporters across the UK as ISHEP Philanthropists.
            <br /><br />
            At ISHEP, we are committed to helping fix the digital divide within our communities. We distribute refurbished laptops, mobile phones, and tablets to individuals who lack access to these essential devices. Our goal is to provide internet access, devices, and free digital skills sessions to overcome the barriers of digital inclusion.
          </p>

          {/* Feature list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Device Distribution</h3>
              <p className="text-gray-600">
                We distribute refurbished devices to those in need, made possible by generous donations from public and private sector organisations and the National Device Bank.
              </p>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Digital Skills Training</h3>
              <p className="text-gray-600">
                Our team offers informal support and local interventions to help people learn how to use the internet effectively.
              </p>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Community Engagement</h3>
              <p className="text-gray-600">
                We reach out to those who aren’t online to ensure everyone has the opportunity to stay connected and access essential services.
              </p>
            </div>
          </div>

          {/* How to get a device section */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">

  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=2074&q=80"
    alt="Eligibility Background"
    className="w-full h-[350px] sm:h-[420px] md:h-[500px] object-cover"
  />

  {/* Gradient Overlay */}
  {/* <div className="absolute inset-0 bg-gradient-to-br from-[#AFDE00]/70 via-[#E70C80]/70 to-[#FF8000]/70"></div> */}

  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
    
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg">
      Eligibility for a Free Device
    </h2>

    <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-md">
      To be eligible for a free device, you must be 18+ and from a low-income household,
      and have no or insufficient access to a device at home or away from home.
      Devices are distributed on a first-come, first-served basis and you must apply yourself.
    </p>

    {/* Buttons */}
    <div className="mt-6 space-y-3 w-full max-w-xs mx-auto">


      <a
        href="#apply"
        className="inline-block w-full px-6 py-3 text-lg font-bold text-white bg-black/20 backdrop-blur-sm rounded-lg shadow-inner hover:bg-black/30 transition"
      >
        Apply Now
      </a>
    </div>

  </div>
</div>

        </div>
      </div>

      {/* third section */}
      <div className="w-full bg-gray-50 flex items-center justify-center p-4 sm:p-8 lg:p-12">
        <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl overflow-hidden p-6 sm:p-10 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-md lg:max-w-none rounded-lg shadow-2xl overflow-hidden aspect-video sm:aspect-square">
              <img src={images.deviceBank} alt="" />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] rounded-full">
                  Device Bank Hub
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
                How to Get a Refurbished Device
              </h1>

              {/* Eligibility */}
              <div className="border-l-4 border-[#E70C80] pl-4 py-2 mb-8 bg-gradient-to-r from-[#AFDE00]/10 via-[#E70C80]/10 to-[#FF8000]/10">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Eligibility</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Be 18+ and from a low-income household</li>
                  <li>Have no or insufficient access to a device at home or away from home</li>
                  <li>Apply in person or online — you must apply for yourself</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="#apply"
                  className="inline-block px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] rounded-lg shadow-lg hover:opacity-95 transition duration-300 transform hover:scale-105"
                >
                  Apply Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
   </>
  )
}

export default DeviceBank