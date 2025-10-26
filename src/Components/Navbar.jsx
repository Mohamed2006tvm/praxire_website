import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen resize to switch between mobile and desktop views
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const activeLinkClasses = "text-[#8F62F6] font-bold";
  const defaultLinkClasses = "text-[#5E5E64] font-medium hover:text-[#8F62F6] transition-all duration-200";
  return (
    <header className="sticky top-0 z-50 bg-[#FBFBFC] shadow-sm">
      <div className=" sm:w-[90%] md:w-[1400px] w-[90%] mx-auto py-4 flex justify-between items-center relative">
        <h1 className="text-[#895AF6] text-[23px] font-bold">Praxire</h1>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="md:hidden block"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        )}

        {/* Navigation Links */}
        <nav
          className={
            isMobile
              ? `absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`
              : 'flex items-center space-x-7'
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
            to="/Service"
            className={({ isActive }) =>
              isActive ? activeLinkClasses : defaultLinkClasses
            }
          >
            Services
          </NavLink>

           <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? activeLinkClasses : defaultLinkClasses
            }
          >
            Contact
          </NavLink>
          <Link to="/Contact"><a
            href="#"
            className="bg-[#895AF6] text-white px-5 py-2 rounded-xl text-base font-medium hover:shadow-lg  hover:bg-[#7A4BC0] transition-all duration-300"
          >
            Get Started
          </a></Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
