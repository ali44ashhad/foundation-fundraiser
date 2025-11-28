import React, { useState, useEffect, useRef } from 'react';

// Define the content sections with IDs for navigation
const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `
      ISHEP Foundation is committed to promoting racial harmony, equality, and diversity in all aspects of its operations. We strive to create an inclusive environment where everyone is treated with dignity and respect. This policy outlines our commitment to preventing discrimination and promoting equality.
    `
  },
  {
    id: "scope",
    title: "2. Scope",
    content: `
      This policy applies to all users of our website and services, including employees, volunteers, contractors, and beneficiaries. It covers all aspects of our operations, including but not limited to recruitment, service provision, and partnerships.
    `
  },
  {
    id: "prohibited-grounds",
    title: "3. Prohibited Grounds of Discrimination",
    content: `
      ISHEP Foundation will not tolerate discrimination based on any of the following grounds:
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>Age</li>
        <li>Ethnicity</li>
        <li>Ancestry</li>
        <li>Gender</li>
        <li>National origin</li>
        <li>Disability</li>
        <li>Race</li>
        <li>Size</li>
        <li>Religion</li>
        <li>Sexual orientation</li>
        <li>Socioeconomic background</li>
        <li>Any other status prohibited by applicable law</li>
      </ul>
    `
  },
  {
    id: "commitment-to-non-discrimination",
    title: "4. Commitment to Non-Discrimination",
    content: `
      Users of our website and services must attest that they do not discriminate on any of the above grounds in order to receive resources from ISHEP Foundation. We reserve the right to refuse service to anyone for any reason at any time.
    `
  },
  {
    id: "evidence-of-discrimination",
    title: "5. Evidence of Discrimination",
    content: `
      External evidence, such as negative publicity or social media, that reveals discrimination, hate speech, or disrespectful or bullying behaviour, may be taken into consideration. ISHEP Foundation reserves the right to determine, in its sole discretion, what constitutes such behaviour.
    `
  },
  {
    id: "donor-eligibility",
    title: "6. Donor Eligibility Requirements",
    content: `
      Users will also be subject to eligibility requirements from donors who may require agreement to their own anti-discrimination policies.
    `
  },
  {
    id: "reporting-and-complaints",
    title: "7. Reporting and Complaints",
    content: `
      Any individual who believes they have been subjected to discrimination should report the incident first to the police and then to the ISHEP Foundation, providing the CAD reference number. Complaints will be investigated promptly and confidentially. Appropriate action will be taken against any individual found to have violated this policy.
    `
  },
  {
    id: "training-and-awareness",
    title: "8. Training and Awareness",
    content: `
      The ISHEP Foundation is committed to providing training and awareness programmes to ensure that all users understand their responsibilities under this policy. Regular reviews will be conducted to ensure the policy remains effective and up-to-date.
    `
  },
  {
    id: "review-and-amendment",
    title: "9. Review and Amendment",
    content: `
      This policy will be reviewed annually to ensure it remains relevant and effective. Amendments may be made as necessary to reflect changes in legislation or best practices.
    `
  },
  {
    id: "contact-information",
    title: "10. Contact Information",
    content: `
      For further information or to report a complaint, please contact:
      <br/><br/>
      <div class="space-y-1">
        <p><span class="font-bold text-gray-900">Board of Trustees Approved</span></p>
        <p>Date of Approval: April 2025</p>
        <p>Review Date: First Review | 12 months after Board approval</p>
        <p>Chair to the Board of Trustees | Safeguarding Officer</p>
        <p><span class="font-bold text-gray-900">Email:</span> <a href="mailto:compliance@ishep.org.uk" class="font-medium text-blue-600 hover:underline">compliance@ishep.org.uk</a></p>
      </div>
    `
  },
];

// Reusable Tailwind classes for the requested gradient
const gradientClass = "bg-gradient-to-r from-[#AFDE00] via-[#FF8000] to-[#E70C80] text-transparent bg-clip-text hover:opacity-80 transition-opacity duration-200";

const AntiDescrimination = () => {
  const [activeId, setActiveId] = useState(sections[0].id);
  const observerRef = useRef(null);

  useEffect(() => {
    // Set up Intersection Observer to track which section is currently visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // If the section is intersecting and is visible from the top
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      // Root margin to trigger intersection before the section fully hits the top
      { rootMargin: '-20% 0px -60% 0px' } 
    );

    observerRef.current = observer;

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);


  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll to the element
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <div className="container mx-auto p-4 sm:p-8 lg:p-12 max-w-7xl">
        
        {/* Header */}
        <header className="text-center mb-10 sm:mb-16 pt-8">
          <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 ${gradientClass}`}>
            Anti-Discrimination Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Statement and Purpose of Policy
          </p>
        </header>
        
        {/* Introduction text specific to this policy */}
        <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
          Welcome to the ISHEP Foundation charity (registered charity number 1209986) website. This policy outlines our commitment to preventing discrimination and promoting equality in all aspects of our operations.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Table of Contents (TOC) - Sticky on Desktop */}
          <nav className="lg:w-1/4 flex-shrink-0 lg:sticky lg:top-8 self-start p-4 bg-gray-50 rounded-lg shadow-md h-fit">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Table of Contents</h3>
            <ul className="space-y-3">
              {sections.map(section => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => handleLinkClick(e, section.id)}
                    className={`
                      text-sm font-medium transition-all duration-300 block p-2 rounded-md
                      ${activeId === section.id 
                        ? `font-bold shadow-lg ${gradientClass} bg-white ring-2 ring-gray-100` 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                      }
                    `}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Main Content Area */}
          <main className="lg:w-3/4">
            <div className="space-y-12">
              {sections.map(section => (
                <section 
                  key={section.id} 
                  id={section.id} 
                  // scroll-mt-24 ensures the fixed header/nav doesn't block the section title when scrolling
                  className="pt-6 pb-4 border-b border-gray-100 scroll-mt-24" 
                >
                  <h2 className={`text-2xl sm:text-3xl font-extrabold mb-4 ${gradientClass}`}>
                    {section.title}
                  </h2>
                  <div 
                    className="text-gray-700 leading-relaxed text-base sm:text-lg space-y-4" 
                    dangerouslySetInnerHTML={{ __html: section.content }} 
                  />
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AntiDescrimination;