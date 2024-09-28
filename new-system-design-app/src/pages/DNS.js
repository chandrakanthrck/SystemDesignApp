import React from 'react';
import { motion } from 'framer-motion';
import '../styles/DNS.css'; // Ensure correct CSS import

function DNS() {
  return (
    <div className="dns-container">
      {/* Animated Header */}
      <motion.h2 
        className="dns-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Domain Name System (DNS)
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="dns-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        DNS translates human-readable domain names into IP addresses. It is the backbone of the internet, enabling users 
        to access websites without memorizing complex numeric addresses.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="dns-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/dns-diagram.png`} alt="DNS Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Interactive DNS Simulation</h2>
        <motion.button 
          className="simulation-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Simulate DNS Lookup
        </motion.button>
      </motion.div>

      {/* Visuals Section */}
      <motion.div 
        className="dns-visuals"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h2>How DNS Works</h2>
        <p>
          DNS operates using a hierarchy of servers to resolve domain names. 
          It allows for the translation of user-friendly addresses into IP addresses that computers use to identify each other on the network.
        </p>
      </motion.div>

      {/* Action Buttons Section */}
      <div className="buttons-container">
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More About Networking
        </motion.button>
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Other Protocols
        </motion.button>
      </div>

      {/* Footer Section */}
      <div className="dns-footer">
        Understanding DNS is essential for anyone working with web technologies or managing online resources.
      </div>
    </div>
  );
}

export default DNS;
