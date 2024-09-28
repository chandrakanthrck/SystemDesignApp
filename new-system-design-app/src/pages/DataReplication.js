import React from 'react';
import './DataReplication.css'; // Update to the correct CSS file

function DataReplication() {
  return (
    <div className="data-replication-container">
      <h2 className="data-replication-header">Data Replication</h2>
      <p className="data-replication-description">
        Data replication involves copying data across multiple locations to improve data availability and resilience. 
        It ensures that data remains accessible even in case of server failures. This technique enhances system reliability 
        and can be critical for disaster recovery strategies.
      </p>
      <div className="data-replication-diagram">
        <img src={`${process.env.PUBLIC_URL}/images/data-replication-diagram.png`} alt="Data Replication Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h2>Interactive Data Replication Simulation</h2>
        <button className="replication-simulation-button">Simulate Data Replication</button>
      </div>
      <div className="replication-types">
        <h2>Types of Data Replication</h2>
        <p>
          Data replication can be categorized into two primary types: 
          <ul>
            <li><strong>Synchronous Replication:</strong> Data is copied in real-time, ensuring that all replicas are up-to-date.</li>
            <li><strong>Asynchronous Replication:</strong> Data is copied after the write operation, allowing for some lag between the master and replicas.</li>
          </ul>
        </p>
      </div>
      <div className="buttons-container">
        <button className="action-button">Learn More About Replication Strategies</button>
        <button className="action-button">Explore Data Availability Techniques</button>
      </div>
      <div className="data-replication-footer">
        Data replication is essential for maintaining data consistency and availability in distributed systems.
      </div>
    </div>
  );
}

export default DataReplication;
