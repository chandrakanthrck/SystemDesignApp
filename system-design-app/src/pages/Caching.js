import React from 'react';
import './Caching.css';

function Caching() {
  return (
    <div className="caching-container">
      <h2 className="caching-title">Caching</h2>
      <p className="caching-content">
        Caching is a technique used to store copies of files or data in a temporary storage location 
        to reduce latency and improve retrieval times. Caching can significantly enhance application 
        performance by minimizing the time taken to access frequently requested data.
      </p>
      <div className="caching-diagram">
        <img src="path/to/caching-diagram.png" alt="Caching Diagram" />
      </div>
      <div className="interactive-section">
        <h3 className="interactive-heading">Explore Caching Strategies</h3>
        <button className="interactive-button">View Popular Caching Techniques</button>
      </div>
      <ul className="caching-list">
        <li>Memory caching helps reduce database load by storing frequently accessed data.</li>
        <li>Content delivery network (CDN) caching stores copies of static assets to reduce latency for users.</li>
        <li>Client-side caching stores data on the user device, improving user experience and performance.</li>
      </ul>
      <p className="caching-note">
        Note: The choice of caching strategy depends on the use case, data type, and performance goals.
      </p>
    </div>
  );
}

export default Caching;
