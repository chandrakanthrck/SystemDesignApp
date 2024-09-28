import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/ACIDTransactions.css';  // Use a separate CSS file for specific concept styling.
import acidQuestions from '../data/ACIDQuestions'; // Import questions from the separate file

function ACIDTransactions() {
  // State for showing additional sections
  const [activeSection, setActiveSection] = useState('content');
  
  // State for showing additional information
  const [showAtomicity, setShowAtomicity] = useState(false);
  const [showConsistency, setShowConsistency] = useState(false);
  const [showIsolation, setShowIsolation] = useState(false);
  const [showDurability, setShowDurability] = useState(false);

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...acidQuestions]
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
    <div className="acid-container">
      {/* Top Navigation Bar */}
      <div className="top-bar">
        <button className={activeSection === 'diagram' ? 'active-button' : ''} onClick={() => setActiveSection('diagram')}>
          Diagram
        </button>
        <button className={activeSection === 'content' ? 'active-button' : ''} onClick={() => setActiveSection('content')}>
          Content
        </button>
        <button className={activeSection === 'quiz' ? 'active-button' : ''} onClick={() => setActiveSection('quiz')}>
          Quiz
        </button>
        <button className={activeSection === 'resources' ? 'active-button' : ''} onClick={() => setActiveSection('resources')}>
          Resources
        </button>
      </div>

      {/* Section Rendering */}
      {activeSection === 'diagram' && (
        <motion.img
          src={`${process.env.PUBLIC_URL}/images/acid-transactions-diagram.png`}
          alt="ACID Transactions Diagram"
          className="acid-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        />
      )}

      {activeSection === 'content' && (
        <motion.div
          className="acid-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="acid-title">ACID Transactions</h2>
          <p>
            ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable processing 
            of database transactions, providing a framework for maintaining database integrity.
          </p>

          <motion.div
            className="interactive-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h3 className="interactive-heading">Explore the ACID Properties with Analogies</h3>

            <div className="acid-property">
              <motion.button
                className="interactive-button"
                onClick={() => setShowAtomicity(!showAtomicity)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Atomicity
              </motion.button>
              {showAtomicity && (
                <motion.div
                  className="property-details"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p>
                    <strong>Atomicity</strong> ensures that all parts of a transaction are completed. If any part fails, 
                    the entire transaction is rolled back, ensuring the database remains in a consistent state. 
                    Think of it like a vending machine: if the machine cannot give you the snack, it will return your money. 
                    It’s an "all or nothing" principle, ensuring completeness.
                  </p>
                </motion.div>
              )}
            </div>

            <div className="acid-property">
              <motion.button
                className="interactive-button"
                onClick={() => setShowConsistency(!showConsistency)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Consistency
              </motion.button>
              {showConsistency && (
                <motion.div
                  className="property-details"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p>
                    <strong>Consistency</strong> ensures that a transaction transforms the database from one valid state to 
                    another, respecting all defined rules, such as constraints, cascades, and triggers. 
                    Imagine a bank with multiple branches; every transaction across these branches must be recorded correctly 
                    to maintain the overall balance. If a transaction breaks any rules, it will be rolled back, ensuring 
                    that the database remains in a valid state.
                  </p>
                </motion.div>
              )}
            </div>

            <div className="acid-property">
              <motion.button
                className="interactive-button"
                onClick={() => setShowIsolation(!showIsolation)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Isolation
              </motion.button>
              {showIsolation && (
                <motion.div
                  className="property-details"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p>
                    <strong>Isolation</strong> ensures that concurrent execution of transactions leaves the database in the 
                    same state as if the transactions were executed sequentially. 
                    Consider two people, Alex and Jamie, withdrawing money from a shared account simultaneously. 
                    **Isolation** is like making sure they take turns, so that one transaction completes before the other starts. 
                    This avoids situations like over-withdrawal from the account.
                  </p>
                </motion.div>
              )}
            </div>

            <div className="acid-property">
              <motion.button
                className="interactive-button"
                onClick={() => setShowDurability(!showDurability)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Durability
              </motion.button>
              {showDurability && (
                <motion.div
                  className="property-details"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p>
                    <strong>Durability</strong> guarantees that once a transaction is committed, it remains so, 
                    even in the case of a power failure, crash, or other system errors. 
                    Imagine you save an important address on a piece of paper and lock it away in a safe place. 
                    Even if the power goes out, the information is still there, safe and sound. 
                    This is what **Durability** ensures for committed transactions.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {activeSection === 'quiz' && (
        <div className="quiz-section">
          <h3>Take the Quiz</h3>
          {!quizFinished ? (
            <div className="question-container">
              <motion.p
                className="quiz-question"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {questions[currentQuestionIndex]?.question}
              </motion.p>
              <div className="quiz-options">
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
            </div>
          ) : (
            <div className="quiz-results">
              <motion.h4
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Quiz Finished!
              </motion.h4>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                You answered {answers.filter(a => a === 'Correct').length} out of {questions.length} questions correctly!
              </motion.p>
            </div>
          )}
        </div>
      )}

      {activeSection === 'resources' && (
        <div className="reference-links">
          <h3>Learn More about ACID Transactions</h3>
          <ul>
            <li><a href="https://en.wikipedia.org/wiki/ACID" target="_blank" rel="noopener noreferrer">Wikipedia: ACID</a></li>
            <li><a href="https://www.ibm.com/docs/en/db2/11.5?topic=properties-acid-transactions" target="_blank" rel="noopener noreferrer">IBM: ACID Transactions</a></li>
            <li><a href="https://www.geeksforgeeks.org/acid-properties-in-dbms/" target="_blank" rel="noopener noreferrer">GeeksforGeeks: ACID Properties</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ACIDTransactions;
