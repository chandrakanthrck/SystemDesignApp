import React, { useState } from 'react';
import './ACIDTransactions.css';  // Use a separate CSS file for specific concept styling.

function ACIDTransactions() {
  // State for showing additional information
  const [showAtomicity, setShowAtomicity] = useState(false);
  const [showConsistency, setShowConsistency] = useState(false);
  const [showIsolation, setShowIsolation] = useState(false);
  const [showDurability, setShowDurability] = useState(false);

  return (
    <div className="concept">
      <h2>ACID Transactions</h2>
      <p>
        ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure 
        reliable processing of database transactions, providing a framework for maintaining database 
        integrity.
      </p>
      <img src={`${process.env.PUBLIC_URL}/images/acid-transactions-diagram.png`} alt="ACID Transactions Diagram" className="concept-image" />

      <div className="interactive-section">
        <h3>Explore the ACID Properties</h3>
        
        <div className="acid-property">
          <button className="interactive-button" onClick={() => setShowAtomicity(!showAtomicity)}>
            Atomicity
          </button>
          {showAtomicity && (
            <div className="property-details">
              <p>
                Atomicity ensures that all parts of a transaction are completed. If any part fails, the entire transaction 
                is rolled back, ensuring the database remains in a consistent state.
              </p>
            </div>
          )}
        </div>

        <div className="acid-property">
          <button className="interactive-button" onClick={() => setShowConsistency(!showConsistency)}>
            Consistency
          </button>
          {showConsistency && (
            <div className="property-details">
              <p>
                Consistency ensures that a transaction transforms the database from one valid state to another, respecting 
                all defined rules, such as constraints, cascades, and triggers.
              </p>
            </div>
          )}
        </div>

        <div className="acid-property">
          <button className="interactive-button" onClick={() => setShowIsolation(!showIsolation)}>
            Isolation
          </button>
          {showIsolation && (
            <div className="property-details">
              <p>
                Isolation ensures that concurrent execution of transactions leaves the database in the same state as if 
                the transactions were executed sequentially.
              </p>
            </div>
          )}
        </div>

        <div className="acid-property">
          <button className="interactive-button" onClick={() => setShowDurability(!showDurability)}>
            Durability
          </button>
          {showDurability && (
            <div className="property-details">
              <p>
                Durability guarantees that once a transaction is committed, it remains so, even in the case of a power failure, crash, 
                or other system errors.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ACIDTransactions;
