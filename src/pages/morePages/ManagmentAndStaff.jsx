import React, { useState } from 'react'
import { navMenus } from '../data/data';
import images from '../../assets/images';


const ManagmentAndStaff = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    // Function to close the desktop dropdown
    const handleMouseLeave = () => {
        setOpenIndex(null);
    };

    return (
        <>
            <div className="bg-gray-50 font-sans py-10 md:py-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* --- Navigation Bar (Header) --- */}
{/* --- Navigation Bar (Header) --- */}
<header className="py-4 border-b border-gray-200">
  <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-3">
    
    {/* Logo */}
    <div className="text-xl font-bold text-gray-800">ISHEP</div>

    {/* SAME MENU ON ALL SCREENS */}
    <div className="flex flex-wrap items-start gap-3 sm:gap-8">
      {navMenus.map((menu, index) => (
        <div key={index} className="relative text-gray-700">
          
          {/* BUTTON */}
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex items-center text-sm font-medium hover:text-indigo-600 transition p-2 rounded-md"
          >
            {menu.title}
            <svg
              className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          {/* FIXED DROPDOWN (NO EXTRA SPACE) */}
          <div
            className={`${
              openIndex === index ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
            } 
              absolute left-0 top-full mt-2 w-auto
              
              transition-all duration-200 origin-top z-30
            `}
          >
            <div className="bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
              {menu.points.map((point, pIndex) => (
                <a
                  key={pIndex}
                  href="#"
                  onClick={() => setOpenIndex(null)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  {point}
                </a>
              ))}
            </div>
          </div>

        </div>
      ))}
    </div>

  </nav>
</header>



                    {/* --- Main Content Section (Job Details) --- */}
                    <main className="mt-12 p-4 md:p-8 bg-white rounded-2xl shadow-xl">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-8">
                            {/* Left Column: Job Details */}
                            <div className="flex-1 w-full">
                                <h2 className="text-2xl font-bold mb-6 text-gray-900">Position Overview</h2>

                                <dl className="space-y-4">
                                    {/* Detail Item: Position */}
                                    <div className="flex flex-col sm:flex-row sm:justify-between">
                                        <dt className="w-full sm:w-1/2 text-lg font-bold text-gray-700 uppercase tracking-wider">Position:</dt>
                                        <dd className="w-full sm:w-1/2 text-lg text-gray-900 font-medium">Trustees</dd>
                                    </div>

                                    {/* Detail Item: Time Commitment */}
                                    <div className="flex flex-col sm:flex-row sm:justify-between border-t pt-4 border-gray-100">
                                        <dt className="w-full sm:w-1/2 text-lg font-bold text-gray-700 uppercase tracking-wider">Time Commitment:</dt>
                                        <dd className="w-full sm:w-1/2 text-lg text-gray-900 font-medium">12 hours per month</dd>
                                    </div>

                                    {/* Detail Item: Duration */}
                                    <div className="flex flex-col sm:flex-row sm:justify-between border-t pt-4 border-gray-100">
                                        <dt className="w-full sm:w-1/2 text-lg font-bold text-gray-700 uppercase tracking-wider">Duration:</dt>
                                        <dd className="w-full sm:w-1/2 text-lg text-gray-900 font-medium">3 YEARS</dd>
                                    </div>

                                    {/* Detail Item: Location */}
                                    <div className="flex flex-col sm:flex-row sm:justify-between border-t pt-4 border-gray-100">
                                        <dt className="w-full sm:w-1/2 text-lg font-bold text-gray-700 uppercase tracking-wider">Location:</dt>
                                        <dd className="w-full sm:w-1/2 text-lg text-gray-900 font-medium">LOCAL</dd>
                                    </div>
                                </dl>
                            </div>

                            {/* Right Column: Logo */}
                            <div className="w-full md:w-auto flex justify-center md:justify-end mt-8 md:mt-0">
                                {/* Logo (inline, as requested) */}
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-16 h-16 md:w-20 md:h-20 text-indigo-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" />
                                            <path d="M50 20 L30 80 L70 80 Z" fill="#6366F1" />
                                            <circle cx="50" cy="50" r="10" fill="white" />
                                        </svg>

                                        <div className="flex flex-col items-start">
                                            <div className="text-xl md:text-2xl font-black tracking-wider">ISHEP</div>
                                            <div className="text-xs font-semibold text-gray-500 tracking-wider mt-1">TRUSTEES</div>
                                        </div>
                                    </div>

                                    {/* Colored Bar at the bottom */}
                                    <div className="w-full h-2 mt-2 flex rounded-md overflow-hidden">
                                        <div className="w-1/3 bg-green-400"></div>
                                        <div className="w-1/3 bg-pink-400"></div>
                                        <div className="w-1/3 bg-orange-400"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>


            {/* second section */}
            {/* ------------------ MANAGEMENT SECTION ------------------ */}
            <section className="py-10 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* MODIFICATION 2: Adjusted max-width for content to match nav */}
                 <div className="max-w-7xl mx-auto space-y-6 px-4 sm:px-6">
  <h2
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold
               bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]
               bg-clip-text text-transparent leading-tight break-words"
    style={{ hyphens: "auto" }}
  >
    Our Management
  </h2>

  <p className="text-base sm:text-lg md:text-lg text-black leading-relaxed whitespace-normal break-words text-justify">
    Our management and staff are carefully selected first by our senior management team,
    and then by the managers of each department. Our management and staff are in post in
    one of the following capacities: Fixed Contract, Rolling Contract, or Permanent.
  </p>

  <p className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-normal break-words text-justify">
    Senior management steers our strategic direction. Their primary role is to ensure that we
    fulfil our charitable objectives and that the income we receive is applied effectively.
  </p>

  <h3
    className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold
               bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]
               bg-clip-text text-transparent pt-4 break-words"
    style={{ hyphens: "auto" }}
  >
    ISHEP is looking for passionate individuals to join our management and staff team!
  </h3>

  <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-4 whitespace-normal break-words">
    <p className="text-justify">
      As a member of the team, you will play a vital role in shaping the future of ISHEP.
      Our CEO and the board members are responsible for setting the strategic direction
      of the organisation, ensuring sound governance, and overseeing financial and
      operational performance.
    </p>

    <p className="text-justify">
      The management team work alongside the CEO, who leads the day-to-day delivery of
      services, to ensure we continue to provide high-quality, accessible advice and support
      to the people who need it most, while delivering a social enterprise community division.
    </p>

    <p className="text-justify">
      Being a member of the team, in both capacity management and staff, is an opportunity to
      use your skills and experience to make a meaningful impact in the community. Whether you
      bring lived experience or expertise in equity, diversity, and inclusion, communications,
      digital or legal knowledge, your contribution will help ISHEP grow and adapt to meet new
      challenges.
    </p>
  </div>
