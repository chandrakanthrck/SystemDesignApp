import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/ConsensusAlgorithms.css'; // Importing the specific CSS file
import consensusAlgorithmsQuestions from '../data/ConsensusAlgorithmsQuestions'; // Import questions from the separate file

function ConsensusAlgorithms() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...consensusAlgorithmsQuestions]
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
    <div className="consensus-container">
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
          className="consensus-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/consensus-algorithms-diagram.png`}
            alt="Consensus Algorithms Diagram"
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
          <h2>Consensus Algorithms</h2>
          <p>
            <strong>Consensus algorithms</strong> are protocols used to achieve agreement among nodes in a distributed system. 
            They are crucial for ensuring data consistency and reliability across nodes, particularly in decentralized environments 
            like blockchain or distributed databases.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine you and several friends are deciding on a movie to watch together. Everyone needs to agree on the movie before you 
            can start watching. However, some of your friends are in different rooms, and there might be issues like miscommunication 
            or someone missing the message. A consensus algorithm is like a structured way for all of you to vote on the movie, ensuring 
            everyone agrees on the same choice, even if there are occasional miscommunications.
          </p>
          <h3>Popular Consensus Algorithms</h3>
          <ul>
            <li><strong>Paxos:</strong> A complex but effective algorithm for achieving consensus in distributed systems.</li>
            <li><strong>Raft:</strong> Designed to be easier to understand, Raft uses leader election and log replication for consensus.</li>
            <li><strong>Byzantine Fault Tolerance (BFT):</strong> Used to handle faulty nodes that may act maliciously, ensuring agreement even in challenging conditions.</li>
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
          <h3>Learn More about Consensus Algorithms</h3>
          <ul>
            <li><a href="https://raft.github.io/" target="_blank" rel="noopener noreferrer">Raft: Understand Consensus Simplified</a></li>
            <li><a href="https://lamport.azurewebsites.net/pubs/paxos-simple.pdf" target="_blank" rel="noopener noreferrer">Paxos Made Simple by Leslie Lamport</a></li>
            <li><a href="https://www.ibm.com/docs/en/i/7.4?topic=ssw_ibm_i_74/rzajx/rzajxconchecks.htm" target="_blank" rel="noopener noreferrer">IBM: What is Byzantine Fault Tolerance?</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ConsensusAlgorithms;
