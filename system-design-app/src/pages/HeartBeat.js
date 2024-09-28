import React from 'react';
import './HeartBeat.css'; // Ensure correct CSS import

function HeartBeat() {
  return (
    <div className="heartbeat-container">
      <h2 className="heartbeat-header">HeartBeat Mechanism</h2>
      <p className="heartbeat-description">
        The heartbeat mechanism is used to detect if nodes in a distributed system are alive. It involves sending regular signals 
        between nodes to ensure everything is operational and responsive.
      </p>
      <div className="heartbeat-diagram">
        <img src="path/to/heartbeat-diagram.png" alt="Heartbeat Mechanism Diagram" className="concept-image" />
      </div>
      <div className="heartbeat-simulation">
        <h2>Interactive HeartBeat Simulation</h2>
        <button className="simulation-button">Simulate Heartbeat Check</button>
      </div>
      <div className="heartbeat-visuals">
        <h2>How Heartbeat Works</h2>
        <p>
          Heartbeat signals help monitor the health of nodes in a distributed system. If a node fails to send a heartbeat signal 
          within a certain time frame, it is considered to be down, allowing for prompt action to be taken.
        </p>
      </div>
      <div className="buttons-container">
        <button className="action-button">Learn More About Distributed Systems</button>
        <button className="action-button">Explore Monitoring Techniques</button>
      </div>
      <div className="heartbeat-footer">
        Effective heartbeat mechanisms are crucial for maintaining system reliability and quick recovery from failures.
      </div>
    </div>
  );
}

export default HeartBeat;
