import React from 'react';
import './Concept.css';

function MicroservicesArchitecture() {
  return (
    <div className="concept">
      <h2>Microservices Architecture</h2>
      <p>
        Microservices architecture enables the development of applications as a collection of loosely 
        coupled services, each responsible for a specific functionality, facilitating independent deployment 
        and scaling.
      </p>
      <img src="path/to/microservices-architecture-diagram.png" alt="Microservices Architecture Diagram" className="concept-image" />
    </div>
  );
}

export default MicroservicesArchitecture;
