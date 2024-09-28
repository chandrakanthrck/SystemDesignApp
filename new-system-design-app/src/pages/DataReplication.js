import React from 'react';
import { motion } from 'framer-motion';
import '../styles/DataReplication.css'; // Ensure this file path is correct

function DataReplication() {
  return (
    <div className="data-replication-container">
      {/* Animated Header */}
      <motion.h2 
        className="data-replication-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Data Replication
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="data-replication-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Data replication involves copying data across multiple locations to improve data availability and resilience. 
        It ensures that data remains accessible even in case of server failures. This technique enhances system reliability 
        and can be critical for disaster recovery strategies.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="data-replication-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/data-replication-diagram.png`} alt="Data Replication Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Interactive Data Replication Simulation</h2>
        <motion.button 
          className="replication-simulation-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Simulate Data Replication
        </motion.button>
      </motion.div>

      {/* Replication Types Section */}
      <motion.div 
        className="replication-types"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h2>Types of Data Replication</h2>
        <p>
          Data replication can be categorized into two primary types: 
          <ul>
            <li><strong>Synchronous Replication:</strong> Data is copied in real-time, ensuring that all replicas are up-to-date.</li>
            <li><strong>Asynchronous Replication:</strong> Data is copied after the write operation, allowing for some lag between the master and replicas.</li>
          </ul>
        </p>
      </motion.div>

      {/* Action Buttons Section */}
      <div className="buttons-container">
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More About Replication Strategies
        </motion.button>
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Data Availability Techniques
        </motion.button>
      </div>

      {/* Footer Section */}
      <div className="data-replication-footer">
        Data replication is essential for maintaining data consistency and availability in distributed systems.
      </div>
    </div>
  );
}

export default DataReplication;
