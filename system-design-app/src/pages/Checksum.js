import React from 'react';
import './Concept.css';

function Checksum() {
  return (
    <div className="concept">
      <h2>Checksum</h2>
      <p>
        A checksum is a small-sized datum derived from a larger data set to detect errors introduced during transmission or storage. 
        It ensures data integrity by verifying that the content received matches the content sent.
      </p>
      <img src="path/to/checksum-diagram.png" alt="Checksum Diagram" className="concept-image" />
    </div>
  );
}

export default Checksum;
