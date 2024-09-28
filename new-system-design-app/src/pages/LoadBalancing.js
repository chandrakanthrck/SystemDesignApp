import React from 'react';
import { motion } from 'framer-motion';
import '../styles/LoadBalancing.css'; // Ensure correct CSS import

function LoadBalancing() {
  return (
    <div className="lb-container">
      {/* Animated Header */}
      <motion.h2 
        className="lb-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Load Balancing
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="lb-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Load balancing is the process of distributing network traffic across multiple servers. 
        It enhances the availability and reliability of applications by ensuring no single server 
        becomes overwhelmed with too much traffic.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="lb-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/load-balancing-diagram.png`} alt="Load Balancing Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Understanding Load Balancing</h2>
        <p>Load balancing helps in managing the load effectively across servers, improving performance and reliability.</p>
      </motion.div>

      {/* Example Section */}
      <motion.div 
        className="lb-example"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h3>Example of Load Balancing</h3>
        <p>For instance, in a web application, a load balancer can distribute requests among multiple servers to ensure no single server gets overwhelmed.</p>
      </motion.div>

      {/* Types Section */}
      <motion.div 
        className="lb-types"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <h2>Types of Load Balancing</h2>
        <p>Load balancing can be done using various algorithms such as Round Robin, Least Connections, or IP Hash.</p>
      </motion.div>

      {/* Action Buttons Section */}
      <div className="buttons-container">
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More About Load Balancers
        </motion.button>
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Network Optimization Techniques
        </motion.button>
      </div>

      {/* Footer Section */}
      <div className="lb-footer">
        Load balancing is critical for maintaining optimal application performance and user satisfaction.
      </div>
    </div>
  );
}

export default LoadBalancing;
