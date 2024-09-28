import React from 'react';
import { motion } from 'framer-motion';
import './LatencyVsThroughput.css'; // Ensure correct CSS import

function LatencyThroughput() {
  return (
    <div className="lt-container">
      {/* Animated Header */}
      <motion.h2 
        className="lt-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Latency vs Throughput
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="lt-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Latency refers to the time taken for a data packet to travel from source to destination, 
        while throughput is the amount of data successfully transmitted over a given time frame. 
        Understanding the trade-offs between latency and throughput is crucial for optimizing 
        network performance.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="lt-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/latency-throughput-diagram.png`} alt="Latency vs Throughput Diagram" className="concept-image" />
      </motion.div>

      {/* Trade-offs Section */}
      <motion.div 
        className="lt-comparison"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Understanding the Trade-offs</h2>
        <p>
          Lower latency is essential for applications requiring real-time communication, such as 
          online gaming or video conferencing, while higher throughput is beneficial for 
          transferring large amounts of data, such as file downloads or data backups.
        </p>
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h2>Latency vs Throughput Quiz</h2>
        <p>Test your understanding of latency and throughput! Click the button below to take a short quiz.</p>
        <motion.button 
          className="lt-quiz-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Start Quiz
        </motion.button>
      </motion.div>

      {/* Visuals Section */}
      <motion.div 
        className="lt-visuals"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <h2>Visualizing Latency and Throughput</h2>
        <p>
          This section illustrates how latency and throughput interact and affect network performance 
          in various scenarios.
        </p>
      </motion.div>

      {/* Action Buttons Section */}
      <div className="buttons-container">
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More About Network Optimization
        </motion.button>
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Real-Time Data Processing
        </motion.button>
      </div>

      {/* Footer Section */}
      <div className="lt-footer">
        Understanding latency and throughput is key to building efficient and high-performing networks.
      </div>
    </div>
  );
}

export default LatencyThroughput;
