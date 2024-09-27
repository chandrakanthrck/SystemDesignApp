import React from 'react';
import './Concept.css';

function DataRedundancy() {
  return (
    <div className="concept">
      <h2>Data Redundancy</h2>
      <p>
        Data redundancy involves storing multiple copies of the same data, increasing the reliability of a system. 
        It ensures that a backup is available if one source fails.
      </p>
      <img src="path/to/data-redundancy-diagram.png" alt="Data Redundancy Diagram" className="concept-image" />
    </div>
  );
}

export default DataRedundancy;
