import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/DistributedCaching.css'; // Importing the specific CSS file
import distributedCachingQuestions from '../data/DistributedCachingQuestions'; // Import questions from the separate file

function DistributedCaching() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...distributedCachingQuestions]
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
            src={`${process.env.PUBLIC_URL}/images/distributed-caching-diagram.png`}
            alt="Distributed Caching Diagram"
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
          <h2>Distributed Caching</h2>
          <p>
            <strong>Distributed caching</strong> involves spreading cached data across multiple servers or locations
            to improve data accessibility and reliability. This system allows applications to scale effectively, ensuring 
            users can access cached data from the nearest server, thereby reducing latency and enhancing user experience.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine a chain of convenience stores across different neighborhoods, all stocked with popular items.
            Instead of everyone having to drive to one central store, each neighborhood has its own nearby store. 
            Similarly, distributed caching ensures that users can access the data they need from the nearest server, 
            rather than traveling to a single central point, resulting in quicker access and better service.
          </p>
          <h3>Benefits of Distributed Caching</h3>
          <ul>
            <li><strong>Low Latency:</strong> Cached data is available from the closest server, reducing response time.</li>
            <li><strong>Scalability:</strong> Easily add more nodes to handle growing demand, ensuring performance remains consistent.</li>
            <li><strong>Fault Tolerance:</strong> If one cache node fails, data can still be served from another, maintaining availability.</li>
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
          <h3>Learn More about Distributed Caching</h3>
          <ul>
            <li><a href="https://www.redislabs.com/redis-enterprise/technology/distributed-caching/" target="_blank" rel="noopener noreferrer">RedisLabs: Distributed Caching</a></li>
            <li><a href="https://aws.amazon.com/caching/" target="_blank" rel="noopener noreferrer">AWS: Caching Overview</a></li>
            <li><a href="https://www.nginx.com/resources/glossary/distributed-cache/" target="_blank" rel="noopener noreferrer">NGINX: What is Distributed Caching?</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DistributedCaching;
