import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MessageQueues.css'; // Ensure correct CSS import

function MessageQueues() {
  return (
    <div className="mq-container">
      {/* Animated Header */}
      <motion.h2 
        className="mq-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Message Queues
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="mq-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Message queues facilitate asynchronous communication between services by allowing them to send and receive messages 
        without waiting for each other, which increases system resilience.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="mq-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/message-queues-diagram.png`} alt="Message Queues Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Understanding Message Queues</h2>
        <p>They help in decoupling the components of a system, allowing for more flexible and scalable architectures.</p>
      </motion.div>

      {/* Example Section */}
      <motion.div 
        className="mq-example"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h3>Example of Message Queues</h3>
        <p>For instance, a web application can use a message queue to process user requests asynchronously, ensuring that users 
        receive timely responses without delays caused by backend processing.</p>
      </motion.div>

      {/* Benefits Section */}
      <motion.div 
        className="mq-benefits"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <h2>Benefits of Message Queues</h2>
        <p>Message queues improve system resilience, increase throughput, and enhance scalability by allowing different 
        components to operate independently.</p>
      </motion.div>

      {/* Action Buttons Section */}
      <div className="buttons-container">
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More About Message Queues
        </motion.button>
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Asynchronous Communication
        </motion.button>
      </div>

      {/* Footer Section */}
      <div className="mq-footer">
        Effective message queuing can significantly enhance the reliability of your applications.
      </div>
    </div>
  );
}

export default MessageQueues;
