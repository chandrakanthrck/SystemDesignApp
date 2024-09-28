import React from 'react';
import { motion } from 'framer-motion';
import './CAPTheorem.css';

function CAPTheorem() {
  return (
    <div className="cap-container">
      <motion.h2 
        className="cap-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        CAP Theorem
      </motion.h2>

      <motion.p 
        className="cap-content"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        The CAP theorem states that in a distributed data store, it is impossible to guarantee 
        all three of the following: <strong>Consistency</strong>, <strong>Availability</strong>, and 
        <strong> Partition Tolerance</strong>. Understanding this trade-off helps in designing systems 
        that meet specific needs.
      </motion.p>

      <motion.div 
        className="cap-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/cap-theorem-diagram.png`} alt="CAP Theorem Diagram" />
      </motion.div>

      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3 className="interactive-heading">Explore CAP Theorem in Action</h3>
        <motion.button
          className="interactive-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More about Consistency, Availability, and Partition Tolerance
        </motion.button>
      </motion.div>

      <motion.ul 
        className="cap-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <li><strong>Consistency (C)</strong>: Every read receives the most recent write or an error.</li>
        <li><strong>Availability (A)</strong>: Every request receives a response, without guarantee that it contains the most recent write.</li>
        <li><strong>Partition Tolerance (P)</strong>: The system continues to operate despite an arbitrary number of messages being dropped by the network between nodes.</li>
      </motion.ul>

      <motion.p 
        className="cap-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Note: In a real-world distributed system, it's crucial to determine which two out of these three guarantees are most important to your application's requirements.
      </motion.p>
    </div>
  );
}

export default CAPTheorem;
