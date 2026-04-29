import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Globe, Zap } from 'lucide-react';
import './Synthesis.css';

const Synthesis: React.FC = () => {
  const [nodes, setNodes] = useState(12402);

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="synthesis" className="synthesis-section">
      <div className="synthesis-container">
        {/* Left Side: Stats & Followers */}
        <div className="synthesis-stats">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="stat-box"
          >
            <div className="stat-header">
              <Globe size={18} className="icon-gold" />
              <span>GLOBAL_NETWORK_STATUS</span>
            </div>
            <h2 className="stat-value">{nodes.toLocaleString()}</h2>
            <p className="stat-label">ACTIVE_SIGNATURE_NODES</p>
            <div className="network-visual">
              <div className="pulse-dot"></div>
              <div className="pulse-ring"></div>
            </div>
          </motion.div>

          <div className="live-feed">
            <div className="feed-header">
              <Activity size={14} />
              <span>LIVE_SYNTHESIS_LOGS</span>
            </div>
            <div className="feed-items">
              <p><span>[18:04:22]</span> Node_772 initialized v1.0 // London</p>
              <p><span>[18:04:45]</span> Node_104 compiled v3.0 // Tokyo</p>
              <p><span>[18:05:01]</span> Node_882 deployed v2.1 // NYC</p>
              <p className="highlight"><span>[18:05:12]</span> CRITICAL_SCENT_REACHED // 99.9% Purity</p>
            </div>
          </div>
        </div>

        {/* Right Side: The "Smell" Visual (Olfactory Pulse) */}
        <div className="synthesis-visual">
          <div className="pulse-container">
            <h3 className="visual-title">OLFACTORY_PULSE_V1</h3>
            <div className="wave-container">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.1, 0.3],
                    borderWidth: ["1px", "4px", "1px"]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: i * 0.8,
                    ease: "easeInOut" 
                  }}
                  className="scent-wave"
                  style={{ borderColor: i % 2 === 0 ? 'var(--accent-gold)' : 'var(--accent-neon)' }}
                />
              ))}
              <div className="core-essence">
                <Zap size={40} className="essence-icon" />
              </div>
            </div>
            <div className="intensity-bar">
              <div className="intensity-label">SCENT_INTENSITY</div>
              <div className="bar-bg">
                <motion.div 
                  animate={{ width: ["60%", "95%", "60%"] }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="bar-fill"
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Synthesis;
