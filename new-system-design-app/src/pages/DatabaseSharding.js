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
          className="sharding-content"
        >
          <h2>Database Sharding</h2>
          <p>
            <strong>Database sharding</strong> is the process of splitting a large database into smaller, more manageable parts called <strong>shards</strong>. Each shard operates as an independent database, and together they make up the complete dataset. Sharding is an effective way to horizontally scale databases to accommodate increasing loads.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine you have a library with thousands of books. If all the books are stored in one section, finding a specific book can take a long time. Instead, if you divide the books into different sections based on genres, each section becomes smaller and easier to manage, making it faster to locate a book. This is similar to how sharding divides a large database into smaller, more efficient parts.
          </p>
          <h3>How Does Sharding Work?</h3>
          <p>
            When a database is <strong>sharded</strong>, data is divided into smaller, distinct parts (shards) based on a <strong>sharding key</strong>. The key determines how the data is split across multiple databases. Each shard can be hosted on different servers, which allows the database to spread the load more evenly.
          </p>
          <h4>Sharding Key</h4>
          <p>
            The <strong>sharding key</strong> is a field used to determine the shard placement of each piece of data. Choosing the right key is crucial as it affects how evenly the data is distributed and how well the system performs. For example, in an e-commerce application, user ID or geographical region might be used as a sharding key.
          </p>
          <h3>Benefits of Sharding</h3>
          <ul>
            <li><strong>Improved Performance:</strong> Queries are faster because they are run on smaller datasets instead of one massive database.</li>
            <li><strong>Enhanced Scalability:</strong> Sharding allows databases to handle growing amounts of data by distributing it across multiple servers.</li>
            <li><strong>Fault Tolerance:</strong> If one shard goes down, the others remain unaffected, thereby improving system resilience.</li>
          </ul>
          <h3>Challenges of Sharding</h3>
          <ul>
            <li><strong>Complexity:</strong> Managing a sharded database is more complex, as developers must manage multiple servers, each with its own shard of data.</li>
            <li><strong>Data Rebalancing:</strong> As more shards are added, data needs to be redistributed, which can be resource-intensive and lead to downtime if not handled properly.</li>
            <li><strong>Cross-Shard Queries:</strong> Queries that need to gather data from multiple shards can be slow and complex, requiring special handling.</li>
          </ul>
          <h3>Sharding Strategies</h3>
          <ul>
            <li>
              <strong>Range Sharding:</strong> Data is divided into shards based on a specific range of values, like customer ID. This method is simple but can lead to unbalanced shards if the data is not evenly distributed.
            </li>
            <li>
              <strong>Hash Sharding:</strong> Data is assigned to shards based on a hash function applied to the sharding key. Hashing helps distribute data more evenly but can make range-based queries challenging.
            </li>
            <li>
              <strong>Geographic Sharding:</strong> Data is partitioned based on geographic location. This is useful for applications that serve users across different regions, ensuring that queries stay within regional bounds for faster access.
            </li>
          </ul>
          <h3>Real-World Use Cases of Sharding</h3>
          <p>
            Database sharding is widely used by large-scale applications where the volume of data is high and single-node scaling becomes unfeasible. Here are some examples:
          </p>
          <ul>
            <li>
              <strong>Facebook:</strong> Uses sharding to store user data across multiple servers, allowing them to scale to billions of users while maintaining performance.
            </li>
            <li>
              <strong>Twitter:</strong> Shards tweets based on user ID, enabling the system to handle an enormous number of tweets being created and queried each second.
            </li>
            <li>
              <strong>E-commerce Platforms:</strong> Use sharding to partition product catalogs by categories or regions, making search and browsing faster for end users.
            </li>
          </ul>
          <h3>Conclusion</h3>
          <p>
            Sharding is a powerful method to horizontally scale databases, enhancing performance, scalability, and resilience. However, it comes with complexities such as managing shards, handling data rebalancing, and optimizing cross-shard queries. It's important to choose the right sharding key and strategy for your use case to get the best results.
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
