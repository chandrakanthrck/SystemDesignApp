// src/data/DatabaseScalingQuestions.js
const databaseScalingQuestions = [
    { question: "What is database scaling?", answer: "Improving a database's capacity to handle increased workloads" },
    { question: "What are the two common approaches to database scaling?", answer: "Vertical scaling and horizontal scaling" },
    { question: "What is vertical scaling?", answer: "Adding more power (CPU, RAM, etc.) to an existing server" },
    { question: "What is horizontal scaling?", answer: "Adding more servers to distribute the load" },
    { question: "Which type of scaling involves adding more machines?", answer: "Horizontal scaling" },
    // Add 25 more questions to reach 30 questions
    { question: "What is the primary limitation of vertical scaling?", answer: "It is limited by the physical capacity of a single machine" },
    { question: "Which scaling type is better for distributed systems?", answer: "Horizontal scaling" },
    { question: "How does horizontal scaling help with load distribution?", answer: "By distributing the workload across multiple servers" },
    { question: "What is a major advantage of vertical scaling?", answer: "It is easier to implement since it involves upgrading the existing server" },
    { question: "Why might horizontal scaling be more complex to implement?", answer: "It requires managing multiple servers and maintaining data consistency" },
    { question: "What is the role of load balancers in horizontal scaling?", answer: "To distribute incoming requests evenly across multiple servers" },
    { question: "Which scaling method can provide virtually limitless scalability?", answer: "Horizontal scaling" },
    { question: "What is meant by 'scaling out'?", answer: "Another term for horizontal scaling, where more servers are added" },
    { question: "What is meant by 'scaling up'?", answer: "Another term for vertical scaling, where the existing server is upgraded" },
    { question: "How does vertical scaling affect downtime?", answer: "It may require downtime during hardware upgrades" },
    { question: "How does horizontal scaling impact availability?", answer: "It improves availability by adding redundancy across multiple servers" },
    { question: "Which type of scaling is commonly used in cloud computing environments?", answer: "Horizontal scaling" },
    { question: "What is a downside of horizontal scaling?", answer: "Increased complexity in managing distributed data" },
    { question: "What is an example of vertical scaling?", answer: "Upgrading a database server from 8GB to 32GB of RAM" },
    { question: "What is an example of horizontal scaling?", answer: "Adding more database servers to handle growing traffic" },
    { question: "What kind of architecture benefits most from horizontal scaling?", answer: "Microservices and distributed architectures" },
    { question: "Why is vertical scaling often seen as having a limit?", answer: "Because hardware has physical and cost limitations" },
    { question: "How does horizontal scaling help with fault tolerance?", answer: "By adding more servers, the system can continue to function even if one server fails" },
    { question: "Which scaling method is more cost-effective for long-term growth?", answer: "Horizontal scaling" },
    { question: "How does a sharding strategy relate to horizontal scaling?", answer: "Sharding is a way to horizontally scale by splitting data across multiple servers" },
    { question: "Why is data consistency more challenging in horizontal scaling?", answer: "Because data is spread across multiple nodes, making it harder to keep everything in sync" },
    { question: "How does a distributed cache relate to horizontal scaling?", answer: "It helps reduce load on the database by caching frequently accessed data across servers" },
    { question: "What is a 'bottleneck' in database scaling?", answer: "A point in the system that limits performance, often due to insufficient scaling" },
    { question: "How does the CAP theorem relate to scaling?", answer: "It highlights trade-offs between consistency, availability, and partition tolerance, which are important in distributed scaling" },
    { question: "Which scaling type might require an eventual migration to the cloud?", answer: "Vertical scaling, due to its physical limitations" },
    { question: "What role does replication play in horizontal scaling?", answer: "Replication helps maintain multiple copies of data across different servers" },
  ];
  
  export default databaseScalingQuestions;
  