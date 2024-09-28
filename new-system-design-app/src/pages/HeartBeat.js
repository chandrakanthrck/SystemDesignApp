import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HeartBeat.css'; // Ensure correct CSS import

function HeartBeat() {
  return (
    <div className="heartbeat-container">
      {/* Animated Header */}
      <motion.h2 
        className="heartbeat-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        HeartBeat Mechanism
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="heartbeat-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        The heartbeat mechanism is used to detect if nodes in a distributed system are alive. It involves sending regular signals 
        between nodes to ensure everything is operational and responsive.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="heartbeat-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/heartbeat-diagram.png`} alt="Heartbeat Mechanism Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Simulation Section */}
      <motion.div 
        className="heartbeat-simulation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Interactive HeartBeat Simulation</h2>
        <motion.button 
          className="simulation-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Simulate Heartbeat Check
        </motion.button>
      </motion.div>

      {/* Visuals Section */}
      <motion.div 
        className="heartbeat-visuals"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h2>How Heartbeat Works</h2>
        <p>
          Heartbeat signals help monitor the health of nodes in a distributed system. If a node fails to send a heartbeat signal 
          within a certain time frame, it is considered to be down, allowing for prompt action to be taken.
        </p>
      </motion.div>

      {/* Action Buttons Section */}
      <div className="buttons-container">
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore More Locking Mechanisms
        </motion.button>
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn About Distributed Systems
        </motion.button>
      </div>

      {/* Footer Section */}
      <div className="heartbeat-footer">
        Effective heartbeat mechanisms are crucial for maintaining system reliability and quick recovery from failures.
      </div>
    </div>
  );
}

export default HeartBeat;
