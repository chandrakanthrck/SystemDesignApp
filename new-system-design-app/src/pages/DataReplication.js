import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
            <li><strong>Synchronous Replication:</strong> Data is copied in real-time, ensuring that all replicas are up-to-date.</li>
            <li><strong>Asynchronous Replication:</strong> Data is copied after the initial write operation, allowing some lag between the master and replicas.</li>
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
