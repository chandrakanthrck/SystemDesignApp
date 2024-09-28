import React from 'react';
import { motion } from 'framer-motion';
import './ConsensusAlgorithms.css';

function ConsensusAlgorithms() {
  return (
    <div className="consensus-container">
      {/* Animated Title */}
      <motion.h2 
        className="consensus-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Consensus Algorithms
      </motion.h2>

      {/* Animated Content */}
      <motion.p 
        className="consensus-content"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Consensus algorithms are protocols that help a distributed system agree on a common value. They are essential in ensuring 
        data consistency and reliability across nodes in a network. Popular examples include Paxos and Raft.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="consensus-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/consensus-algorithms-diagram.png`} alt="Consensus Algorithms Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3 className="interactive-heading">Explore Consensus in Action</h3>
        <motion.button
          className="interactive-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Simulate Consensus Process
        </motion.button>
      </motion.div>

      {/* Consensus Benefits List */}
      <motion.ul 
        className="consensus-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <li>Ensures data consistency in distributed systems.</li>
        <li>Helps maintain reliability even in case of network partitions.</li>
        <li>Popular algorithms include Paxos, Raft, and Byzantine Fault Tolerance.</li>
      </motion.ul>

      {/* Note Section */}
      <motion.p 
        className="consensus-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Note: Consensus algorithms are foundational in blockchain technology and distributed databases to achieve agreement among nodes.
      </motion.p>
    </div>
  );
}

export default ConsensusAlgorithms;
