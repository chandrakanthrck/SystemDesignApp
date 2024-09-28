import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/DistributedLocking.css'; // Importing the specific CSS file
import distributedLockingQuestions from '../data/DistributedLockingQuestions'; // Import questions from the separate file

function DistributedLocking() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...distributedLockingQuestions]
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
    <div className="locking-container">
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
          className="locking-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/distributed-locking-diagram.png`}
            alt="Distributed Locking Diagram"
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
          <h2>Distributed Locking</h2>
          <p>
            <strong>Distributed locking</strong> is a mechanism to synchronize access to shared resources across multiple nodes in a distributed system.
            It helps avoid conflicts by ensuring only one node can modify a resource at a time, preventing issues like race conditions.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine a single bathroom key that needs to be shared among many people at a party. Only the person holding the key can use the bathroom,
            preventing conflicts where multiple people try to use it at the same time. In distributed systems, distributed locking works similarly, 
            allowing only one process or node to access a shared resource at a time.
          </p>
          <h3>Benefits of Distributed Locking</h3>
          <ul>
            <li><strong>Data Consistency:</strong> Prevents multiple nodes from simultaneously modifying the same data, avoiding inconsistencies.</li>
            <li><strong>Conflict Avoidance:</strong> Ensures that operations that could cause data conflicts are executed one at a time.</li>
            <li><strong>Reliability:</strong> Essential for systems that require strong consistency and transactional integrity.</li>
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
          <h3>Learn More about Distributed Locking</h3>
          <ul>
            <li><a href="https://redis.io/topics/distlock" target="_blank" rel="noopener noreferrer">Redis: Distributed Locking</a></li>
            <li><a href="https://zookeeper.apache.org/doc/current/recipes.html#sc_recipes_Locks" target="_blank" rel="noopener noreferrer">Zookeeper: Locking Mechanisms</a></li>
            <li><a href="https://martinfowler.com/articles/patterns-of-distributed-systems/distributed-lock.html" target="_blank" rel="noopener noreferrer">Martin Fowler: Patterns of Distributed Systems - Distributed Lock</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DistributedLocking;
