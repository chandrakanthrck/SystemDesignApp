import React from 'react';
import './Concept.css';

function Caching() {
  return (
    <div className="concept">
      <h2>Caching</h2>
      <p>
        Caching is a technique used to store copies of files or data in a temporary storage location 
        to reduce latency and improve retrieval times. Caching can significantly enhance application 
        performance by minimizing the time taken to access frequently requested data.
      </p>
      <img src="path/to/caching-diagram.png" alt="Caching Diagram" className="concept-image" />
    </div>
  );
}

export default Caching;
