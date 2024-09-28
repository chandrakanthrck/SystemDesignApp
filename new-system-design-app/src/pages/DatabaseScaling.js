import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/DatabaseScaling.css'; // Importing the specific CSS file
import databaseScalingQuestions from '../data/DatabaseScalingQuestions'; // Import questions from the separate file

function DatabaseScaling() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...databaseScalingQuestions]
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
    <div className="scaling-container">
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
          className="scaling-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/database-scaling-diagram.png`}
            alt="Database Scaling Diagram"
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
          <h2>Database Scaling</h2>
          <p>
            <strong>Database scaling</strong> refers to increasing the capacity of a database to handle larger amounts of data and more queries 
            efficiently. There are two primary types of scaling: vertical and horizontal.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine you own a bakery. Initially, when you start getting more orders, you decide to buy a bigger oven to bake more cakes. 
            This is similar to <strong>vertical scaling</strong>, where you upgrade your existing resources. However, at some point, no matter how big 
            your oven is, it can't keep up with the demand. So, you decide to open more branches of the bakery across the city. 
            This is like <strong>horizontal scaling</strong>, where you add more resources to handle growing demand.
          </p>
          <h3>Vertical vs Horizontal Scaling</h3>
          <ul>
            <li><strong>Vertical Scaling:</strong> Adding more power (CPU, RAM, etc.) to an existing server. It's simple but limited by the physical capacity of a single machine.</li>
            <li><strong>Horizontal Scaling:</strong> Adding more servers to distribute the load. It's more complex but provides limitless scalability, ideal for distributed systems.</li>
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
          <h3>Learn More about Database Scaling</h3>
          <ul>
            <li><a href="https://aws.amazon.com/nosql/database-scaling/" target="_blank" rel="noopener noreferrer">AWS: Database Scaling</a></li>
            <li><a href="https://www.digitalocean.com/community/tutorials/vertical-and-horizontal-scaling" target="_blank" rel="noopener noreferrer">DigitalOcean: Vertical and Horizontal Scaling</a></li>
            <li><a href="https://www.geeksforgeeks.org/vertical-and-horizontal-scaling-in-databases/" target="_blank" rel="noopener noreferrer">GeeksforGeeks: Vertical and Horizontal Scaling</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DatabaseScaling;
