import React from 'react';
import { motion } from 'framer-motion';
import './Products.css';

const products = [
  {
    id: "v1.0",
    name: "ORIGIN_EDITION",
    tagline: "CORE_ARCHITECTURE",
    specs: ["STABILITY: HIGH", "LATENCY: LOW", "SCENT_BASE: OUD"],
    price: "$180",
    color: "var(--accent-gold)",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "v2.1",
    name: "SYNTAX_ERROR",
    tagline: "RUNTIME_DISRUPTION",
    specs: ["VOLATILITY: MAX", "TYPE: EXPERIMENTAL", "SCENT_BASE: NEON"],
    price: "$165",
    color: "var(--accent-neon)",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "v3.0",
    name: "STABLE_RELEASE",
    tagline: "LEGACY_PERSISTENCE",
    specs: ["UPTIME: 24H+", "ENCRYPTION: AES-256", "SCENT_BASE: AMBER"],
    price: "$210",
    color: "var(--accent-teal)",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=600"
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="products-section">
      <div className="section-header">
        <h2 className="section-title">THE_REPOSITORY</h2>
        <div className="status-terminal">
          <span>&gt; BROWSE_COLLECTION...</span>
          <span className="cursor-blink">_</span>
        </div>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="product-card-modern"
          >
            <div className="card-inner">
              <div className="product-visual">
                <div className="image-overlay" style={{ background: `linear-gradient(45deg, ${product.color}11, transparent)` }}></div>
                <img src={product.image} alt={product.name} className="product-img" />
                <div className="corner-tag" style={{ borderRightColor: product.color, borderTopColor: product.color }}></div>
              </div>

              <div className="product-info-modern">
                <div className="info-header">
                  <span className="ver-tag" style={{ color: product.color }}>{product.id}</span>
                  <div className="specs-list">
                    {product.specs.map(spec => (
                      <span key={spec} className="spec-bit">{spec}</span>
                    ))}
                  </div>
                </div>

                <h3 className="product-name-modern">{product.name}</h3>
                <p className="product-tagline-modern">{product.tagline}</p>
                
                <div className="buy-zone">
                  <span className="price-tag">{product.price}</span>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="deploy-btn"
                    style={{ borderColor: product.color, color: product.color }}
                  >
                    DEPLOY_INSTANCE
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
