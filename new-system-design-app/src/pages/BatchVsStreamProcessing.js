import React from 'react';
import { motion } from 'framer-motion';
import './BatchVsStreamProcessing.css';

function BatchVsStreamProcessing() {
  return (
    <div className="batch-stream-container">
      <motion.h2
        className="batch-stream-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Batch Processing vs Stream Processing
      </motion.h2>

      <motion.p
        className="batch-stream-content"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Batch processing involves processing large volumes of data at scheduled intervals, whereas stream processing allows for continuous 
        data processing in real-time. Stream processing is useful for real-time analytics, such as fraud detection, while batch processing 
        is better suited for scenarios like large-scale data aggregation or payroll systems.
      </motion.p>

      <motion.div
        className="batch-stream-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/batch-vs-stream-diagram.png`} alt="Batch vs Stream Processing Diagram" />
      </motion.div>

      <motion.div
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3 className="interactive-heading">Explore More</h3>
        <motion.button
          className="interactive-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Compare Real-Time Examples
        </motion.button>
      </motion.div>

      <motion.ul
        className="batch-stream-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <li>Batch processing deals with large, static datasets processed in bulk at regular intervals.</li>
        <li>Stream processing involves handling data on the fly, suitable for low-latency applications.</li>
        <li>Batch processing is often easier to implement but lacks the responsiveness of stream processing.</li>
      </motion.ul>

      <motion.p
        className="batch-stream-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Note: Choosing between batch and stream processing depends on the use case, available resources, and the need for real-time insights.
      </motion.p>
    </div>
  );
}

export default BatchVsStreamProcessing;
