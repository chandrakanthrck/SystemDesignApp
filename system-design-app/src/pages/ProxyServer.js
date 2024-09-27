import React from 'react';
import './Concept.css';

function ProxyServer() {
  return (
    <div className="concept">
      <h2>Proxy Server</h2>
      <p>
        A proxy server acts as an intermediary between a client and the internet, enhancing security, privacy, and performance. 
        It is often used to cache web pages and reduce bandwidth usage.
      </p>
      <img src="path/to/proxy-server-diagram.png" alt="Proxy Server Diagram" className="concept-image" />
    </div>
  );
}

export default ProxyServer;
