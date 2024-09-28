import React from 'react';
import './CAPTheorem.css';

function CAPTheorem() {
  return (
    <div className="cap-container">
      <h2 className="cap-title">CAP Theorem</h2>
      <p className="cap-content">
        The CAP theorem states that in a distributed data store, it is impossible to guarantee 
        all three of the following: <strong>Consistency</strong>, <strong>Availability</strong>, and 
        <strong> Partition Tolerance</strong>. Understanding this trade-off helps in designing systems 
        that meet specific needs.
      </p>
      <div className="cap-diagram">
        <img src="path/to/cap-theorem-diagram.png" alt="CAP Theorem Diagram" />
      </div>
      <div className="interactive-section">
        <h3 className="interactive-heading">Explore CAP Theorem in Action</h3>
        <button className="interactive-button">Learn More about Consistency, Availability, and Partition Tolerance</button>
      </div>
      <ul className="cap-list">
        <li><strong>Consistency (C)</strong>: Every read receives the most recent write or an error.</li>
        <li><strong>Availability (A)</strong>: Every request receives a response, without guarantee that it contains the most recent write.</li>
        <li><strong>Partition Tolerance (P)</strong>: The system continues to operate despite an arbitrary number of messages being dropped by the network between nodes.</li>
      </ul>
      <p className="cap-note">
        Note: In a real-world distributed system, it's crucial to determine which two out of these three guarantees are most important to your application's requirements.
      </p>
    </div>
  );
}

export default CAPTheorem;
