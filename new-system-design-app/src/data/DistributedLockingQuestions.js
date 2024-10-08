// src/data/DistributedLockingQuestions.js
const distributedLockingQuestions = [
    { question: "What is distributed locking?", answer: "A mechanism to synchronize access to shared resources across multiple nodes in a distributed system" },
    { question: "Why is distributed locking used?", answer: "To avoid conflicts by ensuring only one node can modify a resource at a time" },
    { question: "What is an example of a distributed locking use case?", answer: "Ensuring a unique order ID is generated in an e-commerce application" },
    { question: "Which popular system is often used for distributed locks?", answer: "Redis or Zookeeper" },
    { question: "What happens if multiple nodes access the same resource without distributed locking?", answer: "It can lead to data inconsistency or race conditions" },
    { question: "What is a 'race condition'?", answer: "A scenario where the behavior of the system depends on the sequence or timing of uncontrollable events" },
    { question: "How does distributed locking ensure consistency?", answer: "By allowing only one node to access a resource at a time" },
    { question: "What is the role of a 'lock manager' in distributed systems?", answer: "It coordinates the allocation and release of locks to ensure no conflicts occur" },
    { question: "What is a 'deadlock' in distributed systems?", answer: "A situation where two or more nodes are waiting for each other to release locks, causing a standstill" },
    { question: "What is a common way to prevent deadlocks?", answer: "Using a timeout mechanism to release locks after a certain period" },
    { question: "What is the purpose of a lease in distributed locking?", answer: "To automatically release the lock after a set period to avoid deadlocks" },
    { question: "How can distributed locking improve data integrity?", answer: "By preventing concurrent updates to the same data by multiple nodes" },
    { question: "What are some challenges of implementing distributed locking?", answer: "Handling failures, avoiding deadlocks, and ensuring fairness" },
    { question: "What is a quorum-based locking system?", answer: "A system where a majority of nodes must agree to grant or release a lock" },
    { question: "How does a token-based locking system work?", answer: "A token is passed among nodes, and only the node holding the token can access the resource" },
    { question: "Why is it important to have a timeout for distributed locks?", answer: "To ensure that locks are released even if the node holding the lock crashes" },
    { question: "What is 'lease renewal' in distributed locking?", answer: "Extending the duration of a lock if the holder still needs access to the resource" },
    { question: "What happens if a lock holder crashes without releasing the lock?", answer: "A timeout or lease expiration mechanism should release the lock to avoid a deadlock" },
    { question: "How can Redis be used for distributed locking?", answer: "By using the SET command with NX (set if not exists) and EX (expiration time) options" },
    { question: "What is the role of a 'heartbeat' in distributed locking?", answer: "To periodically signal that a node is still active and holding the lock" },
    { question: "What is the difference between centralized and distributed locking?", answer: "Centralized locking uses a single lock manager, while distributed locking uses multiple nodes" },
    { question: "How can you ensure a distributed lock is fair?", answer: "By queuing lock requests so nodes are granted access in the order they requested" },
    { question: "What is a 'mutex' in distributed systems?", answer: "A mutual exclusion mechanism that ensures only one node accesses a resource at a time" },
    { question: "How does distributed locking relate to consistency models?", answer: "It helps achieve strong consistency by ensuring only one node modifies the data at a time" },
    { question: "What is the Paxos algorithm used for?", answer: "Achieving consensus in a distributed system, which is often used in distributed locking" },
    { question: "Why is Zookeeper commonly used for distributed locking?", answer: "It provides primitives like ephemeral nodes that help manage locks effectively" },
    { question: "What is an 'ephemeral node' in Zookeeper?", answer: "A node that is automatically deleted if the client session ends, useful for locks" },
    { question: "How can distributed locking impact system performance?", answer: "It can add overhead due to coordination between nodes, potentially increasing latency" },
    { question: "What is the difference between optimistic and pessimistic locking?", answer: "Optimistic locking assumes no conflicts and checks at commit, while pessimistic locking prevents conflicts by locking resources" },
  ];
  
  export default distributedLockingQuestions;
  