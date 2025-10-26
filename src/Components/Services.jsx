import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, CodeIcon, Palette, Smartphone, TrendingUp, Video } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    { icon: <CodeIcon />, title: "Web Development", description: "Modern, responsive websites" },
    { icon: <Smartphone />, title: "App Development", description: "Native and cross-platform apps" },
    { icon: <Palette />, title: "UI/UX Design", description: "Beautiful, intuitive interface" },
    { icon: <Video />, title: "Video Editing", description: "Professional video editing services" },
    { icon: <TrendingUp />, title: "Digital Marketing", description: "Comprehensive digital marketing solutions" },
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 10, rotateY: -10, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      rotateY: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="bg-[#FBFBFC] pt-5">
      <div className="text-center sm:w-[90%] md:w-[1400px] w-[100%] m-auto mx-auto mt-[30px] md:mt-[40px] pb-[60px]">
        <motion.div
          className="flex flex-col text-center items-center gap-[10px]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[38px] md:text-[48px] lg:text-[58px] font-bold">
            Our <span className="text-[#895AF6]">Services</span>
          </h1>
          <p className="md:text-[18px] text-[14px] text-[#555555] md:w-[50%] w-[90%]">
            We offer a wide range of services to help your business thrive in the digital world.
          </p>
        </motion.div>

        <motion.div
          className="w-[90%] sm:w-[100%] mx-auto grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-[30px] mt-[40px] mb-[60px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <InteractiveCard key={index} {...service} variants={cardVariants} />
          ))}
        </motion.div>

        <div>
          <Link to="/Service">
            <motion.h2
              className="inline-flex justify-center items-center py-3 mx-auto gap-[12px] bg-[#fff] px-[30px] border-[2px] border-[#E4E4E7] text-[14px] rounded-[12px] hover:bg-[#895AF6] hover:text-[#fff] transition-all duration-300 group cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(137,90,246,0.25)" }}
              transition={{ duration: 0.3 }}
            >
              View All Services <ArrowRight />
            </motion.h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Interactive Card with 3D tilt and premium hover
const InteractiveCard = ({ icon, title, description, variants }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map cursor to rotation
  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const posX = (e.clientX - rect.left) / rect.width; // 0 -> 1
    const posY = (e.clientY - rect.top) / rect.height; // 0 -> 1
    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      className="border-1 border-solid border-[#74747D] rounded-[15px] px-[20px] py-[35px] group flex flex-col items-center text-center bg-white cursor-pointer"
      variants={variants}
      whileHover={{ scale: 1.07, boxShadow: "0px 12px 40px rgba(137,90,246,0.2)" }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="bg-[#F3EEFE] group-hover:bg-[#E7DEFD] w-[50px] h-[50px] flex justify-center items-center rounded-[10px] mb-[15px]"
        whileHover={{ scale: 1.15, rotate: 10 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      <motion.h2
        className="text-[20px] font-bold mb-[10px]"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-[#555555] text-[14px]"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="absolute top-0 left-0 w-full h-full rounded-[15px] pointer-events-none bg-gradient-to-r from-[#895AF6]/10 via-[#E7DEFD]/20 to-[#895AF6]/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
      />
    </motion.div>
  );
};

export default Services;
