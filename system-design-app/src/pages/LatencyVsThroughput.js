import React from 'react';
import './Concept.css';

function LatencyThroughput() {
  return (
    <div className="concept">
      <h2>Latency vs Throughput</h2>
      <p>
        Latency refers to the time taken for a data packet to travel from source to destination, 
        while throughput is the amount of data successfully transmitted over a given time frame. 
        Understanding the trade-offs between latency and throughput is crucial for optimizing 
        network performance.
      </p>
      <img src="path/to/latency-throughput-diagram.png" alt="Latency vs Throughput Diagram" className="concept-image" />
    </div>
  );
}

export default LatencyThroughput;
