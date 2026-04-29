import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="navbar"
      >
        <div className="nav-container">
          <div className="logo">
            <Cpu className="logo-icon" />
            <span>XDEVELOPER</span>
          </div>

          {/* Desktop Links */}
          <div className="nav-links">
            <a href="#hero">Essence</a>
            <a href="#products">Repository</a>
            <a href="#notes">Architecture</a>
            <button className="nav-cta">Initialize</button>
          </div>

          {/* Mobile Toggle Button */}
          <button className="mobile-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="mobile-menu-overlay"
          >
            <div className="mobile-links">
              <a href="#hero" onClick={toggleMenu}>Essence</a>
              <a href="#products" onClick={toggleMenu}>Repository</a>
              <a href="#notes" onClick={toggleMenu}>Architecture</a>
              <button className="nav-cta mobile">Initialize</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
