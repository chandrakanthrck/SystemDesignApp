import React from 'react';
import './LatencyVsThroughput.css'; // Ensure correct CSS import

function LatencyThroughput() {
  return (
    <div className="lt-container">
      <h2 className="lt-header">Latency vs Throughput</h2>
      <p className="lt-description">
        Latency refers to the time taken for a data packet to travel from source to destination, 
        while throughput is the amount of data successfully transmitted over a given time frame. 
        Understanding the trade-offs between latency and throughput is crucial for optimizing 
        network performance.
      </p>
      <div className="lt-diagram">
        <img src={`${process.env.PUBLIC_URL}/images/latency-throughput-diagram.png`} alt="Latency vs Throughput Diagram" className="concept-image" />
      </div>
      <div className="lt-comparison">
        <h2>Understanding the Trade-offs</h2>
        <p>
          Lower latency is essential for applications requiring real-time communication, such as 
          online gaming or video conferencing, while higher throughput is beneficial for 
          transferring large amounts of data, such as file downloads or data backups.
        </p>
      </div>
      <div className="interactive-section">
        <h2>Latency vs Throughput Quiz</h2>
        <p>Test your understanding of latency and throughput! Click the button below to take a short quiz.</p>
        <button className="lt-quiz-button">Start Quiz</button>
      </div>
      <div className="lt-visuals">
        <h2>Visualizing Latency and Throughput</h2>
        <p>
          This section illustrates how latency and throughput interact and affect network performance 
          in various scenarios.
        </p>
      </div>
      <div className="buttons-container">
        <button className="action-button">Learn More About Network Optimization</button>
        <button className="action-button">Explore Real-Time Data Processing</button>
      </div>
      <div className="lt-footer">
        Understanding latency and throughput is key to building efficient and high-performing networks.
      </div>
    </div>
  );
}

export default LatencyThroughput;
