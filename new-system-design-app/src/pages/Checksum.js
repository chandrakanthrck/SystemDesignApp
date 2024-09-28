import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Checksum.css'; // Updated to use Checksum-specific CSS file

function Checksum() {
  return (
    <div className="checksum-container">
      {/* Animated Title */}
      <motion.h2 
        className="checksum-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Checksum
      </motion.h2>

      {/* Animated Content */}
      <motion.p 
        className="checksum-content"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        A checksum is a small-sized datum derived from a larger data set to detect errors introduced during transmission or storage. 
        It ensures data integrity by verifying that the content received matches the content sent.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="checksum-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/checksum-diagram.png`} alt="Checksum Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3 className="interactive-heading">Explore Checksum Usage</h3>
        <motion.button
          className="interactive-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More About Checksums
        </motion.button>
      </motion.div>

      {/* Checksum Benefits List */}
      <motion.ul 
        className="checksum-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <li>Ensures data integrity during storage or transmission.</li>
        <li>Helps in detecting accidental changes in data.</li>
        <li>Used in networking protocols to verify packet integrity.</li>
      </motion.ul>

      {/* Note Section */}
      <motion.p 
        className="checksum-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Note: Checksums are effective in detecting accidental errors but are not foolproof against intentional alterations or attacks.
      </motion.p>
    </div>
  );
}

export default Checksum;
