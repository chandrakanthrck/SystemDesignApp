import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/DatabaseSharding.css'; // Importing the specific CSS file
import databaseShardingQuestions from '../data/DatabaseShardingQuestions'; // Import questions from the separate file

function DatabaseSharding() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...databaseShardingQuestions]
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
    <div className="sharding-container">
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
          className="sharding-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/database-sharding-diagram.png`}
            alt="Database Sharding Diagram"
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
          <h2>Database Sharding</h2>
          <p>
            <strong>Database sharding</strong> is the process of splitting a large database into smaller, more manageable parts called 
            <strong> shards</strong>. Each shard operates as an independent database, and together they make up the complete dataset.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine you have a library with thousands of books. If all the books are stored in one section, finding a specific book 
            can take a long time. Instead, if you divide the books into different sections based on genres, each section becomes smaller 
            and easier to manage, making it faster to locate a book. This is similar to how sharding divides a large database into smaller, 
            more efficient parts.
          </p>
          <h3>Benefits of Sharding</h3>
          <ul>
            <li><strong>Improved Performance:</strong> Queries are faster because they are run on smaller datasets.</li>
            <li><strong>Enhanced Scalability:</strong> Allows databases to handle more data by distributing it across multiple servers.</li>
            <li><strong>Fault Tolerance:</strong> If one shard goes down, the others remain unaffected, improving resilience.</li>
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
          <h3>Learn More about Database Sharding</h3>
          <ul>
            <li><a href="https://www.mongodb.com/basics/sharding" target="_blank" rel="noopener noreferrer">MongoDB: What is Sharding?</a></li>
            <li><a href="https://aws.amazon.com/nosql/database-sharding/" target="_blank" rel="noopener noreferrer">AWS: Database Sharding</a></li>
            <li><a href="https://www.digitalocean.com/community/tutorials/understanding-database-sharding" target="_blank" rel="noopener noreferrer">DigitalOcean: Understanding Database Sharding</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DatabaseSharding;
