import React from 'react';
import './Concept.css';

function CAPTheorem() {
  return (
    <div className="concept">
      <h2>CAP Theorem</h2>
      <p>
        The CAP theorem states that in a distributed data store, it is impossible to guarantee 
        all three of the following: Consistency, Availability, and Partition tolerance. Understanding 
        this trade-off helps in designing systems that meet specific needs.
      </p>
      <img src="path/to/cap-theorem-diagram.png" alt="CAP Theorem Diagram" className="concept-image" />
    </div>
  );
}

export default CAPTheorem;
