import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Checksum.css'; // Updated to use Checksum-specific CSS file
import checksumQuestions from '../data/ChecksumQuestions'; // Import questions from the separate file

function Checksum() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...checksumQuestions]
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
    <div className="checksum-container">
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
          className="checksum-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/checksum-diagram.png`}
            alt="Checksum Diagram"
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
          <h2>Checksum</h2>
          <p>
            A <strong>checksum</strong> is a small-sized datum derived from a larger data set to detect errors introduced during 
            transmission or storage. It ensures data integrity by verifying that the content received matches the content sent.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Think of a <strong>checksum</strong> like a "packing list" for a delivery. Imagine you order a box of various items. 
            The sender includes a list of all items in the box. When the box arrives, you check the contents against the list. 
            If everything matches, you know the box was not tampered with. Similarly, checksums ensure that data received 
            matches the original data, verifying that nothing was altered during transmission.
          </p>
          <h3>Benefits of Using Checksums</h3>
          <ul>
            <li>Ensures data integrity during storage or transmission.</li>
            <li>Helps in detecting accidental changes in data.</li>
            <li>Used in networking protocols to verify packet integrity.</li>
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
          <h3>Learn More about Checksums</h3>
          <ul>
            <li><a href="https://en.wikipedia.org/wiki/Checksum" target="_blank" rel="noopener noreferrer">Wikipedia: Checksum</a></li>
            <li><a href="https://www.geeksforgeeks.org/checksum-error-detection/" target="_blank" rel="noopener noreferrer">GeeksforGeeks: Checksum Error Detection</a></li>
            <li><a href="https://www.ibm.com/docs/en/i/7.4?topic=ssw_ibm_i_74/rzajx/rzajxconchecks.htm" target="_blank" rel="noopener noreferrer">IBM: Checksums and Data Verification</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Checksum;
