import logo from "./assets/ISHEP-logo.avif";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpenMobile, setMoreOpenMobile] = useState(false);
  const [desktopMoreOpen, setDesktopMoreOpen] = useState(false);

  const moreRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setDesktopMoreOpen(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setMoreOpenMobile(false);
        setDesktopMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const primary = [
    { name: "Home", path: "#" },
    { name: "About Us", path: "#" },
    { name: "Our Purpose", path: "#" },
    { name: "PRH Education", path: "#" },
    { name: "Philanthropist", path: "#" },
    { name: "A Will for Harmony", path: "#" },
  ];

  const moreItems = [
    { name: "Hope and Resilience", path: "#" },
    { name: "Echoes of Kindness", path: "#" },
    { name: "Why Donation", path: "#" },
    { name: "STEM", path: "#" },
    { name: "Data And Device", path: "#" },
    { name: "Meet the Team", path: "#" },
    { name: "The Launch", path: "#" },
    { name: "Vacancies", path: "#" },
    { name: "Contact Us", path: "#" },
    { name: "Registration for Instinct", path: "#" },
    { name: "Login", path: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg shadow-black/30">
      <div className="container mx-auto px-6 h-20">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="logo"
                className="h-10 w-auto md:h-12 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
              />
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:flex items-center space-x-6 xl:space-x-8"
          >
            {primary.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white/90 hover:text-lime-400 transition-colors font-medium text-base"
              >
                {item.name}
              </Link>
            ))}

            {/* More dropdown (desktop) */}
            <div ref={moreRef} className="relative">
              <button
                aria-haspopup="true"
                aria-expanded={desktopMoreOpen}
                onClick={() => setDesktopMoreOpen((s) => !s)}
                onMouseEnter={() => setDesktopMoreOpen(true)}
                onMouseLeave={() => setDesktopMoreOpen(false)}
                className="flex items-center gap-2 text-white/90 hover:text-lime-400 font-medium text-base"
              >
                More{" "}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    desktopMoreOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {desktopMoreOpen && (
                <div
                  onMouseEnter={() => setDesktopMoreOpen(true)}
                  onMouseLeave={() => setDesktopMoreOpen(false)}
                  className="absolute right-0 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl mt-3 py-2 min-w-[240px] shadow-xl shadow-lime-500/10"
                >
                  {moreItems.map((mi) => (
                    <Link
                      key={mi.name}
                      to={mi.path}
                      className="block px-4 py-2 text-white/80 hover:text-lime-400 hover:bg-white/10 transition-all"
                      onClick={() => setDesktopMoreOpen(false)}
                    >
                      {mi.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Donate button (desktop) */}
          <div className="hidden md:block">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-lime-500 to-pink-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-lime-500/30 transition-all"
            >
              Donate Now
            </motion.button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen((s) => !s)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 py-4 px-6"
        >
          <div className="space-y-2">
            {primary.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block text-white/80 hover:text-lime-400 font-medium py-2 transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile "More" expandable */}
            <div>
              <button
                onClick={() => setMoreOpenMobile((s) => !s)}
                className="w-full flex items-center justify-between text-white/80 hover:text-lime-400 font-medium py-2"
              >
                <span>More</span>
                <ChevronDown
                  size={16}
                  className={`${
                    moreOpenMobile ? "rotate-180" : "rotate-0"
                  } transition-transform`}
                />
              </button>

              {moreOpenMobile && (
                <div className="mt-1 pl-3 border-l border-white/10">
                  {moreItems.map((mi) => (
                    <Link
                      key={mi.name}
                      to={mi.path}
                      onClick={() => {
                        setMenuOpen(false);
                        setMoreOpenMobile(false);
                      }}
                      className="block text-white/75 hover:text-lime-400 font-medium py-2 transition-colors"
                    >
                      {mi.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Donate CTA on mobile */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full mt-4 bg-gradient-to-r from-lime-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-lime-500/25 transition-all"
            >
              Donate Now
            </motion.button>
          </div>
        </div>
      )}
    </nav>
  );
}
