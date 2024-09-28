// src/data/DatabaseShardingQuestions.js
const databaseShardingQuestions = [
    { question: "What is database sharding?", answer: "Splitting a large database into smaller, more manageable pieces called shards" },
    { question: "Why is database sharding used?", answer: "To improve performance and scalability by distributing data across multiple servers" },
    { question: "What is a shard?", answer: "A smaller, independent piece of a larger database" },
    { question: "What are the main types of sharding?", answer: "Horizontal sharding and vertical partitioning" },
    { question: "How does horizontal sharding work?", answer: "Data is split across multiple servers, each storing a subset of rows" },
    // Add 25 more questions to reach 30 questions
    { question: "What is the primary benefit of database sharding?", answer: "Enhanced scalability and improved performance" },
    { question: "What is vertical partitioning?", answer: "Splitting a database by separating different columns into different shards" },
    { question: "How does sharding reduce performance bottlenecks?", answer: "By distributing data and queries across multiple nodes, reducing load on any single server" },
    { question: "What is a potential downside of database sharding?", answer: "Increased complexity in managing multiple shards" },
    { question: "How does sharding improve query performance?", answer: "By allowing queries to be executed on smaller, distributed datasets rather than a single large database" },
    { question: "What is a common use case for database sharding?", answer: "Applications with large user bases that need to handle high read and write traffic" },
    { question: "How is data divided in horizontal sharding?", answer: "Data is divided by rows, where each shard holds a different subset of the rows" },
    { question: "What is meant by 'shard key'?", answer: "A key used to determine which shard a piece of data belongs to" },
    { question: "How does sharding affect fault tolerance?", answer: "If one shard fails, other shards can continue to operate, improving fault tolerance" },
    { question: "What kind of data is typically good for sharding?", answer: "Data that can be logically partitioned by a key, such as user data divided by region" },
    { question: "What role does the shard key play in database sharding?", answer: "It helps distribute data evenly across shards" },
    { question: "What is the difference between horizontal and vertical sharding?", answer: "Horizontal sharding divides rows across shards, while vertical sharding divides columns" },
    { question: "Why is horizontal sharding preferred for scalability?", answer: "It allows for adding more nodes easily to manage growing data and workload" },
    { question: "How does sharding affect database queries?", answer: "Queries may need to be routed to multiple shards depending on the data distribution" },
    { question: "What is a potential challenge in sharding?", answer: "Ensuring data consistency across multiple shards" },
    { question: "What is a 'hot shard'?", answer: "A shard that receives disproportionately more traffic than others, potentially causing performance issues" },
    { question: "How does sharding contribute to load balancing?", answer: "By spreading data and workload across multiple servers, reducing the load on each individual server" },
    { question: "What kind of databases can benefit from sharding?", answer: "Both relational and non-relational databases can benefit from sharding to handle large-scale data" },
    { question: "What is the relationship between sharding and high availability?", answer: "Sharding helps achieve high availability by distributing data across multiple servers" },
    { question: "What is a shard map?", answer: "A mechanism to keep track of which data is located in which shard" },
    { question: "How do applications interact with a sharded database?", answer: "Applications use the shard key to determine which shard to query or write to" },
    { question: "What is cross-shard querying?", answer: "Querying data that spans multiple shards, which can be more complex and less efficient" },
    { question: "What is an alternative to sharding for scaling databases?", answer: "Replication, where data is copied to multiple servers for increased read capacity" },
    { question: "How does sharding impact backup and recovery?", answer: "Each shard can be backed up and restored independently, potentially reducing downtime" },
    { question: "What is the main reason for choosing vertical partitioning over horizontal sharding?", answer: "Vertical partitioning is often simpler when data can be logically split by columns" },
  ];
  
  export default databaseShardingQuestions;
  