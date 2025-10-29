import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Parent & child animation settings
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const MainPage = () => {
  const heading = "Transform Your Vision Into Digital Reality";

  return (
    <motion.div
      className="sm:w-[90%] md:w-[1400px] w-[100%] m-auto overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="pt-[100px] pb-[100px] bg-[#fff] text-black flex flex-col justify-center items-center space-y-7">

        {/* Premium Heading Animation */}
        <motion.h1
          className="md:text-[70px] sm:text-[35px] text-[35px] font-bold sm:w-[90%] md:w-[60%] w-[90%] text-center md:leading-[70px]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {heading.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={item}
              className={`inline-block ${
                word === "Digital" || word === "Reality" ? "text-[#8F62F6]" : ""
              } mr-2`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Smooth Paragraph Animation */}
        <motion.p
          className="md:text-[25px] sm:text-[20px] text-[#939396] md:w-[50%] w-[90%] text-center leading-[35px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Praxire delivers innovative web development, app creation, and digital
          solutions that drive growth and exceed expectations.
        </motion.p>

        {/* Buttons with Premium Hover */}
        <motion.div
          className="flex space-x-4 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {/* Get Started Button */}
          <motion.div whileHover={{ scale: 1.07, boxShadow: "0px 6px 25px rgba(143, 98, 246, 0.45)" }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="bg-[#8F62F6] px-[35px] py-[12px] text-[#fff] rounded-[12px] font-semibold shadow-md transition-all duration-300 ease-in-out text-[14px]"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Explore Services Button */}
          <motion.div whileHover={{ scale: 1.07, boxShadow: "0px 6px 25px rgba(143, 98, 246, 0.45)" }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/service"
              className="px-[35px] py-[10px] text-[#000] rounded-[12px] border border-[#dddde0] text-[14px] transition-all duration-300 ease-in-out hover:bg-[#8F62F6] hover:text-[#fff]"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default MainPage;
