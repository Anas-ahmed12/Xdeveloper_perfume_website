import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Terminal, Database } from 'lucide-react';
import './ScentNotes.css';

const notes = [
  {
    title: "TOP: INITIAL LOGIC",
    icon: <Terminal size={32} />,
    description: "Cold-pressed Bergamot, Steel accord, and Electric Citrus. The first line of interaction.",
    color: "var(--accent-neon)"
  },
  {
    title: "HEART: CORE ALGORITHM",
    icon: <Layers size={32} />,
    description: "Midnight Jasmine, Sandalwood binary, and Carbon fiber musk. The processing unit.",
    color: "var(--accent-gold)"
  },
  {
    title: "BASE: LEGACY ARCHITECTURE",
    icon: <Database size={32} />,
    description: "Dark Oud, Amber, and Patchouli. The foundation that persists long after execution.",
    color: "var(--accent-teal)"
  }
];

const ScentNotes: React.FC = () => {
  return (
    <section id="notes" className="scent-notes">
      <div className="section-header">
        <h2 className="section-title">ARCHITECTURE</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="notes-grid">
        {notes.map((note, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="note-card"
          >
            <div className="note-icon" style={{ color: note.color }}>
              {note.icon}
            </div>
            <h3 className="note-title">{note.title}</h3>
            <p className="note-description">{note.description}</p>
            <div className="note-footer">
              <span className="status-bit">COMPILED</span>
              <div className="progress-bar">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  className="progress-fill"
                  style={{ backgroundColor: note.color }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ScentNotes;
