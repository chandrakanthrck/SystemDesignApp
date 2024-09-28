import React from 'react';
import './CDN.css'; // Updated to use CDN-specific CSS file

function CDN() {
  return (
    <div className="cdn-container">
      <h2 className="cdn-title">Content Delivery Network (CDN)</h2>
      <p className="cdn-content">
        A Content Delivery Network (CDN) is a system of distributed servers that deliver web content 
        to a user based on their geographic location. CDNs improve the performance of content delivery 
        by caching content closer to users, reducing latency and load times.
      </p>
      <div className="cdn-diagram">
        <img src={`${process.env.PUBLIC_URL}/images/cdn-diagram.png`} alt="CDN Diagram" className="concept-image" />
        {/* Replace with an actual image link or interactive diagram */}
      </div>
      <div className="interactive-section">
        <h3 className="interactive-heading">Learn More About CDN Benefits</h3>
        <button className="interactive-button">Explore CDN Providers</button>
      </div>
      <ul className="cdn-list">
        <li>Reduces latency by caching content closer to the user.</li>
        <li>Handles increased traffic by distributing the load across multiple servers.</li>
        <li>Improves security through distributed denial of service (DDoS) protection.</li>
      </ul>
      <p className="cdn-note">
        Note: CDNs are critical for ensuring fast and efficient content delivery, especially for global users.
      </p>
    </div>
  );
}

export default CDN;
