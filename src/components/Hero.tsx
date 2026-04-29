import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  function handleMouse(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function resetMouse() {
    x.set(0);
    y.set(0);
  }

  return (
    <section id="hero" className="hero-modern" onMouseMove={handleMouse} onMouseLeave={resetMouse}>
      <div className="hero-noise"></div>
      
      {/* Organic Background Elements */}
      <div className="organic-streams">
        <div className="stream stream-1"></div>
        <div className="stream stream-2"></div>
      </div>

      <div className="floating-flora">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -40, 0],
              rotate: [0, 10, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className={`flora flora-${i+1}`}
          />
        ))}
      </div>

      <div className="hero-container">
        {/* Left Side: Branding & Intelligence */}
        <div className="hero-brand-side">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="brand-intel"
          >
            <span className="intel-label">SYNTHETIC_ORGANICS_V1</span>
            <div className="intel-line"></div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="main-heading"
          >
            X<span className="outline">DEVELOPER</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="hero-tagline-modern"
          >
            <p>// SOURCE_NOTES: [BERGAMOT, OUD, LOGIC_STEEL]</p>
            <h3>ENGINEERING THE <span className="highlight">IMPOSSIBLE ESSENCE</span>.</h3>
          </motion.div>

          {/* New CSS-Sculpted Bottle (The Vessel) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="css-vessel-preview"
          >
            <div className="vessel-core">
              <div className="vessel-liquid"></div>
              <div className="vessel-glare"></div>
            </div>
            <span className="vessel-label">CORE_SCULPT</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="hero-cta-group"
          >
            <button className="cta-modern primary">INITIALIZE_SEQUENCE</button>
            <button className="cta-modern ghost">VIEW_FLORA_DATA</button>
          </motion.div>
        </div>

        {/* Right Side: The Sculpture (Product) */}
        <div className="hero-visual-side">
          <div className="visual-stage">
            <motion.div 
              style={{ 
                rotateX, 
                rotateY, 
                perspective: 1000,
                transformStyle: "preserve-3d"
              }}
              className="product-pedestal"
            >
              <div className="holographic-overlay"></div>
              <motion.img 
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800" 
                alt="Xdeveloper Essence" 
                className="hero-sculpture-img"
              />
              <div className="product-reflection"></div>
            </motion.div>

            {/* Abstract Data Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -100],
                  opacity: [0, 0.5, 0],
                  x: [0, (i % 2 === 0 ? 30 : -30)]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear"
                }}
                className="data-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: "10%"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hero-footer-intel">
        <div className="intel-item">
          <span className="label">TOP_NOTES</span>
          <span className="value">STEEL_BERGAMOT</span>
        </div>
        <div className="intel-item">
          <span className="label">STABILITY</span>
          <span className="value">99.98%</span>
        </div>
        <div className="intel-item">
          <span className="label">RELEASE</span>
          <span className="value">STABLE_V1</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
