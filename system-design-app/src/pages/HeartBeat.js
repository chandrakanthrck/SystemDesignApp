import React from 'react';
import './Concept.css';

function HeartBeat() {
  return (
    <div className="concept">
      <h2>HeartBeat</h2>
      <p>
        The heartbeat mechanism is used to detect if nodes in a distributed system are alive. It involves sending regular signals 
        between nodes to ensure everything is operational.
      </p>
      <img src="path/to/heartbeat-diagram.png" alt="Heartbeat Mechanism Diagram" className="concept-image" />
    </div>
  );
}

export default HeartBeat;
