import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/ISHEP-logo.avif"; // adjust path if needed
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <footer className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* === Top Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {/* === Logo + Info === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4">
              <div className="flex justify-start mb-4 sm:mb-0">
                <div className="w-14 h-14 rounded-full bg-transparent flex items-center justify-center">
                  <img
                    src={logo}
                    alt="ISHEP Logo"
                    className="w-14 h-14 rounded-full object-contain"
                  />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white leading-snug max-w-xs">
                Integrated Solutions Helping Everyday People
              </h3>
            </div>

            <p className="text-gray-400 text-sm">Education • Training • Social Welfare</p>
            <p className="text-gray-500 text-xs mt-2">
              UK Charity Commission number <span className="text-lime-400">1209986</span>
            </p>
          </motion.div>

          {/* === Link Sections === */}
         {[
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms Of Use", to: "/terms-of-use" },
      { label: "Anti-Discrimination", to: "/anti-descrimination" },
      { label: "Complaints", to: "/complaints" },
    ],
  },
  {
    title: "Blog",
    links: [
      { label: "Terms and Conditions", to: "/terms-and-conditions" },
      { label: "Celebrating Diversity", to: "/celebrating-diversity" },
      { label: "Building a Better World", to: "/better-world" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Get Involved", to: "/get-involved" },
      { label: "Donate", to: "/donate" },
      { label: "Volunteer", to: "/volunteer" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
].map((section, i) => (
  <motion.div
    key={section.title}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: i * 0.08 }}
    className="text-left"
  >
    <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
    <ul className="space-y-2">
      {section.links.map((link) => (
        <li key={link.label}>
          <Link
            to={link.to}
            className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
))}

        </div>

        {/* === Divider + Bottom Row === */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-left gap-4"
        >
          <p className="text-gray-500 text-sm">
            © 2025 All Rights Reserved —{" "}
            <span className="text-lime-400 font-medium">ISHEP Foundation</span>
          </p>

          <div className="flex space-x-4 text-gray-400">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-lime-400 transition-colors"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-lime-400 transition-colors"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-lime-400 transition-colors"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-lime-400 transition-colors"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
