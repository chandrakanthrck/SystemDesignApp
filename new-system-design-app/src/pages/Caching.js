import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Caching.css';

function Caching() {
  return (
    <div className="caching-container">
      {/* Animated Title */}
      <motion.h2 
        className="caching-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Caching
      </motion.h2>

      {/* Animated Content */}
      <motion.p 
        className="caching-content"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Caching is a technique used to store copies of files or data in a temporary storage location 
        to reduce latency and improve retrieval times. Caching can significantly enhance application 
        performance by minimizing the time taken to access frequently requested data.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="caching-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/caching-diagram.png`} alt="Caching Diagram" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3 className="interactive-heading">Explore Caching Strategies</h3>
        <motion.button
          className="interactive-button"
          whileHover={{ scale: 1.1, backgroundColor: "#ffc107" }}
          whileTap={{ scale: 0.9 }}
        >
          View Popular Caching Techniques
        </motion.button>
      </motion.div>

      {/* Caching List */}
      <motion.ul 
        className="caching-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <li>Memory caching helps reduce database load by storing frequently accessed data.</li>
        <li>Content delivery network (CDN) caching stores copies of static assets to reduce latency for users.</li>
        <li>Client-side caching stores data on the user device, improving user experience and performance.</li>
      </motion.ul>

      {/* Note Section */}
      <motion.p 
        className="caching-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Note: The choice of caching strategy depends on the use case, data type, and performance goals.
      </motion.p>
    </div>
  );
}

export default Caching;
