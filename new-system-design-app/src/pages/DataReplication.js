import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/globalStyles.css';
import '../styles/DataReplication.css'; // Importing the specific CSS file
import dataReplicationQuestions from '../data/DataReplicationQuestions'; // Import questions from the separate file

function DataReplication() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...dataReplicationQuestions]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    setQuestions(selectedQuestions);
  }, []);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="data-replication-container">
      {/* Top Navigation Bar */}
      <div className="top-bar">
        <button 
          className={activeSection === 'diagram' ? 'active' : ''} 
          onClick={() => setActiveSection('diagram')}
        >
          Diagram
        </button>
        <button 
          className={activeSection === 'content' ? 'active' : ''} 
          onClick={() => setActiveSection('content')}
        >
          Content
        </button>
        <button 
          className={activeSection === 'quiz' ? 'active' : ''} 
          onClick={() => setActiveSection('quiz')}
        >
          Quiz
        </button>
        <button 
          className={activeSection === 'resources' ? 'active' : ''} 
          onClick={() => setActiveSection('resources')}
        >
          Resources
        </button>
      </div>

      {/* Section Rendering */}
      {activeSection === 'diagram' && (
        <motion.div
          className="data-replication-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/data-replication-diagram.png`}
            alt="Data Replication Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="replication-content"
        >
          <h2>Data Replication</h2>
          <p>
            <strong>Data replication</strong> involves copying data across multiple servers or locations to improve availability and resilience.
            This ensures that data remains accessible, even if one server fails. Replication is critical for disaster recovery and plays
            a key role in maintaining data consistency across distributed systems.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine you have a diary where you write important notes. You make photocopies of the diary and keep them in different places
            in case the original gets lost or damaged. This is similar to data replication: having multiple copies to ensure you never lose
            your important information.
          </p>
          <h3>Types of Data Replication</h3>
          <ul>
            <li><strong>Synchronous Replication:</strong> Data is copied in real-time, ensuring that all replicas are up-to-date. This provides strong consistency, as every write operation must be propagated to all replicas before it is considered complete. However, it can introduce latency.</li>
            <li><strong>Asynchronous Replication:</strong> Data is copied after the initial write operation, allowing some lag between the master and replicas. This provides better performance as writes do not need to wait for all replicas to update, but may introduce temporary inconsistencies.</li>
          </ul>
          <h3>Benefits of Data Replication</h3>
          <ul>
            <li><strong>Improved Availability:</strong> Replication ensures that if one server fails, data is still available from other replicas, minimizing downtime.</li>
            <li><strong>Load Balancing:</strong> Multiple copies of data allow for queries to be distributed among replicas, which reduces the load on a single server and improves read performance.</li>
            <li><strong>Disaster Recovery:</strong> In case of data center failures or disasters, replicated data can be restored quickly, ensuring business continuity.</li>
          </ul>
          <h3>Challenges of Data Replication</h3>
          <ul>
            <li><strong>Data Consistency:</strong> Keeping replicas in sync can be challenging, especially in asynchronous replication where there can be lag between updates.</li>
            <li><strong>Increased Storage Requirements:</strong> Storing multiple copies of data requires more disk space, which can increase storage costs.</li>
            <li><strong>Complexity in Conflict Resolution:</strong> In multi-master replication setups, conflicts may arise if two users update the same data simultaneously. Resolving these conflicts requires careful strategies to avoid data loss.</li>
          </ul>
          <h3>Replication Strategies</h3>
          <ul>
            <li>
              <strong>Master-Slave Replication:</strong> In this strategy, a single master server handles all write operations, and one or more slave servers replicate the data. Slaves are used primarily for read operations. This approach is simple but has a single point of failure—the master.
            </li>
            <li>
              <strong>Multi-Master Replication:</strong> Multiple servers can accept write operations, and they replicate the changes among themselves. This strategy improves fault tolerance but increases the complexity of conflict resolution.
            </li>
            <li>
              <strong>Peer-to-Peer Replication:</strong> Every node acts as both a master and a slave, and changes are propagated to all other nodes. This model is often used in distributed file systems and offers excellent fault tolerance.
            </li>
          </ul>
          <h3>Use Cases of Data Replication</h3>
          <p>
            Data replication is widely used in various industries to ensure data availability and system resilience:
          </p>
          <ul>
            <li><strong>Cloud Services:</strong> Cloud providers replicate customer data across multiple regions to ensure high availability and disaster recovery. AWS, Google Cloud, and Azure use replication extensively.</li>
            <li><strong>Banking Systems:</strong> Financial institutions replicate transaction data across different locations to ensure data integrity and availability, especially for critical customer transactions.</li>
            <li><strong>Content Delivery Networks (CDNs):</strong> CDNs replicate data across multiple edge locations, allowing users to access content from the server closest to them, reducing latency and improving performance.</li>
          </ul>
          <h3>Conclusion</h3>
          <p>
            Data replication is an essential component in maintaining data availability, resilience, and performance in distributed systems. By having multiple copies of data, systems can withstand failures, balance loads effectively, and recover quickly in case of disasters. While replication involves challenges like consistency and increased storage costs, the benefits in terms of system reliability and fault tolerance make it a crucial part of modern data infrastructure.
          </p>
        </motion.div>
      )}

      {activeSection === 'quiz' && (
        <div className="quiz-section">
          <h3>Take the Quiz</h3>
          {!quizFinished ? (
            <div className="question-container">
              <p>{questions[currentQuestionIndex]?.question}</p>
              <motion.button
                className="quiz-button"
                onClick={() => handleAnswer('Correct')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Correct
              </motion.button>
              <motion.button
                className="quiz-button"
                onClick={() => handleAnswer('Incorrect')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Incorrect
              </motion.button>
            </div>
          ) : (
            <div className="quiz-results">
              <h4>Quiz Finished!</h4>
              <p>You answered {answers.filter(a => a === 'Correct').length} out of {questions.length} questions correctly!</p>
            </div>
          )}
        </div>
      )}

      {activeSection === 'resources' && (
        <div className="reference-links">
          <h3>Learn More about Data Replication</h3>
          <ul>
            <li><a href="https://www.ibm.com/docs/en/SSLTBW_2.4.0/com.ibm.zos.v2r4.e0zb200/data-replication.htm" target="_blank" rel="noopener noreferrer">IBM: Understanding Data Replication</a></li>
            <li><a href="https://aws.amazon.com/glossary/data-replication/" target="_blank" rel="noopener noreferrer">AWS: Data Replication Explained</a></li>
            <li><a href="https://www.geeksforgeeks.org/data-replication-in-distributed-systems/" target="_blank" rel="noopener noreferrer">GeeksforGeeks: Data Replication in Distributed Systems</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DataReplication;
