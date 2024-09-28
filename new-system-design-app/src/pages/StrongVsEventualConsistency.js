import React from 'react';
import './StrongVsEventualConsistency.css'; // Ensure the correct CSS file is imported

function StrongVsEventualConsistency() {
  return (
    <div className="consistency-container">
      <h2 className="consistency-header">Strong vs Eventual Consistency</h2>
      <p className="consistency-description">
        Strong consistency ensures that after an update, any subsequent access to the data returns the most recent value. 
        Eventual consistency means that data will eventually be consistent across all nodes, which works well for systems requiring high availability.
      </p>
      <div className="consistency-diagram">
      <img src={`${process.env.PUBLIC_URL}/images/consistency-diagram.png`} alt="Strong vs Eventual Consistency Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h2>Interactive Examples</h2>
        <div className="consistency-example">
          <p>Example of Strong Consistency: A bank transaction where all accounts reflect the updated balance immediately.</p>
        </div>
        <div className="consistency-example">
          <p>Example of Eventual Consistency: Social media likes where updates may take time to reflect across all servers.</p>
        </div>
        <div className="consistency-toggle">
          <button>Learn More about Strong Consistency</button>
          <button>Learn More about Eventual Consistency</button>
        </div>
      </div>
      <div className="consistency-info strong">Strong Consistency ensures immediate data accuracy.</div>
      <div className="consistency-info eventual">Eventual Consistency focuses on availability and partition tolerance.</div>
    </div>
  );
}

export default StrongVsEventualConsistency;
