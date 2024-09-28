// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Import the CSS for styling

const NavBar = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/cdn" className="nav-link">CDN</Link></li>
        <li><Link to="/caching" className="nav-link">Caching</Link></li>
        <li><Link to="/distributed-caching" className="nav-link">Distributed Caching</Link></li>
        <li><Link to="/latency-throughput" className="nav-link">Latency vs Throughput</Link></li>
        <li><Link to="/cap-theorem" className="nav-link">CAP Theorem</Link></li>
        <li><Link to="/load-balancing" className="nav-link">Load Balancing</Link></li>
        <li><Link to="/acid-transactions" className="nav-link">ACID Transactions</Link></li>
        <li><Link to="/sql-vs-nosql" className="nav-link">SQL vs NoSQL</Link></li>
        <li><Link to="/consistent-hashing" className="nav-link">Consistent Hashing</Link></li>
        <li><Link to="/database-index" className="nav-link">Database Index</Link></li>
        <li><Link to="/rate-limiting" className="nav-link">Rate Limiting</Link></li>
        <li><Link to="/microservices" className="nav-link">Microservices Architecture</Link></li>
        <li><Link to="/strong-eventual-consistency" className="nav-link">Strong vs Eventual Consistency</Link></li>
        <li><Link to="/rest-vs-rpc" className="nav-link">REST vs RPC</Link></li>
        <li><Link to="/batch-stream-processing" className="nav-link">Batch vs Stream Processing</Link></li>
        <li><Link to="/heartbeat" className="nav-link">HeartBeat</Link></li>
        <li><Link to="/circuit-breaker" className="nav-link">Circuit Breaker</Link></li>
        <li><Link to="/idempotency" className="nav-link">Idempotency</Link></li>
        <li><Link to="/database-scaling" className="nav-link">Database Scaling</Link></li>
        <li><Link to="/data-replication" className="nav-link">Data Replication</Link></li>
        <li><Link to="/data-redundancy" className="nav-link">Data Redundancy</Link></li>
        <li><Link to="/database-sharding" className="nav-link">Database Sharding</Link></li>
        <li><Link to="/proxy-server" className="nav-link">Proxy Server</Link></li>
        <li><Link to="/dns" className="nav-link">DNS</Link></li>
        <li><Link to="/message-queues" className="nav-link">Message Queues</Link></li>
        <li><Link to="/websockets" className="nav-link">WebSockets</Link></li>
        <li><Link to="/consensus-algorithms" className="nav-link">Consensus Algorithms</Link></li>
        <li><Link to="/api-gateway" className="nav-link">API Gateway</Link></li>
        <li><Link to="/distributed-locking" className="nav-link">Distributed Locking</Link></li>
        <li><Link to="/checksum" className="nav-link">Checksum</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
