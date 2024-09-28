// src/data/ConsistentHashingQuestions.js
const consistentHashingQuestions = [
    { question: "What is consistent hashing?", answer: "A technique for distributing data across nodes with minimal disruption during scaling" },
    { question: "Why is consistent hashing useful in distributed systems?", answer: "It minimizes data movement when nodes are added or removed" },
    { question: "How does consistent hashing help in load balancing?", answer: "It distributes data evenly across nodes and adapts smoothly to changes" },
    { question: "What problem does consistent hashing solve?", answer: "Minimizing the amount of data that needs to be moved when nodes are added or removed" },
    { question: "Where is consistent hashing commonly used?", answer: "In distributed caching and peer-to-peer networks" },
    // Add 25 more questions to reach 30 questions
    { question: "What is a hash ring in consistent hashing?", answer: "A conceptual ring where data and nodes are assigned positions based on their hash values" },
    { question: "What happens to data when a node is added in consistent hashing?", answer: "Only a portion of the data needs to be redistributed" },
    { question: "How does consistent hashing handle node removals?", answer: "Data that was mapped to the removed node is reassigned to other nodes in the ring" },
    { question: "Why is consistent hashing considered efficient?", answer: "It minimizes data reorganization, reducing the impact of node changes" },
    { question: "What is the 'virtual node' concept in consistent hashing?", answer: "Virtual nodes are used to evenly distribute data by assigning multiple positions in the ring to each physical node" },
    { question: "How does consistent hashing contribute to system resilience?", answer: "It allows seamless addition or removal of nodes without major disruptions" },
    { question: "What role does consistent hashing play in distributed databases?", answer: "It helps partition data across nodes efficiently" },
    { question: "How does consistent hashing differ from regular hashing?", answer: "Regular hashing results in significant data movement on node changes, whereas consistent hashing limits it" },
    { question: "What is the primary advantage of consistent hashing over traditional hashing?", answer: "Only a small portion of keys need reassignment when a node is added or removed" },
    { question: "How does a node's hash value determine its position in consistent hashing?", answer: "The hash value determines where the node is placed on the hash ring" },
    { question: "What is a typical use case of consistent hashing in web systems?", answer: "Caching systems like Memcached to distribute cache data across servers" },
    { question: "How does consistent hashing contribute to scalability?", answer: "It allows for easy addition of nodes without the need for extensive rebalancing" },
    { question: "What problem does consistent hashing solve in distributed caching?", answer: "It ensures that adding or removing cache servers does not require re-caching all data" },
    { question: "How is load balancing achieved using consistent hashing?", answer: "By distributing data evenly across nodes, adjusting as nodes are added or removed" },
    { question: "What happens to keys in consistent hashing when the system scales?", answer: "Only the keys mapped to certain areas need to be reassigned" },
    { question: "What is the impact of adding nodes in a non-consistent hashing system?", answer: "A large portion of the keys may need to be reassigned, leading to inefficiency" },
    { question: "Why are 'virtual nodes' used in consistent hashing?", answer: "To improve data distribution and reduce load imbalances among physical nodes" },
    { question: "What is the advantage of using consistent hashing in cloud environments?", answer: "It facilitates dynamic scaling and maintains data consistency" },
    { question: "How does consistent hashing handle sudden node failures?", answer: "It redistributes the data among remaining nodes with minimal disruption" },
    { question: "What is a real-world analogy for consistent hashing?", answer: "Like evenly distributing tasks to team members while minimizing reassignment when new members join or leave" },
    { question: "How does consistent hashing help with peer-to-peer (P2P) networks?", answer: "It ensures data is evenly distributed among peers and easily reassigned as nodes change" },
    { question: "What is the relationship between consistent hashing and fault tolerance?", answer: "It helps maintain data availability by redistributing data when nodes fail" },
    { question: "What is the effect of using more virtual nodes in consistent hashing?", answer: "It results in more even data distribution among physical nodes" },
  ];
  
  export default consistentHashingQuestions;
  