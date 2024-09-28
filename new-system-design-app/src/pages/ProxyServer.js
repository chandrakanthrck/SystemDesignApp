import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ProxyServer.css'; // Ensure the correct CSS file is imported

function ProxyServer() {
  return (
    <div className="proxy-server-container">
      {/* Animated Header */}
      <motion.h2 
        className="proxy-server-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Proxy Server
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="proxy-server-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        A proxy server acts as an intermediary between a client and the internet, enhancing security, privacy, and performance. 
        It is often used to cache web pages and reduce bandwidth usage.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="proxy-server-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/proxy-server-diagram.png`} alt="Proxy Server Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>How Proxy Servers Work</h2>
        <p>Proxy servers intercept requests from clients and forward them to the intended server, then return the response to the client.</p>
      </motion.div>

      {/* Example Section */}
      <motion.div 
        className="proxy-server-example"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h3>Example of Proxy Server Usage</h3>
        <p>Many organizations use proxy servers to control employee internet access and to monitor web traffic for security purposes.</p>
      </motion.div>

      {/* Action Buttons Section */}
      <div className="buttons-container">
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More About Proxy Servers
        </motion.button>
        <motion.button 
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Security Benefits
        </motion.button>
      </div>

      {/* Footer Section */}
      <div className="proxy-server-footer">
        Understanding proxy servers can help you enhance your online security and optimize network performance.
      </div>
    </div>
  );
}

export default ProxyServer;
