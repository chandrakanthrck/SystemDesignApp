import React from 'react';
import './Concept.css';

function BatchVsStreamProcessing() {
  return (
    <div className="concept">
      <h2>Batch Processing vs Stream Processing</h2>
      <p>
        Batch processing involves processing large volumes of data at intervals, whereas stream processing allows for continuous data processing. 
        Stream processing is useful for real-time analytics, while batch is better for large-scale data aggregation.
      </p>
      <img src="path/to/batch-vs-stream-diagram.png" alt="Batch vs Stream Processing Diagram" className="concept-image" />
    </div>
  );
}

export default BatchVsStreamProcessing;