</div>

                </div>
            </section>


            {/* third section */}
            <section className="w-full py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Empowering the Next Generation Through STEM
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            STEM training has a profoundly positive impact on young people aged 16-25.
                            It empowers them with the skills and confidence needed to succeed in a
                            competitive job market.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            By engaging in STEM training, young people develop critical thinking,
                            problem-solving, and analytical skills that are highly valued by employers.
                            Moreover, STEM training nurtures creativity and innovation, encouraging young
                            people to think outside the box and develop new solutions to complex problems.
                        </p>

                        {/* BUTTON */}
                        <button
                            className="mt-4 px-8 py-3 font-semibold text-white rounded-full shadow-lg 
                            bg-gradient-to-r from-[#B2DF0A] via-[#E70C80] to-[#FF850B] 
                            hover:opacity-90 transition-all duration-300"
                        >
                            Apply Now
                        </button>
                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="w-auto flex justify-center lg:justify-end">
                        <div className="relative p-[3px] rounded-xl overflow-hidden">

    <div className="absolute inset-0 bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] animate-spin-slow"></div>
                            {/* Image wrapper */}
                            <div className="relative rounded-xl overflow-hidden">
                                <img
                                    src={images.managementStaff}
                                    alt="STEM Training"
                                    className="w-auto max-w-full md:max-w-md rounded-xl shadow-xl object-cover" 
                                />
                            </div>

                        </div>
                    </div>


                </div>
            </section>

        </>
    )
}

export default ManagmentAndStaff