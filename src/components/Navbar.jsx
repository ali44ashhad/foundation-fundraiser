import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import images from '../assets/images';

const vacanciesSubmenu = [
  { name: 'Board Member', href: '/trust-vacancies' },
  { name: 'Management and Staff', href: '/management-staff' },
  { name: 'Volunteer', href: '/volunteer' },
];

const moreDropdownItems = [
  { name: 'Registration for Instinct', href: '#register' },
  { name: 'Login', href: '#login' },
  { name: 'Hope and Resilience', href: '/hope' },
  { name: 'Echoes of Kindness', href: '/harmony' },
  { name: 'Why Donation', href: '/donation' },
  { name: 'STEM', href: '/stem' },
  { name: 'Data And Device', href: '/data-device' },
  { name: 'Meet the team', href: '/team-members' },
  { name: 'The Launch', href: '/launch' },
  { name: 'Vacancies', href: '#vacancies', submenu: vacanciesSubmenu },
  { name: 'Contact Us', href: '/contact-us' },
];

const mainMenuItems = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Our Purpose', href: '/our-purpose' },
  { name: 'Philanthropist', href: '/philanthropist' },
  { name: 'A Will for Harmony', href: '/harmony' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isVacanciesOpen, setIsVacanciesOpen] = useState(false);

  // refs for detecting outside clicks
  const navRef = useRef(null); // whole nav area
  const moreDropdownRef = useRef(null); // desktop more dropdown
  const mobilePanelRef = useRef(null); // mobile panel

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    if (isMobileMenuOpen) {
      setIsMoreOpen(false);
      setIsVacanciesOpen(false);
    }
  };

  const toggleMoreMenu = () => {
    setIsMoreOpen(prev => !prev);
    setIsVacanciesOpen(false);
  };

  const toggleVacancies = () => {
    setIsVacanciesOpen(prev => !prev);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsMoreOpen(false);
    setIsVacanciesOpen(false);
  };

  // Close menus on click outside (works for desktop & mobile)
  useEffect(() => {
    function handleDocumentClick(e) {
      const target = e.target;

      // If mobile panel is open and click inside it, do nothing
      if (isMobileMenuOpen) {
        if (mobilePanelRef.current && mobilePanelRef.current.contains(target)) {
          return;
        }
        // clicked outside mobile panel -> close everything
        closeAllMenus();
        return;
      }

      // If More dropdown is open, check if click was outside dropdown and outside the More button
      if (isMoreOpen) {
        const dropdownEl = moreDropdownRef.current;
        const navEl = navRef.current;
        // if click inside dropdown or inside nav (so clicks on More button itself are allowed), ignore
        if (dropdownEl && (dropdownEl.contains(target) || (navEl && navEl.contains(target) && !dropdownEl.contains(target)))) {
          // click occurred inside nav - do not auto-close
          return;
        }
        // otherwise clicked outside -> close more and vacancies
        setIsMoreOpen(false);
        setIsVacanciesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleDocumentClick);
    return () => document.removeEventListener('mousedown', handleDocumentClick);
  }, [isMoreOpen, isMobileMenuOpen]);

  return (
    <>
      {/* Navigation */}
      <nav ref={navRef} className="fixed w-full bg-white backdrop-blur-sm z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <img
  src={images.companyLogo}
  alt="Logo"
  className="
    h-14 w-auto           
    sm:h-10               
    md:h-18               
    lg:h-13               
    object-contain
  "
/>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              {mainMenuItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-pink-600 px-3 py-2 text-sm font-semibold transition duration-150"
                >
                  {item.name}
                </a>
              ))}

              {/* More Menu */}
              <div className="relative">
                <button
                  onClick={toggleMoreMenu}
                  className="text-black px-3 py-2 text-sm font-medium flex items-center"
                  aria-expanded={isMoreOpen}
                  aria-controls="more-dropdown"
                >
                  More <ChevronRight className={`ml-1 h-4 w-4 transform transition-transform ${isMoreOpen ? 'rotate-90' : ''}`} />
                </button>

                {isMoreOpen && (
                  <div
                    id="more-dropdown"
                    ref={moreDropdownRef}
                    className="absolute right-0 top-full mt-2 w-60 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 z-20"
                  >
                    {moreDropdownItems.map(item => (
                      <div key={item.name} className="relative">
                        <div className="w-full flex justify-between items-center">
                          {/* If item has submenu, clicking the text will open the submenu (prevent default). */}
                          <a
                            href={item.href || '#'}
                            onClick={item.submenu ? (e) => { e.preventDefault(); toggleVacancies(); } : undefined}
                            className="flex-1 px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                          >
                            {item.name}
                          </a>

                          {item.submenu && (
                            <button
                              onClick={toggleVacancies}
                              className="px-2"
                              aria-expanded={isVacanciesOpen}
                              aria-controls="vacancies-submenu"
                            >
                              <ChevronRight className={`h-4 w-4 transform transition-transform ${isVacanciesOpen ? 'rotate-90' : ''}`} />
                            </button>
                          )}
                        </div>

                        {/* Vacancies Submenu */}
                        {item.submenu && isVacanciesOpen && (
                          <div id="vacancies-submenu" className="absolute left-full top-0 ml-1 w-60 rounded-lg shadow-2xl bg-white ring-1 ring-black ring-opacity-5 z-30">
                            {item.submenu.map(subItem => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Donate Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-lime-500 to-pink-600 text-black rounded-tl-3xl rounded-br-3xl hover:rounded-xl px-6 py-2.5 font-semibold shadow-2xl hover:shadow-lime-500/25 transition-all text-sm md:text-base"
              >
                Donate Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-green-300 hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-300"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay (still present so user sees overlay) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" aria-hidden="true" />
      )}

      {/* Mobile Menu Panel */}
      <div
        ref={mobilePanelRef}
        className={`fixed top-0 right-0 h-screen w-1/2 bg-black/95 backdrop-blur-md z-40 lg:hidden transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-24 pb-6 h-full overflow-y-auto flex flex-col">
          <div className="flex-1 px-4 space-y-2">
            {/* Main Menu */}
            {mainMenuItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:text-green-300 hover:bg-gray-800/50 transition duration-150"
                onClick={closeAllMenus}
              >
                {item.name}
              </a>
            ))}

            {/* More Section */}
            <div className="border-t border-gray-700 pt-3 mt-3">
              <button
                onClick={toggleMoreMenu}
                className="flex justify-between items-center w-full px-4 py-3 rounded-lg text-base font-medium text-white hover:text-green-300 hover:bg-gray-800/50 transition duration-150"
              >
                More
                <ChevronRight className={`h-5 w-5 transform transition-transform duration-300 ${isMoreOpen ? 'rotate-90' : 'rotate-0'}`} />
              </button>

              {isMoreOpen && (
                <div className="space-y-1 mt-2">
                  {moreDropdownItems.map(item => (
                    <div key={item.name} className="flex flex-col">
                      <div className="flex justify-between items-center w-full">
                        {/* Mobile: clicking the text opens vacancies if submenu exists */}
                        <a
                          href={item.href || '#'}
                          onClick={item.submenu ? (e) => { e.preventDefault(); setIsVacanciesOpen(prev => !prev); } : closeAllMenus}
                          className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition duration-150 ${
                            isVacanciesOpen ? 'text-green-300 bg-gray-800/50' : 'text-gray-300 hover:text-green-300 hover:bg-gray-800/50'
                          }`}
                        >
                          {item.name}
                        </a>
                        {item.submenu && (
                          <button onClick={() => setIsVacanciesOpen(prev => !prev)} className="px-2">
                            <ChevronRight className={`h-4 w-4 transform transition-transform duration-300 ${isVacanciesOpen ? 'rotate-90' : 'rotate-0'}`} />
                          </button>
                        )}
                      </div>

                      {item.submenu && isVacanciesOpen && (
                        <div className="space-y-1 mt-2 border-l border-gray-600">
                          {item.submenu.map(subItem => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 rounded-lg text-xs font-medium text-gray-400 hover:text-green-300 hover:bg-gray-800/50 transition duration-150"
                              onClick={closeAllMenus}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Donate Button */}
          <div className="px-4 py-4 border-t border-gray-700">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full mt-3 bg-gradient-to-r from-lime-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-xl hover:shadow-lime-500/25 transition-all"
              onClick={closeAllMenus}
            >
              Donate Now
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;











// import logo from "../assets/ISHEP-logo.avif"; 
// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false); // mobile menu
//   const [moreOpenMobile, setMoreOpenMobile] = useState(false); // mobile "More" section
//   const [desktopMoreOpen, setDesktopMoreOpen] = useState(false); // desktop More dropdown

//   const moreRef = useRef(null);
//   const mobileMenuRef = useRef(null);

//   useEffect(() => {
//     // close dropdowns when clicking outside
//     function handleClickOutside(e) {
//       if (moreRef.current && !moreRef.current.contains(e.target)) {
//         setDesktopMoreOpen(false);
//       }
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
//         // don't auto-close mobile menu here to avoid interfering with normal nav clicks
//       }
//     }

//     function handleEsc(e) {
//       if (e.key === "Escape") {
//         setMenuOpen(false);
//         setMoreOpenMobile(false);
//         setDesktopMoreOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("keydown", handleEsc);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("keydown", handleEsc);
//     };
//   }, []);

//   const primary = [
//     { name: "Home", path: "#" },
//     { name: "About Us", path: "#" },
//     { name: "Our Purpose", path: "#" },
//     { name: "PRH Education", path: "#" },
//     { name: "Philanthropist", path: "#" },
//     { name: "A Will for Harmony", path: "#" },
//   ];

//   const moreItems = [
//     { name: "Hope and Resilience", path: "#" },
//     { name: "Echoes of Kindness", path: "#" },
//     { name: "Why Donation", path: "#" },
//     { name: "STEM", path: "#" },
//     { name: "Data And Device", path: "#" },
//     { name: "Meet the Team", path: "#" },
//     { name: "The Launch", path: "#" },
//     { name: "Vacancies", path: "#" },
//     { name: "Contact Us", path: "#" },
//     { name: "Registration for Instinct", path: "#" },
//     { name: "Login", path: "#" },
//   ];

//   return (
//     // make the navbar sticky: sticky top-0 and high z-index
//     <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-50 border-b border-white/10 shadow-sm">
//       <div className="container mx-auto px-6 h-20">
//         <div className="flex justify-between items-center h-full">
//           {/* Logo */}
//           <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-3">
//             <Link to="/" className="flex items-center">
//               <img src={logo} alt="logo" className="h-10 w-auto md:h-12 object-contain" />
//             </Link>
//           </motion.div>

//           {/* Desktop Links */}
//           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="hidden lg:flex items-center space-x-6 xl:space-x-8">
//             {primary.map((item) => (
//               <Link key={item.name} to={item.path} className="text-gray-900 hover:text-lime-400 transition-colors font-medium text-base">
//                 {item.name}
//               </Link>
//             ))}

//             {/* More dropdown (desktop) - controlled by state for reliable open/close */}
//             <div ref={moreRef} className="relative">
//               <button
//                 aria-haspopup="true"
//                 aria-expanded={desktopMoreOpen}
//                 onClick={() => setDesktopMoreOpen((s) => !s)}
//                 onMouseEnter={() => setDesktopMoreOpen(true)}
//                 onMouseLeave={() => setDesktopMoreOpen(false)}
//                 className="flex items-center gap-2 text-gray-900 hover:text-lime-400 font-medium text-base"
//               >
//                 More <ChevronDown size={14} className={`transition-transform ${desktopMoreOpen ? "rotate-180" : "rotate-0"}`} />
//               </button>

//               {/* Use visibility via state rather than group-hover so it's keyboard accessible and works on touch */}
//               {desktopMoreOpen && (
//                 <div onMouseEnter={() => setDesktopMoreOpen(true)} onMouseLeave={() => setDesktopMoreOpen(false)} className="absolute right-0 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg mt-2 py-2 min-w-[220px] shadow-xl">
//                   {moreItems.map((mi) => (
//                     <Link key={mi.name} to={mi.path} className="block px-4 py-2 text-gray-300 hover:text-lime-400 hover:bg-white/10" onClick={() => setDesktopMoreOpen(false)}>
//                       {mi.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </motion.div>

//           {/* Donate button (desktop) */}
//           <div className="hidden md:block">
//             <motion.button initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="bg-gradient-to-r from-lime-500 to-pink-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-2xl hover:shadow-lime-500/25 transition-all text-sm md:text-base">
//               Donate Now
//             </motion.button>
//           </div>

//           {/* Mobile menu toggle */}
//           <div className="lg:hidden">
//             <button onClick={() => setMenuOpen((s) => !s)} className="text-gray-900 focus:outline-none">
//               {menuOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <div ref={mobileMenuRef} className="lg:hidden bg-black/90 backdrop-blur-md border-t border-white/10 py-4 px-6">
//           <div className="space-y-2">
//             {primary.map((item) => (
//               <Link key={item.name} to={item.path} onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-lime-400 font-medium py-2">
//                 {item.name}
//               </Link>
//             ))}

//             {/* Mobile "More" expandable */}
//             <div>
//               <button onClick={() => setMoreOpenMobile((s) => !s)} className="w-full flex items-center justify-between text-gray-300 hover:text-lime-400 font-medium py-2">
//                 <span>More</span>
//                 <ChevronDown size={16} className={`${moreOpenMobile ? "rotate-180" : "rotate-0"} transition-transform`} />
//               </button>

//               {moreOpenMobile && (
//                 <div className="mt-1 pl-3 border-l border-white/10">
//                   {moreItems.map((mi) => (
//                     <Link key={mi.name} to={mi.path} onClick={() => { setMenuOpen(false); setMoreOpenMobile(false); }} className="block text-gray-300 hover:text-lime-400 font-medium py-2">
//                       {mi.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Donate CTA on mobile */}
          
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }  