import React from 'react';
import './Concept.css'; // Create a separate CSS file for styling

function CDN() {
  return (
    <div className="concept">
      <h2>Content Delivery Network (CDN)</h2>
      <p>
        A Content Delivery Network (CDN) is a system of distributed servers that deliver web content 
        to a user based on their geographic location. CDNs improve the performance of content delivery 
        by caching content closer to users, reducing latency and load times.
      </p>
      <img src="path/to/cdn-diagram.png" alt="CDN Diagram" className="concept-image" />
      {/* Replace with an actual image link or interactive diagram */}
    </div>
  );
}

export default CDN;
