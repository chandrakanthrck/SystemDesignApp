import React from 'react';
import { motion } from 'framer-motion';
import '../styles/WebSockets.css'; // Ensure the correct CSS file is imported

function WebSockets() {
  return (
    <div className="websocket-container">
      {/* Animated Header */}
      <motion.h2 
        className="websocket-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        WebSockets
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="websocket-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        WebSockets provide full-duplex communication channels over a single TCP connection, enabling real-time, interactive communication 
        between clients and servers.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="websocket-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/websockets-diagram.png`} alt="WebSockets Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2>Explore WebSockets</h2>
        <button className="websocket-button">Start WebSocket Connection</button>
        <div className="message-box">
          <p>Send and receive messages in real-time using WebSockets!</p>
        </div>
        <div className="connection-status">
          <span>Status: </span><span className="connected">Connected</span>
        </div>
      </motion.div>
    </div>
  );
}

export default WebSockets;
