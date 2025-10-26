import React from "react";
import {
    ArrowRight,
    CodeIcon,
    Palette,
    Smartphone,
    TrendingUp,
    Video,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import FooterPage from "./FooterPage";

const ServicePage = () => {
    const services = [
        {
            icon: <CodeIcon className="w-[30px] h-[30px] text-[#895AF6]" />,
            title: "Web Development",
            description:
                "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
            lists: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure & Scalable"],
        },
        {
            icon: <Smartphone className="w-[30px] h-[30px] text-[#895AF6]" />,
            title: "App Development",
            description:
                "Native and cross-platform mobile applications that engage users and drive business growth.",
            lists: ["iOS & Android", "Cross-Platform", "Cloud Integration", "Push Notifications"],
        },
        {
            icon: <Palette className="w-[30px] h-[30px] text-[#895AF6]" />,
            title: "UI/UX Design",
            description:
                "Beautiful, intuitive interfaces designed with your users in mind, combining aesthetics with functionality.",
            lists: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
        },
        {
            icon: <Video className="w-[30px] h-[30px] text-[#895AF6]" />,
            title: "Video Editing",
            description:
                "Professional video editing services to bring your vision to life with stunning visuals and seamless storytelling.",
            lists: ["Color Grading", "Motion Graphics", "Sound Design", "Post-Production"],
        },
        {
            icon: <TrendingUp className="w-[30px] h-[30px] text-[#895AF6]" />,
            title: "Digital Marketing",
            description:
                "Data-driven marketing strategies to amplify your brand presence and drive measurable results.",
            lists: ["SEO & SEM", "Social Media", "Content Marketing", "Analytics"],
        },
    ];

    const devsteps = [
        { number: 1, name: "Discovery" },
        { number: 2, name: "Design" },
        { number: 3, name: "Development" },
        { number: 4, name: "Delivery" },
    ];

    // Framer Motion Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    };

    return (
        <>
            <Navbar />
            <motion.div
                className="w-[90%] mx-auto mt-[30px] md:mt-[40px]"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                {/* HERO SECTION */}
                <motion.div
                    className="flex flex-col text-center items-center gap-[10px]"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-[38px] md:text-[48px] lg:text-[58px] font-bold">
                        Our <span className="text-[#895AF6]">Services</span>
                    </h1>
                    <p className="text-[12px] md:text-[15px] lg:text-[18px] lg:w-[664px] text-[#74747D]">
                        Comprehensive digital solutions tailored to transform your business
                        and exceed your expectations.
                    </p>
                </motion.div>

                {/* SERVICES GRID */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 mt-[40px] md:mt-[60px] lg:mt-[100px]"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 12px 25px rgba(137,90,246,0.15)",
                            }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="border-[2px] border-[#E4E4E7] p-[25px] rounded-[12px] bg-white duration-300 group relative overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-[#f7f3ff] to-[#ffffff] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            ></motion.div>

                            <div className="relative z-10">
                                <motion.div
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    className="p-[12px] rounded-[12px] bg-[#F3EEFE] inline-block group-hover:bg-[#E7DEFD]"
                                >
                                    {service.icon}
                                </motion.div>

                                <h2 className="text-[22px] font-semibold mt-4 pt-[8px]">
                                    {service.title}
                                </h2>
                                <p className="text-[#74747D] mt-2">{service.description}</p>
                                <ul className="flex flex-col gap-[6px] pt-[12px] list-disc marker:text-[#895AF6] list-inside mt-4 text-[14px] text-[#869BB6]">
                                    {service.lists.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <motion.div
                                    whileHover={{ backgroundColor: "#895AF6", color: "#fff" }}
                                    className="flex items-center justify-center font-medium mt-[25px] border border-[#895AF6] text-[#895AF6] cursor-pointer rounded-[8px] w-full h-[45px] transition-all duration-300"
                                >
                                    <Link to="/Contact" className="flex gap-[10px] items-center">
                                        Contact Us <ArrowRight size={18} />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* AGILE SECTION */}
            <motion.div
                className="pt-[70px] mt-[50px] bg-[#FBFBFC] w-full mx-auto"
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                viewport={{ once: true }}
            >
                <motion.div
                    variants={fadeUp}
                    className="flex flex-col items-center justify-center text-center w-[90%] mx-auto"
                >
                    <h1 className="text-[#22222A] md:text-[34px] text-[24px] font-bold">
                        Our Agile Approach
                    </h1>
                    <p className="text-[12px] md:text-[18px] text-[#74747D] pt-[10px] md:pt-[18px] md:w-[680px]">
                        We follow an agile methodology to ensure rapid delivery, flexibility, and continuous improvement throughout your project lifecycle.
                    </p>
                </motion.div>

                <div className="md:flex items-center justify-around w-[90%] mx-auto mt-[30px] pb-[50px]">
                    {devsteps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            whileHover={{ y: -5, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 150 }}
                            className="flex flex-col gap-[5px] md:gap-[10px] items-center w-full mt-[10px] md:mt-[50px]"
                        >
                            <div className="bg-[#895AF6] p-4 w-[50px] h-[50px] flex items-center justify-center rounded-full shadow-md">
                                <span className="text-[18px] font-bold text-white">
                                    {step.number}
                                </span>
                            </div>
                            <span className="font-medium text-[#22222A]">{step.name}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* CTA SECTION */}
            <motion.div
                className="flex flex-col gap-[20px] items-center text-center justify-center mt-[70px] pb-[100px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="md:text-[34px] text-[24px] font-bold text-[#22222A]">
                    Ready to Get Started?
                </h1>
                <p className="md:text-[18px] text-[12px] text-[#74747D]">
                    Let's discuss how we can help bring your vision to life with our expert services.
                </p>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Link to="/Contact"><button className="bg-[#895AF6] text-white py-3 px-8 rounded-md text-[14px] font-medium hover:shadow-2xl transition-all duration-300 hover:bg-[#7A4BC0]">
                        Schedule a Consultation
                    </button></Link>
                </motion.div>
            </motion.div>

            <FooterPage />
        </>
    );
};

export default ServicePage;
