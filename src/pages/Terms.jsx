import React, { useState, useEffect, useRef } from 'react';

// Define the content sections with IDs for navigation
const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `
      Welcome to the ISHEP Foundation charity (registered charity number 1209986) website. These Terms and Conditions govern your use of our website and any services provided through it. By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.
    `
  },
  {
    id: "definitions",
    title: "2. Definitions",
    content: `
      <span class="font-semibold text-gray-900">“We,” “Us,” or “Our”</span> refers to the ISHEP Foundation charity (1209986).
      <br/>
      <span class="font-semibold text-gray-900">“You” or “Your”</span> refers to the user of the website.
      <br/>
      <span class="font-semibold text-gray-900">“Website”</span> refers to the ISHEP Foundation charity website and any associated web pages or services.
    `
  },
  {
    id: "use-of-the-website",
    title: "3. Use of the Website",
    content: `
      <h4 class="text-xl font-bold mb-2 text-gray-800">3.1 Eligibility</h4>
      You must be at least 18 years old to use our website. By using our website, you represent and warrant that you are at least 18 years old.

      <h4 class="text-xl font-bold mt-6 mb-2 text-gray-800">3.2 Permitted Use</h4>
      You may use our website for lawful purposes and in accordance with these Terms and Conditions. You agree not to use our website:
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>In any way that breaches any applicable local, national, or international law or regulation.</li>
        <li>To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material.</li>
        <li>To engage in any conduct that restricts or inhibits anyone else’s use or enjoyment of the website.</li>
      </ul>
      <p class="mt-4">You must not:</p>
      <ul class="list-disc pl-5 mt-1 space-y-1">
        <li>Use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</li>
        <li>Use our website to engage in any data mining, data harvesting, or similar activities.</li>
        <li>Attempt to gain unauthorised access to any part of our website or any server, computer, or database connected to our website.</li>
      </ul>
    `
  },
  {
    id: "intellectual-property-rights",
    title: "4. Intellectual Property Rights",
    content: `
      <h4 class="text-xl font-bold mb-2 text-gray-800">4.1 Ownership</h4>
      All content on our website, including text, graphics, logos, images, and software, is the property of the ISHEP Foundation charity or its licensors and is protected by UK and international copyright laws.

      <h4 class="text-xl font-bold mt-6 mb-2 text-gray-800">4.2 Licence</h4>
      We grant you a limited, non-exclusive, non-transferable, and revocable licence to access and use our website for personal, non-commercial purposes. You may not reproduce, distribute, modify, or create derivative works of any content on our website without our prior written consent.
    `
  },
  {
    id: "disclaimers-and-limitations-of-liability",
    title: "5. Disclaimers and Limitations of Liability",
    content: `
      <h4 class="text-xl font-bold mb-2 text-gray-800">5.1 Disclaimers</h4>
      Our website is provided on an “as is” and “as available” basis. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.

      <h4 class="text-xl font-bold mt-6 mb-2 text-gray-800">5.2 Limitations of Liability</h4>
      To the fullest extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>Your use of our website or reliance on any information provided on the website.</li>
        <li>Your use or inability to use our website.</li>
        <li>Any unauthorised access to or use of our servers and/or any personal information stored therein.</li>
      </ul>
    `
  },
  {
    id: "privacy-policy",
    title: "6. Privacy Policy",
    content: `
      Your use of our website is also governed by our Privacy Policy, which can be found at <a href="https://ishep.org.uk/privacy-policy" target="_blank" rel="noopener noreferrer" class="font-semibold text-blue-600 hover:underline">https://ishep.org.uk/privacy-policy</a>. By using our website, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy.
    `
  },
  {
    id: "governing-law-and-jurisdiction",
    title: "7. Governing Law and Jurisdiction",
    content: `
      These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of England and Wales.
    `
  },
  {
    id: "changes-to-terms",
    title: "8. Changes to These Terms and Conditions",
    content: `
      We reserve the right to modify or replace these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our website following the posting of any changes constitutes acceptance of those changes.
    `
  },
  {
    id: "contact-information",
    title: "9. Contact Information",
    content: `
      If you have any questions about these Terms and Conditions, please contact us at:
      <br/><br/>
      <span class="font-bold text-gray-900">ISHEP Foundation Charity</span>
      <br/>
      <span class="font-bold text-gray-900">Email:</span> <a href="mailto:talktous@ishep.org.uk" class="font-medium text-blue-600 hover:underline">talktous@ishep.org.uk</a>
      <br/>
      <span class="font-bold text-gray-900">Tel:</span> 0207 112 8888
    `
  },
];

// Reusable Tailwind classes for the requested gradient
const gradientClass = "bg-gradient-to-r from-[#AFDE00] via-[#FF8000] to-[#E70C80] text-transparent bg-clip-text hover:opacity-80 transition-opacity duration-200";

const Terms = () => {
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
            Terms and Conditions
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Effective date: May 2025
          </p>
        </header>

        {/* Introduction is part of the first section in this document, so skipping general intro text here */}

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

export default Terms;