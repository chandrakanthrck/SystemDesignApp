import React from 'react';
import './Microservices.css'; // Ensure the correct CSS file is imported

function MicroservicesArchitecture() {
  return (
    <div className="microservices-container">
      <h2 className="microservices-header">Microservices Architecture</h2>
      <p className="microservices-description">
        Microservices architecture enables the development of applications as a collection of loosely 
        coupled services, each responsible for a specific functionality, facilitating independent deployment 
        and scaling.
      </p>
      <div className="microservices-diagram">
        <img src={`${process.env.PUBLIC_URL}/images/microservices-architecture-diagram.png`} alt="Microservices Architecture Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h2>Key Features</h2>
        <p>Microservices allow teams to develop, deploy, and scale services independently, enhancing agility.</p>
      </div>
      <div className="microservices-example">
        <h3>Example of Microservices Architecture</h3>
        <p>An e-commerce application can have separate microservices for user management, product catalog, 
        and order processing, allowing them to be developed and scaled independently.</p>
      </div>
      <div className="microservices-architecture">
        <h2>Benefits of Microservices</h2>
        <p>Microservices enhance flexibility, improve fault isolation, and allow for the use of different technology stacks 
        within the same application.</p>
      </div>
      <div className="buttons-container">
        <button className="action-button">Learn More About Microservices</button>
        <button className="action-button">Explore Use Cases</button>
      </div>
      <div className="microservices-footer">
        Understanding microservices can significantly improve your application's scalability and maintainability.
      </div>
    </div>
  );
}

export default MicroservicesArchitecture;
