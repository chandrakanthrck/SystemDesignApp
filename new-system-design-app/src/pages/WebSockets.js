import React from 'react';
import './WebSockets.css'; // Ensure the correct CSS file is imported

function WebSockets() {
  return (
    <div className="websocket-container">
      <h2 className="websocket-header">WebSockets</h2>
      <p className="websocket-description">
        WebSockets provide full-duplex communication channels over a single TCP connection, enabling real-time, interactive communication 
        between clients and servers.
      </p>
      <div className="websocket-diagram">
        <img src={`${process.env.PUBLIC_URL}/images/websockets-diagram.png`} alt="WebSockets Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h2>Explore WebSockets</h2>
        <button className="websocket-button">Start WebSocket Connection</button>
        <div className="message-box">
          <p>Send and receive messages in real-time using WebSockets!</p>
        </div>
        <div className="connection-status">
          <span>Status: </span><span className="connected">Connected</span>
        </div>
      </div>
    </div>
  );
}

export default WebSockets;
