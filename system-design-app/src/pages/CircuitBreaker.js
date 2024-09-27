import React from 'react';
import './Concept.css';

function CircuitBreaker() {
  return (
    <div className="concept">
      <h2>Circuit Breaker</h2>
      <p>
        The Circuit Breaker pattern prevents the system from making repeated requests to a failing service. It "breaks" the circuit, 
        ensuring resources are conserved until the failing service recovers.
      </p>
      <img src="path/to/circuit-breaker-diagram.png" alt="Circuit Breaker Diagram" className="concept-image" />
    </div>
  );
}

export default CircuitBreaker;
