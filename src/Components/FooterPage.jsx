import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';

const FooterPage = () => {
  return (
    <div className="bg-[#FBFBFC]">
      {/* Main Footer Section */}
      <div className="sm:w-[90%] md:w-[1400px] w-[100%] mx-auto pt-[50px] mt-[50px] pb-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-[10px] lg:gap-[10px] gap-[20px] text-center lg:text-left pb-[50px]">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[25px] text-[#895AF6] font-bold">Praxire</h2>
            <p className="text-[14px] pt-[15px] text-[#71717A]">
              Transforming ideas into digital excellence through innovative web solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-medium pb-[20px]">Quick Links</h3>
            <ul className="flex flex-col gap-[10px] text-[#71717A] text-[14px]">
              <Link to="/" className="hover:text-[#895AF6] transition-colors duration-300">Home</Link>
              <Link to="/Service" className="hover:text-[#895AF6] transition-colors duration-300">Services</Link>
              <Link to="/Contact" className="hover:text-[#895AF6] transition-colors duration-300">Contact</Link>
            </ul>
          </motion.div>

          {/* Legal Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-medium pb-[20px]">Legal</h3>
            <h3 className="text-[#71717A] text-[14px] hover:text-[#895AF6] transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </h3>
            <h3 className="text-[#71717A] text-[14px] pt-[10px] hover:text-[#895AF6] transition-colors duration-300 cursor-pointer">
              Terms of Service
            </h3>
          </motion.div>

          {/* Subscribe Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-medium pb-[20px]">Stay Updated</h3>
            <motion.input
              type="text"
              className="p-[7px] border-[1px] border-[#EEEEF0] hover:border-[#895AF6] bg-[#fff] w-[270px] md:w-[270px] rounded-[12px] text-[14px] focus:outline-none transition-all duration-300"
              placeholder="Your email"
              whileFocus={{ scale: 1.02, boxShadow: '0 0 8px rgba(137,90,246,0.5)' }}
            />
            <motion.div>
              <motion.button
                className="bg-[#895AF6] text-white py-2 px-[100px] md:px-[100px] rounded-[8px] mt-[7px] font-medium shadow-md"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 8px 15px rgba(137,90,246,0.4)',
                  borderRadius: '14px'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <hr className="text-[#ECECEE]" />
      </div>

      {/* Bottom Bar */}
      <div className="sm:w-[90%] md:w-[1400px] w-[100%] flex md:flex-row flex-col md:text-left text-center justify-between mx-auto pb-[50px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-[#74747D] text-[14px]">
            © 2025 Praxire. All rights reserved.
          </h3>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex gap-[15px] text-[#74747D] text-center justify-center pt-[20px] md:pt-[0px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.a href="#" whileHover={{ scale: 1.2, color: '#895AF6' }}>
            <LinkedinIcon />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.2, color: '#895AF6' }}>
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/praxire_official?igsh=eGxtbjMwdWJpY2k1"
            whileHover={{ scale: 1.2, color: '#895AF6' }}
          >
            <InstagramIcon />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.2, color: '#895AF6' }}>
            <FacebookIcon />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default FooterPage;
