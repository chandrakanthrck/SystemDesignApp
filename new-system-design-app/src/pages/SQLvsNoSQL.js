import React from 'react';
import { motion } from 'framer-motion';
import './SQLvsNoSQL.css'; // Ensure the correct CSS file is imported

function SQLvsNoSQL() {
  return (
    <div className="sql-nosql-container">
      {/* Animated Header */}
      <motion.h2 
        className="sql-nosql-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        SQL vs NoSQL
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="sql-nosql-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        SQL databases are relational and structured, while NoSQL databases are non-relational and 
        offer more flexibility for unstructured data. Choosing between them depends on application 
        needs and data requirements.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="sql-nosql-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/sql-vs-noso-diagram.png`} alt="SQL vs NoSQL Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section with Table */}
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
              <th>SQL</th>
              <th>NoSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data Structure</td>
              <td>Relational</td>
              <td>Non-relational</td>
            </tr>
            <tr>
              <td>Schema</td>
              <td>Fixed</td>
              <td>Dynamic</td>
            </tr>
            <tr>
              <td>Transactions</td>
              <td>ACID compliant</td>
              <td>Eventual consistency</td>
            </tr>
            <tr>
              <td>Scaling</td>
              <td>Vertical</td>
              <td>Horizontal</td>
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
        <button className="action-button">Learn More about SQL</button>
        <button className="action-button">Learn More about NoSQL</button>
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
          Selecting the right database model is crucial for application performance and scalability.
        </p>
      </motion.div>

      {/* Footer Section */}
      <div className="sql-nosql-footer">
        Understanding the strengths and weaknesses of each type will guide your decision based on specific use cases.
      </div>
    </div>
  );
}

export default SQLvsNoSQL;
