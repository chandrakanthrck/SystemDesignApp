import React from 'react';
import './Concept.css';

function APIGateway() {
  return (
    <div className="concept">
      <h2>API Gateway</h2>
      <p>
        An API Gateway acts as an entry point for client requests to different microservices. It handles routing, 
        security, rate limiting, and load balancing, simplifying client interactions with back-end services.
      </p>
      <img src="path/to/api-gateway-diagram.png" alt="API Gateway Diagram" className="concept-image" />
    </div>
  );
}

export default APIGateway;
