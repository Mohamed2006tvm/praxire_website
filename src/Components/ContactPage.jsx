import React, { useState } from "react";
import { motion } from "framer-motion";
import FooterPage from "./FooterPage";
import Navbar from "./Navbar";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    email: "",
    requiredservice: [], // Array for multiple services
    description: "",
    expectedbudget: "",
  });

  const SHEET_URL = "https://sheetdb.io/api/v1/85gwysjf7z5xo";

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();
    const dataToSend = {
      name: formData.name,
      phonenumber: formData.phonenumber,
      email: formData.email,
      requiredservice: formData.requiredservice.join(", "), // Convert array to comma-separated string
      description: formData.description,
      expectedbudget: formData.expectedbudget,
      date_iso: now.toISOString(),
      date_local: now.toLocaleString(),
    };

    try {
      const response = await fetch(SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [dataToSend] }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("✅ Form submitted successfully!");
        setFormData({
          name: "",
          phonenumber: "",
          email: "",
          requiredservice: [],
          description: "",
          expectedbudget: "",
        });
      } else {
        alert("❌ Failed to submit. Check console for details.");
      }
    } catch (err) {
      console.error("⚠️ Error connecting to SheetDB:", err);
      alert("⚠️ Network error — check console.");
    }
  };

  return (
    <div className="overflow-hidden">
      <Navbar />

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
          className="text-[12px] md:text-[15px] lg:text-[19px] md:[400px] lg:w-[670px] text-[#74747D]"
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
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-[23px] font-semibold text-[#333]">
              Send us a Message
            </h1>
            <p className="text-[#898991] text-[12px] md:text-[14px]">
              Fill out the form below and we'll get back to you shortly.
            </p>
          </motion.div>

          {[
            { name: "name", placeholder: "Your name" },
            { name: "phonenumber", placeholder: "Your phone number" },
            { name: "email", placeholder: "Your.email@example.com", type: "email" },
            { name: "requiredservice" }, // checkbox handled separately
            { name: "description", placeholder: "Tell us about your project..." },
            { name: "expectedbudget", placeholder: "Expected budget" },
          ].map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex flex-col gap-2"
            >
              <h4 className="font-medium text-[14px] capitalize">
                {field.name} {field.name !== "description" && "*"}
              </h4>

              {field.name === "requiredservice" ? (
                <div className="flex flex-col gap-1">
                  {["Web Development", "UI/UX", "Video Editing", "Digital Marketing"].map((service) => (
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
                                requiredservice: prev.requiredservice.filter((s) => s !== value),
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
                  ))}
                </div>
              ) : field.name !== "description" ? (
                <motion.input
                  whileFocus={{ scale: 1.03, borderColor: "#895AF6" }}
                  transition={{ type: "spring", stiffness: 200 }}
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.name !== "description"}
                  className="p-[7px] border-[2px] border-[#EEEEF0] hover:border-[#895AF6] w-full rounded-[12px] text-[14px] focus:outline-[#895AF6]"
                />
              ) : (
                <motion.textarea
                  whileFocus={{ scale: 1.03, borderColor: "#895AF6" }}
                  transition={{ type: "spring", stiffness: 200 }}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="p-[7px] border-[2px] border-[#EEEEF0] hover:border-[#895AF6] w-full rounded-[12px] text-[14px] focus:outline-[#895AF6] min-h-[70px] resize-y"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#6e42c1",
              boxShadow: "0px 4px 15px rgba(137, 90, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            className="bg-[#895AF6] w-full py-2 rounded-[8px] text-[16px] font-medium text-white duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>

      <FooterPage />
    </div>
  );
};

export default ContactPage;
