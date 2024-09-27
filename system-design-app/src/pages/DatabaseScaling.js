import React from 'react';
import './Concept.css';

function DatabaseScaling() {
  return (
    <div className="concept">
      <h2>Database Scaling</h2>
      <p>
        Database scaling can be either vertical (adding more power to an existing server) or horizontal (adding more servers). 
        It is crucial for supporting increased loads and ensuring optimal performance.
      </p>
      <img src="path/to/database-scaling-diagram.png" alt="Database Scaling Diagram" className="concept-image" />
    </div>
  );
}

export default DatabaseScaling;
