import React from 'react';
import { motion } from 'framer-motion';
import './DatabaseSharding.css';

function DatabaseSharding() {
  return (
    <div className="sharding-container">
      {/* Animated Header */}
      <motion.h2 
        className="sharding-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Database Sharding
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="sharding-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Database sharding splits a large database into smaller, more manageable pieces called shards. 
        Each shard is stored on a separate server, enabling faster queries and better scalability. Sharding 
        is particularly useful when handling large amounts of data that need to be distributed efficiently.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="sharding-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/database-sharding-diagram.png`} alt="Database Sharding Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Interactive Sharding Simulation</h2>
        <motion.button 
          className="sharding-simulation-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Simulate Horizontal Sharding
        </motion.button>
        <motion.button 
          className="sharding-simulation-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Simulate Vertical Partitioning
        </motion.button>
      </motion.div>

      {/* Sharding Benefits Section */}
      <motion.div 
        className="sharding-benefits"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h2>Benefits of Database Sharding</h2>
        <p>
          Sharding offers a range of benefits including improved query performance, enhanced scalability, 
          and the ability to distribute data across multiple servers to avoid performance bottlenecks. 
          Shards are often divided based on logical data partitions like users or regions, reducing the load 
          on each database node.
        </p>
      </motion.div>

      {/* Action Buttons Section */}
      <div className="buttons-container">
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More About Sharding Strategies
        </motion.button>
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Vertical vs Horizontal Sharding
        </motion.button>
      </div>

      {/* Footer Section */}
      <div className="sharding-footer">
        Database sharding is a key part of scaling database infrastructure, enabling you to manage 
        large datasets effectively without sacrificing performance.
      </div>
    </div>
  );
}

export default DatabaseSharding;
