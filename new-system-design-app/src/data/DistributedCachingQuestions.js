// src/data/DistributedCachingQuestions.js
const distributedCachingQuestions = [
    { question: "What is distributed caching?", answer: "Spreading cached data across multiple servers or locations to improve accessibility and reliability" },
    { question: "Why is distributed caching important?", answer: "To ensure data can be accessed from the closest server, reducing latency" },
    { question: "How does distributed caching improve scalability?", answer: "By spreading cached data across multiple nodes, reducing the load on any single server" },
    { question: "What is cache replication?", answer: "Copying cache data across multiple nodes to ensure availability" },
    { question: "How does distributed caching help with fault tolerance?", answer: "By replicating data across nodes, ensuring continued access even if one node fails" },
    // Add 25 more questions to reach 30 questions
    { question: "What is the main benefit of reducing latency in distributed caching?", answer: "Improved user experience with faster data retrieval" },
    { question: "What role does load balancing play in distributed caching?", answer: "It helps distribute requests evenly across nodes to optimize performance" },
    { question: "How does distributed caching support large-scale applications?", answer: "By allowing the cache to grow across multiple nodes, supporting more users and larger datasets" },
    { question: "What is the difference between centralized and distributed caching?", answer: "Centralized caching stores data in a single location, whereas distributed caching spreads data across multiple nodes" },
    { question: "How does cache invalidation work in a distributed caching system?", answer: "It ensures that outdated cache data is removed from all nodes to maintain consistency" },
    { question: "What kind of systems benefit most from distributed caching?", answer: "High-traffic, large-scale applications that need to maintain low latency and high availability" },
    { question: "What is cache consistency?", answer: "Ensuring that all copies of the cached data across nodes are identical" },
    { question: "How can distributed caching improve read performance?", answer: "By allowing multiple nodes to serve read requests, reducing response time" },
    { question: "What is a challenge in maintaining distributed cache consistency?", answer: "Ensuring all nodes have the latest copy of the data after an update" },
    { question: "What is a common use case for distributed caching?", answer: "Caching database queries in a large-scale web application to reduce load" },
    { question: "How does replication factor affect distributed caching?", answer: "It determines how many copies of the cache data are kept across different nodes" },
    { question: "What is the role of cache eviction policies in distributed caching?", answer: "They determine which cached data to remove when the cache is full" },
    { question: "How does distributed caching contribute to high availability?", answer: "By having multiple copies of cached data, ensuring continued access during node failures" },
    { question: "What is cache partitioning?", answer: "Dividing the cache across multiple nodes so each node stores only a portion of the data" },
    { question: "Why is partitioning used in distributed caching?", answer: "To ensure scalability and balance the load across nodes" },
    { question: "What is the relationship between distributed caching and horizontal scaling?", answer: "Distributed caching supports horizontal scaling by allowing more cache nodes to be added" },
    { question: "How does distributed caching impact write operations?", answer: "Write operations must update the cache on multiple nodes, which can increase complexity" },
    { question: "What is 'cache miss' in distributed caching?", answer: "When a requested item is not found in the cache and must be fetched from the original source" },
    { question: "How does consistent hashing help with distributed caching?", answer: "It helps evenly distribute data across nodes and makes adding or removing nodes more efficient" },
    { question: "What is a potential drawback of distributed caching?", answer: "Increased complexity in managing multiple cache nodes and ensuring consistency" },
    { question: "How does cache sharding differ from cache replication?", answer: "Cache sharding distributes different pieces of data across nodes, while replication keeps copies of the same data" },
    { question: "Why is cache invalidation crucial in distributed caching?", answer: "To ensure that users always receive the most current data, avoiding outdated information" },
    { question: "What are the types of cache invalidation strategies?", answer: "Write-through, write-behind, and cache-aside are common strategies used for cache invalidation" },
    { question: "How does distributed caching reduce backend server load?", answer: "By serving frequently requested data from cache nodes instead of making repeated backend calls" },
    { question: "What is meant by 'hot node' in distributed caching?", answer: "A cache node that receives significantly more traffic than others, possibly leading to bottlenecks" },
    { question: "What is a cache coherence problem in distributed systems?", answer: "A situation where different nodes have conflicting versions of cached data" },
  ];
  
  export default distributedCachingQuestions;
  