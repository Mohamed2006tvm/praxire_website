import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FooterPage from "./FooterPage";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    email: "",
    requiredservice: [],
    description: "",
    expectedbudget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  // ✅ Your SheetDB API endpoint
  const SHEET_URL = "https://sheetdb.io/api/v1/85gwysjf7z5xo";

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ✅ Get correct IST Date & Time (human-readable)
    const now = new Date();
    const istString = now.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const date_iso = now.toISOString(); // still store original UTC for reference

    const dataToSend = {
      name: formData.name,
      phonenumber: formData.phonenumber,
      email: formData.email,
      requiredservice: formData.requiredservice.join(", "),
      description: formData.description,
      expectedbudget: formData.expectedbudget,
      date_iso,
      date_local: istString, // ✅ beautiful formatted IST time
    };

    try {
      const response = await fetch(SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [dataToSend] }),
      });

      if (response.ok) {
        setAlert({
          show: true,
          type: "success",
          message: "✅ Message sent successfully!",
        });
        setFormData({
          name: "",
          phonenumber: "",
          email: "",
          requiredservice: [],
          description: "",
          expectedbudget: "",
        });
      } else {
        setAlert({
          show: true,
          type: "error",
          message: "❌ Failed to send message. Please try again.",
        });
      }
    } catch (err) {
      setAlert({
        show: true,
        type: "error",
        message: "⚠️ Network error — please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setAlert({ show: false, type: "", message: "" }), 4000);
    }
  };

  return (
    <div className="overflow-hidden relative">

      <Helmet>
        <title>Contact Us - Praxire</title>
        <meta name="description" content="Get in touch with Praxire for expert digital solutions. Whether you have a project in mind or need more information about our services, we're here to help!" />
        <link rel="canonical" href="https://praxire.com/contact" />
      </Helmet>

      <Navbar />

      {/* ALERT POPUP */}
      <AnimatePresence>
        {alert.show && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className={`fixed top-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg z-[9999] text-white text-sm font-medium ${
              alert.type === "success"
                ? "bg-gradient-to-r from-green-500 to-emerald-600"
                : "bg-gradient-to-r from-red-500 to-pink-600"
            }`}
          >
            {alert.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col text-center items-center mt-[70px] gap-[10px] w-[90%] mx-auto"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[38px] md:text-[48px] lg:text-[52px] font-bold"
        >
          Get in <span className="text-[#895AF6]">Touch</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[12px] md:text-[15px] lg:text-[19px] lg:w-[670px] text-[#74747D]"
        >
          Have a project in mind? We'd love to hear from you. Send us a message
          and we'll respond as soon as possible.
        </motion.p>
      </motion.div>

      {/* FORM SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto mt-[30px] md:mt-[70px] mb-[70px] flex flex-col justify-center items-center"
      >
        <motion.form
          onSubmit={handleSubmit}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="border-[2px] p-[20px] border-[#E6E6E6] rounded-[10px] gap-[20px] flex flex-col lg:w-[500px] shadow-xl bg-white backdrop-blur-sm"
        >
          <h1 className="text-[23px] font-semibold text-[#333]">
            Send us a Message
          </h1>
          <p className="text-[#898991] text-[12px] md:text-[14px]">
            Fill out the form below and we'll get back to you shortly.
          </p>

          {/* Name */}
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-[14px]">Name *</h4>
            <motion.input
              whileFocus={{ scale: 1.03, borderColor: "#895AF6" }}
              transition={{ type: "spring", stiffness: 200 }}
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-[10px] border-[2px] border-[#EEEEF0] hover:border-[#895AF6] w-full rounded-[12px] text-[14px] focus:outline-[#895AF6]"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-[14px]">Phone Number *</h4>
            <motion.input
              whileFocus={{ scale: 1.03, borderColor: "#895AF6" }}
              transition={{ type: "spring", stiffness: 200 }}
              type="tel"
              name="phonenumber"
              placeholder="+91 98765 43210"
              value={formData.phonenumber}
              onChange={handleChange}
              required
              className="p-[10px] border-[2px] border-[#EEEEF0] hover:border-[#895AF6] w-full rounded-[12px] text-[14px] focus:outline-[#895AF6] tracking-wide"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-[14px]">Email *</h4>
            <motion.input
              whileFocus={{ scale: 1.03, borderColor: "#895AF6" }}
              transition={{ type: "spring", stiffness: 200 }}
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-[10px] border-[2px] border-[#EEEEF0] hover:border-[#895AF6] w-full rounded-[12px] text-[14px] focus:outline-[#895AF6]"
            />
          </div>

          {/* Required Service */}
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-[14px]">Required Service *</h4>
            <div className="flex flex-col gap-1">
              {["Web Development", "UI/UX", "Video Editing", "Digital Marketing"].map(
                (service) => (
                  <label key={service} className="flex items-center gap-2 text-[14px]">
                    <input
                      type="checkbox"
                      name="requiredservice"
                      value={service}
                      checked={formData.requiredservice.includes(service)}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData((prev) => {
                          if (prev.requiredservice.includes(value)) {
                            return {
                              ...prev,
                              requiredservice: prev.requiredservice.filter(
                                (s) => s !== value
                              ),
                            };
                          } else {
                            return {
                              ...prev,
                              requiredservice: [...prev.requiredservice, value],
                            };
                          }
                        });
                      }}
                      className="accent-[#895AF6]"
                    />
                    {service}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-[14px]">Description</h4>
            <motion.textarea
              whileFocus={{ scale: 1.03, borderColor: "#895AF6" }}
              transition={{ type: "spring", stiffness: 200 }}
              name="description"
              placeholder="Tell us about your project..."
              value={formData.description}
              onChange={handleChange}
              className="p-[10px] border-[2px] border-[#EEEEF0] hover:border-[#895AF6] w-full rounded-[12px] text-[14px] focus:outline-[#895AF6] min-h-[70px] resize-y"
            />
          </div>

          {/* Budget */}
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-[14px]">Expected Budget</h4>
            <motion.input
              whileFocus={{ scale: 1.03, borderColor: "#895AF6" }}
              transition={{ type: "spring", stiffness: 200 }}
              type="text"
              name="expectedbudget"
              placeholder="Enter your budget"
              value={formData.expectedbudget}
              onChange={handleChange}
              className="p-[10px] border-[2px] border-[#EEEEF0] hover:border-[#895AF6] w-full rounded-[12px] text-[14px] focus:outline-[#895AF6]"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={!isSubmitting && { scale: 1.05 }}
            whileTap={!isSubmitting && { scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 rounded-[8px] text-[16px] font-medium text-white duration-300 ${
              isSubmitting
                ? "bg-gradient-to-r from-[#C1A3FF] to-[#A67CFF] cursor-not-allowed"
                : "bg-[#895AF6] hover:bg-[#6e42c1]"
            }`}
          >
            {isSubmitting ? (
              <motion.div
                className="flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-5 h-5 border-[3px] border-t-transparent border-white rounded-full"
                />
                <span>Sending...</span>
              </motion.div>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>
      </motion.div>

      <FooterPage />
    </div>
  );
};

export default ContactPage;
