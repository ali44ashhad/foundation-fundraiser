import React from 'react'
import HeroSection from "./HeroSection";
import ProgramsSection from "./ProgramsSection";
import PRHSection from "./PRHSection";  
import CausesSection from "./CausesSection";
import BlogSection from "./BlogSection";
import VolunteerSection from "./VolunteerSection";
import DonationSection from "./DonationSection";    

const Homepage = () => {
  return (
    <div> <HeroSection />
      <ProgramsSection />
      <PRHSection />
      <CausesSection />
      <BlogSection />
      <VolunteerSection />
      <DonationSection />
      </div>
  )
}

export default Homepage