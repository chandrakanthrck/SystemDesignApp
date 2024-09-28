import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/BatchVsStreamProcessing.css';
import batchVsStreamQuestions from '../data/BatchVsStreamQuestions'; // Import questions from the separate file

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
          <p>
            <strong>Batch Processing</strong> involves processing large volumes of data at scheduled intervals, much like gathering laundry over the week and washing it all at once. It’s efficient for large datasets, but it doesn’t provide immediate feedback.
          </p>
          <p>
            In contrast, <strong>Stream Processing</strong> handles data in real-time, like washing each clothing item as it becomes dirty, immediately. This is crucial when real-time data is needed, such as fraud detection in banking.
          </p>
          <h3>Real-World Analogies</h3>
          <p>
            Imagine you're working in a factory. **Batch Processing** is like collecting all manufactured parts throughout the day and doing quality checks in one go at the end of the day. **Stream Processing**, on the other hand, is like inspecting each part as soon as it's made, ensuring issues are caught instantly.
          </p>
          <h3>Key Differences</h3>
          <ul>
            <li>
              <strong>Latency:</strong> Batch processing has higher latency since it waits until enough data is collected, while stream processing provides low latency with immediate processing.
            </li>
            <li>
              <strong>Complexity:</strong> Stream processing is more complex to implement due to its need for continuous data handling, whereas batch processing is simpler as it processes data in bulk.
            </li>
            <li>
              <strong>Use Cases:</strong> Stream processing is ideal for applications like real-time analytics, stock trading, and fraud detection. Batch processing is best suited for use cases like payroll processing, reporting, and training machine learning models.
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
    </div>
  );
}

export default BatchVsStreamProcessing;
