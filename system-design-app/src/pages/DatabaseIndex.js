import React from 'react';
import './Concept.css';

function DatabaseIndex() {
  return (
    <div className="concept">
      <h2>Database Index</h2>
      <p>
        Database indexing improves retrieval performance by providing a data structure that allows 
        quick lookups of rows based on specified fields, significantly speeding up query response times.
      </p>
      <img src="path/to/database-index-diagram.png" alt="Database Index Diagram" className="concept-image" />
    </div>
  );
}

export default DatabaseIndex;
