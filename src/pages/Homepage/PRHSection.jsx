import React from "react";
import { motion } from "framer-motion";

const PRHSection = () => {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            PROMOTING RACIAL HARMONY (PRH)
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Knowledge, mutual understanding, and fairness across all racial
            groups.
          </p>
        </motion.div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-lime-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold text-lime-400 mb-6"
              >
                "IT'S NOT COLOUR, IT'S CULTURE"
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-lg mb-6"
              >
                In an era marked by increasing awareness of racial injustice and
                social inequalities, ISHEP introduces PRH — a beacon of hope for
                unity and understanding.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg"
              >
                Through a dedicated educational study programme, PRH promotes
                literacy and critical perspectives in educational curricula
                (Level 4/5 qualification).
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-black/30 rounded-2xl p-8 border border-white/10"
            >
              <h4 className="text-2xl font-bold mb-4">Racial Literacy</h4>
              <p className="text-gray-300 mb-4">
                Equivalent to Level 4/5 qualification
              </p>
              <ul className="space-y-4 text-gray-300">
                {[
                  "Workshops and Seminars",
                  "Critical Thinking Development",
                  "Empathy and Understanding",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-lime-500 flex items-center justify-center mr-3">
                      <i className="fa-solid fa-check text-white text-xs"></i>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PRHSection;
