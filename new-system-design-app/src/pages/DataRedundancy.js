import React from 'react';
import { motion } from 'framer-motion';
import '../styles/DataRedundancy.css';

function DataRedundancy() {
  return (
    <div className="data-redundancy-container">
      {/* Animated Header */}
      <motion.h2 
        className="data-redundancy-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Data Redundancy
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="data-redundancy-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Data redundancy involves storing multiple copies of the same data, increasing the reliability of a system. 
        It ensures that a backup is available if one source fails. Redundancy is crucial for data availability and 
        resilience in the event of hardware failures or network issues.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="data-redundancy-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/data-redundancy-diagram.png`} alt="Data Redundancy Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Interactive Redundancy Simulation</h2>
        <motion.button 
          className="redundancy-simulation-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Simulate Replication Redundancy
        </motion.button>
        <motion.button 
          className="redundancy-simulation-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Simulate Mirroring Redundancy
        </motion.button>
      </motion.div>

      {/* Redundancy Benefits Section */}
      <motion.div 
        className="redundancy-benefits"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h2>Benefits of Data Redundancy</h2>
        <p>
          Data redundancy ensures data availability during unexpected outages, reduces downtime, and protects against 
          data loss. Whether through replication or mirroring, redundancy mechanisms ensure that systems can recover 
          quickly and continue to operate effectively.
        </p>
      </motion.div>

      {/* Action Buttons Section */}
      <div className="buttons-container">
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More About Data Replication
        </motion.button>
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Redundancy Strategies
        </motion.button>
      </div>

      {/* Footer Section */}
      <div className="data-redundancy-footer">
        Data redundancy is fundamental for robust data management in distributed systems and ensures reliable performance.
      </div>
    </div>
  );
}

export default DataRedundancy;
