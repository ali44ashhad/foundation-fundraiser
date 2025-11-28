// src/components/ProgramsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const ProgramsSection = () => {
  const programs = [
    {
      title: "PRH Education",
      subtitle: "Promoting Racial Harmony",
      price: "Level 4/5",
      features: [
        "Racial Literacy Curriculum",
        "Cultural Awareness Training",
        "Community Workshops",
        "Educational Resources",
      ],
      color: "from-lime-500 to-lime-600",
    },
    {
      title: "STEM Training",
      subtitle: "Skills Development",
      price: "Levels 3-5",
      features: [
        "Technical Skills Training",
        "Career Development",
        "Mentorship Programs",
        "Industry Partnerships",
      ],
      color: "from-pink-500 to-pink-600",
      popular: true,
    },
    {
      title: "Social Welfare",
      subtitle: "Community Support",
      price: "Comprehensive",
      features: [
        "Emergency Accommodation",
        "Mental Health Support",
        "Food Security Programs",
        "Community Events",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="pricing-package-section py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="sub-title3 leading-18 text-18 mb-5 inline-block font-semibold uppercase text-lime-600">
            Our Core Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building Bridges Through Education
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Choose from our comprehensive programs designed to promote racial
            harmony and community empowerment.
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-white rounded-3xl shadow-md p-8 border border-gray-200 hover:shadow-xl hover:border-lime-400/40 transition-all duration-300 ${
                program.popular ? "ring-2 ring-pink-500/60" : ""
              }`}
            >
              {/* Popular Badge */}
              {program.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Card Content */}
              <div className="pb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600">{program.subtitle}</p>
                <div className="mt-6">
                  <h4 className="text-4xl font-bold text-gray-800">
                    {program.price}
                  </h4>
                  <p className="text-lime-600 mt-2 font-medium">
                    Qualification Level
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="py-6 border-t border-gray-200">
                <ul className="space-y-4 text-left">
                  {program.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700 font-medium"
                    >
                      <div
                        className={`w-6 h-6 rounded-full bg-gradient-to-r ${program.color} flex items-center justify-center mr-3`}
                      >
                        <i className="fa-solid fa-check text-white text-xs"></i>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 bg-gradient-to-r ${program.color} text-white font-semibold rounded-2xl hover:shadow-lg transition-all`}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
