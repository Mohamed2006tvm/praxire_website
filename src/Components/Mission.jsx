import React from "react";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <motion.div
      className="bg-[#FCFCFC]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="sm:w-[100%] md:w-[1400px] w-[90%] m-auto text-black flex flex-col justify-center items-center space-y-7 text-center md:pt-[100px] md:pb-[70px] sm:py-[50px] py-[30px] overflow-hidden">
        
        {/* Animated Heading */}
        <motion.h1
          className="text-[35px] font-bold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier curve
          }}
          whileHover={{ scale: 1.03 }}
        >
          Our Mission
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="md:w-[900px] text-[#939396] sm:text-[20px] text-[16px] sm:w-[90%] w-[90%] sm:text-center sm:leading-[35px] text-left leading-[25px]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          At Praxire, our mission is to empower businesses and individuals by
          transforming their ideas into cutting-edge digital solutions. We are
          committed to delivering exceptional web development, mobile
          applications, and innovative technologies that drive growth, enhance
          user experiences, and exceed client expectations. Through
          collaboration, creativity, and a relentless pursuit of excellence, we
          strive to be a trusted partner in our clients' digital journeys.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Mission;
