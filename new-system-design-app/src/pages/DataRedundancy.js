import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/DataRedundancy.css'; // Importing the specific CSS file
import dataRedundancyQuestions from '../data/DataRedundancyQuestions'; // Import questions from the separate file

function DataRedundancy() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...dataRedundancyQuestions]
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
    <div className="data-redundancy-container">
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
          className="data-redundancy-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/data-redundancy-diagram.png`}
            alt="Data Redundancy Diagram"
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
          <h2>Data Redundancy</h2>
          <p>
            <strong>Data redundancy</strong> is the practice of storing multiple copies of data to ensure its availability and reliability.
            This redundancy helps protect against data loss and ensures that systems can continue to function smoothly in case of failure.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Think of data redundancy like having multiple keys for your house. If you lose one key, you can still access your home using 
            a spare key. Similarly, having multiple copies of data means that even if one copy is lost or corrupted, the system can use 
            another copy, ensuring continued operation.
          </p>
          <h3>Benefits of Data Redundancy</h3>
          <ul>
            <li><strong>Data Availability:</strong> Redundant copies ensure data is accessible even if one source fails.</li>
            <li><strong>Fault Tolerance:</strong> Systems can withstand hardware failures without losing data.</li>
            <li><strong>Disaster Recovery:</strong> Multiple copies of data allow for faster recovery in the event of a disaster.</li>
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
          <h3>Learn More about Data Redundancy</h3>
          <ul>
            <li><a href="https://www.ibm.com/docs/en/SSLTBW_2.4.0/com.ibm.zos.v2r4.e0zb200/data-redundancy.htm" target="_blank" rel="noopener noreferrer">IBM: Understanding Data Redundancy</a></li>
            <li><a href="https://www.techtarget.com/whatis/definition/data-redundancy" target="_blank" rel="noopener noreferrer">TechTarget: What is Data Redundancy?</a></li>
            <li><a href="https://aws.amazon.com/backup/data-redundancy/" target="_blank" rel="noopener noreferrer">AWS: Data Redundancy and Backup</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DataRedundancy;
