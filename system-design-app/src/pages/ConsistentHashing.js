import React from 'react';
import './Concept.css';

function ConsistentHashing() {
  return (
    <div className="concept">
      <h2>Consistent Hashing</h2>
      <p>
        Consistent hashing is a technique that allows a distributed system to efficiently handle 
        changes in node configurations with minimal disruption. It enables smooth scaling without 
        significant data movement.
      </p>
      <img src="path/to/consistent-hashing-diagram.png" alt="Consistent Hashing Diagram" className="concept-image" />
    </div>
  );
}

export default ConsistentHashing;
