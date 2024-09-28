import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/MessageQueues.css'; // Ensure correct CSS import
import messageQueuesQuestions from '../data/MessageQueuesQuestions'; // Import the questions from the separate file

function MessageQueues() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...messageQueuesQuestions]
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
    <div className="mq-container">
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
          className="mq-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/message-queues-diagram.png`}
            alt="Message Queues Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="mq-content-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Message Queues</h2>
          <p>
            Message queues facilitate asynchronous communication between services by allowing them to send and receive messages 
            without waiting for each other, which increases system resilience.
          </p>

          <h3>How Message Queues Work</h3>
          <p>
            Imagine a coffee shop where orders are placed on a counter for baristas to pick up and prepare, instead of the customer 
            waiting at the counter until their drink is ready. This method helps the baristas prepare multiple orders efficiently 
            while customers can continue their activities. Similarly, message queues help decouple services by placing messages 
            in a queue for processing independently.
          </p>

          <h3>Example of Message Queues</h3>
          <p>
            For instance, a web application can use a message queue to process user requests asynchronously, ensuring that users 
            receive timely responses without delays caused by backend processing.
          </p>

          <h3>Benefits of Message Queues</h3>
          <p>
            Message queues improve system resilience, increase throughput, and enhance scalability by allowing different 
            components to operate independently.
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
          <h3>Learn More about Message Queues</h3>
          <ul>
            <li>
              <a
                href="https://aws.amazon.com/sqs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AWS SQS: Learn about Amazon's Simple Queue Service.
              </a>
            </li>
            <li>
              <a
                href="https://www.rabbitmq.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RabbitMQ: Explore the open-source message broker used for queuing.
              </a>
            </li>
            <li>
              <a
                href="https://kafka.apache.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apache Kafka: Discover Kafka as a distributed event streaming platform.
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Footer Section */}
      <div className="mq-footer">
        Effective message queuing can significantly enhance the reliability of your applications.
      </div>
    </div>
  );
}

export default MessageQueues;
