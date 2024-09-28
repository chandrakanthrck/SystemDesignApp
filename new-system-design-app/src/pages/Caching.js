import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Caching.css';
import cachingQuestions from '../data/CachingQuestions'; // Import questions from the separate file

function Caching() {
  // State for showing additional sections
  const [activeSection, setActiveSection] = useState('content');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...cachingQuestions]
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
    <div className="caching-container">
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
          className="caching-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/caching-diagram.png`}
            alt="Caching Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="caching-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Caching</h2>
          <p>
            <strong>Caching</strong> is a technique used to store copies of data in a temporary storage location to reduce latency and improve retrieval times. 
            Think of caching like storing a frequently used key near your front door so you can grab it quickly whenever you need it. Instead of looking for it in a drawer every time, it’s right there for instant access.
          </p>
          <h3>Real-World Analogies</h3>
          <p>
            Imagine you frequently use a book for reference. Instead of storing it on a high shelf and climbing up to retrieve it each time, 
            you keep it on your desk for easy access. This is essentially what caching does—it keeps commonly needed data close at hand so it can be accessed quickly.
          </p>
          <h3>Common Caching Types</h3>
          <ul>
            <li>
              <strong>Memory Caching:</strong> Storing frequently accessed data in memory to reduce database load and speed up responses.
            </li>
            <li>
              <strong>CDN Caching:</strong> Content Delivery Network caching stores copies of static assets (e.g., images, videos) across geographically distributed servers.
            </li>
            <li>
              <strong>Client-Side Caching:</strong> Storing data on the user's device (e.g., browser caching) to improve the performance of web pages during future visits.
            </li>
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
          <h3>Learn More about Caching</h3>
          <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" target="_blank" rel="noopener noreferrer">MDN: HTTP Caching</a></li>
            <li><a href="https://aws.amazon.com/caching/" target="_blank" rel="noopener noreferrer">AWS: What is Caching?</a></li>
            <li><a href="https://www.cloudflare.com/learning/cdn/what-is-caching/" target="_blank" rel="noopener noreferrer">Cloudflare: What is Caching?</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Caching;
