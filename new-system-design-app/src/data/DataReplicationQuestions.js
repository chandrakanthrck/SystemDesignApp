// src/data/DataReplicationQuestions.js
const dataReplicationQuestions = [
    { question: "What is data replication?", answer: "Copying data across multiple locations to improve data availability and resilience" },
    { question: "Why is data replication important?", answer: "To ensure data remains accessible in case of server failures" },
    { question: "What are the two primary types of data replication?", answer: "Synchronous and asynchronous replication" },
    { question: "How does synchronous replication work?", answer: "Data is copied in real-time to ensure all replicas are up-to-date" },
    { question: "What is asynchronous replication?", answer: "Data is copied after the write operation, allowing some lag between master and replicas" },
    // Add 25 more questions to reach 30 questions
    { question: "How does data replication improve reliability?", answer: "By maintaining multiple copies, ensuring data is available even if one copy fails" },
    { question: "What is the main difference between synchronous and asynchronous replication?", answer: "Synchronous replication is real-time, while asynchronous replication allows for some delay" },
    { question: "Which type of replication is better for real-time applications?", answer: "Synchronous replication" },
    { question: "How does asynchronous replication reduce system load?", answer: "By allowing updates to replicas to happen after the initial write operation" },
    { question: "What is a potential downside of asynchronous replication?", answer: "There is a lag between updates, which can lead to inconsistent data" },
    { question: "What is a common use case for data replication?", answer: "Ensuring high availability in distributed systems" },
    { question: "How does replication help with disaster recovery?", answer: "By maintaining copies of data in different locations, it ensures data can be recovered after a failure" },
    { question: "What is meant by 'eventual consistency' in replication?", answer: "Over time, all replicas will become consistent, though they may be out of sync temporarily" },
    { question: "What kind of systems benefit most from data replication?", answer: "Distributed systems that require high availability and fault tolerance" },
    { question: "How does replication improve read performance?", answer: "Read requests can be distributed across multiple replicas, reducing load on a single source" },
    { question: "What is a 'master-slave' replication model?", answer: "A model where one server (master) is used for writes, and replicas (slaves) are used for reads" },
    { question: "What is the benefit of using a master-master replication model?", answer: "It allows for write operations on multiple nodes, increasing availability" },
    { question: "How does replication affect write operations?", answer: "Writes may be slower in synchronous replication since all replicas must be updated simultaneously" },
    { question: "What role do replication logs play?", answer: "They help keep track of changes that need to be replicated to other nodes" },
    { question: "How does cross-region replication help with fault tolerance?", answer: "By replicating data across different geographic regions, ensuring data availability despite regional failures" },
    { question: "What is a potential issue with synchronous replication?", answer: "Increased latency due to the need to update all replicas before acknowledging the write" },
    { question: "Why might a system use both synchronous and asynchronous replication?", answer: "To balance between consistency (synchronous) and performance (asynchronous)" },
    { question: "How is data replication related to load balancing?", answer: "Replication allows multiple copies of data to handle read requests, distributing the load" },
    { question: "What is the role of a 'replication factor' in data replication?", answer: "It determines how many copies of the data are maintained" },
    { question: "Why is consistency challenging in replicated systems?", answer: "Because changes must be propagated to all replicas, which can lead to temporary inconsistencies" },
    { question: "How does replication contribute to system scalability?", answer: "By enabling multiple nodes to handle read operations, reducing the load on the primary database" },
    { question: "What is the purpose of replication in a distributed database?", answer: "To ensure data availability and reliability across different nodes" },
    { question: "How can replication help with latency in distributed systems?", answer: "By having replicas closer to the user, reducing the distance data must travel" },
    { question: "What is the difference between replication and sharding?", answer: "Replication involves copying data across nodes, while sharding divides data across nodes" },
    { question: "How does replication affect consistency in distributed databases?", answer: "It can introduce challenges in maintaining consistent data across all replicas" },
  ];
  
  export default dataReplicationQuestions;
  