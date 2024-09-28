import React from 'react';
import { motion } from 'framer-motion';
import './DatabaseScaling.css';

function DatabaseScaling() {
  return (
    <div className="scaling-container">
      {/* Animated Header */}
      <motion.h2 
        className="scaling-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Database Scaling
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="scaling-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Database scaling refers to improving the database's capacity to handle increasing workloads. There are two common 
        approaches to scaling databases: 
      </motion.p>

      <motion.ul 
        className="scaling-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <li>Vertical Scaling: Adding more power (CPU, RAM, etc.) to an existing server.</li>
        <li>Horizontal Scaling: Adding more servers to distribute the load.</li>
      </motion.ul>

      {/* Animated Diagram */}
      <motion.div 
        className="scaling-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/database-scaling-diagram.png`} alt="Database Scaling Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Interactive Scaling Simulation</h2>
        <motion.button 
          className="scaling-simulation-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Simulate Vertical Scaling
        </motion.button>
        <motion.button 
          className="scaling-simulation-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Simulate Horizontal Scaling
        </motion.button>
      </motion.div>

      {/* Scaling Types Section */}
      <motion.div 
        className="scaling-types-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h3>Scaling Types Explained</h3>
        <p>
          Vertical scaling is often easier to implement as it requires upgrading the existing server, but it is limited by the 
          capacity of a single machine. Horizontal scaling, on the other hand, allows for virtually limitless scaling by 
          adding more machines to share the load, which is more effective for distributed applications.
        </p>
      </motion.div>

      {/* Action Buttons Section */}
      <div className="scaling-buttons-container">
        <motion.button 
          className="scaling-action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More About Vertical Scaling
        </motion.button>
        <motion.button 
          className="scaling-action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More About Horizontal Scaling
        </motion.button>
      </div>

      {/* Footer Section */}
      <div className="scaling-footer">
        Scaling databases effectively ensures that your application remains performant, regardless of growth in data or user traffic.
      </div>
    </div>
  );
}

export default DatabaseScaling;
