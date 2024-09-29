import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/globalStyles.css';
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
            Rate limiting is a vital technique in web development and API management that restricts the number of requests 
            a user can make to a server in a given time frame. This mechanism is crucial for maintaining service availability 
            and preventing abuse, particularly in scenarios where a server might be overwhelmed by too many requests.
          </p>

          <h3>How Rate Limiting Works</h3>
          <p>
            Rate limiting can be implemented using different algorithms, such as the <strong>token bucket</strong> or 
            <strong> leaky bucket</strong> algorithms. These methods help control the flow of requests, allowing services to handle traffic 
            effectively without degradation in performance.
          </p>

          <h3>Types of Rate Limiting</h3>
          <p>
            There are several methods of implementing rate limiting:
          </p>
          <ul>
            <li><strong>Global Rate Limiting:</strong> Limits the number of requests a user can make across all endpoints.</li>
            <li><strong>Endpoint Rate Limiting:</strong> Restricts requests on a per-endpoint basis, allowing different limits for different services.</li>
            <li><strong>IP-based Rate Limiting:</strong> Sets limits based on the user's IP address, useful for preventing abuse from a single source.</li>
          </ul>

          <h3>Example of Rate Limiting</h3>
          <p>
            For instance, a public API may implement a limit of 100 requests per hour per user. If a user exceeds this limit, 
            they will receive an error response indicating they have hit the rate limit. This practice ensures that all users 
            can access the API fairly without being affected by a few heavy users.
          </p>

          <h3>Benefits of Rate Limiting</h3>
          <ul>
            <li><strong>Protects Resources:</strong> By limiting the number of requests, you prevent abuse and protect your resources.</li>
            <li><strong>Improves Performance:</strong> Rate limiting helps to ensure that all users receive a fair level of service without overloading the system.</li>
            <li><strong>Enhances Security:</strong> It can help prevent attacks like denial-of-service (DoS) by limiting the rate at which a malicious user can make requests.</li>
          </ul>

          <h3>Common Use Cases for Rate Limiting</h3>
          <ul>
            <li><strong>API Rate Limiting:</strong> To control how many requests a user can make to an API in a specified time period.</li>
            <li><strong>Web Application Rate Limiting:</strong> To prevent abuse on forms or login pages, such as limiting failed login attempts.</li>
            <li><strong>Network Rate Limiting:</strong> To manage bandwidth usage across a network to ensure fair access for all users.</li>
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
