// src/data/StrongVsEventualConsistencyQuestions.js
const strongVsEventualConsistencyQuestions = [
    { question: "What is strong consistency?", answer: "Ensures that any subsequent access returns the most recent value after an update." },
    { question: "What is eventual consistency?", answer: "Ensures that all replicas of data will eventually be consistent after some time." },
    { question: "Which type of consistency guarantees immediate reflection of data changes?", answer: "Strong consistency" },
    { question: "What is a common use case for eventual consistency?", answer: "Social media updates, where high availability is prioritized." },
    { question: "Does strong consistency compromise availability?", answer: "Yes, to maintain consistency, availability can be affected." },
    { question: "How does eventual consistency affect read operations?", answer: "Reads may return stale data until all nodes are consistent." },
    { question: "Which type of consistency is suitable for financial transactions?", answer: "Strong consistency" },
    { question: "What is the main advantage of eventual consistency?", answer: "High availability and partition tolerance." },
    { question: "Does eventual consistency guarantee data correctness immediately?", answer: "No, it ensures eventual correctness." },
    { question: "What is the CAP theorem in relation to consistency?", answer: "It states that a distributed system can only provide two out of three: Consistency, Availability, Partition tolerance." },
    { question: "Which consistency model allows for stale reads?", answer: "Eventual consistency" },
    { question: "Can strong consistency affect system performance?", answer: "Yes, it often comes at the cost of latency." },
    { question: "What is a trade-off of using strong consistency in distributed systems?", answer: "Reduced availability during network partitions." },
    { question: "In which consistency model can updates be delayed across nodes?", answer: "Eventual consistency" },
    { question: "Which consistency is prioritized in systems that require immediate accuracy?", answer: "Strong consistency" },
    { question: "How does eventual consistency improve scalability?", answer: "It allows updates to propagate slowly, improving system availability." },
    { question: "What does strong consistency ensure in terms of data?", answer: "All nodes have the latest updated data." },
    { question: "What is the key difference between strong and eventual consistency?", answer: "Strong consistency provides immediate updates, while eventual consistency allows delays." },
    { question: "What kind of system is an eventual consistency model best for?", answer: "Distributed systems where availability is critical." },
    { question: "Is eventual consistency ACID-compliant?", answer: "No, it is generally BASE (Basically Available, Soft state, Eventually consistent)." },
    { question: "Which model allows for faster writes: Strong or Eventual Consistency?", answer: "Eventual Consistency" },
    { question: "Does eventual consistency guarantee no data conflicts?", answer: "No, data conflicts may need to be resolved later." },
    { question: "Can strong consistency lead to higher latencies?", answer: "Yes, due to the need to synchronize across all nodes." },
    { question: "Which consistency model is used in DynamoDB by default?", answer: "Eventual consistency" },
    { question: "What is an example of an application using strong consistency?", answer: "Banking systems where transaction accuracy is crucial." },
    { question: "Which consistency type is more resilient to network failures?", answer: "Eventual consistency" },
    { question: "Does strong consistency fit well with partitioned networks?", answer: "No, it struggles with partition tolerance." },
    { question: "What does CAP stand for?", answer: "Consistency, Availability, Partition Tolerance" },
    { question: "Is strong consistency better for write-heavy applications?", answer: "No, it can slow down write performance due to synchronization." },
    { question: "In which consistency model is the user more likely to see stale data?", answer: "Eventual consistency" },
  ];
  
  export default strongVsEventualConsistencyQuestions;
  