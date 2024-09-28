import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ACIDTransactions.css';  // Use a separate CSS file for specific concept styling.

function ACIDTransactions() {
  // State for showing additional information
  const [showAtomicity, setShowAtomicity] = useState(false);
  const [showConsistency, setShowConsistency] = useState(false);
  const [showIsolation, setShowIsolation] = useState(false);
  const [showDurability, setShowDurability] = useState(false);

  return (
    <div className="concept">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ACID Transactions
      </motion.h2>

      <motion.p
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure 
        reliable processing of database transactions, providing a framework for maintaining database 
        integrity.
      </motion.p>

      <motion.img
        src={`${process.env.PUBLIC_URL}/images/acid-transactions-diagram.png`}
        alt="ACID Transactions Diagram"
        className="concept-image"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      />

      <motion.div
        className="interactive-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3>Explore the ACID Properties</h3>

        <div className="acid-property">
          <motion.button
            className="interactive-button"
            onClick={() => setShowAtomicity(!showAtomicity)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Atomicity
          </motion.button>
          {showAtomicity && (
            <motion.div
              className="property-details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>
                Atomicity ensures that all parts of a transaction are completed. If any part fails, the entire transaction 
                is rolled back, ensuring the database remains in a consistent state.
              </p>
            </motion.div>
          )}
        </div>

        <div className="acid-property">
          <motion.button
            className="interactive-button"
            onClick={() => setShowConsistency(!showConsistency)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Consistency
          </motion.button>
          {showConsistency && (
            <motion.div
              className="property-details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>
                Consistency ensures that a transaction transforms the database from one valid state to another, respecting 
                all defined rules, such as constraints, cascades, and triggers.
              </p>
            </motion.div>
          )}
        </div>

        <div className="acid-property">
          <motion.button
            className="interactive-button"
            onClick={() => setShowIsolation(!showIsolation)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Isolation
          </motion.button>
          {showIsolation && (
            <motion.div
              className="property-details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>
                Isolation ensures that concurrent execution of transactions leaves the database in the same state as if 
                the transactions were executed sequentially.
              </p>
            </motion.div>
          )}
        </div>

        <div className="acid-property">
          <motion.button
            className="interactive-button"
            onClick={() => setShowDurability(!showDurability)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Durability
          </motion.button>
          {showDurability && (
            <motion.div
              className="property-details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>
                Durability guarantees that once a transaction is committed, it remains so, even in the case of a power failure, crash, 
                or other system errors.
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default ACIDTransactions;
