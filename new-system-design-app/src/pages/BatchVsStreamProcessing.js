// src/pages/BatchVsStreamProcessing.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header'; // Ensure Header is included
import Footer from '../components/Footer'; // Ensure Footer is included
import '../styles/BatchVsStreamProcessing.css';
import batchVsStreamQuestions from '../data/BatchVsStreamQuestions';

function BatchVsStreamProcessing() {
  // State for showing additional sections
  const [activeSection, setActiveSection] = useState('content');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...batchVsStreamQuestions]
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
    <div className="batch-stream-container">
      <Header /> {/* Header Component */}
      
      {/* Top Navigation Bar */}
      <div className="top-bar">
        <button onClick={() => setActiveSection('diagram')}>Diagram</button>
        <button onClick={() => setActiveSection('content')}>Content</button>
        <button onClick={() => setActiveSection('quiz')}>Quiz</button>
        <button onClick={() => setActiveSection('resources')}>Resources</button>
      </div>

      {/* Section Rendering */}
      {activeSection === 'diagram' && (
        <motion.div
          className="batch-stream-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/batch-vs-stream-diagram.png`}
            alt="Batch vs Stream Processing Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="batch-stream-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Batch Processing vs Stream Processing</h2>

          <h3>💡 What is Batch Processing?</h3>
          <p>
            <strong>Batch Processing</strong> is a data processing technique that involves collecting data over a period of time and processing it in bulk. Think of it like gathering laundry over a week and washing it all at once. It is particularly useful when you need to process large datasets, but immediate feedback is not required. Batch processing allows businesses to optimize computing resources by processing data during off-peak hours.
          </p>

          <h3>💡 What is Stream Processing?</h3>
          <p>
            <strong>Stream Processing</strong> is the continuous processing of data as it becomes available. It is akin to washing each clothing item the moment it gets dirty. In stream processing, data is processed in real-time or near-real-time, providing instant insights, which is crucial for applications such as fraud detection, sensor monitoring, and live event processing.
          </p>

          <h3>🤸‍♂️ Flexibility and Application</h3>
          <p>
            The choice between batch and stream processing depends largely on the requirements of your use case:
          </p>
          <ul>
            <li>
              <strong>Batch Processing:</strong> It is flexible and more suitable for use cases where large volumes of data need to be processed, but real-time processing is not required. It is widely used in industries for processing payrolls, end-of-day reports, and preparing datasets for machine learning.
            </li>
            <li>
              <strong>Stream Processing:</strong> It is highly flexible when real-time or near-real-time information is needed. Use cases include monitoring financial transactions for fraud detection, processing social media feeds, or powering real-time analytics dashboards.
            </li>
          </ul>

          <h3>📊 Real-World Examples and Use Cases</h3>
          <h4>Batch Processing Examples</h4>
          <p>
            In the retail industry, companies often perform <strong>end-of-day sales analysis</strong> to understand sales trends, identify top products, and manage inventory effectively. This data is collected throughout the day and processed in a batch, often during the night, to produce the report.
          </p>
          <p>
            Another example is <strong>financial reporting</strong> in banks. At the end of the day, all transactions are aggregated, and reports are generated to track balances and ensure compliance with regulatory requirements.
          </p>

          <h4>Stream Processing Examples</h4>
          <p>
            <strong>Fraud detection</strong> in banking is one of the most prominent examples of stream processing. Here, transactions are evaluated in real-time, and suspicious activity is flagged immediately to prevent fraud.
          </p>
          <p>
            In the world of IoT, imagine a <strong>smart home security system</strong> where sensors stream data continuously. Stream processing allows the system to immediately detect unusual activity, such as unauthorized entry, and take actions like sounding alarms or notifying the homeowner.
          </p>

          <h3>📈 Key Differences Between Batch and Stream Processing</h3>
          <ul>
            <li>
              <strong>Latency:</strong> <em>Batch Processing</em> is often characterized by high latency since it waits until enough data is accumulated before processing it. On the other hand, <em>Stream Processing</em> has low latency, processing data as it arrives, which is ideal for time-sensitive applications.
            </li>
            <li>
              <strong>Complexity:</strong> <em>Stream Processing</em> is inherently more complex as it requires continuous data handling, state management, and error handling, whereas <em>Batch Processing</em> is simpler since data is processed in a fixed schedule and in a predictable manner.
            </li>
            <li>
              <strong>Use Cases:</strong> <em>Batch Processing</em> is used for scenarios where immediacy isn’t a factor, such as payroll processing and sales reports. <em>Stream Processing</em> is used for real-time analytics, fraud detection, and event monitoring.
            </li>
            <li>
              <strong>Data Size:</strong> <em>Batch Processing</em> works well with large datasets collected over time, while <em>Stream Processing</em> deals with data in smaller, continuous streams.
            </li>
          </ul>

          <h3>🛠️ Tools for Batch and Stream Processing</h3>
          <ul>
            <li>
              <strong>Batch Processing:</strong> Popular tools include <strong>Apache Hadoop</strong> and <strong>Apache Spark</strong>. Hadoop allows for distributed storage and processing of big data, while Spark enhances this capability by providing faster in-memory data processing.
            </li>
            <li>
              <strong>Stream Processing:</strong> Tools such as <strong>Apache Kafka</strong>, <strong>Apache Flink</strong>, and <strong>Apache Storm</strong> are widely used. Kafka is used for messaging, while Flink and Storm handle real-time processing of data streams, providing low-latency solutions.
            </li>
          </ul>

          <h3>✍️ Conclusion: Choosing the Right Approach</h3>
          <p>
            Whether you should use batch or stream processing depends largely on the nature of your data and your use case:
          </p>
          <p>
            If your application requires <strong>real-time insights</strong>, immediate response, or has critical time-sensitive data, stream processing is the clear choice. It ensures that data is analyzed the moment it is produced, giving instant feedback.
          </p>
          <p>
            On the other hand, for applications that do not require immediate processing, <strong>batch processing</strong> offers simplicity and efficiency. Processing large volumes of data in batches allows you to optimize for cost and resource management, as operations can be carried out during off-peak times.
          </p>
          <p>
            Ultimately, the choice between batch and stream processing should be based on the specific needs of your project. Many modern architectures use a combination of both techniques to harness the advantages of each. For example, streaming data might be processed in real-time to generate alerts, while a batch process analyzes the same data later to uncover deeper insights and generate reports.
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
          <h3>Learn More about Batch vs Stream Processing</h3>
          <ul>
            <li><a href="https://aws.amazon.com/big-data/datalakes-and-analytics/batch-vs-stream/" target="_blank" rel="noopener noreferrer">AWS: Batch vs Stream Processing</a></li>
            <li><a href="https://www.databricks.com/glossary/batch-processing" target="_blank" rel="noopener noreferrer">Databricks: Batch Processing</a></li>
            <li><a href="https://www.confluent.io/stream-processing/" target="_blank" rel="noopener noreferrer">Confluent: Stream Processing</a></li>
          </ul>
        </div>
      )}
      
      <Footer /> {/* Footer Component */}
    </div>
  );
}

export default BatchVsStreamProcessing;
