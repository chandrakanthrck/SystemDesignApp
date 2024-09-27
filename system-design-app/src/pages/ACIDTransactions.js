import React from 'react';
import './Concept.css';

function ACIDTransactions() {
  return (
    <div className="concept">
      <h2>ACID Transactions</h2>
      <p>
        ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure 
        reliable processing of database transactions, providing a framework for maintaining database 
        integrity.
      </p>
      <img src="path/to/acid-transactions-diagram.png" alt="ACID Transactions Diagram" className="concept-image" />
    </div>
  );
}

export default ACIDTransactions;
