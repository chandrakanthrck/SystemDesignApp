import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import HomePage from './pages/HomePage';
import ContentDeliveryNetwork from './pages/ContentDeliveryNetwork';
import Caching from './pages/Caching';
import DistributedCaching from './pages/DistributedCaching';
import LatencyThroughput from './pages/LatencyThroughput';
import CAPTheorem from './pages/CAPTheorem';
import LoadBalancing from './pages/LoadBalancing';
import ACIDTransactions from './pages/ACIDTransactions';
import SQLvsNoSQL from './pages/SQLvsNoSQL';
import ConsistentHashing from './pages/ConsistentHashing';
import DatabaseIndex from './pages/DatabaseIndex';
import RateLimiting from './pages/RateLimiting';
import MicroservicesArchitecture from './pages/MicroservicesArchitecture';
import StrongEventualConsistency from './pages/StrongEventualConsistency';
import RESTvsRPC from './pages/RESTvsRPC';
import BatchStreamProcessing from './pages/BatchStreamProcessing';
import HeartBeat from './pages/HeartBeat';
import CircuitBreaker from './pages/CircuitBreaker';
import Idempotency from './pages/Idempotency';
import DatabaseScaling from './pages/DatabaseScaling';
import DataReplication from './pages/DataReplication';
import DataRedundancy from './pages/DataRedundancy';
import DatabaseSharding from './pages/DatabaseSharding';
import ProxyServer from './pages/ProxyServer';
import DomainNameSystem from './pages/DomainNameSystem';
import MessageQueues from './pages/MessageQueues';
import WebSockets from './pages/WebSockets';
import ConsensusAlgorithms from './pages/ConsensusAlgorithms';
import APIGateway from './pages/APIGateway';
import DistributedLocking from './pages/DistributedLocking';
import Checksum from './pages/Checksum';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cdn" component={ContentDeliveryNetwork} />
          <Route path="/caching" component={Caching} />
          <Route path="/distributed-caching" component={DistributedCaching} />
          <Route path="/latency-throughput" component={LatencyThroughput} />
          <Route path="/cap-theorem" component={CAPTheorem} />
          <Route path="/load-balancing" component={LoadBalancing} />
          <Route path="/acid-transactions" component={ACIDTransactions} />
          <Route path="/sql-vs-nosql" component={SQLvsNoSQL} />
          <Route path="/consistent-hashing" component={ConsistentHashing} />
          <Route path="/database-index" component={DatabaseIndex} />
          <Route path="/rate-limiting" component={RateLimiting} />
          <Route path="/microservices" component={MicroservicesArchitecture} />
          <Route path="/strong-eventual-consistency" component={StrongEventualConsistency} />
          <Route path="/rest-vs-rpc" component={RESTvsRPC} />
          <Route path="/batch-stream-processing" component={BatchStreamProcessing} />
          <Route path="/heartbeat" component={HeartBeat} />
          <Route path="/circuit-breaker" component={CircuitBreaker} />
          <Route path="/idempotency" component={Idempotency} />
          <Route path="/database-scaling" component={DatabaseScaling} />
          <Route path="/data-replication" component={DataReplication} />
          <Route path="/data-redundancy" component={DataRedundancy} />
          <Route path="/database-sharding" component={DatabaseSharding} />
          <Route path="/proxy-server" component={ProxyServer} />
          <Route path="/dns" component={DomainNameSystem} />
          <Route path="/message-queues" component={MessageQueues} />
          <Route path="/websockets" component={WebSockets} />
          <Route path="/consensus-algorithms" component={ConsensusAlgorithms} />
          <Route path="/api-gateway" component={APIGateway} />
          <Route path="/distributed-locking" component={DistributedLocking} />
          <Route path="/checksum" component={Checksum} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
