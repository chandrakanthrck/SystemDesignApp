import React from 'react';
import { motion } from 'framer-motion';
import './StrongVsEventualConsistency.css'; // Ensure the correct CSS file is imported

function StrongVsEventualConsistency() {
  return (
    <div className="consistency-container">
      {/* Animated Header */}
      <motion.h2 
        className="consistency-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Strong vs Eventual Consistency
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="consistency-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Strong consistency ensures that after an update, any subsequent access to the data returns the most recent value. 
        Eventual consistency means that data will eventually be consistent across all nodes, which works well for systems requiring high availability.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="consistency-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/consistency-diagram.png`} alt="Strong vs Eventual Consistency Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2>Interactive Examples</h2>
        <div className="consistency-example">
          <p>Example of Strong Consistency: A bank transaction where all accounts reflect the updated balance immediately.</p>
        </div>
        <div className="consistency-example">
          <p>Example of Eventual Consistency: Social media likes where updates may take time to reflect across all servers.</p>
        </div>
        <div className="consistency-toggle">
          <button className="interactive-button">Learn More about Strong Consistency</button>
          <button className="interactive-button">Learn More about Eventual Consistency</button>
        </div>
      </motion.div>

      {/* Info Sections with Animation */}
      <motion.div 
        className="consistency-info strong"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Strong Consistency ensures immediate data accuracy.
      </motion.div>
      <motion.div 
        className="consistency-info eventual"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        Eventual Consistency focuses on availability and partition tolerance.
      </motion.div>
    </div>
  );
}

export default StrongVsEventualConsistency;
