import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/globalStyles.css';
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
            Message queues are a powerful tool for enabling asynchronous communication between services in a distributed system. 
            They allow different components of an application to send and receive messages without needing to wait for each other, 
            which significantly improves the resilience and scalability of applications.
          </p>

          <h3>How Message Queues Work</h3>
          <p>
            Think of a message queue as a mailbox. When a sender (such as a service) has a message to send, it places it into 
            the mailbox (the queue) rather than delivering it directly to the recipient (another service). The recipient can then 
            check the mailbox at its own pace, taking messages out when it is ready to process them. This decouples the sender 
            and the recipient, allowing each to operate independently.
          </p>

          <h3>Benefits of Using Message Queues</h3>
          <ul>
            <li><strong>Decoupling:</strong> Components can evolve independently since they communicate through the queue.</li>
            <li><strong>Asynchronous Processing:</strong> Services can send messages without waiting for a response, enhancing throughput.</li>
            <li><strong>Scalability:</strong> New consumers can be added easily to handle increased load without changing the sender's code.</li>
            <li><strong>Error Handling:</strong> Messages can be retried or sent to a dead-letter queue for further investigation if processing fails.</li>
          </ul>

          <h3>Common Message Queue Implementations</h3>
          <p>
            There are several popular message queue systems available today, each with its unique features and use cases. Here are a few:
          </p>
          <ul>
            <li><strong>RabbitMQ:</strong> An open-source message broker that supports multiple messaging protocols.</li>
            <li><strong>Apache Kafka:</strong> A distributed event streaming platform capable of handling high throughput.</li>
            <li><strong>Amazon SQS:</strong> A fully managed message queuing service that makes it easy to decouple and scale microservices.</li>
          </ul>

          <h3>Real-World Applications</h3>
          <p>
            Message queues are commonly used in various scenarios:
          </p>
          <ul>
            <li><strong>Order Processing:</strong> In e-commerce applications, when a customer places an order, the order details can be sent to a queue for processing without making the user wait.</li>
            <li><strong>Data Processing Pipelines:</strong> Large-scale data processing jobs can use message queues to manage tasks, allowing different processing steps to scale independently.</li>
            <li><strong>Notifications:</strong> Applications can send notifications through a message queue, ensuring that the user receives updates without direct interaction.</li>
          </ul>

          <h3>Conclusion</h3>
          <p>
            In summary, message queues provide a reliable way for services to communicate in a distributed architecture. 
            By decoupling components and allowing asynchronous processing, they enhance the performance and resilience of applications. 
            As businesses increasingly rely on microservices, understanding and implementing message queues becomes essential for modern software architecture.
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
