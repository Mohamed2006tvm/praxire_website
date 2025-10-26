import React, { useState } from "react";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const App = () => {
  const cards = [
    {
      icon: <CircleCheck className="w-8 h-8 text-[#895AF6]" />,
      title: "Innovation First",
      description:
        "We leverage cutting-edge technologies to deliver future-proof solutions.",
    },
    {
      icon: <CircleCheck className="w-8 h-8 text-[#895AF6]" />,
      title: "Client-Centric",
      description:
        "Your success is our priority. We're committed to exceeding expectations.",
    },
    {
      icon: <CircleCheck className="w-8 h-8 text-[#895AF6]" />,
      title: "Quality Driven",
      description:
        "Excellence in every line of code, every pixel, and every interaction.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.25 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -6,
      boxShadow: "0px 10px 35px rgba(137, 90, 246, 0.15)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="text-center sm:w-[90%] md:w-[1400px] w-[100%] m-auto pt-[80px] pb-[80px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1
        className="md:text-[50px] text-[30px] font-bold"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        What Sets Us Apart
      </motion.h1>

      <motion.div
        className="flex text-start space-x-1 gap-8 mt-10 mb-20 sm:flex-row flex-col px-4"
        variants={containerVariants}
      >
        {cards.map((card, index) => (
          <TypingCard key={index} {...card} cardVariants={cardVariants} />
        ))}
      </motion.div>
    </motion.div>
  );
};

// Typing card without width shrink
const TypingCard = ({ icon, title, description, cardVariants }) => {
  const [displayText, setDisplayText] = useState(description);
  const [isTyping, setIsTyping] = useState(false);

  const handleHoverStart = () => {
    if (isTyping) return;

    setIsTyping(true);
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(description.slice(0, i));
      i++;
      if (i > description.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 20);
  };

  return (
    <motion.div
      className="border-1 rounded-[16px] py-6 px-7 border-[#D3D3D8] bg-white hover:border-[#895AF6] transition-all duration-200 cursor-pointer w-full sm:w-[350px] md:w-[400px] flex-shrink-0"
      variants={cardVariants}
      whileHover="hover"
      onHoverStart={handleHoverStart}
    >
      <div className="my-4 w-[40px] h-[40px] flex">{icon}</div>
      <h2 className="font-bold text-[20px] pb-3">{title}</h2>
      <div className="overflow-hidden min-h-[60px]">
        <motion.p
          className="text-[15px] md:text-[16px] text-[#74747D] leading-[26px]"
          initial={{ opacity: 1 }}
        >
          {displayText}
          {isTyping && <span className="animate-pulse text-[#895AF6]">|</span>}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default App;
