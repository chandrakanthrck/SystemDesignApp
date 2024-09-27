import React from 'react';
import './Concept.css';

function RateLimiting() {
  return (
    <div className="concept">
      <h2>Rate Limiting</h2>
      <p>
        Rate limiting controls the number of requests a user can make in a given timeframe, 
        protecting systems from overload, abuse, and attacks while ensuring fair usage among users.
      </p>
      <img src="path/to/rate-limiting-diagram.png" alt="Rate Limiting Diagram" className="concept-image" />
    </div>
  );
}

export default RateLimiting;
