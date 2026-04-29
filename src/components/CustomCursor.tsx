import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);
    
    const targets = document.querySelectorAll('button, a, .product-card');
    targets.forEach(t => {
      t.addEventListener('mouseenter', handleHover);
      t.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="cursor-wrapper">
      <motion.div 
        className="main-cursor"
        style={{ x: cursorX, y: cursorY }}
      >
        <div className={`cursor-ring ${isHovering ? 'active' : ''}`}></div>
        <div className="cursor-dot"></div>
        {isHovering && (
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="cursor-label"
          >
            EXECUTE
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

export default CustomCursor;
