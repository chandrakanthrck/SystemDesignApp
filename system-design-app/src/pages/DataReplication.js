import React from 'react';
import './Concept.css';

function DataReplication() {
  return (
    <div className="concept">
      <h2>Data Replication</h2>
      <p>
        Data replication involves copying data across multiple locations to improve data availability and resilience. 
        It ensures that data remains accessible even in case of server failures.
      </p>
      <img src="path/to/data-replication-diagram.png" alt="Data Replication Diagram" className="concept-image" />
    </div>
  );
}

export default DataReplication;
