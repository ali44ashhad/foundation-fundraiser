import React, { useState, useEffect, useRef } from 'react';

// Define the content sections with IDs for navigation
const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: `
      We may collect various types of information from you, including:
      <br/><br/>
      <span class="font-semibold text-gray-900">Personal Information:</span> This includes data such as your name, email address, postal address, phone number, and other identifiers that you provide when you interact with our website or services.
      <br/><br/>
      <span class="font-semibold text-gray-900">Usage Information:</span> This includes data about your interactions with our website, such as the pages you visit, the actions you take, and the duration of your sessions.
      <br/><br/>
      <span class="font-semibold text-gray-900">Technical Information:</span> This includes data such as your IP address, browser type, operating system, and other technical details about the devices you use to access our website.
    `
  },
  {
    id: "how-we-use-your-information",
    title: "2. How We Use Your Information",
    content: `
      We use the information we collect for various purposes, including:
      <br/><br/>
      <span class="font-semibold text-gray-900">Providing and Improving Our Services:</span> To deliver our educational programs, support services, and other initiatives effectively.
      <br/><br/>
      <span class="font-semibold text-gray-900">Communicating with You:</span> To respond to your inquiries, provide updates on our programs and services, and send you newsletters or other communications.
      <br/><br/>
      <span class="font-semibold text-gray-900">Analyzing and Enhancing Our Website:</span> To understand how users interact with our website and to make improvements based on that data.
      <br/><br/>
      <span class="font-semibold text-gray-900">Compliance and Legal Obligations:</span> To comply with applicable laws, regulations, and legal processes.
    `
  },
  {
    id: "how-we-share-your-information",
    title: "3. How We Share Your Information",
    content: `
      We may share your information with:
      <br/><br/>
      <span class="font-semibold text-gray-900">Service Providers:</span> Third-party vendors and service providers who perform services on our behalf, such as hosting providers, payment processors, and email marketing platforms.
      <br/><br/>
      <span class="font-semibold text-gray-900">Legal and Regulatory Authorities:</span> When required by law, regulation, or legal process.
      <br/><br/>
      <span class="font-semibold text-gray-900">Business Partners:</span> With your consent, we may share your information with our business partners for collaborative initiatives.
    `
  },
  {
    id: "third-party-links",
    title: "4. Third-Party Links",
    content: `
      Our website may contain links to third-party websites and services. Please be aware that ISHEP Foundation is not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party websites you visit.
    `
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: `
      We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or method of electronic storage is completely secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
    `
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    content: `
      You have the right to:
      <br/><br/>
      <span class="font-semibold text-gray-900">Access Your Information:</span> Request access to the personal information we hold about you.
      <br/><br/>
      <span class="font-semibold text-gray-900">Correct Your Information:</span> Request that we correct any inaccuracies in your personal information.
      <br/><br/>
      <span class="font-semibold text-gray-900">Delete Your Information:</span> Request that we delete your personal information, subject to certain exceptions.
      <br/><br/>
      <span class="font-semibold text-gray-900">Object to Processing:</span> Object to our processing of your personal information for direct marketing purposes.
    `
  },
  {
    id: "changes-to-this-privacy-policy",
    title: "7. Changes to This Privacy Policy",
    content: `
      We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website. Your continued use of our website after any changes constitutes your acceptance of the updated Privacy Policy.
    `
  },
  {
    id: "contact-us",
    title: "8. Contact Us",
    content: `
      If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please write to us at:
      <br/><br/>
      <span class="font-bold text-gray-900">ISHEP Foundation</span>
      <br/>
      58 Peregrine Road – Hainault Ilford – Essex – IG6 3SZ
      <br/><br/>
      Thank you for your trust in ISHEP. We are committed to protecting your privacy and ensuring the security of your personal information.
    `
  },
];

// Reusable Tailwind classes for the requested gradient
const gradientClass = "bg-gradient-to-r from-[#AFDE00] via-[#FF8000] to-[#E70C80] text-transparent bg-clip-text hover:opacity-80 transition-opacity duration-200";

const Privacy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Effective Date: January 20, 2025
          </p>
        </header>

        {/* Introduction */}
        <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
          At ISHEP Foundation, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services. By continuing to use our website, you acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy.
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

export default Privacy;