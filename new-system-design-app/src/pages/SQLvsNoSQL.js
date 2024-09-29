import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/SQLvsNoSQL.css'; // Ensure the correct CSS file is imported
import sqlVsNoSqlQuestions from '../data/SQLvsNoSQLQuestions'; // Import quiz questions

function SQLvsNoSQL() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...sqlVsNoSqlQuestions]
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
    <div className="sql-nosql-container">
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
          className="sql-nosql-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/sql-vs-nosql-diagram.png`}
            alt="SQL vs NoSQL Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="sql-nosql-content-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>SQL vs NoSQL</h2>
          <p>
            SQL (Structured Query Language) databases are relational, structured, and enforce a schema, 
            while NoSQL (Not Only SQL) databases are non-relational, schema-less, and provide flexibility for 
            storing unstructured data. Understanding the strengths and weaknesses of each type can guide your 
            decision based on specific use cases.
          </p>

          <h3>When to Use SQL</h3>
          <p>
            SQL databases are ideal for applications requiring:
          </p>
          <ul>
            <li>Complex queries and transactions.</li>
            <li>Data integrity and ACID compliance.</li>
            <li>Structured data with a predefined schema.</li>
            <li>Reporting and analytical tasks that benefit from SQL queries.</li>
          </ul>

          <h3>When to Use NoSQL</h3>
          <p>
            NoSQL databases are suitable for applications needing:
          </p>
          <ul>
            <li>Horizontal scaling to handle large volumes of unstructured data.</li>
            <li>Flexible data models that can evolve over time.</li>
            <li>Fast data access with varying consistency models.</li>
            <li>Real-time analytics and high-velocity data streams.</li>
          </ul>

          <h3>Comparison Table</h3>
          <table className="compare-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>SQL</th>
                <th>NoSQL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data Structure</td>
                <td>Relational</td>
                <td>Non-relational</td>
              </tr>
              <tr>
                <td>Schema</td>
                <td>Fixed</td>
                <td>Dynamic</td>
              </tr>
              <tr>
                <td>Transactions</td>
                <td>ACID compliant</td>
                <td>Eventual consistency</td>
              </tr>
              <tr>
                <td>Scaling</td>
                <td>Vertical</td>
                <td>Horizontal</td>
              </tr>
            </tbody>
          </table>

          <h3>Understanding Trade-offs</h3>
          <p>
            SQL databases are ideal for structured data and complex queries, while NoSQL provides flexibility 
            and scalability for unstructured data. Consider the nature of your data and access patterns when choosing 
            between SQL and NoSQL.
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
              <p>
                You answered {answers.filter((a) => a === 'Correct').length} out of {questions.length} questions correctly!
              </p>
            </div>
          )}
        </div>
      )}

      {activeSection === 'resources' && (
        <div className="reference-links">
          <h3>Learn More about SQL and NoSQL</h3>
          <ul>
            <li>
              <a
                href="https://www.mongodb.com/nosql-explained"
                target="_blank"
                rel="noopener noreferrer"
              >
                MongoDB: NoSQL Explained - Understand the benefits and use cases of NoSQL databases.
              </a>
            </li>
            <li>
              <a
                href="https://www.postgresql.org/docs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PostgreSQL Documentation - Learn more about SQL databases and how they work.
              </a>
            </li>
            <li>
              <a
                href="https://www.cockroachlabs.com/blog/sql-vs-nosql-database-differences/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SQL vs NoSQL - Explore detailed differences between SQL and NoSQL.
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Footer Section */}
      <div className="sql-nosql-footer">
        Understanding the strengths and weaknesses of each type will guide your decision based on specific use cases.
      </div>
    </div>
  );
}

export default SQLvsNoSQL;
