import React from 'react';
import './DistributedCaching.css'; // Ensure correct CSS import

function DistributedCaching() {
  return (
    <div className="caching-container">
      <h2 className="caching-header">Distributed Caching</h2>
      <p className="caching-description">
        Distributed caching involves spreading cached data across multiple servers or locations 
        to improve data accessibility and reliability. It allows applications to scale efficiently, 
        ensuring that users can access cached data from the closest server.
      </p>
      <div className="caching-diagram">
        <img src={`${process.env.PUBLIC_URL}/images/distributed-caching-diagram.png`} alt="Distributed Caching Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h2>Interactive Distributed Caching Simulation</h2>
        <button className="caching-simulation-button">Simulate Distributed Caching</button>
      </div>
      <div className="caching-visuals">
        <h2>How Distributed Caching Works</h2>
        <p>
          In a distributed caching system, cached data is replicated across multiple nodes, 
          allowing for faster data access and improved fault tolerance. This architecture supports 
          load balancing and helps reduce latency, enhancing user experience.
        </p>
      </div>
      <div className="buttons-container">
        <button className="action-button">Explore More Caching Techniques</button>
        <button className="action-button">Understand Cache Invalidation Strategies</button>
      </div>
      <div className="caching-footer">
        Efficient distributed caching is critical for modern applications needing high availability and performance.
      </div>
    </div>
  );
}

export default DistributedCaching;
