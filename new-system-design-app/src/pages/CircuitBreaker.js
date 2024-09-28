import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/CircuitBreaker.css';
import circuitBreakerQuestions from '../data/CircuitBreakerQuestions'; // Import questions from the separate file

function CircuitBreaker() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...circuitBreakerQuestions]
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
    <div className="circuitbreaker-container">
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
          className="circuitbreaker-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/circuit-breaker-diagram.png`}
            alt="Circuit Breaker Diagram"
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
          <h2>Circuit Breaker</h2>
          <p>
            The <strong>Circuit Breaker</strong> pattern is a design pattern used to prevent a system from making repeated requests 
            to a failing service, which could further degrade performance and lead to cascading failures.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Think of a circuit breaker like an electrical fuse in your home. If there's an overload in your wiring, 
            the fuse "blows" and disconnects the power to prevent a fire. Similarly, the Circuit Breaker pattern "breaks" 
            the connection to a failing service, preventing it from overwhelming the system. Once the issue is resolved, 
            the circuit can be "closed" again to restore normal functionality.
          </p>
          <h3>Benefits of Using Circuit Breaker Pattern</h3>
          <ul>
            <li>Protects resources by halting requests to failing services.</li>
            <li>Provides stability by isolating failures.</li>
            <li>Allows gradual recovery by monitoring the status of the service.</li>
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
          <h3>Learn More about Circuit Breaker</h3>
          <ul>
            <li><a href="https://martinfowler.com/bliki/CircuitBreaker.html" target="_blank" rel="noopener noreferrer">Martin Fowler: Circuit Breaker</a></li>
            <li><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker" target="_blank" rel="noopener noreferrer">Microsoft Azure: Circuit Breaker Pattern</a></li>
            <li><a href="https://www.nginx.com/blog/implementing-microservices-circuit-breaker-pattern/" target="_blank" rel="noopener noreferrer">NGINX: Circuit Breaker in Microservices</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default CircuitBreaker;
