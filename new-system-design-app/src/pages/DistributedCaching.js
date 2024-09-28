import React from 'react';
import { motion } from 'framer-motion';
import './DistributedCaching.css'; // Ensure correct CSS import

function DistributedCaching() {
  return (
    <div className="caching-container">
      {/* Animated Header */}
      <motion.h2 
        className="caching-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Distributed Caching
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="caching-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Distributed caching involves spreading cached data across multiple servers or locations 
        to improve data accessibility and reliability. It allows applications to scale efficiently, 
        ensuring that users can access cached data from the closest server.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="caching-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/distributed-caching-diagram.png`} alt="Distributed Caching Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Interactive Distributed Caching Simulation</h2>
        <motion.button 
          className="caching-simulation-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Simulate Distributed Caching
        </motion.button>
      </motion.div>

      {/* Visuals Section */}
      <motion.div 
        className="caching-visuals"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h2>How Distributed Caching Works</h2>
        <p>
          In a distributed caching system, cached data is replicated across multiple nodes, 
          allowing for faster data access and improved fault tolerance. This architecture supports 
          load balancing and helps reduce latency, enhancing user experience.
        </p>
      </motion.div>

      {/* Action Buttons Section */}
      <div className="buttons-container">
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore More Caching Techniques
        </motion.button>
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Understand Cache Invalidation Strategies
        </motion.button>
      </div>

      {/* Footer Section */}
      <div className="caching-footer">
        Efficient distributed caching is critical for modern applications needing high availability and performance.
      </div>
    </div>
  );
}

export default DistributedCaching;
