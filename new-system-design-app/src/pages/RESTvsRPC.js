import React from 'react';
import { motion } from 'framer-motion';
import './RESTvsRPC.css'; // Ensure the correct CSS file is imported

function RESTvsRPC() {
  return (
    <div className="rest-rpc-container">
      {/* Animated Header */}
      <motion.h2 
        className="rest-rpc-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        REST vs RPC
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="rest-rpc-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        REST (Representational State Transfer) and RPC (Remote Procedure Call) are two styles for API design. 
        REST is resource-based, whereas RPC is more function-oriented, offering different trade-offs depending on use cases.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="rest-rpc-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/rest-vs-rpc-diagram.png`} alt="REST vs RPC Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2>Comparison Table</h2>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Aspect</th>
              <th>REST</th>
              <th>RPC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Type</td>
              <td>Resource-based</td>
              <td>Function-based</td>
            </tr>
            <tr>
              <td>Data Format</td>
              <td>JSON/XML</td>
              <td>Binary/Protocol Buffers</td>
            </tr>
            <tr>
              <td>Stateless</td>
              <td>Yes</td>
              <td>No (optional)</td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* Toggle Buttons Section */}
      <motion.div 
        className="toggle-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <button className="action-button">View More on REST</button>
        <button className="action-button">View More on RPC</button>
      </motion.div>

      {/* Details Section */}
      <motion.div 
        className="details-section"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <h3>Further Details</h3>
        <p>
          Understanding the trade-offs between REST and RPC can help developers choose the right architecture for their applications.
        </p>
      </motion.div>

      {/* Footer Section */}
      <div className="rest-rpc-footer">
        Selecting between REST and RPC depends on the specific needs and constraints of your application.
      </div>
    </div>
  );
}

export default RESTvsRPC;
