import React from 'react';
import { motion } from 'framer-motion';
import './DatabaseIndex.css';

function DatabaseIndex() {
  return (
    <div className="database-index-container">
      {/* Animated Title */}
      <motion.h2 
        className="database-index-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Database Index
      </motion.h2>

      {/* Animated Content */}
      <motion.p 
        className="database-index-content"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Database indexing improves retrieval performance by providing a data structure that allows 
        quick lookups of rows based on specified fields. Indexes are similar to a book's index: they 
        significantly speed up query response times by reducing the number of rows that need to be scanned.
      </motion.p>

      {/* Animated Diagram */}
      <motion.div 
        className="database-index-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/database-index-diagram.png`} alt="Database Index Diagram" className="concept-image" />
      </motion.div>

      {/* Interactive Section */}
      <motion.div 
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3 className="interactive-heading">Explore Index Types</h3>
        <motion.button
          className="interactive-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Primary Index
        </motion.button>
        <motion.button
          className="interactive-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Secondary Index
        </motion.button>
      </motion.div>

      {/* Index Benefits List */}
      <motion.ul 
        className="database-index-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <li>Primary indexes enforce uniqueness on a table's key fields.</li>
        <li>Secondary indexes are used to speed up data retrieval for other fields.</li>
        <li>Indexes are essential for optimizing complex queries involving sorting and filtering.</li>
      </motion.ul>

      {/* Note Section */}
      <motion.p 
        className="database-index-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Note: Too many indexes can slow down write operations, as they need to be updated for every insert or update.
      </motion.p>
    </div>
  );
}

export default DatabaseIndex;
