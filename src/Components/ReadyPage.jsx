import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ReadyPage = () => {
  return (
    <div className="sm:w-[90%] md:w-[1400px] w-[100%] m-auto flex justify-center items-center py-20 px-4">
      <motion.div
        className="text-center bg-gradient-to-b from-[#f8f5ff] to-[#ffffff] border border-[#e1d9ff] rounded-2xl shadow-lg py-16 px-8 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading Animation */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Start Your Project?
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.p
          className="text-gray-600 text-lg max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let’s turn your ideas into reality. Our team is ready to bring your vision
          to life with cutting-edge solutions.
        </motion.p>

        {/* Button Hover Animation */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/Service">
            <motion.button
              className="bg-[#895AF6] text-white px-8 py-3 rounded-xl text-base font-medium hover:shadow-lg hover:bg-[#7A4BC0] transition-all duration-300"
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ReadyPage;
