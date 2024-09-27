import React from 'react';
import './Concept.css';

function StrongVsEventualConsistency() {
  return (
    <div className="concept">
      <h2>Strong vs Eventual Consistency</h2>
      <p>
        Strong consistency ensures that after an update, any subsequent access to the data returns the most recent value. 
        Eventual consistency means that data will eventually be consistent across all nodes, which works well for systems requiring high availability.
      </p>
      <img src="path/to/consistency-diagram.png" alt="Strong vs Eventual Consistency Diagram" className="concept-image" />
    </div>
  );
}

export default StrongVsEventualConsistency;
