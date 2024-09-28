import React from 'react';
import './DataRedundancy.css';

function DataRedundancy() {
  return (
    <div className="data-redundancy-container">
      <h2 className="data-redundancy-header">Data Redundancy</h2>
      <p className="data-redundancy-description">
        Data redundancy involves storing multiple copies of the same data, increasing the reliability of a system. 
        It ensures that a backup is available if one source fails. Redundancy is crucial for data availability and 
        resilience in the event of hardware failures or network issues.
      </p>
      <div className="data-redundancy-diagram">
        <img src="path/to/data-redundancy-diagram.png" alt="Data Redundancy Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h2>Interactive Redundancy Simulation</h2>
        <button className="redundancy-simulation-button">Simulate Replication Redundancy</button>
        <button className="redundancy-simulation-button">Simulate Mirroring Redundancy</button>
      </div>
      <div className="redundancy-benefits">
        <h2>Benefits of Data Redundancy</h2>
        <p>
          Data redundancy ensures data availability during unexpected outages, reduces downtime, and protects against 
          data loss. Whether through replication or mirroring, redundancy mechanisms ensure that systems can recover 
          quickly and continue to operate effectively.
        </p>
      </div>
      <div className="buttons-container">
        <button className="action-button">Learn More About Data Replication</button>
        <button className="action-button">Explore Redundancy Strategies</button>
      </div>
      <div className="data-redundancy-footer">
        Data redundancy is fundamental for robust data management in distributed systems and ensures reliable performance.
      </div>
    </div>
  );
}

export default DataRedundancy;
