import React from 'react';
import './RateLimiting.css'; // Ensure the correct CSS file is imported

function RateLimiting() {
  return (
    <div className="rate-limiting-container">
      <h2 className="rate-limiting-header">Rate Limiting</h2>
      <p className="rate-limiting-description">
        Rate limiting controls the number of requests a user can make in a given timeframe, 
        protecting systems from overload, abuse, and attacks while ensuring fair usage among users.
      </p>
      <div className="rate-limiting-diagram">
        <img src={`${process.env.PUBLIC_URL}/images/rate-limiting-diagram.png`} alt="Rate Limiting Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h2>Understanding Rate Limiting</h2>
        <p>Rate limiting is essential for maintaining the health of APIs and web services, allowing administrators to control traffic.</p>
      </div>
      <div className="rate-limiting-example">
        <h3>Example of Rate Limiting</h3>
        <p>For instance, an API might limit users to 100 requests per hour to prevent abuse and ensure service stability.</p>
      </div>
      <div className="buttons-container">
        <button className="action-button">Learn More About Rate Limiting</button>
        <button className="action-button">Explore Rate Limiting Techniques</button>
      </div>
      <div className="rate-limiting-footer">
        Implementing rate limiting helps improve security and manage resources effectively.
      </div>
    </div>
  );
}

export default RateLimiting;
