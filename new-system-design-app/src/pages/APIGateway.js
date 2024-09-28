import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/APIGateway.css'; // Ensure the correct CSS file is imported
import apiGatewayQuestions from '../data/APIGatewayQuestions'; // Import questions from the separate file

function APIGateway() {
  // State for showing additional sections
  const [activeSection, setActiveSection] = useState('content');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...apiGatewayQuestions]
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
    <div className="api-gateway-container">
      {/* Top Navigation Bar */}
      <div className="top-bar">
        <button onClick={() => setActiveSection('diagram')}>Diagram</button>
        <button onClick={() => setActiveSection('content')}>Content</button>
        <button onClick={() => setActiveSection('quiz')}>Quiz</button>
        <button onClick={() => setActiveSection('resources')}>Resources</button>
      </div>

      {/* Section Rendering */}
      {activeSection === 'diagram' && (
        <motion.div
          className="api-gateway-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/api-gateway-diagram.png`}
            alt="API Gateway Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="api-gateway-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>API Gateway</h2>
          <p>
            An <strong>API Gateway</strong> acts as an entry point for client requests to different microservices. It handles routing, 
            security, rate limiting, and load balancing, simplifying client interactions with back-end services.
          </p>
          <h3>Key Features of API Gateway</h3>
          <ul>
            <li><strong>Routing:</strong> Routes requests to the appropriate service.</li>
            <li><strong>Security:</strong> Authenticates incoming requests.</li>
            <li><strong>Rate Limiting:</strong> Prevents abuse by limiting the number of requests.</li>
            <li><strong>Load Balancing:</strong> Distributes requests across multiple service instances.</li>
            <li><strong>Request Aggregation:</strong> Combines multiple requests into a single one.</li>
          </ul>
        </motion.div>
      )}

      {activeSection === 'quiz' && (
        <div className="quiz-section">
          <h3>Take the Quiz</h3>
          {!quizFinished ? (
            <div className="question-container">
              <p>{questions[currentQuestionIndex]?.question}</p>
              <button className="quiz-button" onClick={() => handleAnswer('Correct')}>Correct</button>
              <button className="quiz-button" onClick={() => handleAnswer('Incorrect')}>Incorrect</button>
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
          <h3>Learn More about API Gateway</h3>
          <ul>
            <li><a href="https://microservices.io/patterns/apigateway.html" target="_blank" rel="noopener noreferrer">Microservices.io: API Gateway Pattern</a></li>
            <li><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html" target="_blank" rel="noopener noreferrer">AWS API Gateway Documentation</a></li>
            <li><a href="https://www.nginx.com/learn/api-gateway/" target="_blank" rel="noopener noreferrer">NGINX: What is an API Gateway?</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default APIGateway;
