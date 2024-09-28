import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/CAPTheorem.css';
import capTheoremQuestions from '../data/CAPTheoremQuestions'; // Import questions from the separate file

function CAPTheorem() {
  // State for showing additional sections
  const [activeSection, setActiveSection] = useState('content');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...capTheoremQuestions]
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
    <div className="cap-container">
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
          className="cap-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/cap-theorem-diagram.png`}
            alt="CAP Theorem Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="cap-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>CAP Theorem</h2>
          <p>
            The <strong>CAP theorem</strong> states that in a distributed data store, it is impossible to guarantee 
            all three of the following: <strong>Consistency</strong>, <strong>Availability</strong>, and 
            <strong> Partition Tolerance</strong>.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine you are the manager of a busy restaurant with multiple branches. You want every branch (node) to 
            have up-to-date information about the ingredients in stock (Consistency). You also want each branch to be 
            able to serve customers even if they can’t communicate with other branches (Availability). Lastly, you need 
            the system to keep running smoothly even if there’s a communication breakdown between branches (Partition Tolerance).
          </p>
          <p>
            The <strong>CAP theorem</strong> tells us that we can only pick two out of three properties:
          </p>
          <ul>
            <li>
              <strong>Consistency (C):</strong> Every read receives the most recent write or an error. In our restaurant analogy, 
              consistency means every branch always has the latest information about ingredient stock.
            </li>
            <li>
              <strong>Availability (A):</strong> Every request receives a response, without guarantee that it contains the most 
              recent write. In the analogy, this means that even if the information is outdated, the branches are always able to 
              serve customers.
            </li>
            <li>
              <strong>Partition Tolerance (P):</strong> The system continues to operate despite an arbitrary number of messages being 
              dropped by the network between nodes. In our analogy, this means branches can continue serving even when there are 
              issues with communication between branches.
            </li>
          </ul>
          <p>
            You can prioritize consistency and availability, but if a partition happens, the system may not work correctly. 
            Alternatively, you can choose availability and partition tolerance, but the information may not be consistent 
            across all branches.
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
              <p>You answered {answers.filter(a => a === 'Correct').length} out of {questions.length} questions correctly!</p>
            </div>
          )}
        </div>
      )}

      {activeSection === 'resources' && (
        <div className="reference-links">
          <h3>Learn More about CAP Theorem</h3>
          <ul>
            <li><a href="https://en.wikipedia.org/wiki/CAP_theorem" target="_blank" rel="noopener noreferrer">Wikipedia: CAP Theorem</a></li>
            <li><a href="https://aws.amazon.com/nosql/cap-theorem/" target="_blank" rel="noopener noreferrer">AWS: Understanding the CAP Theorem</a></li>
            <li><a href="https://www.geeksforgeeks.org/cap-theorem-in-distributed-systems/" target="_blank" rel="noopener noreferrer">GeeksforGeeks: CAP Theorem in Distributed Systems</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default CAPTheorem;
