// src/data/DatabaseIndexQuestions.js
const databaseIndexQuestions = [
    { question: "What is a database index?", answer: "A data structure that allows quick lookups of rows based on specified fields" },
    { question: "How does a database index improve performance?", answer: "It reduces the number of rows that need to be scanned during a query" },
    { question: "What is a primary index?", answer: "An index that enforces uniqueness on a table's key fields" },
    { question: "What is a secondary index?", answer: "An index used to speed up data retrieval for non-key fields" },
    { question: "How is a database index similar to a book's index?", answer: "Both provide a quick way to locate specific information" },
    // Add 25 more questions to reach 30 questions
    { question: "What is the main drawback of having too many indexes?", answer: "Indexes can slow down write operations as they need to be updated" },
    { question: "What are the main types of database indexes?", answer: "Primary indexes and secondary indexes" },
    { question: "How does a primary index enforce data integrity?", answer: "By ensuring that key fields are unique" },
    { question: "When would you use a secondary index?", answer: "To improve the performance of queries that filter or sort based on non-key fields" },
    { question: "What is the purpose of a composite index?", answer: "To index multiple columns together, improving query performance involving those columns" },
    { question: "Why should indexes be used cautiously?", answer: "Too many indexes can negatively impact the performance of insert, update, and delete operations" },
    { question: "What type of queries benefit the most from database indexes?", answer: "Queries involving searching, filtering, or sorting large datasets" },
    { question: "How does indexing impact disk storage?", answer: "Indexes consume additional disk space to store the data structures" },
    { question: "What is the difference between a clustered and non-clustered index?", answer: "A clustered index determines the physical order of data in the table, while a non-clustered index does not" },
    { question: "Which index type is usually faster for data retrieval?", answer: "Clustered indexes are typically faster for retrieval because they determine data order" },
    { question: "How does indexing help in sorting data?", answer: "Indexes store data in a sorted order, reducing the need to sort large datasets during queries" },
    { question: "Can a table have more than one primary index?", answer: "No, a table can only have one primary index, but it can have multiple secondary indexes" },
    { question: "What is the role of an index in a database query optimizer?", answer: "Indexes help the optimizer determine the most efficient way to execute a query" },
    { question: "What is a full-text index?", answer: "An index that allows efficient searching within text fields, useful for searching large blocks of text" },
    { question: "What is index fragmentation?", answer: "Fragmentation occurs when index pages are not contiguous, which can slow down performance" },
    { question: "What is an example of a scenario that benefits from an index?", answer: "A query that frequently searches for customers by their last name" },
    { question: "How do indexes affect INSERT statements?", answer: "Each insert requires the index to be updated, which can slow down the operation" },
    { question: "Why might you drop an index?", answer: "To improve write performance or reduce storage overhead if the index is no longer needed" },
    { question: "What does it mean for an index to be selective?", answer: "It means the index significantly reduces the number of rows to be scanned, improving performance" },
    { question: "How do indexes impact read vs. write performance?", answer: "Indexes improve read performance but can degrade write performance" },
    { question: "What is a covering index?", answer: "An index that contains all the columns needed to answer a query, eliminating the need to access the table" },
    { question: "What is an index scan?", answer: "An operation that reads all entries in an index to satisfy a query" },
    { question: "What is an index seek?", answer: "An operation that efficiently finds matching entries in an index without scanning the entire index" },
    { question: "How does a B-tree relate to database indexing?", answer: "B-trees are commonly used data structures for storing indexes, allowing fast lookups" },
    { question: "Why is it important to regularly maintain indexes?", answer: "To reduce fragmentation and ensure the index remains efficient" },
    { question: "What is a unique index?", answer: "An index that enforces uniqueness for the values in the indexed columns" },
    { question: "What role do indexes play in JOIN operations?", answer: "Indexes can significantly speed up joins by allowing quick lookups in both tables" },
  ];
  
  export default databaseIndexQuestions;
  