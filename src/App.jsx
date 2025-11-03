import React, { useState, useEffect } from "react"; 
import HeroSection from "./components/HeroSection";
import ProgramsSection from "./components/ProgramsSection";
import PRHSection from "./components/PRHSection";
import CausesSection from "./components/CausesSection";
import BlogSection from "./components/BlogSection";
import VolunteerSection from "./components/VolunteerSection";
import DonationSection from "./components/DonationSection";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <PRHSection />
      <CausesSection />
      <BlogSection />
      <VolunteerSection />
      <DonationSection />
      <Footer />
    </div>
  );
};

export default App;
