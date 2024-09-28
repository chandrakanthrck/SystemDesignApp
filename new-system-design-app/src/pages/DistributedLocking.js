import React from 'react';
import { motion } from 'framer-motion';
import './DistributedLocking.css'; // Ensure correct CSS import

function DistributedLocking() {
  return (
    <div className="locking-container">
      {/* Animated Header */}
      <motion.h2 
        className="locking-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Distributed Locking
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="locking-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Distributed locking is a mechanism to synchronize access to shared resources across multiple nodes in a distributed system. 
        It helps avoid conflicts by ensuring only one node can modify a resource at a time.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="locking-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/distributed-locking-diagram.png`} alt="Distributed Locking Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Interactive Locking Simulation</h2>
        <motion.button 
          className="locking-simulation-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Simulate Distributed Locking
        </motion.button>
      </motion.div>

      {/* Visuals Section */}
      <motion.div 
        className="locking-visuals"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h2>How Distributed Locking Works</h2>
        <p>
          Distributed locking mechanisms prevent simultaneous modifications of shared resources by multiple nodes, 
          ensuring data consistency. They are crucial in scenarios where multiple services may need to access shared data concurrently.
        </p>
      </motion.div>

      {/* Action Buttons Section */}
      <div className="buttons-container">
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore More Locking Mechanisms
        </motion.button>
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn About Distributed Systems
        </motion.button>
      </div>

      {/* Footer Section */}
      <div className="locking-footer">
        Effective distributed locking is essential for maintaining data integrity in distributed applications.
      </div>
    </div>
  );
}

export default DistributedLocking;
