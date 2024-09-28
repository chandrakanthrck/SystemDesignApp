import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/ProxyServer.css'; // Ensure the correct CSS file is imported
import proxyServerQuestions from '../data/ProxyServerQuestions'; // Import quiz questions

function ProxyServer() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...proxyServerQuestions]
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
    <div className="proxy-server-container">
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
          className="proxy-server-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/proxy-server-diagram.png`}
            alt="Proxy Server Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="proxy-server-content-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Proxy Server</h2>
          <p>
            A proxy server acts as an intermediary between a client and the internet, enhancing security, privacy, and performance. 
            It is often used to cache web pages and reduce bandwidth usage.
          </p>

          <h3>How Proxy Servers Work</h3>
          <p>
            Proxy servers intercept requests from clients and forward them to the intended server, then return the response to the client.
          </p>

          <h3>Example of Proxy Server Usage</h3>
          <p>
            Many organizations use proxy servers to control employee internet access and to monitor web traffic for security purposes.
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
          <h3>Learn More about Proxy Servers</h3>
          <ul>
            <li>
              <a
                href="https://www.cloudflare.com/learning/cdn/glossary/what-is-a-proxy-server/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloudflare: What is a Proxy Server? - Learn the basics and importance of proxy servers.
              </a>
            </li>
            <li>
              <a
                href="https://www.varonis.com/blog/proxy-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                Varonis: What is a Proxy Server and How Does it Work? - Understand more about how proxies enhance security.
              </a>
            </li>
            <li>
              <a
                href="https://www.nginx.com/resources/glossary/reverse-proxy-server/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NGINX: Reverse Proxy Explained - Explore reverse proxy and its role in load balancing and security.
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Footer Section */}
      <div className="proxy-server-footer">
        Understanding proxy servers can help you enhance your online security and optimize network performance.
      </div>
    </div>
  );
}

export default ProxyServer;
