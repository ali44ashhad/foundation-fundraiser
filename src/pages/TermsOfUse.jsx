import React, { useState, useEffect, useRef } from 'react';

// Define the content sections with IDs for navigation
const sections = [
  {
    id: "accounts",
    title: "1. Accounts",
    content: `
      When you create an account, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Project platforms.
      <br/><br/>
      You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
      <br/><br/>
      You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
    `
  },
  {
    id: "links-to-other-websites",
    title: "2. Links To Other Websites",
    content: `
      Our Project may contain links to third-party websites or services that are not owned or controlled by ISHEP Foundation.
      <br/><br/>
      ISHEP Foundation has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that ISHEP Foundation shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
      <br/><br/>
      We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
    `
  },
  {
    id: "termination",
    title: "3. Termination",
    content: `
      We may terminate or suspend access to our Project immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms. This is subject to a 90-day return policy, less applicable fees.
      <br/><br/>
      All provisions of the Terms that, by their nature, should survive termination shall remain in effect, including, but not limited to, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
      <br/><br/>
      Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may do so by simply discontinuing the use of the Service.
      <br/><br/>
      All provisions of the Terms that, by their nature, should survive termination will remain in effect, including, but not limited to, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
    `
  },
  {
    id: "governing-law",
    title: "4. Governing Law",
    content: `
      These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
      <br/><br/>
      Our failure to enforce any right or provision of these Terms shall not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will remain in effect. These Terms constitute the entire agreement between us regarding the Service and supersede and replace any prior agreements between us concerning the Service.
    `
  },
  {
    id: "changes",
    title: "5. Changes",
    content: `
      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days’ notice before any new terms take effect. The determination of what constitutes a material change will be made at our sole discretion.
      <br/><br/>
      By continuing to access or use our Service after the revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please cease using the Service.
    `
  },
  {
    id: "contact-us",
    title: "6. Contact Us",
    content: `
      If you have any questions about these Terms, please contact us:
      <br/><br/>
      <span class="font-bold text-gray-900">By email:</span> 
      <a href="mailto:talktous@ishep.org.uk" class="font-medium hover:underline text-blue-600">talktous@ishep.org.uk</a> (With "Terms of use" in the subject bar)
      <br/>
      <span class="font-bold text-gray-900">By visiting this page on our website:</span> 
      <a href="https://ishep.org.uk/contact-us" target="_blank" rel="noopener noreferrer" class="font-medium hover:underline text-blue-600">https://ishep.org.uk/contact-us</a>
    `
  },
];

// Reusable Tailwind classes for the requested gradient
const gradientClass = "bg-gradient-to-r from-[#AFDE00] via-[#FF8000] to-[#E70C80] text-transparent bg-clip-text hover:opacity-80 transition-opacity duration-200";

const TermsOfUse = () => {
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
            Terms of Use
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Last updated: April 2025
          </p>
        </header>

        {/* Introduction */}
        <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
          Please read these Terms of Use (“Terms”, “Terms of Use”) carefully before using the <a href="https://www.ishep.org.uk" target="_blank" rel="noopener noreferrer" className={`font-semibold ${gradientClass}`}>https://www.ishep.org.uk</a> website (the “Project”) operated by ISHEP Foundation (“us”, “we”, or “our”).
          <br/><br/>
          By accessing or using the Project, you agree to be bound by these Terms. Twenty percent of funds raised is contributed to staffing management and day-to-day functionality. If you disagree with any part of the Terms, then you may not access the Project. The Terms of Use agreement for ISHEP has been created by the founder.
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

export default TermsOfUse;