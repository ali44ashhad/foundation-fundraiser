import React, { useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { testimonials } from '../data/data';


const TrustVacancies = () => {
const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const currentTestimonial = testimonials[currentIndex];

  // Basic Chevron SVG for navigation buttons
  const ChevronLeft = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={props.className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );

  const ChevronRight = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={props.className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );


  return (
    <>
      <motion.div
        className="relative w-full h-[80vh] min-h-[300px] overflow-hidden"
        initial="hidden"
        whileInView="visible"
      >
        <motion.img
          src=""
          alt="Hands stacked in different skin tones"
          className="w-full h-full object-cover"
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest uppercase text-center px-4">
            Trust Vacancies
          </h1>
        </motion.div>
      </motion.div>



      <div className='w-full bg-white'>
        <section className="max-w-6xl mx-auto px-6 py-12">
          {/* Intro block */}
        <div className="bg-white/80 dark:bg-slate-900/70 p-8 md:p-12 text-black">
  <header className="mb-6">
    <h2
      className="text-2xl md:text-3xl font-semibold text-left 
      bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]
      bg-clip-text text-transparent"
    >
      ISHEP is looking for passionate individuals to join our trustee board!
    </h2>
  </header>

  <div className="prose prose-slate max-w-none text-left dark:prose-invert">
    <p>
      As a trustee, you will play a vital role in shaping the future of ISHEP. Our Board
      of Trustees is responsible for setting the strategic direction of the organisation,
      ensuring sound governance, and overseeing financial and operational performance.
      Trustees work alongside the management team, who lead the day-to-day delivery of
      services, to ensure we continue to provide high-quality, accessible advice to the
      people who need it most.
    </p>

    <p>
      Being a trustee is an opportunity to use your skills and experience to make a
      meaningful impact in your local community. Whether you bring lived experience or
      expertise in equity, diversity and inclusion, communications, digital or legal
      knowledge, your contribution will help ISHEP grow and adapt to meet new challenges.
    </p>
  </div>
</div>



          {/* Why join us section */}
          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-semibold text-left text-slate-900 dark:text-white mb-4">
              Why join us as a trustee?
            </h3>



            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <article className="flex items-start gap-4 dark:bg-slate-700/50 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] p-5 rounded-lg ">
                <div className="flex-none w-14 h-14 text-2xl rounded-full flex items-center justify-center font-bold bg-gradient-to-br from-[#AFDE00] via-[#E70C80] to-[#FF8000] text-white">1</div>
                <div>
                  <h4 className="font-semibold text-left text-black">Champion our mission</h4>
                  <p className="text-sm text-left max-w-prose text-black">
                    Champion our mission and help shape the future of our services.
                  </p>
                </div>
              </article>


              {/* Step 2 */}
              <article className="flex items-start gap-4  dark:bg-slate-700/50 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] p-5 rounded-lg ">
                <div className="flex-none w-14 h-14 text-2xl rounded-full flex items-center justify-center font-bold bg-gradient-to-br from-[#AFDE00] via-[#E70C80] to-[#FF8000] text-white">2</div>
                <div>
                  <h4 className="font-semibold text-left text-black"> Support Charity</h4>
                  <p className="text-sm text-left max-w-prose text-black">
                    Support a newly registered charity in making a tangible difference in young people’s lives.
                  </p>
                </div>
              </article>


              {/* Step 3 */}
              <article className="flex items-start gap-4 dark:bg-slate-700/50 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] p-5 rounded-lg ">
                <div className="flex-none w-14 h-14 text-2xl rounded-full flex items-center justify-center font-bold bg-gradient-to-br from-[#AFDE00] via-[#E70C80] to-[#FF8000] text-white">3</div>
                <div>
                  <h4 className="font-semibold text-left text-black">Develop Skills</h4>
                  <p className="text-sm text-left max-w-prose text-black">
                    Develop new skills and experience, working alongside passionate and skilled professionals.
                  </p>
                </div>
              </article>


              {/* Step 4 */}
              <article className="flex items-start gap-4 dark:bg-slate-700/50 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] p-5 rounded-lg ">
                <div className="flex-none w-14 h-14 text-2xl rounded-full flex items-center justify-center font-bold bg-gradient-to-br from-[#AFDE00] via-[#E70C80] to-[#FF8000] text-white">4</div>
                <div>
                  <h4 className="font-semibold text-left text-black">Drive Advocacy</h4>
                  <p className="text-sm text-left max-w-prose text-black">
                    Play a crucial role in advocacy and social change, ensuring the most vulnerable in our community receive
                    the support they need.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>


      {/* client say */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-xl font-semibold text-center text-gray-900 mb-8">
          What our Trustees say
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-0 p-2 text-gray-500 hover:text-gray-700 transition duration-150 transform -translate-y-1/2 top-1/2"
          >
            <ChevronLeft className="w-8 h-8 text-[#E70C80]" />
          </button>

          {/* Carousel Content */}
          <div className="w-full max-w-2xl mx-auto text-center p-4">
            {/* Image (similar to the circle in the original image) */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 overflow-hidden rounded-full ring-2 ring-[#E70C80] shadow-lg">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Quote/Content */}
            <div className="h-28 flex items-center justify-center mb-6 px-4">
                <p className="text-lg italic text-gray-700 transition duration-500 ease-in-out">
                    {currentTestimonial.quote}
                </p>
            </div>
            
            {/* Name and Title */}
            <p className="text-base font-medium text-gray-900">
                {currentTestimonial.name}
            </p>
            <p className="text-sm text-gray-500">
                {currentTestimonial.title}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-0 p-2 text-gray-500 hover:text-gray-700 transition duration-150 transform -translate-y-1/2 top-1/2"
          >
            <ChevronRight className="w-8 h-8 text-[#E70C80]" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              aria-label={`Go to slide ${slideIndex + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                slideIndex === currentIndex ? 'bg-[#E70C80]' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>



    {/* how to apply */}
            <div className="bg-white/80 dark:bg-slate-900/70 p-8 md:p-12">
  {/* TOP ROW: Heading + Button */}
  <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
    {/* HEADING */}
    <h2
      className="text-2xl md:text-3xl font-semibold 
      bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]
      bg-clip-text text-transparent"
    >
      How to apply
    </h2>

    {/* APPLY NOW BUTTON */}
    <a
      href="#"
      className="px-5 py-2 rounded-lg font-semibold text-white 
      bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]
      shadow-md hover:opacity-90 transition"
    >
      Apply Now
    </a>
  </div>

  {/* PARAGRAPH CONTENT */}
  <div className="prose prose-slate max-w-none text-left dark:prose-invert">
    <p>
      In the first instance, all expressions of interest and any further questions regarding 
      this position must come via the Apply Now button.
    </p>

    <p>
      An informal discussion with our Chair, or Vice-chair can be arranged before application.
    </p>
  </div>
</div>


    </>
  )
}

export default TrustVacancies