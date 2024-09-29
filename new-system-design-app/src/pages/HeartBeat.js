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
          className="content-section"
        >
          <h2>Heartbeat Mechanism</h2>
          <p>
            The <strong>heartbeat mechanism</strong> is a fundamental concept in distributed systems. It helps to monitor and ensure that 
            all nodes in the network are alive and responsive. Essentially, a heartbeat is a periodic signal that is sent from one node 
            to another to indicate that it is still operational.
          </p>
          <h3>Why Is Heartbeat Important?</h3>
          <p>
            In any distributed environment, such as cloud systems or clusters, nodes can fail due to several reasons, such as hardware malfunctions, 
            network issues, or software crashes. Detecting these failures quickly is crucial to maintaining the system’s overall performance and 
            reliability. The heartbeat mechanism provides a simple yet effective way of tracking the health of nodes and taking necessary actions, 
            such as failover or leader elections, when a node goes down.
          </p>
          <h3>How Does Heartbeat Work?</h3>
          <p>
            In a typical implementation, every node sends a heartbeat signal at regular intervals to indicate its status. These signals are sent to 
            a central monitoring service or other nodes, which are responsible for aggregating the health status of the entire system.
          </p>
          <h4>Components of the Heartbeat Mechanism:</h4>
          <ul>
            <li>
              <strong>Pulse Frequency:</strong> The rate at which heartbeat signals are sent. A higher frequency can lead to quicker detection of 
              node failures but may also increase network congestion.
            </li>
            <li>
              <strong>Timeout:</strong> If a node fails to receive a heartbeat signal from another node within a specified period, that node 
              is considered down. The timeout value is crucial to ensure that nodes are not incorrectly marked as failed.
            </li>
            <li>
              <strong>Monitoring and Failover:</strong> Once a node is detected as down, the monitoring service initiates failover processes, 
              like promoting a backup node or reassigning responsibilities.
            </li>
          </ul>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine a group of friends hiking in a forest. Every few minutes, they call out to one another to make sure everyone is still with 
            the group and safe. If a friend does not respond within a certain timeframe, the group knows that something may be wrong and takes 
            action. The heartbeat mechanism in a distributed system is similar—nodes regularly send "signals" to let others know they are 
            still functioning properly.
          </p>
          <h3>Use Cases of Heartbeat Mechanism</h3>
          <h4>1. Distributed Databases</h4>
          <p>
            In distributed databases, heartbeats are used to ensure all nodes are synchronized and can handle client requests effectively.
          </p>
          <h4>2. Leader Election</h4>
          <p>
            When a leader node in a distributed system fails, heartbeat signals help to detect the failure quickly, allowing other nodes to 
            initiate leader election protocols.
          </p>
          <h4>3. Load Balancing</h4>
          <p>
            In systems using load balancers, heartbeats are essential to identify which nodes are available to handle traffic, ensuring 
            requests are not routed to nodes that are down.
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
