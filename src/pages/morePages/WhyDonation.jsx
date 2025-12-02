import React, { useState } from "react";
import { motion } from "framer-motion";
import images from "../../assets/images";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 }
  }
};

const directional = (side = "left", duration = 0.6) => ({
  hidden: { opacity: 0, x: side === "left" ? -80 : 100, y: 8, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 20, duration }
  }
});

const fadeUp = (duration = 0.6) => ({
  hidden: { opacity: 0, y: 18, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 160, damping: 20, duration }
  }
});

const imagePop = (duration = 0.7) => ({
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20, duration }
  }
});

const smallPop = (duration = 0.45) => ({
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 22, duration }
  }
});

const WhyDonation = () => {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [otherAmount, setOtherAmount] = useState("");
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [selectedGift, setSelectedGift] = useState("maximize");

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setIsOtherSelected(false);
    setOtherAmount("");
  };

  const handleOtherClick = () => {
    setIsOtherSelected(true);
    setSelectedAmount(null);
  };

  const handleOtherAmountChange = (e) => {
    const raw = e.target.value;
    const value = raw.replace(/[^0-9]/g, "");
    setOtherAmount(value);
    if (isOtherSelected) {
      setSelectedAmount(Number(value) || 0);
    }
  };

  const handleSetAmountClick = () => {
    const val = Number(otherAmount || 0);
    if (!val || val <= 0) {
      alert("Please enter a valid donation amount (number greater than 0).");
      return;
    }
    setSelectedAmount(val);
    setIsOtherSelected(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const finalAmount = isOtherSelected ? Number(otherAmount) || selectedAmount : selectedAmount;
    alert(`Thank you for your donation of £${finalAmount}!\nGift Choice: ${selectedGift}`);
    // integrate payment here
  };

  const giftCards = [
    { amount: "£10", effect: "Will help provide a meal for five people today." },
    { amount: "£25", effect: "Provides a warm meal and emergency food for up to four people for two days." },
    { amount: "£50", effect: "Covers travel expenses for volunteers delivering essential aid." },
    { amount: "£100", effect: "Contributes toward pre-requisite education courses leading to STEM training opportunities." },
    { amount: "£250", effect: "Supports a month of basic essentials for a struggling family with someone to help guide them." }
  ];

  return (
    <>
      <div className="w-full bg-white p-4 sm:p-8">
        <div className="w-[100%] mx-auto rounded-xl py-20 sm:p-10">
          <motion.section
            className="mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.28 }}
            variants={staggerContainer}
          >
            <div className="lg:items-center">
              {/* left 70% -> span 7/10 */}
              <motion.div
                className=" m-auto lg:w-7/10 pt-10"
                variants={directional("left", 0.65)}
              >
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-4"
                  variants={smallPop(0.5)}
                >
                  THE GENEROSITY OF SUPPORTERS HELP FUND THE WORK WE DO
                </motion.h2>

                <motion.h3
                  className="text-xl sm:text-2xl font-semibold text-gray-800 pl-4 italic mb-4"
                  style={{ borderLeft: "4px solid #FF8000" }}
                  variants={fadeUp(0.55)}
                >
                  Changes Lives - And With Gift Aid Makes It Go Even Further
                </motion.h3>

                <motion.p className="mb-4 sm:text-lg text-black" variants={fadeUp(0.55)}>
                  <strong>ISHEP Foundation</strong> believes that no one should go hungry,
                  be subjected to discrimination, or struggle with poverty or hardship without a supporting
                  hand to offer some relief. Our mission is to create a more compassionate and inclusive society
                  where every young person has the opportunity to thrive.
                </motion.p>

                <motion.div
                  className="p-5 rounded-lg shadow-inner mb-6"
                  style={{ backgroundColor: "rgba(175,222,0,0.08)" }}
                  variants={imagePop(0.65)}
                >
                  <motion.h4 className="text-lg sm:text-xl font-bold" style={{ color: "#E70C80" }} variants={smallPop(0.45)}>
                    Charity Donations: Your Impact Amplified
                  </motion.h4>
                  <motion.p className="mb-3 text-sm sm:text-base text-black" variants={fadeUp(0.5)}>
                    By contributing to ISHEP, you’re investing in a brighter future. Your generosity delivers immediate relief, empowers short-term growth, and unlocks long-term opportunities for those who need it most.
                  </motion.p>
                  <motion.p className="font-semibold text-gray-800 text-sm sm:text-base" variants={fadeUp(0.5)}>
                    <strong>And with Gift Aid, your impact is even greater.</strong> For every £1 you donate, we receive an extra 25p from the government — at no extra cost to you.
                  </motion.p>

                  <motion.ul className="list-disc list-inside mt-2 font-medium text-sm sm:text-base" style={{ color: "#E70C80" }} variants={staggerContainer}>
                    <motion.li variants={smallPop(0.35)}>A donation of £30 becomes £37.50</motion.li>
                    <motion.li variants={smallPop(0.35)}>A donation of £50 becomes £62.50</motion.li>
                  </motion.ul>

                  <motion.p className="mt-3 text-xs sm:text-sm italic" variants={fadeUp(0.45)}>
                    It’s a simple way to give more without spending more.
                  </motion.p>
                </motion.div>

                <motion.h4 className="text-xl sm:text-2xl font-bold" style={{ color: "#FF8000" }} variants={fadeUp(0.55)}>
                  How Your Donation Makes a Difference
                </motion.h4>
                <motion.p className="mb-4 text-black" variants={fadeUp(0.55)}>
                  Every pound donated supports young people experiencing poverty. Here’s how your contribution helps:
                </motion.p>

                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-black" variants={staggerContainer}>
                  {giftCards.map((item, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
                      style={{ borderBottom: "4px solid #FF8000" }}
                      variants={directional(index % 2 === 0 ? "left" : "right", 0.5)}
                    >
                      <motion.p className="text-lg sm:text-xl font-bold mb-1" style={{ color: "#E70C80" }} variants={smallPop(0.4)}>{item.amount}</motion.p>
                      <motion.p className="text-sm sm:text-base" variants={fadeUp(0.45)}>{item.effect}</motion.p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p className="mt-6 text-base sm:text-lg font-semibold text-gray-800" variants={fadeUp(0.6)}>
                  Your kindness goes beyond charity—it gives hope, dignity, and opportunity to those who need it most. <strong>Can you help today?</strong>
                </motion.p>
              </motion.div>

              {/* Right column intentionally left flexible for visuals / secondary content */}
              <motion.div
                className="hidden lg:block lg:w-3/10"
                variants={directional("right", 0.6)}
              />
            </div>
          </motion.section>

          {/* Form Section */}
          <motion.form
            onSubmit={handleFormSubmit}
            className="w-full sm:w-11/12 lg:w-7xl mx-auto space-y-8 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
          >
            <motion.section className="bg-gray-50 p-4 rounded-lg" variants={fadeUp(0.6)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* left: image */}
                <motion.div className="flex justify-center md:justify-start" variants={imagePop(0.7)}>
                  <motion.img
                    src={images.skill2}
                    alt="Donation campaign"
                    className="w-full h-auto rounded-lg shadow-sm max-w-md object-cover"
                    whileHover={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* right: numeric input + set button */}
                <motion.div className="flex flex-col items-stretch justify-center space-y-4" variants={directional("right", 0.6)}>
                  <motion.label className="text-lg font-semibold text-gray-800" htmlFor="custom-donation" variants={smallPop(0.4)}>
                    Set your donation amount
                  </motion.label>

                  <motion.div className="col gap-2 w-full" variants={staggerContainer}>
                    <motion.input
                      id="custom-donation"
                      type="number"
                      inputMode="numeric"
                      pattern="[0-9]"
                      placeholder=" Enter amount in £"
                      value={otherAmount}
                      onChange={(e) => {
                        const v = e.target.value.replace(/[^0-9]/g, "");
                        setOtherAmount(v);
                      }}
                      className="w-full p-3 rounded-lg border border-gray-300 text-gray-500 text-xl focus:ring-2 focus:outline-none"
                      aria-label="Custom donation amount"
                      variants={smallPop(0.4)}
                    />

                    <motion.button
                      type="button"
                      onClick={handleSetAmountClick}
                      className="w-full md:w-auto px-4 py-2 rounded-lg font-bold text-lg mt-2 hover:cursor-pointer"
                      style={{
                        backgroundColor: "#E70C80",
                        color: "#fff",
                        boxShadow: "0 8px 20px rgba(231,12,128,0.12)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      variants={smallPop(0.45)}
                    >
                      Set Amount
                    </motion.button>
                  </motion.div>

                  <motion.p className="text-sm text-gray-600" variants={fadeUp(0.45)}>
                    After clicking <strong>Set Amount</strong>, this value will be used as your donation when you press <strong>DONATE NOW</strong>.
                  </motion.p>

                  <motion.button
                    type="submit"
                    className="w-full md:w-auto px-4 py-3 rounded-lg font-bold text-lg mt-2"
                    style={{
                      backgroundColor: "#E70C80",
                      color: "#ffffff",
                      border: "none"
                    }}
                    whileTap={{ scale: 0.98 }}
                    variants={imagePop(0.5)}
                  >
                    DONATE NOW
                  </motion.button>
                </motion.div>
              </div>
            </motion.section>

            {/* submit note */}
            <motion.div className="pt-4" variants={fadeUp(0.45)}>
              <motion.p className="text-center text-sm text-gray-500 mt-3">
                Your donation is secure and tax-deductible.
              </motion.p>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default WhyDonation;
