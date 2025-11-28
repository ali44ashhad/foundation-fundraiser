import React, { useState } from 'react'
import { navMenus } from '../data/data';


const ManagmentAndStaff = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <>
            <div className=" bg-gray-50 font-sans py-30">
                <div className="max-w-7xl mx-auto">
                    {/* --- Navigation Bar (Header) --- */}
                    <header className="py-4 border-b border-gray-200">
                        <nav className="flex items-center justify-end">
                            {/* Desktop Menu (Visible on medium screens and up) */}
                            <div className="hidden md:flex space-x-8">
                                {navMenus.map((menu, index) => (
                                    // wrapper for relative positioning of dropdown
                                    <div key={index} className="relative text-gray-700">
                                        <button
                                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                            onMouseEnter={() => setOpenIndex(index)}
                                            className="flex items-center text-sm font-medium hover:text-indigo-600 transition duration-150 p-2 rounded-md"
                                            aria-haspopup="true"
                                            aria-expanded={openIndex === index}
                                        >
                                            {menu.title}
                                            {/* Chevron Icon */}
                                            <svg
                                                className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </button>

                                        {/* Dropdown Content */}
                                        {openIndex === index && (
                                            <div
                                                className="absolute z-30 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                                                onMouseLeave={() => setOpenIndex(null)}
                                                onFocus={() => { }} // placeholder to satisfy a11y tools if needed
                                            >
                                                <div className="py-2">
                                                    {menu.points.map((point, pIndex) => (
                                                        <a
                                                            key={pIndex}
                                                            href="#"
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition duration-150"
                                                        >
                                                            {point}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Menu Button (Visible on small screens) */}
                            <button
                                className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-200 transition duration-150"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    // Close Icon (X)
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                ) : (
                                    // Hamburger Icon
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                )}
                            </button>
                        </nav>

                        {/* Mobile Dropdown Menu (Conditionally rendered) */}
                        {isMobileMenuOpen && (
                            <div className="md:hidden mt-4 space-y-2 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                                {navMenus.map((menu, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-2">
                                        <h3 className="font-semibold text-gray-800 pt-2">{menu.title}</h3>
                                        <ul className="pl-4 pt-1 space-y-1 text-sm text-gray-600">
                                            {menu.points.map((point, pIndex) => (
                                                <li key={pIndex} className="hover:text-indigo-600 transition duration-100 cursor-pointer">
                                                    - {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
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
            <section className="space-y-10 w-full bg-gray-50 py-10">

                <div className='w-6xl m-auto'>
                    <h2
                        className="text-3xl md:text-6xl font-semibold bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] bg-clip-text text-transparent"
                    >
                        Our Management
                    </h2>

                    <p className="leading-relaxed text-base text-black md:text-lg py-3">
                        Our management and staff are carefully selected first by our senior management team,
                        and then by the managers of each department. Our management and staff are in post in
                        one of the following capacities: Fixed Contract, Rolling Contract, or Permanent.
                        <br /><br />
                        Senior management steers our strategic direction. Their primary role is to ensure that we
                        fulfil our charitable objectives and that the income we receive is applied effectively.
                    </p>
                    <h2
                        className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000] bg-clip-text text-transparent pt-10 pb-2"
                    >
                        ISHEP is looking for passionate individuals to join our management and staff team!
                    </h2>

                    {/* Paragraph 2 */}
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        As a member of the team, you will play a vital role in shaping the future of ISHEP.
                        Our CEO and the board members are responsible for setting the strategic direction
                        of the organisation, ensuring sound governance, and overseeing financial and
                        operational performance.
                        <br /><br />
                        The management team work alongside the CEO, who leads the day-to-day delivery of
                        services, to ensure we continue to provide high-quality, accessible advice and support
                        to the people who need it most, while delivering a social enterprise community division.
                        <br /><br />
                        Being a member of the team, in both capacity management and staff, is an opportunity to
                        use your skills and experience to make a meaningful impact in the community. Whether you
                        bring lived experience or expertise in equity, diversity, and inclusion, communications,
                        digital or legal knowledge, your contribution will help ISHEP grow and adapt to meet new
                        challenges.
                    </p>


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
    <div className="w-full flex justify-center lg:justify-end">
      <img
        src=""
        alt="STEM Training"
        className="w-full max-w-md rounded-xl shadow-xl object-cover"
      />
    </div>
  </div>
</section>

        </>
    )
}

export default ManagmentAndStaff