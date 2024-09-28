import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Microservices.css'; // Ensure the correct CSS file is imported
import microservicesQuestions from '../data/MicroservicesArchitectureQuestions'; // Import quiz questions

function MicroservicesArchitecture() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...microservicesQuestions]
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
    <div className="microservices-container">
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
          className="microservices-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/microservices-architecture-diagram.png`}
            alt="Microservices Architecture Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="microservices-content-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Microservices Architecture</h2>
          <p>
            Microservices architecture enables the development of applications as a collection of loosely 
            coupled services, each responsible for a specific functionality, facilitating independent deployment 
            and scaling.
          </p>

          <h3>Example of Microservices Architecture</h3>
          <p>
            An e-commerce application can have separate microservices for user management, product catalog, 
            and order processing, allowing them to be developed and scaled independently.
          </p>

          <h3>Benefits of Microservices</h3>
          <p>
            Microservices enhance flexibility, improve fault isolation, and allow for the use of different technology stacks 
            within the same application.
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
          <h3>Learn More about Microservices Architecture</h3>
          <ul>
            <li>
              <a
                href="https://microservices.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microservices.io - Learn more about microservices architecture and best practices.
              </a>
            </li>
            <li>
              <a
                href="https://aws.amazon.com/microservices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AWS: Microservices - Explore microservices use cases and architecture on AWS.
              </a>
            </li>
            <li>
              <a
                href="https://martinfowler.com/articles/microservices.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Martin Fowler: Microservices - Detailed insights into microservices by Martin Fowler.
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Footer Section */}
      <div className="microservices-footer">
        Understanding microservices can significantly improve your application's scalability and maintainability.
      </div>
    </div>
  );
}

export default MicroservicesArchitecture;
