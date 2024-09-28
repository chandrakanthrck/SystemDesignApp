import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/LatencyVsThroughput.css'; // Ensure correct CSS import
import latencyThroughputQuestions from '../data/LatencyThroughputQuestions'; // Import the questions from the separate file

function LatencyThroughput() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...latencyThroughputQuestions]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    setQuestions(selectedQuestions);
  }, []);

  const handleAnswer = (isCorrect) => {
    setAnswers([...answers, isCorrect]);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="lt-container">
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
          className="lt-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/latency-throughput-diagram.png`}
            alt="Latency vs Throughput Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="lt-content-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Latency vs Throughput</h2>
          <p>
            Imagine you are at a coffee shop waiting in line. <strong>Latency</strong> is like the time it takes from placing your order to receiving your coffee. 
            It measures the delay between a request and its fulfillment. In the networking world, latency refers to the time taken for a data packet 
            to travel from the source to the destination.
          </p>
          <p>
            On the other hand, <strong>Throughput</strong> is like the number of coffees served to customers in one hour. It refers to the overall capacity 
            or the amount of work done over a certain period. In networking, throughput is the amount of data successfully transmitted over time.
          </p>

          <h3>Real-Life Scenarios</h3>
          <ul>
            <li>
              <strong>Online Gaming</strong>: In an online game, <strong>low latency</strong> is crucial because any delay in transmitting the data between the player's actions and the server response 
              results in a poor gaming experience.
            </li>
            <li>
              <strong>Video Streaming</strong>: For a streaming service like Netflix, <strong>high throughput</strong> is essential to deliver HD or 4K video streams without buffering, as it requires 
              a lot of data transmission.
            </li>
          </ul>

          <h3>Understanding the Trade-offs</h3>
          <p>
            The trade-off between latency and throughput can be understood by their use cases:
          </p>
          <ul>
            <li>
              <strong>Low Latency</strong>: Beneficial for applications requiring quick response times, such as video calls, online gaming, and remote surgery.
            </li>
            <li>
              <strong>High Throughput</strong>: Suitable for tasks like file downloads, data backups, and video streaming, where the volume of data matters more than the delay.
            </li>
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
                onClick={() => handleAnswer(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Correct
              </motion.button>
              <motion.button
                className="quiz-button"
                onClick={() => handleAnswer(false)}
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
                You answered {answers.filter((a) => a).length} out of {questions.length} questions correctly!
              </p>
            </div>
          )}
        </div>
      )}

      {activeSection === 'resources' && (
        <div className="reference-links">
          <h3>Learn More about Latency and Throughput</h3>
          <ul>
            <li>
              <a
                href="https://www.cloudflare.com/learning/performance/glossary/what-is-latency/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloudflare: What is Latency? - Learn the basics of network latency and how it impacts user experience.
              </a>
            </li>
            <li>
              <a
                href="https://www.techtarget.com/searchnetworking/definition/throughput"
                target="_blank"
                rel="noopener noreferrer"
              >
                TechTarget: Throughput Definition - Understand what throughput is and why it's important in networking.
              </a>
            </li>
            <li>
              <a
                href="https://aws.amazon.com/architecture/network-performance-monitoring/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AWS: Network Performance Monitoring - Explore how AWS helps monitor and optimize network latency and throughput.
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LatencyThroughput;
