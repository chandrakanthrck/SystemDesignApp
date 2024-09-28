import React from 'react';
import './Checksum.css'; // Updated to use Checksum-specific CSS file

function Checksum() {
  return (
    <div className="checksum-container">
      <h2 className="checksum-title">Checksum</h2>
      <p className="checksum-content">
        A checksum is a small-sized datum derived from a larger data set to detect errors introduced during transmission or storage. 
        It ensures data integrity by verifying that the content received matches the content sent.
      </p>
      <div className="checksum-diagram">
        <img src="path/to/checksum-diagram.png" alt="Checksum Diagram" className="concept-image" />
        {/* Replace with an actual image link or interactive diagram */}
      </div>
      <div className="interactive-section">
        <h3 className="interactive-heading">Explore Checksum Usage</h3>
        <button className="interactive-button">Learn More About Checksums</button>
      </div>
      <ul className="checksum-list">
        <li>Ensures data integrity during storage or transmission.</li>
        <li>Helps in detecting accidental changes in data.</li>
        <li>Used in networking protocols to verify packet integrity.</li>
      </ul>
      <p className="checksum-note">
        Note: Checksums are effective in detecting accidental errors but are not foolproof against intentional alterations or attacks.
      </p>
    </div>
  );
}

export default Checksum;
