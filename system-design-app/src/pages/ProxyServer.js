import React from 'react';
import './ProxyServer.css'; // Ensure the correct CSS file is imported

function ProxyServer() {
  return (
    <div className="proxy-server-container">
      <h2 className="proxy-server-header">Proxy Server</h2>
      <p className="proxy-server-description">
        A proxy server acts as an intermediary between a client and the internet, enhancing security, privacy, and performance. 
        It is often used to cache web pages and reduce bandwidth usage.
      </p>
      <div className="proxy-server-diagram">
        <img src="path/to/proxy-server-diagram.png" alt="Proxy Server Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h2>How Proxy Servers Work</h2>
        <p>Proxy servers intercept requests from clients and forward them to the intended server, then return the response to the client.</p>
      </div>
      <div className="proxy-server-example">
        <h3>Example of Proxy Server Usage</h3>
        <p>Many organizations use proxy servers to control employee internet access and to monitor web traffic for security purposes.</p>
      </div>
      <div className="buttons-container">
        <button className="action-button">Learn More About Proxy Servers</button>
        <button className="action-button">Explore Security Benefits</button>
      </div>
      <div className="proxy-server-footer">
        Understanding proxy servers can help you enhance your online security and optimize network performance.
      </div>
    </div>
  );
}

export default ProxyServer;
