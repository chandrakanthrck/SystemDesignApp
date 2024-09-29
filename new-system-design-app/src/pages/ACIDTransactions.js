// src/pages/ACIDTransactions.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/ACIDTransactions.css';
import acidQuestions from '../data/ACIDQuestions';

function ACIDTransactions() {
  // State for showing additional sections
  const [activeSection, setActiveSection] = useState('content');

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
        <motion.div
          className="acid-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/acid-transactions-diagram.png`}
            alt="ACID Transactions Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="acid-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="acid-title">What Is An ACID Transaction?</h1>
          <p>
            You’ve probably heard the term ACID transaction thrown around in database discussions. It’s one of those concepts that sounds complicated but is pretty straightforward once you break it down.
          </p>
          <p>
            If you’re working with databases, understanding ACID transactions is key to ensuring your data remains accurate and reliable. This becomes even more important in environments where multiple users or systems access and modify the data simultaneously.
          </p>
          <p>
            Let’s get into what an ACID transaction is and why it matters for data integrity and reliability.
          </p>

          <h2>What is an ACID Transaction?</h2>
          <p>
            An ACID transaction is a set of database operations that adhere to the ACID properties: Atomicity, Consistency, Isolation, and Durability. These properties work together to ensure that your data remains accurate and reliable, even in the face of errors, crashes, or concurrent access.
          </p>

          <h2>ACID Properties Explained</h2>

          <h3>Atomicity</h3>
          <p>
            Atomicity is the all-or-nothing principle. When you initiate a transaction, it must either complete fully or not at all. Think of it as a package deal; if any part of the transaction fails, the entire transaction rolls back, leaving the database unchanged. 
            For example, if you transfer money between bank accounts, both the debit and credit operations must succeed together. If one part fails, neither operation is applied, ensuring the database remains in its original state.
          </p>

          <h3>Consistency</h3>
          <p>
            Consistency ensures that the database remains in a valid state before and after the transaction. This means all data integrity constraints are maintained throughout the transaction. If a transaction violates any integrity rules, it will not be committed. 
            For instance, if you have a rule that prevents negative balances in bank accounts, any transaction attempting to overdraw an account will be aborted. This ensures that all transactions lead the database from one consistent state to another, maintaining the correctness of the data.
          </p>

          <h3>Isolation</h3>
          <p>
            Isolation means that concurrent transactions do not interfere with each other. Each transaction operates independently, and intermediate states are not visible to other transactions. This prevents issues like dirty reads, where one transaction reads uncommitted changes from another. 
            For example, if two users are updating the same account balance simultaneously, isolation ensures that each transaction is processed in a way that they do not see each other’s uncommitted changes. This maintains data consistency and prevents anomalies.
          </p>

          <h3>Durability</h3>
          <p>
            Durability guarantees that once a transaction is committed, its effects are permanent, even in the event of a system failure. This means that the changes made by the transaction are saved to non-volatile storage. 
            For example, if you update a customer’s address in a database and the transaction commits, this change will persist even if the system crashes immediately afterward. Durability ensures that committed transactions are not lost and the database can recover to a consistent state after a failure.
          </p>

          <h2>Benefits of ACID Transactions</h2>

          <h3>Data Integrity</h3>
          <p>
            Data integrity is a cornerstone of ACID transactions. When you perform operations on your database, you want to ensure that the data remains accurate and consistent. ACID transactions achieve this by enforcing rules that prevent data corruption and inconsistencies. 
            For instance, if you are updating multiple related records, ACID properties ensure that all changes are applied correctly and that the database remains in a valid state. This prevents scenarios where partial updates could lead to data anomalies, ensuring that your data is always reliable.
          </p>

          <h3>Reliability</h3>
          <p>
            Reliability in database systems means that once a transaction is committed, its effects are permanent. This is a key benefit of ACID transactions. When you commit a transaction, the changes are stored in a way that they persist even if the system crashes immediately afterward. 
            This guarantees that your data remains stable and dependable. For example, if you update a customer’s order status, you can be confident that this update will not be lost, providing a consistent and reliable experience for your users.
          </p>

          <h3>Concurrency Control</h3>
          <p>
            Concurrency control allows multiple transactions to execute concurrently without interfering with each other. This is particularly important in multi-user environments where several users might be accessing and modifying the database simultaneously. 
            ACID transactions manage concurrency by isolating transactions from each other, ensuring that one transaction’s intermediate states are not visible to others. This maintains data consistency and prevents issues such as dirty reads.
          </p>

          <h2>How do ACID Transactions Work?</h2>
          <p>
            The process starts with the initiation of a transaction. This sets the stage for a series of database operations that will be treated as a single unit. Once the transaction begins, the database operations are executed, such as reading, writing, updating, or deleting data.
          </p>
          <p>
            During execution, ACID properties come into play:
            <ul>
              <li><strong>Atomicity:</strong> Ensures that all operations within the transaction are completed successfully. If any operation fails, the entire transaction is aborted.</li>
              <li><strong>Consistency:</strong> Maintains the database’s integrity by ensuring that all operations adhere to predefined rules and constraints.</li>
              <li><strong>Isolation:</strong> Keeps the operations within the transaction separate from other concurrent transactions.</li>
              <li><strong>Durability:</strong> Prepares to make the changes permanent once the transaction is committed.</li>
            </ul>
          </p>
          <p>
            If all operations are successful, the transaction is committed, permanently applying changes. Otherwise, the transaction is rolled back, reverting the database to its initial state before the transaction began.
          </p>

          {/* More comprehensive content can be added here to match a full tech blog page */}
        </motion.div>
      )}

      {activeSection === 'quiz' && (
        <motion.div
          className="quiz-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>
      )}

      {activeSection === 'resources' && (
        <motion.div
          className="reference-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3>Learn More about ACID Transactions</h3>
          <ul>
            <li><a href="https://en.wikipedia.org/wiki/ACID" target="_blank" rel="noopener noreferrer">Wikipedia: ACID</a></li>
            <li><a href="https://www.ibm.com/docs/en/db2/11.5?topic=properties-acid-transactions" target="_blank" rel="noopener noreferrer">IBM: ACID Transactions</a></li>
            <li><a href="https://www.geeksforgeeks.org/acid-properties-in-dbms/" target="_blank" rel="noopener noreferrer">GeeksforGeeks: ACID Properties</a></li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default ACIDTransactions;
