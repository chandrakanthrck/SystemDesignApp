import React from 'react';
import { motion } from 'framer-motion';
import '../styles/APIGateway.css';

function APIGateway() {
  return (
    <div className="api-gateway-container">
      <motion.h2
        className="api-gateway-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        API Gateway
      </motion.h2>

      <motion.p
        className="api-gateway-content"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        An API Gateway acts as an entry point for client requests to different microservices. It handles routing, 
        security, rate limiting, and load balancing, simplifying client interactions with back-end services.
      </motion.p>

      <motion.div
        className="api-gateway-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/api-gateway-diagram.png`} alt="API Gateway Diagram" />
      </motion.div>

      <motion.div
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3 className="interactive-heading">Try It Out</h3>
        <motion.button
          className="interactive-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Simulate Request Flow
        </motion.button>
      </motion.div>

      <motion.ul
        className="api-gateway-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <li>Handles routing and request forwarding to appropriate services.</li>
        <li>Provides security by authenticating requests before reaching services.</li>
        <li>Implements rate limiting to prevent abuse.</li>
      </motion.ul>

      <motion.p
        className="api-gateway-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Note: API Gateway acts as a crucial component for microservices, simplifying communication and reducing complexity on the client-side.
      </motion.p>
    </div>
  );
}

export default APIGateway;
