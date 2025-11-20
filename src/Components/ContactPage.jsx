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

  const [alertData, setAlertData] = useState({
    show: false,
    type: "success",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // ⬅️ NEW

  const showAlert = (type, message) => {
    setAlertData({ show: true, type, message });

    setTimeout(() => {
      setAlertData({ show: false, type, message: "" });
    }, 3000);
  };

  const SHEET_URL = "https://sheetdb.io/api/v1/85gwysjf7z5xo";

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // prevent multi-click
    setIsSubmitting(true); // disable button

    const now = new Date();
    const dataToSend = {
      name: formData.name,
      phonenumber: formData.phonenumber,
      email: formData.email,
      requiredservice: formData.requiredservice.join(", "),
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

      await response.json();

      if (response.ok) {
        showAlert("success", "Message sent successfully!");
        setFormData({
          name: "",
          phonenumber: "",
          email: "",
          requiredservice: [],
          description: "",
          expectedbudget: "",
        });
      } else {
        showAlert("error", "Failed to send message!");
      }
    } catch (err) {
      console.error(err);
      showAlert("error", "Network issue. Try again!");
    }

    setIsSubmitting(false); // enable again
  };

  return (
    <div className="overflow-hidden relative">
      <Helmet>
        <title>Contact Praxire | Hire Us for Web Development, UI/UX, Marketing</title>
        <meta
          name="description"
          content="Contact Praxire for website development, UI/UX design, digital marketing, and video editing. Let's bring your ideas to life."
        />
        <meta
          name="keywords"
          content="Praxire contact, hire Praxire, web development agency, UI UX agency, video editing services, digital marketing agency"
        />
        <link rel="canonical" href="https://www.praxire.com/contact" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Praxire" />
        <meta
          property="og:description"
          content="Have a project in mind? Contact Praxire for premium development & creative services."
        />
        <meta property="og:url" content="https://www.praxire.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Praxire" />
        <meta property="og:image" content="https://www.praxire.com/seo/contact-banner.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Praxire" />
        <meta
          name="twitter:description"
          content="Get in touch with Praxire for web & creative services."
        />
        <meta name="twitter:image" content="https://www.praxire.com/seo/contact-banner.png" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Praxire",
            "description": "Get in touch with Praxire for professional web development, UI/UX design, and digital marketing services.",
            "url": "https://www.praxire.com/contact",
            "publisher": {
              "@type": "Organization",
              "name": "Praxire",
              "url": "https://www.praxire.com",
              "logo": "https://www.praxire.com/logo.png",
              "founders": [
                { "@type": "Person", "name": "Vishal G" },
                { "@type": "Person", "name": "Mohamed" }
              ]
            }
          }
        `}
        </script>
      </Helmet>

      <Navbar />

      {/* ALERT */}
      <AnimatePresence>
        {alertData.show && (
          <motion.div
            initial={{ y: -80, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -80, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`fixed top-5 left-1/2 z-[9999] -translate-x-1/2 px-6 py-3 rounded-lg shadow-xl text-white font-medium 
              ${alertData.type === "success" ? "bg-[#7A4BE7]" : "bg-red-500"}`}
          >
            {alertData.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
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
          Have a project in mind? We'd love to hear from you.
        </motion.p>
      </motion.div>

      {/* FORM */}
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
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-[23px] font-semibold text-[#333]">Send us a Message</h1>
            <p className="text-[#898991] text-[12px] md:text-[14px]">Fill out the form below.</p>
          </motion.div>

          {/* ALL INPUTS SAME EXACTLY AS YOUR CODE */}
          {[
            { name: "name", placeholder: "Your name" },
            { name: "phonenumber", placeholder: "Your phone number" },
            { name: "email", placeholder: "Your.email@example.com", type: "email" },
            { name: "requiredservice" },
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
                            setFormData((prev) =>
                              prev.requiredservice.includes(value)
                                ? {
                                  ...prev,
                                  requiredservice: prev.requiredservice.filter(
                                    (s) => s !== value
                                  ),
                                }
                                : {
                                  ...prev,
                                  requiredservice: [...prev.requiredservice, value],
                                }
                            );
                          }}
                          className="accent-[#895AF6]"
                        />
                        {service}
                      </label>
                    )
                  )}
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

          {/* UPDATED BUTTON */}
          <motion.button
            disabled={isSubmitting}
            whileHover={
              !isSubmitting
                ? {
                  scale: 1.02,
                  backgroundColor: "#6e42c1",
                  boxShadow: "0px 4px 15px rgba(137, 90, 246, 0.4)",
                  transition: { duration: 0.12, ease: "linear" } // 🔥 Faster
                }
                : {}
            }
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            animate={
              isSubmitting
                ? { scale: [1, 1.05, 1], opacity: [1, 0.7, 1] }
                : {}
            }
            transition={{ repeat: isSubmitting ? Infinity : 0, duration: 0.8 }}
            type="submit"
            className="bg-[#895AF6] w-full py-2 rounded-[8px] text-[16px] font-medium text-white duration-300 disabled:bg-[#bfa2fb] disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              ></motion.div>
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
