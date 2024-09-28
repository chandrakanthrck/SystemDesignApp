import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Idempotency.css'; // Ensure correct CSS import

function Idempotency() {
  return (
    <div className="idempotency-container">
      {/* Animated Header */}
      <motion.h2 
        className="idempotency-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Understanding Idempotency
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="idempotency-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Idempotency refers to an operation's ability to produce the same result, regardless of how many times it is executed. 
        This property is crucial for retrying network requests without causing unintended consequences.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="idempotency-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/idempotency-diagram.png`} alt="Idempotency Diagram" className="concept-image" />
      </motion.div>

      {/* Examples Section */}
      <motion.div 
        className="examples-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Examples of Idempotency</h2>
        <p>
          A classic example of an idempotent operation is the HTTP GET request. 
          Repeated GET requests will yield the same result without causing any changes on the server. 
          In contrast, a POST request that creates a new resource is not idempotent because repeated requests will create multiple resources.
        </p>
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h2>Idempotency Quiz</h2>
        <p>Test your knowledge about idempotency! Click the button below to take a short quiz.</p>
        <motion.button 
          className="idempotency-quiz-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Start Quiz
        </motion.button>
      </motion.div>

      {/* Visuals Section */}
      <motion.div 
        className="idempotency-visuals"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <h2>Visualizing Idempotency</h2>
        <p>
          Visualizing how idempotency works can help clarify its importance in API design and 
          distributed systems. Below, we explore scenarios and their outcomes.
        </p>
      </motion.div>

      {/* Action Buttons Section */}
      <div className="buttons-container">
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More About API Design
        </motion.button>
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Retry Mechanisms
        </motion.button>
      </div>

      {/* Footer Section */}
      <div className="idempotency-footer">
        Understanding idempotency helps in building robust and reliable systems, especially in microservices architecture.
      </div>
    </div>
  );
}

export default Idempotency;
