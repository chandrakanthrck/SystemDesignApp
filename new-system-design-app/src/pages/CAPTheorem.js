import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/CAPTheorem.css';
import capTheoremQuestions from '../data/CAPTheoremQuestions'; // Import questions from the separate file

function CAPTheorem() {
  // State for showing additional sections
  const [activeSection, setActiveSection] = useState('content');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...capTheoremQuestions]
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
    <div className="cap-container">
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
          className="cap-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/cap-theorem-diagram.png`}
            alt="CAP Theorem Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="cap-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>CAP Theorem</h2>
          <p>
            The <strong>CAP theorem</strong>, also known as Brewer's theorem, is a fundamental principle in the design of distributed systems. It was introduced by computer scientist Eric Brewer in 2000 and articulates the trade-offs between three key properties of distributed databases: <strong>Consistency</strong>, <strong>Availability</strong>, and <strong>Partition Tolerance</strong>. These three properties, abbreviated as CAP, cannot all be guaranteed simultaneously.
          </p>
          <h3>Understanding CAP</h3>
          <p>
            Imagine managing a distributed system that spans multiple servers or nodes across different locations. Ensuring that every user interacting with the system gets accurate data, that the system is always available, and that it remains resilient to network failures presents unique challenges. The CAP theorem tells us that, in such distributed systems, we can only achieve two out of the three properties at any given time:
          </p>
          <ul>
            <li>
              <strong>Consistency (C):</strong> Every read receives the most recent write. In other words, no matter which node a client reads from, they always receive the latest data, ensuring there is no data discrepancy.
            </li>
            <li>
              <strong>Availability (A):</strong> Every request receives a response, even if some nodes are down. This means the system remains operational and responsive under any condition, but there is no guarantee that the returned data is the most recent.
            </li>
            <li>
              <strong>Partition Tolerance (P):</strong> The system continues to operate despite network partitions, which occur when communication between nodes is lost. This ensures the system remains functional even if parts of it cannot communicate.
            </li>
          </ul>

          <h3>Real-World Analogy</h3>
          <p>
            Picture a bank with branches across different cities. In a consistent system, every branch must always have the most recent account information. Suppose a customer deposits money at one branch; all other branches should immediately reflect the new balance. However, if the connection between branches is lost, the bank must choose between stopping all transactions until connectivity is restored (ensuring consistency) or allowing each branch to operate independently, even if they temporarily have slightly outdated information (ensuring availability and partition tolerance).
          </p>

          <h3>Exploring the Combinations</h3>
          <p>
            The CAP theorem forces distributed system designers to choose two of the three properties:
          </p>
          <h4>1. Consistency and Availability (CA)</h4>
          <p>
            In a CA system, the system is consistent and always available when there is no network partition. However, in case of a network failure (partition), one of these properties will have to be sacrificed. An example would be a traditional, non-distributed relational database, where consistency and availability are paramount, but the system cannot tolerate partitioning without losing availability.
          </p>
          <h4>2. Availability and Partition Tolerance (AP)</h4>
          <p>
            In an AP system, the system will remain operational and respond to requests even if parts of the network fail. However, consistency may be sacrificed, meaning users may get slightly outdated data. Amazon’s DynamoDB is a great example of an AP system—it prioritizes availability and partition tolerance but may offer eventual consistency during network issues.
          </p>
          <h4>3. Consistency and Partition Tolerance (CP)</h4>
          <p>
            A CP system ensures that all nodes have the same data, even during network partitions, but may sacrifice availability during those periods. Google's Spanner, a globally distributed database, aims for consistency and partition tolerance. During network failures, it might sacrifice immediate availability to maintain consistent data across all nodes.
          </p>

          <h3>Why is the CAP Theorem Important?</h3>
          <p>
            The CAP theorem plays a crucial role in distributed system design as it helps developers make informed decisions regarding which properties are most critical for their use case. Depending on the nature of the application, different trade-offs need to be considered:
          </p>
          <ul>
            <li>
              <strong>Financial Systems:</strong> Consistency is often prioritized since data accuracy is paramount. Imagine an ATM system showing different balances at different locations—that’s something we cannot afford.
            </li>
            <li>
              <strong>Social Media Platforms:</strong> Availability is prioritized so that users can always post content, even if the data across all nodes isn’t perfectly synchronized at that moment. It’s okay if the number of likes on a post takes a few moments to update accurately.
            </li>
          </ul>

          <h3>Real-World Examples of CAP Theorem Implementation</h3>
          <h4>Amazon DynamoDB (AP System)</h4>
          <p>
            Amazon DynamoDB is a prime example of an AP system. It ensures that the system is always available, and it can tolerate network partitions. During network issues, DynamoDB prioritizes availability and may return slightly outdated information, eventually synchronizing data across all nodes to achieve consistency.
          </p>
          <h4>Google Spanner (CP System)</h4>
          <p>
            Google Spanner provides consistency and partition tolerance. By using GPS and atomic clocks to synchronize nodes across data centers, Spanner ensures that data remains consistent. However, achieving such strong consistency might come at the cost of immediate availability during network partitions.
          </p>

          <h3>Practical Implications for Developers</h3>
          <p>
            Understanding CAP theorem allows developers to make practical trade-offs when designing distributed systems:
          </p>
          <ul>
            <li>
              <strong>Choosing Availability over Consistency:</strong> For applications where user experience is key, such as social media or streaming services, maintaining availability and allowing for eventual consistency is often more critical.
            </li>
            <li>
              <strong>Prioritizing Consistency:</strong> For use cases such as e-commerce transactions or banking, consistency is crucial to ensure users have accurate information, even if that means sacrificing availability during network issues.
            </li>
          </ul>
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
              <p>You answered {answers.filter((a) => a === 'Correct').length} out of {questions.length} questions correctly!</p>
            </div>
          )}
        </div>
      )}

      {activeSection === 'resources' && (
        <div className="reference-links">
          <h3>Learn More about CAP Theorem</h3>
          <ul>
            <li><a href="https://en.wikipedia.org/wiki/CAP_theorem" target="_blank" rel="noopener noreferrer">Wikipedia: CAP Theorem</a></li>
            <li><a href="https://aws.amazon.com/nosql/cap-theorem/" target="_blank" rel="noopener noreferrer">AWS: Understanding the CAP Theorem</a></li>
            <li><a href="https://www.geeksforgeeks.org/cap-theorem-in-distributed-systems/" target="_blank" rel="noopener noreferrer">GeeksforGeeks: CAP Theorem in Distributed Systems</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default CAPTheorem;
