import React, { useState } from "react";
import { FiSearch, FiAlertCircle, FiShield } from "react-icons/fi";

const Complaints = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    isFraudAllegation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Submitted:", formData);
    alert("Complaint Submitted Successfully!");
  };

  // Content blocks without emojis — using React Icons
  const contentBlocks = [
    {
      heading: "Internal Review by Senior Leadership",
      icon: <FiSearch className="text-3xl" />,
      paragraph: (
        <>
          The <strong>Board Members and its Senior Leadership Team</strong> are committed to maintaining
          high standards of integrity. They investigate complaints regarding fundraising activity,
          especially when unresolved through standard internal procedures.
        </>
      ),
      color: "#AFDE00",
    },
    {
      heading: "Escalation for Unresolved Internal Issues",
      icon: <FiAlertCircle className="text-3xl" />,
      paragraph: (
        <>
          An internal investigation begins in scenarios where complaints cannot be resolved at
          the organisational level. Our leadership team ensures thorough oversight before any
          external involvement occurs.
        </>
      ),
      color: "#E70C80",
    },
    {
      heading: "Mandatory Reporting to Fundraising Regulator",
      icon: <FiShield className="text-3xl" />,
      paragraph: (
        <>
          When a complaint may cause <strong>public harm</strong>, the issue is escalated immediately to the
          Fundraising Regulator, the external body ensuring accountability and public trust.
        </>
      ),
      color: "#FF8000",
    },
  ];

  return (
    <div className=" bg-gray-50 p-4 sm:p-8">

      <div className="max-w-6xl mx-auto py-30 md:p-10">

        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent 
                         bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]">
            Complaints & Reporting Mechanism
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A transparent and fair process for addressing concerns related to our charitable
            fundraising initiative.
          </p>
        </header>

        {/* Content Sections */}
        <section className="space-y-6 mb-12">
          {contentBlocks.map((block, index) => (
            <div
              key={index}
              className="p-5 rounded-xl shadow-md bg-white border-l-8"
              style={{ borderColor: block.color }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div style={{ color: block.color }}>{block.icon}</div>
                <h2 className="text-xl font-bold text-gray-800">{block.heading}</h2>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {block.paragraph}
              </p>
            </div>
          ))}
        </section>

        {/* Complaint Form */}
        <section className="bg-white border rounded-xl shadow-lg p-6 md:p-8 
                            border-[#E70C80]/30">
          <h2 className="text-3xl font-bold mb-4 text-[#E70C80]">
            Submit Your Complaint
          </h2>

          <p className="text-gray-700 mb-6">
            Please answer the questions below to determine whether we can help address your concern.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Full Name <span className="text-[#E70C80]">*</span>
              </label>
              <input
                type="text"
                required
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 w-full p-3 border rounded-lg shadow-sm 
                           focus:ring-2 focus:ring-[#AFDE00] focus:border-[#AFDE00]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email <span className="text-[#E70C80]">*</span>
              </label>
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full p-3 border rounded-lg shadow-sm 
                           focus:ring-2 focus:ring-[#E70C80] focus:border-[#E70C80]"
              />
            </div>

            {/* Radio Buttons */}
            <div>
              <p className="text-base font-semibold text-gray-800 mb-3">
                Is your complaint related to allegations of fraud or criminal activity?
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                {/* Yes */}
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="isFraudAllegation"
                    value="Yes"
                    checked={formData.isFraudAllegation === "Yes"}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#FF8000] focus:ring-[#FF8000]"
                  />
                  <span className="text-gray-700">Yes</span>
                </label>

                {/* No */}
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="isFraudAllegation"
                    value="No"
                    checked={formData.isFraudAllegation === "No"}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#AFDE00] focus:ring-[#AFDE00]"
                  />
                  <span className="text-gray-700">No</span>
                </label>
              </div>

              <p className="mt-4 text-sm bg-[#FF8000]/10 border-l-4 border-[#FF8000] p-3 rounded-r-lg text-gray-700 italic">
                For example: concerns regarding charity legitimacy, misuse of donations, or any
                fraud-related activity.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 text-lg font-bold text-white rounded-lg shadow-lg 
                         bg-gradient-to-r from-[#AFDE00] via-[#E70C80] to-[#FF8000]
                         hover:opacity-90 transition-transform duration-300
                         hover:scale-[1.02]"
            >
              Submit Complaint Report
            </button>
          </form>
        </section>

      </div>
    </div>
  );
};

export default Complaints;
