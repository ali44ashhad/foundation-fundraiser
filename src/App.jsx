import React, { useState, useEffect } from "react"; 
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import About from "./pages/Aboutpage/About";
import Homepage from "./pages/Homepage/Homepage"
import OurPurpose from "./pages/Purposepage/OurPurpose";
import Philanthropist from "./pages/Philanthropist";
import WillHarmony from "./pages/WillHarmony";
import Hope from "./pages/morePages/Hope";
import WhyDonation from "./pages/morePages/WhyDonation";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AntiDiscrimination from "./pages/AntiDescrimination";
import Stem from "./pages/morePages/Stem";
import Launch from "./pages/morePages/Launch";
import DataAndDevice from "./pages/morePages/DataAndDevice";
import TeamMembers from "./pages/morePages/TeamMembers";
import TrustVacancies from "./pages/morePages/TrustVacancies";
import ManagmentAndStaff from "./pages/morePages/ManagmentAndStaff";
import Volunteer from "./pages/morePages/Volunteer";
import ContactUs from "./pages/ContactUs";
import TermsOfUse from "./pages/TermsOfUse";
import Complaints from "./pages/Complaints";




const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path="/our-purpose" element={<OurPurpose/>} />
        <Route path="/philanthropist" element={<Philanthropist />} />
        <Route path="/harmony" element={<WillHarmony/>}/>
        
        {/* further menu  */}
        <Route path="/hope" element={<Hope/>}/>
        <Route path="/donation" element={<WhyDonation/>}/>
        <Route path="privacy-policy" element={<Privacy/>}/>
        <Route path="/terms-and-conditions" element={<Terms/>}/>
        <Route path='/terms-of-use' element={<TermsOfUse/>}/>
        <Route path='/complaints' element={<Complaints/>}/>
        <Route path="/anti-descrimination" element={<AntiDiscrimination/>}/>
        <Route path="/stem" element={<Stem/>}/>
        <Route path='/launch' element={<Launch/>}/>
        <Route path='/data-device' element={<DataAndDevice/>}/>
        <Route path='/team-members' element={<TeamMembers/>}/>
        <Route path='/trust-vacancies' element={<TrustVacancies/>}/>
        <Route path='/management-staff' element={<ManagmentAndStaff/>}  />
        <Route path='/volunteer' element={<Volunteer/>}/>
      </Routes>

      <Footer />
    </div>
  );
};
export default App;
