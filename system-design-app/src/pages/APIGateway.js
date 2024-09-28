import React from 'react';
import './APIGateway.css';

function APIGateway() {
  return (
    <div className="api-gateway-container">
      <h2 className="api-gateway-title">API Gateway</h2>
      <p className="api-gateway-content">
        An API Gateway acts as an entry point for client requests to different microservices. It handles routing, 
        security, rate limiting, and load balancing, simplifying client interactions with back-end services.
      </p>
      <div className="api-gateway-diagram">
        <img src="path/to/api-gateway-diagram.png" alt="API Gateway Diagram" />
      </div>
      <div className="interactive-section">
        <h3 className="interactive-heading">Try It Out</h3>
        <button className="interactive-button">Simulate Request Flow</button>
      </div>
      <ul className="api-gateway-list">
        <li>Handles routing and request forwarding to appropriate services.</li>
        <li>Provides security by authenticating requests before reaching services.</li>
        <li>Implements rate limiting to prevent abuse.</li>
      </ul>
      <p className="api-gateway-note">
        Note: API Gateway acts as a crucial component for microservices, simplifying communication and reducing complexity on the client-side.
      </p>
    </div>
  );
}

export default APIGateway;
