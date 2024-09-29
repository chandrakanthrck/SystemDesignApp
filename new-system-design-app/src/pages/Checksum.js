import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Checksum.css'; // Updated to use Checksum-specific CSS file
import checksumQuestions from '../data/ChecksumQuestions'; // Import questions from the separate file

function Checksum() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('content');
  
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
            A <strong>checksum</strong> is a value calculated from a data set to ensure the integrity of the data during transmission or storage. It's used to detect errors that might have occurred due to hardware or software problems, network glitches, or storage device failures.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine you are shipping a box with a list of items inside. You write down a total count of how many items are in the box and include this number in your shipping records. When the box arrives at its destination, the receiver counts the items. If the number matches the original count, the shipment was successful. If there’s a discrepancy, it indicates that something went wrong in transit.
          </p>
          <h3>How Checksum Works</h3>
          <p>
            A checksum is calculated by applying a mathematical algorithm to the data. The resulting value, called the "checksum," is transmitted along with the data. When the data is received, the checksum is recalculated to verify if it matches the original checksum.
          </p>
          <h3>Types of Checksums</h3>
          <ul>
            <li><strong>Parity Bit:</strong> A simple form of checksum that adds a bit to ensure that the total number of 1s is either even or odd, depending on the agreed-upon convention.</li>
            <li><strong>MD5 and SHA:</strong> Cryptographic hash functions like MD5 and SHA (Secure Hash Algorithm) generate a hash value that can act as a checksum to verify data integrity.</li>
            <li><strong>Cyclic Redundancy Check (CRC):</strong> A popular method used in digital networks and storage devices to detect accidental changes to raw data.</li>
          </ul>
          <h3>Benefits of Using Checksums</h3>
          <ul>
            <li><strong>Ensures Data Integrity:</strong> By comparing the checksum value before and after transmission, you can ensure that the data was not corrupted.</li>
            <li><strong>Detects Errors:</strong> Checksums can detect errors in data transmission, storage, or processing, allowing you to take corrective actions.</li>
            <li><strong>Lightweight Solution:</strong> They provide a lightweight means of verifying data without adding significant overhead or complexity.</li>
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
