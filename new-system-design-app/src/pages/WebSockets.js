import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/globalStyles.css';
import '../styles/WebSockets.css'; // Ensure the correct CSS file is imported
import webSocketsQuestions from '../data/WebSocketsQuestions'; // Import quiz questions

function WebSockets() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...webSocketsQuestions]
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
    <div className="websocket-container">
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
      </div>

      {/* Section Rendering */}
      {activeSection === 'diagram' && (
        <motion.div
          className="websocket-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/websockets-diagram.png`}
            alt="WebSockets Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="websocket-content-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>WebSockets</h2>
          <p>
            WebSockets provide full-duplex communication channels over a single TCP connection, enabling real-time, interactive communication 
            between clients and servers. Unlike HTTP, which is request-response based, WebSockets allow for persistent connections that facilitate
            instant data transfer.
          </p>

          <h3>Key Features</h3>
          <ul>
            <li><strong>Full-Duplex Communication:</strong> Both the client and server can send messages independently, improving responsiveness.</li>
            <li><strong>Low Latency:</strong> Messages are transmitted immediately, making WebSockets ideal for applications requiring real-time updates.</li>
            <li><strong>Efficient Resource Utilization:</strong> Only one connection is used for multiple requests, reducing overhead compared to traditional HTTP.</li>
          </ul>

          <h3>Use Cases</h3>
          <ul>
            <li>Real-time chat applications that require instant message delivery between users.</li>
            <li>Stock tickers that provide up-to-date financial data to users.</li>
            <li>Online multiplayer games where latency must be minimized for a better experience.</li>
            <li>Collaborative editing applications that require live updates as users type.</li>
          </ul>

          <h3>How WebSockets Work</h3>
          <p>
            WebSockets work through a handshake process initiated by the client using the HTTP protocol. Once the handshake is successful,
            the protocol switches from HTTP to WebSocket, and a persistent connection is established. This connection allows for continuous
            two-way data exchange without needing to reopen connections.
          </p>

          <h3>Benefits of Using WebSockets</h3>
          <ul>
            <li>Reduced latency and bandwidth usage compared to traditional HTTP requests.</li>
            <li>Improved user experience in real-time applications.</li>
            <li>Flexibility in data formats, as WebSockets can transmit text and binary data.</li>
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
              <p>
                You answered {answers.filter((a) => a === 'Correct').length} out of {questions.length} questions correctly!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WebSockets;
