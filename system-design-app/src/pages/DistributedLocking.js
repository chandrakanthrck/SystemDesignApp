import React from 'react';
import './Concept.css';

function DistributedLocking() {
  return (
    <div className="concept">
      <h2>Distributed Locking</h2>
      <p>
        Distributed locking is a mechanism to synchronize access to shared resources across multiple nodes in a distributed system. 
        It helps avoid conflicts by ensuring only one node can modify a resource at a time.
      </p>
      <img src="path/to/distributed-locking-diagram.png" alt="Distributed Locking Diagram" className="concept-image" />
    </div>
  );
}

export default DistributedLocking;
