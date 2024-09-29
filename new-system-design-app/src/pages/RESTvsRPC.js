import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/globalStyles.css';
import '../styles/RESTvsRPC.css'; // Ensure the correct CSS file is imported
import restVsRpcQuestions from '../data/RESTvsRPCQuestions'; // Import quiz questions

function RESTvsRPC() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...restVsRpcQuestions]
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
    <div className="rest-rpc-container">
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
          className="rest-rpc-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/rest-vs-rpc-diagram.png`}
            alt="REST vs RPC Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="rest-rpc-content-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>REST vs RPC</h2>
          <p>
            REST (Representational State Transfer) and RPC (Remote Procedure Call) are two prominent architectural styles for building APIs.
            Understanding their differences is crucial for selecting the right approach for your application needs.
          </p>

          <h3>Understanding REST</h3>
          <p>
            REST is an architectural style that uses standard HTTP methods (GET, POST, PUT, DELETE) for operations. 
            It is resource-oriented, meaning it focuses on entities (resources) and their representations. 
            RESTful APIs typically return data in JSON or XML formats, making them easy to consume by various clients.
          </p>
          
          <h3>Understanding RPC</h3>
          <p>
            RPC is a protocol that allows a client to execute a procedure on a server as if it were a local call. 
            It is function-oriented, often requiring clients to know the methods available on the server. 
            RPC can be more efficient for specific operations, as it may use binary protocols, reducing the amount of data transferred.
          </p>

          <h3>Comparison Table</h3>
          <table className="compare-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>REST</th>
                <th>RPC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Type</td>
                <td>Resource-based</td>
                <td>Function-based</td>
              </tr>
              <tr>
                <td>Data Format</td>
                <td>JSON/XML</td>
                <td>Binary/Protocol Buffers</td>
              </tr>
              <tr>
                <td>Stateless</td>
                <td>Yes</td>
                <td>No (optional)</td>
              </tr>
            </tbody>
          </table>

          <h3>Understanding Trade-offs</h3>
          <p>
            When to use REST:
          </p>
          <ul>
            <li>Applications that require a stateless interaction and scalability.</li>
            <li>APIs where caching responses can improve performance.</li>
            <li>Web services that require a uniform interface and easy discovery of resources.</li>
          </ul>
          <p>
            When to use RPC:
          </p>
          <ul>
            <li>Applications requiring high performance with lower latency, such as microservices communicating internally.</li>
            <li>Use cases where complex data types and operations are involved, benefiting from binary serialization.</li>
            <li>Scenarios where tight coupling between client and server is acceptable.</li>
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

      {activeSection === 'resources' && (
        <div className="reference-links">
          <h3>Learn More about REST and RPC</h3>
          <ul>
            <li>
              <a
                href="https://restfulapi.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESTful API - Learn the fundamentals of RESTful API design.
              </a>
            </li>
            <li>
              <a
                href="https://grpc.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                gRPC - Discover the benefits of RPC through gRPC, a popular open-source framework.
              </a>
            </li>
            <li>
              <a
                href="https://www.ibm.com/cloud/learn/rest-apis"
                target="_blank"
                rel="noopener noreferrer"
              >
                IBM: REST APIs - Understand more about RESTful APIs and their use cases.
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Footer Section */}
      <div className="rest-rpc-footer">
        Selecting between REST and RPC depends on the specific needs and constraints of your application.
      </div>
    </div>
  );
}

export default RESTvsRPC;
