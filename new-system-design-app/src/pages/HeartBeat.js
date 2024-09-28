import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/HeartBeat.css'; // Importing the specific CSS file
import heartbeatQuestions from '../data/HeartBeatQuestions'; // Import questions from the separate file

function HeartBeat() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...heartbeatQuestions]
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
    <div className="heartbeat-container">
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
          className="heartbeat-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/heartbeat-diagram.png`}
            alt="Heartbeat Mechanism Diagram"
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
          <h2>Heartbeat Mechanism</h2>
          <p>
            The <strong>heartbeat mechanism</strong> is used to detect if nodes in a distributed system are alive.
            It involves sending regular signals between nodes to ensure that all components are operational and responsive.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine a group of people hiking together in a forest. Every few minutes, the group members call out to each other to confirm
            that everyone is still together and safe. If someone doesn't respond, the group knows to stop and check for problems.
            This is similar to how heartbeat works in a distributed system—nodes regularly check in to indicate they're still alive.
          </p>
          <h3>How Heartbeat Works</h3>
          <p>
            Heartbeat signals are sent at regular intervals to monitor the health of nodes. If a node fails to send a heartbeat signal
            within the expected time frame, it is marked as down, allowing other parts of the system to react accordingly, such as triggering
            failover or leader election processes to maintain system stability.
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
          <h3>Learn More about Heartbeat Mechanism</h3>
          <ul>
            <li><a href="https://en.wikipedia.org/wiki/Heartbeat_(computing)" target="_blank" rel="noopener noreferrer">Wikipedia: Heartbeat in Computing</a></li>
            <li><a href="https://martinfowler.com/articles/patterns-of-distributed-systems/heartbeat.html" target="_blank" rel="noopener noreferrer">Martin Fowler: Heartbeat in Distributed Systems</a></li>
            <li><a href="https://aws.amazon.com/blogs/database/failure-detection-and-leader-election-using-heartbeat-in-distributed-systems/" target="_blank" rel="noopener noreferrer">AWS: Failure Detection and Leader Election Using Heartbeat</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HeartBeat;
