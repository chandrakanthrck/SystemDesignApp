import React from 'react';
import './Idempotency.css'; // Ensure correct CSS import

function Idempotency() {
  return (
    <div className="idempotency-container">
      <h2 className="idempotency-header">Understanding Idempotency</h2>
      <p className="idempotency-description">
        Idempotency refers to an operation's ability to produce the same result, regardless of how many times it is executed. 
        This property is crucial for retrying network requests without causing unintended consequences.
      </p>
      <div className="idempotency-diagram">
        <img src={`${process.env.PUBLIC_URL}/images/idempotency-diagram.png`} alt="Idempotency Diagram" className="concept-image" />
      </div>
      <div className="examples-section">
        <h2>Examples of Idempotency</h2>
        <p>
          A classic example of an idempotent operation is the HTTP GET request. 
          Repeated GET requests will yield the same result without causing any changes on the server. 
          In contrast, a POST request that creates a new resource is not idempotent because repeated requests will create multiple resources.
        </p>
      </div>
      <div className="interactive-section">
        <h2>Idempotency Quiz</h2>
        <p>Test your knowledge about idempotency! Click the button below to take a short quiz.</p>
        <button className="idempotency-quiz-button">Start Quiz</button>
      </div>
      <div className="idempotency-visuals">
        <h2>Visualizing Idempotency</h2>
        <p>
          Visualizing how idempotency works can help clarify its importance in API design and 
          distributed systems. Below, we explore scenarios and their outcomes.
        </p>
      </div>
      <div className="buttons-container">
        <button className="action-button">Learn More About API Design</button>
        <button className="action-button">Explore Retry Mechanisms</button>
      </div>
      <div className="idempotency-footer">
        Understanding idempotency helps in building robust and reliable systems, especially in microservices architecture.
      </div>
    </div>
  );
}

export default Idempotency;
