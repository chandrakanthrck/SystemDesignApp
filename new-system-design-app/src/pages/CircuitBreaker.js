import React from 'react';
import { motion } from 'framer-motion';
import './CircuitBreaker.css';

function CircuitBreaker() {
  return (
    <div className="circuitbreaker-container">
      {/* Animated Title */}
      <motion.h2 
        className="circuitbreaker-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Circuit Breaker
      </motion.h2>

      {/* Animated Content */}
      <motion.p 
        className="circuitbreaker-content"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        The Circuit Breaker pattern prevents the system from making repeated requests to a failing service. It "breaks" the circuit, 
        ensuring resources are conserved until the failing service recovers.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="circuitbreaker-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/circuit-breaker-diagram.png`} alt="Circuit Breaker Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3 className="interactive-heading">Learn How Circuit Breaker Works</h3>
        <motion.button
          className="interactive-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Circuit Breaker in Action
        </motion.button>
      </motion.div>

      {/* Circuit Breaker Benefits List */}
      <motion.ul 
        className="circuitbreaker-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <li>Protects resources by halting requests to failing services.</li>
        <li>Provides stability by isolating failures.</li>
        <li>Allows gradual recovery by monitoring the status of the service.</li>
      </motion.ul>

      {/* Note Section */}
      <motion.p 
        className="circuitbreaker-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Note: The Circuit Breaker pattern is a critical component in resilient system design, particularly in microservices architectures.
      </motion.p>
    </div>
  );
}

export default CircuitBreaker;
