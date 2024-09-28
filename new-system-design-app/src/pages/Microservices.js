import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Microservices.css'; // Ensure the correct CSS file is imported

function MicroservicesArchitecture() {
  return (
    <div className="microservices-container">
      {/* Animated Header */}
      <motion.h2 
        className="microservices-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Microservices Architecture
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="microservices-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Microservices architecture enables the development of applications as a collection of loosely 
        coupled services, each responsible for a specific functionality, facilitating independent deployment 
        and scaling.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="microservices-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/microservices-architecture-diagram.png`} alt="Microservices Architecture Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Key Features</h2>
        <p>Microservices allow teams to develop, deploy, and scale services independently, enhancing agility.</p>
      </motion.div>

      {/* Example Section */}
      <motion.div 
        className="microservices-example"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h3>Example of Microservices Architecture</h3>
        <p>An e-commerce application can have separate microservices for user management, product catalog, 
        and order processing, allowing them to be developed and scaled independently.</p>
      </motion.div>

      {/* Benefits Section */}
      <motion.div 
        className="microservices-architecture"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <h2>Benefits of Microservices</h2>
        <p>Microservices enhance flexibility, improve fault isolation, and allow for the use of different technology stacks 
        within the same application.</p>
      </motion.div>

      {/* Action Buttons Section */}
      <div className="buttons-container">
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More About Microservices
        </motion.button>
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Use Cases
        </motion.button>
      </div>

      {/* Footer Section */}
      <div className="microservices-footer">
        Understanding microservices can significantly improve your application's scalability and maintainability.
      </div>
    </div>
  );
}

export default MicroservicesArchitecture;
