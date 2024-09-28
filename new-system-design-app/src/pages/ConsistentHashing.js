import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ConsistentHashing.css';

function ConsistentHashing() {
  return (
    <div className="consistent-hashing-container">
      {/* Animated Title */}
      <motion.h2 
        className="consistent-hashing-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Consistent Hashing
      </motion.h2>

      {/* Animated Content */}
      <motion.p 
        className="consistent-hashing-content"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Consistent hashing is a technique that allows a distributed system to efficiently handle 
        changes in node configurations with minimal disruption. It enables smooth scaling without 
        significant data movement, making it a key component in load balancing and distributed caching systems.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="consistent-hashing-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/consistent-hashing-diagram.png`} alt="Consistent Hashing Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3 className="interactive-heading">Try Consistent Hashing in Action</h3>
        <motion.button
          className="interactive-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Simulate Node Addition
        </motion.button>
        <motion.button
          className="interactive-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Simulate Node Removal
        </motion.button>
      </motion.div>

      {/* Benefits List */}
      <motion.ul 
        className="consistent-hashing-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <li>Minimizes data reorganization during scaling events.</li>
        <li>Effective for balancing load in a distributed system.</li>
        <li>Popularly used in distributed caching and P2P networks.</li>
      </motion.ul>

      {/* Note Section */}
      <motion.p 
        className="consistent-hashing-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Note: Consistent hashing helps achieve efficient and smooth transitions in dynamic distributed environments.
      </motion.p>
    </div>
  );
}

export default ConsistentHashing;
