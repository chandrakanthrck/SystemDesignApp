import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/DataRedundancy.css'; // Importing the specific CSS file
import dataRedundancyQuestions from '../data/DataRedundancyQuestions'; // Import questions from the separate file

function DataRedundancy() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...dataRedundancyQuestions]
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
    <div className="data-redundancy-container">
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
          className="data-redundancy-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/data-redundancy-diagram.png`}
            alt="Data Redundancy Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="redundancy-content"
        >
          <h2>Data Redundancy</h2>
          <p>
            <strong>Data redundancy</strong> is the practice of storing multiple copies of data to ensure its availability and reliability. 
            This redundancy helps protect against data loss and ensures that systems can continue to function smoothly in case of failure.
            Redundancy is crucial for enhancing data availability, system reliability, and performance in distributed systems and databases.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Think of data redundancy like having multiple keys for your house. If you lose one key, you can still access your home using 
            a spare key. Similarly, having multiple copies of data means that even if one copy is lost or corrupted, the system can use 
            another copy, ensuring continued operation. This is similar to storing important files on your laptop, an external drive, and 
            in the cloud—each copy serves as a backup in case one becomes inaccessible.
          </p>
          <h3>Types of Data Redundancy</h3>
          <ul>
            <li>
              <strong>Full Data Redundancy:</strong> Every piece of data is copied across different servers or storage locations. This ensures maximum reliability but also requires a lot of storage.
            </li>
            <li>
              <strong>Partial Redundancy:</strong> Only critical data is copied, reducing the storage overhead compared to full redundancy.
            </li>
            <li>
              <strong>Data Mirroring:</strong> An exact copy of data is kept at another location in real-time, often used for disaster recovery scenarios.
            </li>
          </ul>
          <h3>Benefits of Data Redundancy</h3>
          <ul>
            <li><strong>Data Availability:</strong> Redundant copies ensure that data is accessible even if one source fails. This is especially important in distributed systems where nodes can fail due to network issues or hardware malfunctions.</li>
            <li><strong>Fault Tolerance:</strong> Systems can withstand hardware failures without losing data. Data redundancy ensures that applications can continue to run with minimal interruption even if a failure occurs.</li>
            <li><strong>Disaster Recovery:</strong> Multiple copies of data allow for faster recovery in the event of a disaster. For example, if a data center is damaged by a fire or natural disaster, data redundancy ensures that data remains intact and accessible from other locations.</li>
          </ul>
          <h3>Challenges of Data Redundancy</h3>
          <ul>
            <li>
              <strong>Storage Costs:</strong> Storing multiple copies of data means higher storage requirements, which leads to increased costs.
            </li>
            <li>
              <strong>Consistency Management:</strong> Redundant data must be kept in sync. If one copy of the data is updated, all other copies must also be updated to maintain consistency, which can be complex in large distributed systems.
            </li>
            <li>
              <strong>Risk of Inconsistency:</strong> Improper management of redundant data may lead to inconsistencies between data copies, leading to incorrect or unreliable information.
            </li>
          </ul>
          <h3>Techniques for Managing Redundancy</h3>
          <p>
            Managing redundancy effectively requires implementing strategies that balance the need for data availability with the costs and complexities associated with redundancy:
          </p>
          <ul>
            <li>
              <strong>Replication:</strong> Data is replicated across multiple servers or nodes. This method provides high availability and fault tolerance but must be carefully managed to prevent inconsistencies.
            </li>
            <li>
              <strong>Backup and Archiving:</strong> Regular backups are taken to ensure that data can be restored in case of failure. While backups do not provide real-time redundancy, they are essential for long-term data recovery.
            </li>
            <li>
              <strong>RAID (Redundant Array of Independent Disks):</strong> This technology stores data across multiple disks, providing redundancy and improving read/write performance. RAID is often used in enterprise environments to prevent data loss.
            </li>
          </ul>
          <h3>Real-World Use Cases of Data Redundancy</h3>
          <p>
            Data redundancy is commonly used in industries where data availability is critical:
          </p>
          <ul>
            <li>
              <strong>Cloud Storage:</strong> Cloud providers like AWS, Google Cloud, and Microsoft Azure use data redundancy to ensure that customer data is always accessible, even if part of their infrastructure fails.
            </li>
            <li>
              <strong>Financial Services:</strong> Banks and financial institutions use redundancy to ensure customer transaction data is never lost and is always available for verification.
            </li>
            <li>
              <strong>Healthcare:</strong> Patient data must be accessible at all times. Hospitals use redundant data systems to ensure that medical records are always available, even during system failures.
            </li>
          </ul>
          <h3>Conclusion</h3>
          <p>
            Data redundancy is an essential concept in modern systems where data reliability and availability are critical. While it involves certain challenges, like higher costs and consistency management, the benefits of ensuring that data remains accessible even in the face of failure make redundancy a fundamental practice in database management, cloud infrastructure, and disaster recovery planning. Effective redundancy strategies are crucial to achieving resilience in distributed systems.
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
          <h3>Learn More about Data Redundancy</h3>
          <ul>
            <li><a href="https://www.ibm.com/docs/en/SSLTBW_2.4.0/com.ibm.zos.v2r4.e0zb200/data-redundancy.htm" target="_blank" rel="noopener noreferrer">IBM: Understanding Data Redundancy</a></li>
            <li><a href="https://www.techtarget.com/whatis/definition/data-redundancy" target="_blank" rel="noopener noreferrer">TechTarget: What is Data Redundancy?</a></li>
            <li><a href="https://aws.amazon.com/backup/data-redundancy/" target="_blank" rel="noopener noreferrer">AWS: Data Redundancy and Backup</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DataRedundancy;
