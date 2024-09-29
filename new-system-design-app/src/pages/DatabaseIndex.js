import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/DatabaseIndex.css'; // Importing the specific CSS file
import databaseIndexQuestions from '../data/DatabaseIndexQuestions'; // Import questions from the separate file

function DatabaseIndex() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...databaseIndexQuestions]
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
    <div className="database-index-container">
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
          className="database-index-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/database-index-diagram.png`}
            alt="Database Index Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="database-index-content"
        >
          <h2>Database Index</h2>
          <p>
            A <strong>database index</strong> is a data structure used to quickly locate and access the data in a database table. 
            It significantly enhances the speed of read operations, making data retrieval more efficient by avoiding full table scans.
          </p>
          <h3>Why are Database Indexes Important?</h3>
          <p>
            Imagine you have a massive book with thousands of pages. To find a specific topic, you wouldn't flip through every page; instead, 
            you'd refer to the index at the end of the book to quickly find the topic and its corresponding page. This is precisely how a database index works. 
            It acts as a reference point, allowing the database to go directly to the needed data, rather than searching every row.
          </p>
          <h3>Types of Database Indexes</h3>
          <ul>
            <li>
              <strong>Primary Index:</strong> This type of index is automatically created when a primary key is defined. 
              It ensures that each value in the indexed column is unique.
            </li>
            <li>
              <strong>Secondary Index:</strong> This type of index is created for non-primary key columns to help speed up query searches 
              for frequently used fields.
            </li>
            <li>
              <strong>Composite Index:</strong> A composite index is an index on two or more columns, which is useful for queries that filter 
              based on multiple columns.
            </li>
          </ul>
          <h3>Real-World Analogy</h3>
          <p>
            Consider a large phonebook with names listed in alphabetical order. If you wanted to find a particular person’s contact information, 
            having the phonebook sorted allows you to quickly jump to the correct section. Without sorting or an index, you'd have to go through 
            every page until you found the person you’re looking for. This is the main benefit of a database index — it optimizes search operations 
            by making it easier for the system to directly access data.
          </p>
          <h3>Benefits of Using Indexes</h3>
          <ul>
            <li><strong>Faster Search:</strong> Indexes speed up query processing, allowing databases to locate and access rows quickly.</li>
            <li><strong>Efficient Sorting:</strong> Indexes help in sorting data, reducing the time complexity of sort operations significantly.</li>
            <li><strong>Optimized Queries:</strong> Complex queries that use conditions (e.g., WHERE clauses) benefit from indexing, as it helps the database find the exact rows quickly.</li>
          </ul>
          <h3>Drawbacks of Using Indexes</h3>
          <p>
            Although indexes are powerful tools for improving read performance, they come with a few trade-offs:
          </p>
          <ul>
            <li><strong>Storage Overhead:</strong> Indexes take up additional storage space, which can be significant for large datasets.</li>
            <li><strong>Slower Write Operations:</strong> Every time data is added or modified, the index also needs to be updated, which can impact the performance of write operations.</li>
          </ul>
          <h3>How Indexing Works in Practice</h3>
          <p>
            When an index is created, the database creates a separate data structure (e.g., a B-tree or hash map) to store the index. 
            When a query is executed that matches the indexed column, the database can use the index to quickly locate the row rather than performing a full table scan. 
            Indexes are particularly useful in large tables where reading operations are more frequent than writing operations.
          </p>
          <h3>Common Use Cases for Indexes</h3>
          <ul>
            <li><strong>Search Queries:</strong> Indexes are used in SQL queries that use the <code>WHERE</code> clause to filter rows, significantly speeding up the retrieval process.</li>
            <li><strong>Join Operations:</strong> When tables are joined, indexes can improve performance by reducing the amount of data that needs to be scanned.</li>
            <li><strong>Ordering Results:</strong> Indexes are helpful when results need to be ordered using clauses like <code>ORDER BY</code>, making sorting more efficient.</li>
          </ul>
          <h3>Best Practices for Using Indexes</h3>
          <ul>
            <li><strong>Index Frequently Queried Columns:</strong> Create indexes on columns that are often used in <code>SELECT</code> queries to filter data.</li>
            <li><strong>Avoid Excessive Indexing:</strong> Avoid creating too many indexes, as this can slow down write operations and increase storage requirements.</li>
            <li><strong>Use Composite Indexes Wisely:</strong> Use composite indexes for queries that filter based on multiple columns, but ensure they match the query conditions to be useful.</li>
          </ul>
          <h3>Conclusion</h3>
          <p>
            Indexing is a fundamental concept for optimizing the performance of a database. By creating a well-thought-out indexing strategy, 
            you can drastically improve the speed of your database queries and provide a much faster experience for users interacting with your application.
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
          <h3>Learn More about Database Indexing</h3>
          <ul>
            <li><a href="https://use-the-index-luke.com/" target="_blank" rel="noopener noreferrer">Use The Index, Luke!: A Guide to Database Indexing</a></li>
            <li><a href="https://www.geeksforgeeks.org/indexing-in-databases-set-1/" target="_blank" rel="noopener noreferrer">GeeksforGeeks: Indexing in Databases</a></li>
            <li><a href="https://www.oracle.com/database/what-is-a-database-index/" target="_blank" rel="noopener noreferrer">Oracle: What is a Database Index?</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DatabaseIndex;
