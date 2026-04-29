import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, MessageSquare, Send } from 'lucide-react';
import './Initialize.css';

const Initialize: React.FC = () => {
  return (
    <section id="about" className="initialize">
      <div className="cta-container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="cta-content"
        >
          <h2 className="cta-title">READY TO COMPILE?</h2>
          <p className="cta-text">
            Join the beta testing for the most sophisticated olfactory experience 
            ever engineered. Limited quantities available per release.
          </p>

          <div className="input-group">
            <input type="email" placeholder="ENTER_YOUR_EMAIL" />
            <button className="submit-btn">
              <Send size={18} />
              INITIALIZE
            </button>
          </div>
        </motion.div>
      </div>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand-section">
            <h2 className="footer-logo">XDEVELOPER</h2>
            <p className="footer-brand-desc">
              Engineering the future of luxury fragrance through 
              computational precision and olfactory logic.
            </p>
            <div className="social-links">
              <a href="#"><Globe size={20} /></a>
              <a href="#"><Mail size={20} /></a>
              <a href="#"><MessageSquare size={20} /></a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>COLLECTIONS</h4>
            <ul>
              <li><a href="#">Alpha Release</a></li>
              <li><a href="#">Kernel Essence</a></li>
              <li><a href="#">The Compiler</a></li>
              <li><a href="#">Logic Oud</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>SUPPORT</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Tracking</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>STUDIO</h4>
            <address>
              101 Silicon Valley Dr.<br />
              Suite 404 - "The Void"<br />
              California, US<br />
              <a href="mailto:sys@xdeveloper.io">sys@xdeveloper.io</a>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-info">
            <p>&copy; 2024 XDEVELOPER FRAGRANCE LABS. ALL RIGHTS RESERVED.</p>
            <p>V1.0.4-STABLE</p>
          </div>
          <div className="legal-links">
            <a href="#">PRIVACY_POLICY</a>
            <a href="#">TERMS_OF_SERVICE</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Initialize;
