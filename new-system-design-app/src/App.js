// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './styles/App.css';

import CDN from './pages/CDN';
import Caching from './pages/Caching';
import DistributedCaching from './pages/DistributedCaching';
import LatencyVsThroughput from './pages/LatencyVsThroughput';
import CAPTheorem from './pages/CAPTheorem';
import LoadBalancing from './pages/LoadBalancing';
import ACIDTransactions from './pages/ACIDTransactions';
import SQLvsNoSQL from './pages/SQLvsNoSQL';
import ConsistentHashing from './pages/ConsistentHashing';
import DatabaseIndex from './pages/DatabaseIndex';
import RateLimiting from './pages/RateLimiting';
import Microservices from './pages/Microservices';
import StrongVsEventualConsistency from './pages/StrongVsEventualConsistency';
import RESTvsRPC from './pages/RESTvsRPC';
import BatchVsStreamProcessing from './pages/BatchVsStreamProcessing';
import HeartBeat from './pages/HeartBeat';
import CircuitBreaker from './pages/CircuitBreaker';
import Idempotency from './pages/Idempotency';
import DatabaseScaling from './pages/DatabaseScaling';
import DataReplication from './pages/DataReplication';
import DataRedundancy from './pages/DataRedundancy';
import DatabaseSharding from './pages/DatabaseSharding';
import ProxyServer from './pages/ProxyServer';
import DNS from './pages/DNS';
import MessageQueues from './pages/MessageQueues';
import WebSockets from './pages/WebSockets';
import ConsensusAlgorithms from './pages/ConsensusAlgorithms';
import APIGateway from './pages/APIGateway';
import DistributedLocking from './pages/DistributedLocking';
import Checksum from './pages/Checksum';
import Quiz from './pages/Quiz';
import HomePage from './pages/HomePage'; // Add your homepage import

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Default route */}
          <Route path="/cdn" element={<CDN />} />
          <Route path="/caching" element={<Caching />} />
          <Route path="/distributed-caching" element={<DistributedCaching />} />
          <Route path="/latency-throughput" element={<LatencyVsThroughput />} />
          <Route path="/cap-theorem" element={<CAPTheorem />} />
          <Route path="/load-balancing" element={<LoadBalancing />} />
          <Route path="/acid-transactions" element={<ACIDTransactions />} />
          <Route path="/sql-vs-nosql" element={<SQLvsNoSQL />} />
          <Route path="/consistent-hashing" element={<ConsistentHashing />} />
          <Route path="/database-index" element={<DatabaseIndex />} />
          <Route path="/rate-limiting" element={<RateLimiting />} />
          <Route path="/microservices" element={<Microservices />} />
          <Route path="/strong-eventual-consistency" element={<StrongVsEventualConsistency />} />
          <Route path="/rest-vs-rpc" element={<RESTvsRPC />} />
          <Route path="/batch-stream-processing" element={<BatchVsStreamProcessing />} />
          <Route path="/heartbeat" element={<HeartBeat />} />
          <Route path="/circuit-breaker" element={<CircuitBreaker />} />
          <Route path="/idempotency" element={<Idempotency />} />
          <Route path="/database-scaling" element={<DatabaseScaling />} />
          <Route path="/data-replication" element={<DataReplication />} />
          <Route path="/data-redundancy" element={<DataRedundancy />} />
          <Route path="/database-sharding" element={<DatabaseSharding />} />
          <Route path="/proxy-server" element={<ProxyServer />} />
          <Route path="/dns" element={<DNS />} />
          <Route path="/message-queues" element={<MessageQueues />} />
          <Route path="/websockets" element={<WebSockets />} />
          <Route path="/consensus-algorithms" element={<ConsensusAlgorithms />} />
          <Route path="/api-gateway" element={<APIGateway />} />
          <Route path="/distributed-locking" element={<DistributedLocking />} />
          <Route path="/checksum" element={<Checksum />} />
          <Route path="/quiz/:topic" element={<Quiz />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
