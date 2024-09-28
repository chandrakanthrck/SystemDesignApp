import React from 'react';
import './DNS.css'; // Ensure correct CSS import

function DNS() {
  return (
    <div className="dns-container">
      <h2 className="dns-header">Domain Name System (DNS)</h2>
      <p className="dns-description">
        DNS translates human-readable domain names into IP addresses. It is the backbone of the internet, enabling users 
        to access websites without memorizing complex numeric addresses.
      </p>
      <div className="dns-diagram">
        <img src="path/to/dns-diagram.png" alt="DNS Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h2>Interactive DNS Simulation</h2>
        <button className="simulation-button">Simulate DNS Lookup</button>
      </div>
      <div className="dns-visuals">
        <h2>How DNS Works</h2>
        <p>
          DNS operates using a hierarchy of servers to resolve domain names. 
          It allows for the translation of user-friendly addresses into IP addresses that computers use to identify each other on the network.
        </p>
      </div>
      <div className="buttons-container">
        <button className="action-button">Learn More About Networking</button>
        <button className="action-button">Explore Other Protocols</button>
      </div>
      <div className="dns-footer">
        Understanding DNS is essential for anyone working with web technologies or managing online resources.
      </div>
    </div>
  );
}

export default DNS;
