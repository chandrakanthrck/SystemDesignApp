// src/data/CircuitBreakerQuestions.js
const circuitBreakerQuestions = [
    { question: "What is the Circuit Breaker pattern?", answer: "A pattern that prevents a system from making repeated requests to a failing service" },
    { question: "How does the Circuit Breaker pattern help in system design?", answer: "It provides stability by isolating failures and prevents cascading errors" },
    { question: "What happens when a circuit breaker is 'open'?", answer: "Requests to the failing service are stopped until it recovers" },
    { question: "What are the main states of a circuit breaker?", answer: "Closed, Open, and Half-Open" },
    { question: "Why is the Circuit Breaker pattern important in microservices?", answer: "It helps prevent a failure in one service from affecting other services" },
    // Add 25 more questions to reach 30 questions
    { question: "What is the 'Closed' state in a Circuit Breaker?", answer: "The circuit is functioning normally, and all requests are being processed" },
    { question: "What is the 'Open' state in a Circuit Breaker?", answer: "The circuit breaker stops forwarding requests to a failing service" },
    { question: "What is the 'Half-Open' state?", answer: "The circuit breaker allows limited requests to test if the failing service has recovered" },
    { question: "What are cascading failures?", answer: "Failures that propagate through services due to repeated requests to a failing service" },
    { question: "How does a circuit breaker prevent cascading failures?", answer: "By halting requests to a failing service, isolating the failure" },
    { question: "What does a 'Threshold' represent in a circuit breaker?", answer: "The point at which the circuit breaker 'opens' after repeated failures" },
    { question: "What role does monitoring play in a circuit breaker?", answer: "Monitoring helps determine when to transition between states" },
    { question: "How does the Circuit Breaker pattern support resilience?", answer: "By ensuring failures are isolated and the rest of the system remains unaffected" },
    { question: "What happens during the 'Half-Open' state?", answer: "The circuit breaker tests the service with a few requests to check recovery" },
    { question: "Can a circuit breaker detect and recover from transient errors?", answer: "Yes, it can attempt to recover when the errors are no longer persistent" },
    { question: "How does a circuit breaker differ from a retry mechanism?", answer: "A retry mechanism keeps trying, while a circuit breaker 'breaks' the connection to stop repeated failures" },
    { question: "Why is it called a 'circuit breaker'?", answer: "Like an electrical circuit breaker, it stops the current (requests) to prevent damage (system failure)" },
    { question: "When should the circuit breaker be reset?", answer: "After the service shows signs of recovery during the 'Half-Open' state" },
    { question: "What is a fallback mechanism in a circuit breaker?", answer: "An alternative solution provided when a service fails, such as cached data" },
    { question: "How do circuit breakers contribute to load management?", answer: "By stopping requests to failing services, they reduce the load on those services" },
    { question: "What kind of system would benefit most from a circuit breaker?", answer: "A distributed system or a system with multiple microservices" },
    { question: "How does a circuit breaker protect against repeated failures?", answer: "By 'opening' the circuit and stopping the flow of requests to the failing service" },
    { question: "What is the purpose of the 'Timeout' setting in a circuit breaker?", answer: "It defines how long to wait before switching to the 'Half-Open' state" },
    { question: "What happens if requests succeed during the 'Half-Open' state?", answer: "The circuit closes, and the service is marked as recovered" },
    { question: "What happens if requests fail during the 'Half-Open' state?", answer: "The circuit reopens, and the failing service remains isolated" },
    { question: "What is meant by 'fuse burnout' in the context of circuit breakers?", answer: "A condition where continuous failures lead to prolonged isolation of a service" },
    { question: "Why is gradual recovery important in circuit breaker design?", answer: "It ensures that the service has fully recovered before resuming normal operations" },
    { question: "How does the Circuit Breaker pattern improve user experience?", answer: "By avoiding long waits and failed responses during service outages" },
    { question: "What kind of responses might be returned when a circuit breaker is 'open'?", answer: "Fallback responses, error messages, or cached data" },
    { question: "How does the Circuit Breaker pattern affect system reliability?", answer: "It makes the system more reliable by isolating failing components" },
  ];
  
  export default circuitBreakerQuestions;
  