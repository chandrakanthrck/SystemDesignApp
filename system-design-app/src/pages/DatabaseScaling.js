import React from 'react';
import './DatabaseScaling.css';

function DatabaseScaling() {
  return (
    <div className="scaling-container">
      <h2 className="scaling-header">Database Scaling</h2>
      <p className="scaling-description">
        Database scaling refers to improving the database's capacity to handle increasing workloads. There are two common 
        approaches to scaling databases: 
      </p>
      <ul className="scaling-description">
        <li>Vertical Scaling: Adding more power (CPU, RAM, etc.) to an existing server.</li>
        <li>Horizontal Scaling: Adding more servers to distribute the load.</li>
      </ul>
      <div className="scaling-diagram">
        <img src={`${process.env.PUBLIC_URL}/images/database-scaling-diagram.png`} alt="Database Scaling Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h2>Interactive Scaling Simulation</h2>
        <button className="scaling-simulation-button">Simulate Vertical Scaling</button>
        <button className="scaling-simulation-button">Simulate Horizontal Scaling</button>
      </div>
      <div className="scaling-types-section">
        <h3>Scaling Types Explained</h3>
        <p>
          Vertical scaling is often easier to implement as it requires upgrading the existing server, but it is limited by the 
          capacity of a single machine. Horizontal scaling, on the other hand, allows for virtually limitless scaling by 
          adding more machines to share the load, which is more effective for distributed applications.
        </p>
      </div>
      <div className="scaling-buttons-container">
        <button className="scaling-action-button">Learn More About Vertical Scaling</button>
        <button className="scaling-action-button">Learn More About Horizontal Scaling</button>
      </div>
      <div className="scaling-footer">
        Scaling databases effectively ensures that your application remains performant, regardless of growth in data or user traffic.
      </div>
    </div>
  );
}

export default DatabaseScaling;
