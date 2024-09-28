// src/pages/Quiz.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ACIDQuestions from '../data/ACIDQuestions';
import CAPTheoremQuestions from '../data/CAPTheoremQuestions';
import CDNQuestions from '../data/CDNQuestions';
import CachingQuestions from '../data/CachingQuestions';
import DatabaseScalingQuestions from '../data/DatabaseScalingQuestions';
import DatabaseIndexQuestions from '../data/DatabaseIndexQuestions';
import DistributedCachingQuestions from '../data/DistributedCachingQuestions';
import LoadBalancingQuestions from '../data/LoadBalancingQuestions';
import LatencyThroughputQuestions from '../data/LatencyThroughputQuestions';
import SQLvsNoSQLQuestions from '../data/SQLvsNoSQLQuestions';
import StrongVsEventualConsistencyQuestions from '../data/StrongVsEventualConsistencyQuestions';
import RESTvsRPCQuestions from '../data/RESTvsRPCQuestions';
import RateLimitingQuestions from '../data/RateLimitingQuestions';
import MicroservicesArchitectureQuestions from '../data/MicroservicesArchitectureQuestions';
import CircuitBreakerQuestions from '../data/CircuitBreakerQuestions';
import DataReplicationQuestions from '../data/DataReplicationQuestions';
import DataRedundancyQuestions from '../data/DataRedundancyQuestions';
import DatabaseShardingQuestions from '../data/DatabaseShardingQuestions';
import ProxyServerQuestions from '../data/ProxyServerQuestions';
import MessageQueuesQuestions from '../data/MessageQueuesQuestions';
import WebSocketsQuestions from '../data/WebSocketsQuestions';
import DNSQuestions from '../data/DNSQuestions';
import ConsensusAlgorithmsQuestions from '../data/ConsensusAlgorithmsQuestions';
import APIGatewayQuestions from '../data/APIGatewayQuestions';
import IdempotencyQuestions from '../data/IdempotencyQuestions';
import HeartBeatQuestions from '../data/HeartBeatQuestions';
import BatchVsStreamQuestions from '../data/BatchVsStreamQuestions';

const Quiz = () => {
  const { topic } = useParams(); // Get the topic from URL

  // Mapping topics to their respective questions
  const quizData = {
    'acid-transactions': ACIDQuestions,
    'cap-theorem': CAPTheoremQuestions,
    'cdn': CDNQuestions,
    'caching': CachingQuestions,
    'database-scaling': DatabaseScalingQuestions,
    'database-index': DatabaseIndexQuestions,
    'distributed-caching': DistributedCachingQuestions,
    'load-balancing': LoadBalancingQuestions,
    'latency-throughput': LatencyThroughputQuestions,
    'sql-vs-nosql': SQLvsNoSQLQuestions,
    'strong-eventual-consistency': StrongVsEventualConsistencyQuestions,
    'rest-vs-rpc': RESTvsRPCQuestions,
    'rate-limiting': RateLimitingQuestions,
    'microservices': MicroservicesArchitectureQuestions,
    'circuit-breaker': CircuitBreakerQuestions,
    'data-replication': DataReplicationQuestions,
    'data-redundancy': DataRedundancyQuestions,
    'database-sharding': DatabaseShardingQuestions,
    'proxy-server': ProxyServerQuestions,
    'message-queues': MessageQueuesQuestions,
    'websockets': WebSocketsQuestions,
    'dns': DNSQuestions,
    'consensus-algorithms': ConsensusAlgorithmsQuestions,
    'api-gateway': APIGatewayQuestions,
    'idempotency': IdempotencyQuestions,
    'heartbeat': HeartBeatQuestions,
    'batch-stream-processing': BatchVsStreamQuestions,
  };

  const questions = quizData[topic]; // Access the relevant questions

  return (
    <div>
      <h2>{topic.replace(/-/g, ' ')} Quiz</h2>
      {/* Add your quiz logic here using the `questions` array */}
      {questions ? (
        questions.map((question, index) => (
          <div key={index}>
            <p>{question.text}</p>
            {/* Add answer options and handling logic here */}
          </div>
        ))
      ) : (
        <p>No questions available for this topic.</p>
      )}
    </div>
  );
};

export default Quiz;
