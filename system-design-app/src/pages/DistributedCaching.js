import React from 'react';
import './Concept.css';

function DistributedCaching() {
  return (
    <div className="concept">
      <h2>Distributed Caching</h2>
      <p>
        Distributed caching involves spreading cached data across multiple servers or locations 
        to improve data accessibility and reliability. It allows applications to scale efficiently, 
        ensuring that users can access cached data from the closest server.
      </p>
      <img src="path/to/distributed-caching-diagram.png" alt="Distributed Caching Diagram" className="concept-image" />
    </div>
  );
}

export default DistributedCaching;
