// src/data/DataRedundancyQuestions.js
const dataRedundancyQuestions = [
    { question: "What is data redundancy?", answer: "Storing multiple copies of the same data to increase system reliability" },
    { question: "Why is data redundancy important?", answer: "To ensure data availability and resilience in case of hardware failures or network issues" },
    { question: "What are the main types of redundancy?", answer: "Replication and mirroring" },
    { question: "How does data redundancy improve reliability?", answer: "By ensuring that a backup is available if one data source fails" },
    { question: "What is data mirroring?", answer: "Creating an exact copy of the data in another location" },
    // Add 25 more questions to reach 30 questions
    { question: "What is the purpose of data replication?", answer: "To create copies of data that can be used if the original is lost or corrupted" },
    { question: "How does redundancy protect against data loss?", answer: "It provides multiple copies of data, so if one copy is lost, others can be used" },
    { question: "What is the difference between data replication and mirroring?", answer: "Replication can occur at intervals, while mirroring is a real-time copy of the data" },
    { question: "What role does redundancy play in high availability?", answer: "It helps ensure that data is available even in case of component failure" },
    { question: "What is a downside of data redundancy?", answer: "It requires more storage and can lead to data inconsistency if not properly managed" },
    { question: "How does data redundancy help with disaster recovery?", answer: "It allows systems to recover data from backup copies in case of a disaster" },
    { question: "What is meant by 'redundancy overhead'?", answer: "The extra storage and resources required to maintain multiple copies of data" },
    { question: "How can data redundancy impact write operations?", answer: "Write operations may be slower due to the need to update multiple copies of the data" },
    { question: "Why is redundancy important for distributed systems?", answer: "It ensures that even if one part of the system fails, data remains accessible" },
    { question: "How does redundancy improve fault tolerance?", answer: "By having multiple copies of data, systems can continue to operate even if one copy is lost" },
    { question: "What is a real-world example of redundancy?", answer: "Backing up important files on both a local drive and cloud storage" },
    { question: "How does data redundancy relate to backups?", answer: "Redundancy involves storing multiple active copies, while backups are usually stored for recovery purposes" },
    { question: "What is the main benefit of data mirroring?", answer: "Real-time data protection, ensuring data is instantly available if one source fails" },
    { question: "How does data redundancy help with system performance?", answer: "It provides alternative copies that can be accessed to reduce load on a single source" },
    { question: "What is an example of replication in a database?", answer: "Having a master database and multiple replicas to ensure data availability" },
    { question: "How does redundancy support data integrity?", answer: "By providing multiple copies, it helps verify data accuracy and consistency" },
    { question: "What is cross-region replication?", answer: "A redundancy strategy where data is replicated across different geographic regions for resilience" },
    { question: "How can redundancy be used to achieve load balancing?", answer: "By distributing read requests across multiple copies of the data" },
    { question: "What is a drawback of having too much redundancy?", answer: "Increased costs and complexity in managing multiple copies" },
    { question: "How do RAID configurations use redundancy?", answer: "RAID uses redundancy to provide data protection across multiple disks" },
    { question: "What is a redundancy strategy used in cloud environments?", answer: "Storing data in multiple availability zones to protect against failures" },
    { question: "How does data redundancy help in maintaining service uptime?", answer: "It ensures that if one data source is down, others can provide the same information" },
    { question: "What is a 'hot spare' in redundancy?", answer: "An extra server or drive that is ready to take over if the primary one fails" },
    { question: "Why is consistency a challenge in redundant systems?", answer: "Because data needs to be updated across all redundant copies, which can lead to delays" },
    { question: "How does redundancy impact data synchronization?", answer: "Redundant copies need to be synchronized to ensure consistency, which can be challenging" },
    { question: "What is the goal of redundancy in terms of business continuity?", answer: "To ensure that critical systems remain operational without interruption" },
  ];
  
  export default dataRedundancyQuestions;
  