import React from 'react';
import './Concept.css';

function Idempotency() {
  return (
    <div className="concept">
      <h2>Idempotency</h2>
      <p>
        Idempotency refers to an operation's ability to produce the same result, regardless of how many times it is executed. 
        It is crucial for retrying network requests without causing unintended consequences.
      </p>
      <img src="path/to/idempotency-diagram.png" alt="Idempotency Diagram" className="concept-image" />
    </div>
  );
}

export default Idempotency;
