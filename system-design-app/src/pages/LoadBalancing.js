import React from 'react';
import './Concept.css';

function LoadBalancing() {
  return (
    <div className="concept">
      <h2>Load Balancing</h2>
      <p>
        Load balancing is the process of distributing network traffic across multiple servers. 
        It enhances the availability and reliability of applications by ensuring no single server 
        becomes overwhelmed with too much traffic.
      </p>
      <img src="path/to/load-balancing-diagram.png" alt="Load Balancing Diagram" className="concept-image" />
    </div>
  );
}

export default LoadBalancing;
