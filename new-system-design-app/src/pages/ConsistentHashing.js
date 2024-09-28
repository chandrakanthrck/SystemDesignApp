import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/ConsistentHashing.css'; // Importing the specific CSS file
import consistentHashingQuestions from '../data/ConsistentHashingQuestions'; // Import questions from the separate file

function ConsistentHashing() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...consistentHashingQuestions]
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
    <div className="consistent-hashing-container">
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
          className="consistent-hashing-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/consistent-hashing-diagram.png`}
            alt="Consistent Hashing Diagram"
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
          <h2>Consistent Hashing</h2>
          <p>
            <strong>Consistent hashing</strong> is a technique used to distribute data across nodes in a distributed system 
            with minimal disruption when nodes are added or removed. It helps maintain load balancing and ensure data 
            consistency, especially in systems that frequently scale up or down.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine you are running a delivery service with multiple delivery trucks. Each truck is responsible for a 
            specific set of deliveries based on a predefined route. If a new truck is added, consistent hashing allows 
            you to reassign only a small number of deliveries to the new truck rather than redistributing all deliveries. 
            This ensures minimal disruption and efficient use of resources.
          </p>
          <h3>Benefits of Consistent Hashing</h3>
          <ul>
            <li>Minimizes data reorganization during scaling events.</li>
            <li>Effective for balancing load in a distributed system.</li>
            <li>Popularly used in distributed caching and peer-to-peer (P2P) networks.</li>
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
          <h3>Learn More about Consistent Hashing</h3>
          <ul>
            <li><a href="https://www.cockroachlabs.com/blog/consistent-hashing/" target="_blank" rel="noopener noreferrer">Cockroach Labs: Consistent Hashing Explained</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Consistent_hashing" target="_blank" rel="noopener noreferrer">Wikipedia: Consistent Hashing</a></li>
            <li><a href="https://www.nginx.com/blog/what-is-consistent-hashing/" target="_blank" rel="noopener noreferrer">NGINX: What is Consistent Hashing?</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ConsistentHashing;
