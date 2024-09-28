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
        >
          <h2>Database Index</h2>
          <p>
            A <strong>database index</strong> is a data structure that enhances the speed of data retrieval operations 
            on a database table. It works similarly to the index in a book, where you can look up a topic and directly 
            find the page, instead of searching through the entire book. Indexes are essential in optimizing query 
            performance by allowing the database to locate specific rows much faster.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine you have a massive phone book with thousands of contacts listed in random order. If you want to 
            find a specific person's phone number, you would need to go through every entry until you find the right one. 
            Now, if the phone book is sorted alphabetically and has an index, you can quickly locate the name and turn 
            to the page where it's listed. A database index works similarly, allowing the system to jump straight to the 
            correct entry instead of scanning every row.
          </p>
          <h3>Types of Indexes</h3>
          <ul>
            <li><strong>Primary Index:</strong> Enforces uniqueness on a table's key fields and speeds up lookups based on these keys.</li>
            <li><strong>Secondary Index:</strong> Provides faster data retrieval for non-key fields that are frequently queried.</li>
            <li><strong>Composite Index:</strong> Used for queries involving multiple columns, indexing them together for faster lookups.</li>
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
