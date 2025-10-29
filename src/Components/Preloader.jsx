import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <motion.div
        className="w-16 h-16 border-[4px] border-transparent border-t-[#8F62F6] border-l-[#8F62F6] rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.1,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

export default Preloader;
