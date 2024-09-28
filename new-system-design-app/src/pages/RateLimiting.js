import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/RateLimiting.css'; // Ensure the correct CSS file is imported
import rateLimitingQuestions from '../data/RateLimitingQuestions'; // Import quiz questions

function RateLimiting() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...rateLimitingQuestions]
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
    <div className="rate-limiting-container">
      {/* Top Navigation Bar */}
      <div className="top-bar">
        <button
          className={activeSection === 'diagram' ? 'active-button' : ''}
          onClick={() => setActiveSection('diagram')}
        >
          Diagram
        </button>
        <button
          className={activeSection === 'content' ? 'active-button' : ''}
          onClick={() => setActiveSection('content')}
        >
          Content
        </button>
        <button
          className={activeSection === 'quiz' ? 'active-button' : ''}
          onClick={() => setActiveSection('quiz')}
        >
          Quiz
        </button>
        <button
          className={activeSection === 'resources' ? 'active-button' : ''}
          onClick={() => setActiveSection('resources')}
        >
          Resources
        </button>
      </div>

      {/* Section Rendering */}
      {activeSection === 'diagram' && (
        <motion.div
          className="rate-limiting-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/rate-limiting-diagram.png`}
            alt="Rate Limiting Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="rate-limiting-content-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Rate Limiting</h2>
          <p>
            Rate limiting controls the number of requests a user can make in a given timeframe, 
            protecting systems from overload, abuse, and attacks while ensuring fair usage among users.
          </p>

          <h3>How Rate Limiting Works</h3>
          <p>
            Rate limiting can be implemented using various algorithms, such as token bucket or leaky bucket, to control the flow of requests and protect resources.
          </p>

          <h3>Example of Rate Limiting</h3>
          <p>
            For instance, an API might limit users to 100 requests per hour to prevent abuse and ensure service stability.
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
              <p>
                You answered {answers.filter((a) => a === 'Correct').length} out of {questions.length} questions correctly!
              </p>
            </div>
          )}
        </div>
      )}

      {activeSection === 'resources' && (
        <div className="reference-links">
          <h3>Learn More about Rate Limiting</h3>
          <ul>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Rate_limiting"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN: Rate Limiting - Understand how rate limiting works in web technologies.
              </a>
            </li>
            <li>
              <a
                href="https://www.cloudflare.com/learning/bots/what-is-rate-limiting/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloudflare: What is Rate Limiting? - Learn why and how rate limiting is implemented.
              </a>
            </li>
            <li>
              <a
                href="https://www.nginx.com/blog/rate-limiting-nginx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NGINX: Rate Limiting - Learn about rate limiting using NGINX for web applications.
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Footer Section */}
      <div className="rate-limiting-footer">
        Implementing rate limiting helps improve security and manage resources effectively.
      </div>
    </div>
  );
}

export default RateLimiting;
