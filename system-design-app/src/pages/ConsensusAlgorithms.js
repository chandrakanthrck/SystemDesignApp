import React from 'react';
import './Concept.css';

function ConsensusAlgorithms() {
  return (
    <div className="concept">
      <h2>Consensus Algorithms</h2>
      <p>
        Consensus algorithms are protocols that help a distributed system agree on a common value. They are essential in ensuring 
        data consistency and reliability across nodes in a network. Popular examples include Paxos and Raft.
      </p>
      <img src="path/to/consensus-algorithms-diagram.png" alt="Consensus Algorithms Diagram" className="concept-image" />
    </div>
  );
}

export default ConsensusAlgorithms;
