import React from 'react';
import './Concept.css';

function DNS() {
  return (
    <div className="concept">
      <h2>Domain Name System (DNS)</h2>
      <p>
        DNS translates human-readable domain names into IP addresses. It is the backbone of the internet, enabling users 
        to access websites without memorizing complex numeric addresses.
      </p>
      <img src="path/to/dns-diagram.png" alt="DNS Diagram" className="concept-image" />
    </div>
  );
}

export default DNS;
