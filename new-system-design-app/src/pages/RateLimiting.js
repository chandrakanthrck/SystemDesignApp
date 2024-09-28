import React from 'react';
import { motion } from 'framer-motion';
import './RateLimiting.css'; // Ensure the correct CSS file is imported

function RateLimiting() {
  return (
    <div className="rate-limiting-container">
      {/* Animated Header */}
      <motion.h2 
        className="rate-limiting-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Rate Limiting
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="rate-limiting-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Rate limiting controls the number of requests a user can make in a given timeframe, 
        protecting systems from overload, abuse, and attacks while ensuring fair usage among users.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="rate-limiting-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/rate-limiting-diagram.png`} alt="Rate Limiting Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Understanding Rate Limiting</h2>
        <p>Rate limiting is essential for maintaining the health of APIs and web services, allowing administrators to control traffic.</p>
      </motion.div>

      {/* Example Section */}
      <motion.div 
        className="rate-limiting-example"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h3>Example of Rate Limiting</h3>
        <p>For instance, an API might limit users to 100 requests per hour to prevent abuse and ensure service stability.</p>
      </motion.div>

      {/* Action Buttons Section */}
      <div className="buttons-container">
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More About Rate Limiting
        </motion.button>
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Rate Limiting Techniques
        </motion.button>
      </div>

      {/* Footer Section */}
      <div className="rate-limiting-footer">
        Implementing rate limiting helps improve security and manage resources effectively.
      </div>
    </div>
  );
}

export default RateLimiting;
