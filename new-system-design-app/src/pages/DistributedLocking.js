import React from 'react';
import './DistributedLocking.css'; // Ensure correct CSS import

function DistributedLocking() {
  return (
    <div className="locking-container">
      <h2 className="locking-header">Distributed Locking</h2>
      <p className="locking-description">
        Distributed locking is a mechanism to synchronize access to shared resources across multiple nodes in a distributed system. 
        It helps avoid conflicts by ensuring only one node can modify a resource at a time.
      </p>
      <div className="locking-diagram">
        <img src={`${process.env.PUBLIC_URL}/images/distributed-locking-diagram.png`} alt="Distributed Locking Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h2>Interactive Locking Simulation</h2>
        <button className="locking-simulation-button">Simulate Distributed Locking</button>
      </div>
      <div className="locking-visuals">
        <h2>How Distributed Locking Works</h2>
        <p>
          Distributed locking mechanisms prevent simultaneous modifications of shared resources by multiple nodes, 
          ensuring data consistency. They are crucial in scenarios where multiple services may need to access shared data concurrently.
        </p>
      </div>
      <div className="buttons-container">
        <button className="action-button">Explore More Locking Mechanisms</button>
        <button className="action-button">Learn About Distributed Systems</button>
      </div>
      <div className="locking-footer">
        Effective distributed locking is essential for maintaining data integrity in distributed applications.
      </div>
    </div>
  );
}

export default DistributedLocking;
