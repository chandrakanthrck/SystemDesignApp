import React from 'react';
import './LoadBalancing.css'; // Ensure correct CSS import

function LoadBalancing() {
  return (
    <div className="lb-container">
      <h2 className="lb-header">Load Balancing</h2>
      <p className="lb-description">
        Load balancing is the process of distributing network traffic across multiple servers. 
        It enhances the availability and reliability of applications by ensuring no single server 
        becomes overwhelmed with too much traffic.
      </p>
      <div className="lb-diagram">
        <img src={`${process.env.PUBLIC_URL}/images/load-balancing-diagram.png`} alt="Load Balancing Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h2>Understanding Load Balancing</h2>
        <p>Load balancing helps in managing the load effectively across servers, improving performance and reliability.</p>
      </div>
      <div className="lb-example">
        <h3>Example of Load Balancing</h3>
        <p>For instance, in a web application, a load balancer can distribute requests among multiple servers to ensure no single server gets overwhelmed.</p>
      </div>
      <div className="lb-types">
        <h2>Types of Load Balancing</h2>
        <p>Load balancing can be done using various algorithms such as Round Robin, Least Connections, or IP Hash.</p>
      </div>
      <div className="buttons-container">
        <button className="action-button">Learn More About Load Balancers</button>
        <button className="action-button">Explore Network Optimization Techniques</button>
      </div>
      <div className="lb-footer">
        Load balancing is critical for maintaining optimal application performance and user satisfaction.
      </div>
    </div>
  );
}

export default LoadBalancing;
