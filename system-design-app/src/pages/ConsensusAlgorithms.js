import React from 'react';
import './ConsensusAlgorithms.css';

function ConsensusAlgorithms() {
  return (
    <div className="consensus-container">
      <h2 className="consensus-title">Consensus Algorithms</h2>
      <p className="consensus-content">
        Consensus algorithms are protocols that help a distributed system agree on a common value. They are essential in ensuring 
        data consistency and reliability across nodes in a network. Popular examples include Paxos and Raft.
      </p>
      <div className="consensus-diagram">
        <img src="path/to/consensus-algorithms-diagram.png" alt="Consensus Algorithms Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h3 className="interactive-heading">Explore Consensus in Action</h3>
        <button className="interactive-button">Simulate Consensus Process</button>
      </div>
      <ul className="consensus-list">
        <li>Ensures data consistency in distributed systems.</li>
        <li>Helps maintain reliability even in case of network partitions.</li>
        <li>Popular algorithms include Paxos, Raft, and Byzantine Fault Tolerance.</li>
      </ul>
      <p className="consensus-note">
        Note: Consensus algorithms are foundational in blockchain technology and distributed databases to achieve agreement among nodes.
      </p>
    </div>
  );
}

export default ConsensusAlgorithms;
