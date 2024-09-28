import React from 'react';
import { motion } from 'framer-motion';
import './CDN.css';

function CDN() {
  return (
    <div className="cdn-container">
      {/* Animated Title */}
      <motion.h2 
        className="cdn-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Content Delivery Network (CDN)
      </motion.h2>

      {/* Animated Content */}
      <motion.p 
        className="cdn-content"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        A Content Delivery Network (CDN) is a system of distributed servers that deliver web content 
        to a user based on their geographic location. CDNs improve the performance of content delivery 
        by caching content closer to users, reducing latency and load times.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="cdn-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/cdn-diagram.png`} alt="CDN Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3 className="interactive-heading">Learn More About CDN Benefits</h3>
        <motion.button
          className="interactive-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore CDN Providers
        </motion.button>
      </motion.div>

      {/* CDN Benefits List */}
      <motion.ul 
        className="cdn-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <li>Reduces latency by caching content closer to the user.</li>
        <li>Handles increased traffic by distributing the load across multiple servers.</li>
        <li>Improves security through distributed denial of service (DDoS) protection.</li>
      </motion.ul>

      {/* Note Section */}
      <motion.p 
        className="cdn-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Note: CDNs are critical for ensuring fast and efficient content delivery, especially for global users.
      </motion.p>
    </div>
  );
}

export default CDN;
