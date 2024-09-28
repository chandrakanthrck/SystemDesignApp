// src/data/ConsensusAlgorithmsQuestions.js
const consensusAlgorithmsQuestions = [
    { question: "What is a consensus algorithm?", answer: "A protocol that helps distributed systems agree on a common value" },
    { question: "Why are consensus algorithms important in distributed systems?", answer: "To ensure data consistency and reliability across nodes" },
    { question: "Name two popular consensus algorithms.", answer: "Paxos and Raft" },
    { question: "What is Paxos?", answer: "A consensus algorithm that helps nodes agree on a value despite failures" },
    { question: "Where are consensus algorithms used?", answer: "In blockchain technology and distributed databases" },
    // Add 25 more questions to reach 30 questions
    { question: "What is the Raft consensus algorithm?", answer: "An algorithm that is easier to understand than Paxos and used to achieve consensus" },
    { question: "What is the main challenge of achieving consensus in distributed systems?", answer: "Dealing with network failures and node failures" },
    { question: "What is Byzantine Fault Tolerance (BFT)?", answer: "A property of a system to reach consensus even with some faulty nodes" },
    { question: "How does a consensus algorithm handle network partitions?", answer: "By ensuring that nodes still agree on a value despite communication breakdowns" },
    { question: "What is the difference between Paxos and Raft?", answer: "Raft is considered simpler and more understandable than Paxos" },
    { question: "What role do consensus algorithms play in blockchain?", answer: "They ensure all nodes agree on the next block to add to the chain" },
    { question: "How do consensus algorithms ensure data consistency?", answer: "By making sure all nodes in a network agree on a common state" },
    { question: "What is leader election in consensus algorithms?", answer: "A process to choose one node to act as a coordinator among distributed nodes" },
    { question: "Which consensus algorithm is commonly used in blockchains like Bitcoin?", answer: "Proof of Work (PoW)" },
    { question: "What is the 'two-phase commit' protocol?", answer: "A consensus protocol used to ensure all nodes agree on a transaction" },
    { question: "How does Proof of Stake (PoS) differ from Proof of Work (PoW)?", answer: "PoS selects validators based on ownership of the asset, while PoW requires solving computational puzzles" },
    { question: "What problem does the Byzantine Generals Problem represent?", answer: "The difficulty of achieving consensus in the presence of malicious actors" },
    { question: "What is quorum in the context of consensus?", answer: "The minimum number of nodes that must agree for a decision to be made" },
    { question: "What is a major drawback of the Paxos algorithm?", answer: "It is difficult to understand and implement" },
    { question: "What is 'state machine replication' in consensus algorithms?", answer: "A method to ensure all nodes execute the same commands in the same order" },
    { question: "Which consensus algorithm is designed to be fault-tolerant and handle malicious nodes?", answer: "Byzantine Fault Tolerance (BFT)" },
    { question: "How does Raft achieve consensus?", answer: "Through leader election, log replication, and safety rules" },
    { question: "What is the purpose of a 'heartbeat' in consensus algorithms?", answer: "To let follower nodes know the leader is still active" },
    { question: "Why is achieving consensus more challenging in distributed systems?", answer: "Because of possible network delays, node failures, and inconsistent states" },
    { question: "What is Proof of Elapsed Time (PoET)?", answer: "A consensus algorithm that uses trusted execution environments to randomly select leaders" },
    { question: "Which consensus algorithm is known for its simplicity and ease of understanding?", answer: "Raft" },
    { question: "What is the role of a leader in Raft?", answer: "To manage log replication and maintain consistency among nodes" },
    { question: "What happens if a leader fails in Raft?", answer: "A new leader is elected among the remaining nodes" },
    { question: "How does consensus contribute to fault tolerance?", answer: "By allowing the system to continue functioning correctly even if some nodes fail" },
    { question: "What is the main goal of consensus algorithms?", answer: "To ensure that all nodes agree on the same data or state" },
  ];
  
  export default consensusAlgorithmsQuestions;
  