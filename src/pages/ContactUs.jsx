import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const INFO_BLOCKS = [
  {
    label: "Send Email to Us",
    detail: "talktous@ishep.org.uk",
    icon: Mail,
    colorClass: "text-[#E70C80]",
    borderClass: "border-[#E70C80]",
  },
  {
    label: "Contact by Call",
    detail: "+44 0207 112 8888",
    icon: Phone,
    colorClass: "text-[#FF8000]",
    borderClass: "border-[#FF8000]",
  },
  {
    label: "Our Address",
    detail: "Office 5312 – 58 Peregrine Road Ilford Essex IG6 3SZ",
    icon: MapPin,
    colorClass: "text-[#AFDE00]",
    borderClass: "border-[#AFDE00]",
  },
];

/* Optional initial form state (also outside) */
const INITIAL_FORM_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  occupation: "",
  postcode: "",
  comments: "",
};

const ContactUs = () => {
  const [formData, setFormData] = useState({ ...INITIAL_FORM_DATA });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // send to backend here if needed
    console.log("Thank you for your submission!");
    setFormData({ ...INITIAL_FORM_DATA }); // Clear form
  };

  /* ---------- ALL JSX inside single return ---------- */
  return (


    <>
      <motion.div
        className="relative w-full h-[70vh] min-h-[300px] overflow-hidden"
        initial="hidden"
        whileInView="visible"
      >
        <motion.img
          src=""
          alt="Hands stacked in different skin tones"
          className="w-full h-full object-cover"
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"

        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest uppercase text-center px-4">
           CONTACT US 
          </h1>
        </motion.div>
      </motion.div>

      <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden">
          {/* Header Section */}
          <header className="p-6 md:p-12 text-center">
            {/* Gradient Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#E70C80] to-[#FF8000]">
              Write to Us
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              We’re here to assist you! Whether you prefer to connect by mail, email, or in
              person, we’ve made it easy for you to reach us. Choose the most convenient option
              below and let us know how we can help.
            </p>
          </header>

          {/* Information Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 px-6 sm:px-8 lg:px-12">
            {INFO_BLOCKS.map((block, index) => {
              const Icon = block.icon;
              return (
                <div
                  key={index}
                  className={`p-5 bg-white rounded-xl shadow-lg border-l-4 ${block.borderClass} transition duration-300 hover:shadow-xl`}
                >
                  <Icon className={`w-6 h-6 mb-2 ${block.colorClass}`} />
                  <p className="text-sm font-semibold uppercase text-gray-500">{block.label}</p>
                  <p className="text-md font-bold text-gray-900 break-words">{block.detail}</p>
                </div>
              );
            })}
          </div>

          {/* Main Grid: Image + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Image / Graphic block */}
            <div className="relative h-64 lg:h-auto bg-gray-200 flex items-center justify-center p-4 rounded-b-2xl lg:rounded-b-none lg:rounded-br-none lg:rounded-l-3xl overflow-hidden">

              <div className="text-white z-10 text-center">
                

                <img
                  src=""
                  alt="Illustration of contact or meeting"
                  className="w-full h-full object-cover absolute inset-0 mix-blend-multiply opacity-50"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "";
                  }}
                />
              </div>
            </div>

            {/* Right: Form */}
            <section className="py-20 sm:p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-[#AFDE00]/50 pb-2">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row: First & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-[#E70C80]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AFDE00] transition duration-150"
                        placeholder="Enter first name"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-[#E70C80]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AFDE00] transition duration-150"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                </div>

                {/* Row: Email & Occupation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-[#E70C80]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AFDE00] transition duration-150"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="occupation" className="text-sm font-medium text-gray-700 mb-1">
                      Occupation <span className="text-[#E70C80]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="occupation"
                        name="occupation"
                        type="text"
                        required
                        value={formData.occupation}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AFDE00] transition duration-150"
                        placeholder="Enter occupation"
                      />
                    </div>
                  </div>
                </div>

                {/* Postcode */}
                <div className="flex flex-col">
                  <label htmlFor="postcode" className="text-sm font-medium text-gray-700 mb-1">
                    Postcode <span className="text-[#E70C80]">*</span>
                  </label>
                  <input
                    id="postcode"
                    name="postcode"
                    type="text"
                    required
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AFDE00] transition duration-150"
                    placeholder="Enter postcode"
                  />
                </div>

                {/* Comments / Textarea */}
                <div className="flex flex-col">
                  <label htmlFor="comments" className="text-sm font-medium text-gray-700 mb-1">
                    Apply / Comments / Questions <span className="text-[#E70C80]">*</span>
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    required
                    rows="5"
                    value={formData.comments}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AFDE00] transition duration-150"
                    placeholder="Tell us how we can help you, or share your application details..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 py-3 px-6 text-lg font-bold text-white rounded-lg shadow-xl 
                           bg-gradient-to-r from-[#E70C80] to-[#FF8000] 
                           hover:from-[#FF8000] hover:to-[#E70C80] 
                           transition duration-300 transform hover:scale-[1.01]"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
