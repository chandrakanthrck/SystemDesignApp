import React from 'react';
import './ConsistentHashing.css';

function ConsistentHashing() {
  return (
    <div className="consistent-hashing-container">
      <h2 className="consistent-hashing-title">Consistent Hashing</h2>
      <p className="consistent-hashing-content">
        Consistent hashing is a technique that allows a distributed system to efficiently handle 
        changes in node configurations with minimal disruption. It enables smooth scaling without 
        significant data movement, making it a key component in load balancing and distributed caching systems.
      </p>
      <div className="consistent-hashing-diagram">
        <img src="path/to/consistent-hashing-diagram.png" alt="Consistent Hashing Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h3 className="interactive-heading">Try Consistent Hashing in Action</h3>
        <button className="interactive-button">Simulate Node Addition</button>
        <button className="interactive-button">Simulate Node Removal</button>
      </div>
      <ul className="consistent-hashing-list">
        <li>Minimizes data reorganization during scaling events.</li>
        <li>Effective for balancing load in a distributed system.</li>
        <li>Popularly used in distributed caching and P2P networks.</li>
      </ul>
      <p className="consistent-hashing-note">
        Note: Consistent hashing helps achieve efficient and smooth transitions in dynamic distributed environments.
      </p>
    </div>
  );
}

export default ConsistentHashing;
