import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // const [text, setText] = useState("");
  // const [loopIndex, setLoopIndex] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);

  // const words = ["Praxire", "PX"];
  // const typingSpeed = isDeleting ? 80 : 150;
  // const pauseTime = 1000;

  // useEffect(() => {
  //   const handleResize = () => setIsMobile(window.innerWidth <= 768);
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // // ✨ Typing animation (your previous one)
  // useEffect(() => {
  //   const current = loopIndex % words.length;
  //   const fullText = words[current];

  //   if (!isDeleting && text === fullText) {
  //     setTimeout(() => setIsDeleting(true), pauseTime);
  //   } else if (isDeleting && text === "") {
  //     setIsDeleting(false);
  //     setLoopIndex(loopIndex + 1);
  //   }

    // const timeout = setTimeout(() => {
    //   setText((prev) =>
    //     isDeleting
    //       ? fullText.substring(0, prev.length - 1)
    //       : fullText.substring(0, prev.length + 1)
    //   );
    // }, typingSpeed);

    // return () => clearTimeout(timeout);
  // }, [text, isDeleting, loopIndex]);

  const activeLinkClasses = "text-[#8F62F6] font-bold";
  const defaultLinkClasses =
    "text-[#5E5E64] font-medium hover:text-[#8F62F6] transition-all duration-200";

  return (
    

    <header className="sticky top-0 z-50 bg-[#FBFBFC] shadow-sm">
      <div className="max-w-[1400px] w-[90%] mx-auto py-4 flex justify-between items-center relative">
        {/* 🌟 Brand Text (kept original animation + glow) */}
        <h1 className="glow-text text-[26px] font-extrabold tracking-wide">
          {/* {text} */}
          <span className="">Praxire</span>
          
        </h1>

        {/* 📱 Animated Mobile Menu Button (new feature added) */}
        {isMobile && (
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="md:hidden block"
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        )}

        {/* 🔗 Navigation Links */}
        <nav
          className={
            isMobile
              ? `absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`
              : "flex items-center space-x-7"
          }
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeLinkClasses : defaultLinkClasses
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeLinkClasses : defaultLinkClasses
            }
          >
              About
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive ? activeLinkClasses : defaultLinkClasses
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeLinkClasses : defaultLinkClasses
            }
          >
            Contact
          </NavLink>
          <Link
            to="/contact"
            className="bg-[#895AF6] text-white px-5 py-2 rounded-xl text-base font-medium hover:shadow-lg hover:bg-[#7A4BC0] transition-all duration-300"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
