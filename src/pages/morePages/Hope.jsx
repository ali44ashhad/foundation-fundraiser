import React from "react";

const Hope = () => {
  const handleContact = () => {
    // change this to your desired contact route or mailto link
    window.location.href = "/contact";
  };

  return (
    <>
      <div className=" pt-20 flex justify-center items-start font-sans bg-white">
        {/* Main Content Area: Centered, max width for readability */}
        <div className="w-full max-w-[65%] rounded-xl overflow-hidden py-6 sm:py-10">
          {/* Video Section (responsive) */}
          <section className="relative w-full px-4">
            <div className="relative h-0 pb-[56.25%] overflow-hidden rounded-lg">
              <iframe
                className="absolute inset-0 w-full h-full border-none rounded-lg"
                src="https://www.youtube.com/embed/CIHgDY7ovto?start=22"
                title="ISHEP Hope and Resilience Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          {/* Text Content Section - Inlined paragraphs */}
          <main className="p-4 md:p-8 lg:p-10 w-[100%]">
            <p className="mb-6 text-gray-700 leading-relaxed text-base md:text-lg">
              Imagine the uncertainty and fear that grips one in five adults across the UK today—the
              constant worry of losing their home, not having any food, or being disconnected from
              the world due to a broken phone or lack of data. This is not a distant echo of
              distress; it is a reality for many in our communities and a pound for purpose can make
              a good difference.
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed text-base md:text-lg">
              We support many in the belief that everyone deserves a place to call home, a sanctuary
              where they can build their lives and thrive. No one should impose racial
              discrimination upon another without being held accountable. No one should go hungry,
              not even for a day, and everyone should have the means to stay connected, making and
              receiving those important calls.
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed text-base md:text-lg">
              The stability and security of a home are fundamental to an individual's well-being and
              their ability to contribute positively to society. A home is more than just a roof
              over one's head; it is a foundation for personal growth, a space for families to
              flourish, and a cornerstone for building stronger, more inclusive community
              connections.
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed text-base md:text-lg">
              While uncertainty lives amongst our community, ISHEP Foundation is committed to
              establishing integrated solutions that help everyday people make this vision a
              reality. Our goal is to ensure more people have somewhere to call home, access to a
              reliable food source every day, that law actively distributes firm action and
              offenders are held accountable for racial discrimination and hate crimes, and more
              like-minded people to join in to strategically and practically fix the digital
              divide, and distribute free data and devices to those who need it the most.
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed text-base md:text-lg">
              Together, we can transform the narrative from one of worry and insecurity to one of
              hope and resilience. Together we can build a society where the phrase “home sweet
              home” is not a distant dream but a tangible reality for all.
            </p>

            {/* Gradient Contact Button */}
          <div className="mt-6 flex justify-end w-full">
  <button
    onClick={handleContact}
    aria-label="Contact ISHEP"
    className="w-full sm:w-auto max-w-xs text-white font-semibold px-6 py-3 rounded-full
               bg-gradient-to-r from-lime-500 to-pink-600 hover:scale-105 transform
               transition duration-200 shadow-sm"
  >
    Contact Us
  </button>
</div>

          </main>
        </div>
      </div>
    </>
  );
};

export default Hope;
