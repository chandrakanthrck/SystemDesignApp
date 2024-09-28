import React from 'react';
import './CircuitBreaker.css';

function CircuitBreaker() {
  return (
    <div className="circuitbreaker-container">
      <h2 className="circuitbreaker-title">Circuit Breaker</h2>
      <p className="circuitbreaker-content">
        The Circuit Breaker pattern prevents the system from making repeated requests to a failing service. It "breaks" the circuit, 
        ensuring resources are conserved until the failing service recovers.
      </p>
      <div className="circuitbreaker-diagram">
        <img src="path/to/circuit-breaker-diagram.png" alt="Circuit Breaker Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h3 className="interactive-heading">Learn How Circuit Breaker Works</h3>
        <button className="interactive-button">Explore Circuit Breaker in Action</button>
      </div>
      <ul className="circuitbreaker-list">
        <li>Protects resources by halting requests to failing services.</li>
        <li>Provides stability by isolating failures.</li>
        <li>Allows gradual recovery by monitoring the status of the service.</li>
      </ul>
      <p className="circuitbreaker-note">
        Note: The Circuit Breaker pattern is a critical component in resilient system design, particularly in microservices architectures.
      </p>
    </div>
  );
}

export default CircuitBreaker;
