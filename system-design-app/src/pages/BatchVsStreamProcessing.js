import React from 'react';
import './BatchVsStreamProcessing.css';

function BatchVsStreamProcessing() {
  return (
    <div className="batch-stream-container">
      <h2 className="batch-stream-title">Batch Processing vs Stream Processing</h2>
      <p className="batch-stream-content">
        Batch processing involves processing large volumes of data at scheduled intervals, whereas stream processing allows for continuous 
        data processing in real-time. Stream processing is useful for real-time analytics, such as fraud detection, while batch processing 
        is better suited for scenarios like large-scale data aggregation or payroll systems.
      </p>
      <div className="batch-stream-diagram">
        <img src="path/to/batch-vs-stream-diagram.png" alt="Batch vs Stream Processing Diagram" />
      </div>
      <div className="interactive-section">
        <h3 className="interactive-heading">Explore More</h3>
        <button className="interactive-button">Compare Real-Time Examples</button>
      </div>
      <ul className="batch-stream-list">
        <li>Batch processing deals with large, static datasets processed in bulk at regular intervals.</li>
        <li>Stream processing involves handling data on the fly, suitable for low-latency applications.</li>
        <li>Batch processing is often easier to implement but lacks the responsiveness of stream processing.</li>
      </ul>
      <p className="batch-stream-note">
        Note: Choosing between batch and stream processing depends on the use case, available resources, and the need for real-time insights.
      </p>
    </div>
  );
}

export default BatchVsStreamProcessing;
