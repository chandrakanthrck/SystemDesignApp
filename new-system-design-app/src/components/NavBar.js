// src/components/NavBar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css'; // Import the CSS for styling

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="logo">
        System Design
        <p className="tagline">Making Complex Concepts Simple</p>
      </div>
      <ul className="navigation-list">
        <li><Link to="/cdn" className={`nav-link ${location.pathname === '/cdn' ? 'active' : ''}`}>CDN</Link></li>
        <li><Link to="/caching" className={`nav-link ${location.pathname === '/caching' ? 'active' : ''}`}>Caching</Link></li>
        <li><Link to="/distributed-caching" className={`nav-link ${location.pathname === '/distributed-caching' ? 'active' : ''}`}>Distributed Caching</Link></li>
        <li><Link to="/latency-throughput" className={`nav-link ${location.pathname === '/latency-throughput' ? 'active' : ''}`}>Latency vs Throughput</Link></li>
        <li><Link to="/cap-theorem" className={`nav-link ${location.pathname === '/cap-theorem' ? 'active' : ''}`}>CAP Theorem</Link></li>
        <li><Link to="/load-balancing" className={`nav-link ${location.pathname === '/load-balancing' ? 'active' : ''}`}>Load Balancing</Link></li>
        <li><Link to="/acid-transactions" className={`nav-link ${location.pathname === '/acid-transactions' ? 'active' : ''}`}>ACID Transactions</Link></li>
        <li><Link to="/sql-vs-nosql" className={`nav-link ${location.pathname === '/sql-vs-nosql' ? 'active' : ''}`}>SQL vs NoSQL</Link></li>
        <li><Link to="/consistent-hashing" className={`nav-link ${location.pathname === '/consistent-hashing' ? 'active' : ''}`}>Consistent Hashing</Link></li>
        <li><Link to="/database-index" className={`nav-link ${location.pathname === '/database-index' ? 'active' : ''}`}>Database Index</Link></li>
        <li><Link to="/rate-limiting" className={`nav-link ${location.pathname === '/rate-limiting' ? 'active' : ''}`}>Rate Limiting</Link></li>
        <li><Link to="/microservices" className={`nav-link ${location.pathname === '/microservices' ? 'active' : ''}`}>Microservices Architecture</Link></li>
        <li><Link to="/strong-eventual-consistency" className={`nav-link ${location.pathname === '/strong-eventual-consistency' ? 'active' : ''}`}>Strong vs Eventual Consistency</Link></li>
        <li><Link to="/rest-vs-rpc" className={`nav-link ${location.pathname === '/rest-vs-rpc' ? 'active' : ''}`}>REST vs RPC</Link></li>
        <li><Link to="/batch-stream-processing" className={`nav-link ${location.pathname === '/batch-stream-processing' ? 'active' : ''}`}>Batch vs Stream Processing</Link></li>
        <li><Link to="/heartbeat" className={`nav-link ${location.pathname === '/heartbeat' ? 'active' : ''}`}>HeartBeat</Link></li>
        <li><Link to="/circuit-breaker" className={`nav-link ${location.pathname === '/circuit-breaker' ? 'active' : ''}`}>Circuit Breaker</Link></li>
        <li><Link to="/idempotency" className={`nav-link ${location.pathname === '/idempotency' ? 'active' : ''}`}>Idempotency</Link></li>
        <li><Link to="/database-scaling" className={`nav-link ${location.pathname === '/database-scaling' ? 'active' : ''}`}>Database Scaling</Link></li>
        <li><Link to="/data-replication" className={`nav-link ${location.pathname === '/data-replication' ? 'active' : ''}`}>Data Replication</Link></li>
        <li><Link to="/data-redundancy" className={`nav-link ${location.pathname === '/data-redundancy' ? 'active' : ''}`}>Data Redundancy</Link></li>
        <li><Link to="/database-sharding" className={`nav-link ${location.pathname === '/database-sharding' ? 'active' : ''}`}>Database Sharding</Link></li>
        <li><Link to="/proxy-server" className={`nav-link ${location.pathname === '/proxy-server' ? 'active' : ''}`}>Proxy Server</Link></li>
        <li><Link to="/dns" className={`nav-link ${location.pathname === '/dns' ? 'active' : ''}`}>DNS</Link></li>
        <li><Link to="/message-queues" className={`nav-link ${location.pathname === '/message-queues' ? 'active' : ''}`}>Message Queues</Link></li>
        <li><Link to="/websockets" className={`nav-link ${location.pathname === '/websockets' ? 'active' : ''}`}>WebSockets</Link></li>
        <li><Link to="/consensus-algorithms" className={`nav-link ${location.pathname === '/consensus-algorithms' ? 'active' : ''}`}>Consensus Algorithms</Link></li>
        <li><Link to="/api-gateway" className={`nav-link ${location.pathname === '/api-gateway' ? 'active' : ''}`}>API Gateway</Link></li>
        <li><Link to="/distributed-locking" className={`nav-link ${location.pathname === '/distributed-locking' ? 'active' : ''}`}>Distributed Locking</Link></li>
        <li><Link to="/checksum" className={`nav-link ${location.pathname === '/checksum' ? 'active' : ''}`}>Checksum</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
