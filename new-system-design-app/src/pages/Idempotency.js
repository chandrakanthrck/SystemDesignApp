import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Idempotency.css'; // Ensure correct CSS import
import idempotencyQuestions from '../data/IdempotencyQuestions'; // Import questions from a separate file

function Idempotency() {
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...idempotencyQuestions]
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
    <div className="idempotency-container">
      {/* Animated Header */}
      <motion.h2
        className="idempotency-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Understanding Idempotency
      </motion.h2>

      {/* Animated Description */}
      <motion.p
        className="idempotency-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Idempotency refers to an operation's ability to produce the same result, regardless of how many times it is executed.
        This property is crucial for retrying network requests without causing unintended consequences.
      </motion.p>

      {/* Real-World Analogy Section */}
      <motion.div
        className="analogy-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>Real-World Analogy</h2>
        <p>
          Imagine a light switch. Flipping the light switch "on" once will turn on the light, and flipping it "on" again will have no additional effect—it remains on.
          This behavior is like an idempotent operation: applying it multiple times has the same effect as applying it once.
        </p>
      </motion.div>

      {/* Animated Diagram */}
      <motion.div
        className="idempotency-diagram"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/idempotency-diagram.png`}
          alt="Idempotency Diagram"
          className="concept-image"
        />
      </motion.div>

      {/* Quiz Section */}
      <motion.div
        className="quiz-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h3>Idempotency Quiz</h3>
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
      </motion.div>

      {/* Resources Section */}
      <motion.div
        className="reference-links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <h3>Learn More about Idempotency</h3>
        <ul>
          <li><a href="https://www.restapitutorial.com/lessons/idempotency.html" target="_blank" rel="noopener noreferrer">REST API Tutorial: Idempotency</a></li>
          <li><a href="https://www.martinfowler.com/articles/idempotency.html" target="_blank" rel="noopener noreferrer">Martin Fowler: Understanding Idempotency</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Glossary/Idempotent" target="_blank" rel="noopener noreferrer">MDN: Idempotency</a></li>
        </ul>
      </motion.div>

      {/* Action Buttons Section */}
      <div className="buttons-container">
        <motion.button
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More About API Design
        </motion.button>
        <motion.button
          className="action-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Retry Mechanisms
        </motion.button>
      </div>

      {/* Footer Section */}
      <div className="idempotency-footer">
        Understanding idempotency helps in building robust and reliable systems, especially in microservices architecture.
      </div>
    </div>
  );
}

export default Idempotency;
