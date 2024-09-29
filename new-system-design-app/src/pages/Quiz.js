import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Quiz.css';
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

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

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz Finished! Your score: ${score + (isCorrect ? 1 : 0)} out of ${questions.length}`);
      // Resetting quiz for the same topic
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  return (
    <div>
      <h2>{topic.replace(/-/g, ' ')} Quiz</h2>
      {questions ? (
        <div>
          <h3>Question {currentQuestionIndex + 1} of {questions.length}</h3>
          <p>{questions[currentQuestionIndex].text}</p>
          <div>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.isCorrect)}
                className="quiz-option-button"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p>No questions available for this topic.</p>
      )}
    </div>
  );
};

export default Quiz;
