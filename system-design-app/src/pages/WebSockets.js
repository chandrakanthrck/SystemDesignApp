import React from 'react';
import './Concept.css';

function WebSockets() {
  return (
    <div className="concept">
      <h2>WebSockets</h2>
      <p>
        WebSockets provide full-duplex communication channels over a single TCP connection, enabling real-time, interactive communication 
        between clients and servers.
      </p>
      <img src="path/to/websockets-diagram.png" alt="WebSockets Diagram" className="concept-image" />
    </div>
  );
}

export default WebSockets;
