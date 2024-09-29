import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Caching.css';
import '../styles/globalStyles.css';
import cachingQuestions from '../data/CachingQuestions'; // Import questions from the separate file

function Caching() {
  // State for showing additional sections
  const [activeSection, setActiveSection] = useState('content');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...cachingQuestions]
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
    <div className="caching-container">
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
          className="caching-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/caching-diagram.png`}
            alt="Caching Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="caching-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Caching</h2>
          <p>
            <strong>Caching</strong> is a technique used to store copies of data in a temporary storage location to reduce latency and improve retrieval times. Think of caching like storing a frequently used key near your front door so you can grab it quickly whenever you need it. Instead of looking for it in a drawer every time, it’s right there for instant access.
          </p>
          <h3>Real-World Analogies</h3>
          <p>
            Imagine you frequently use a book for reference. Instead of storing it on a high shelf and climbing up to retrieve it each time, you keep it on your desk for easy access. This is essentially what caching does—it keeps commonly needed data close at hand so it can be accessed quickly.
          </p>
          <h3>Benefits of Caching</h3>
          <ul>
            <li>
              <strong>Reduced Latency:</strong> Caching significantly reduces the time it takes to access frequently used data. By keeping data closer to the point of consumption, such as in memory, it allows near-instant retrieval.
            </li>
            <li>
              <strong>Improved Application Performance:</strong> When data is cached, it alleviates the load on the backend databases or services. This means fewer read requests need to travel over the network, resulting in an overall increase in performance.
            </li>
            <li>
              <strong>Cost Efficiency:</strong> By reducing the load on back-end databases and servers, caching can help lower infrastructure costs. Database reads are typically more resource-intensive compared to accessing a cache.
            </li>
            <li>
              <strong>Increased Availability:</strong> Caching can help increase the availability of your services. In case the database is experiencing issues, cached data can be used to fulfill read requests, minimizing service downtime.
            </li>
          </ul>
          <h3>Common Caching Types</h3>
          <ul>
            <li>
              <strong>Memory Caching:</strong> Storing frequently accessed data in memory to reduce database load and speed up responses. Examples include using in-memory stores like Redis or Memcached.
            </li>
            <li>
              <strong>CDN Caching:</strong> Content Delivery Network (CDN) caching stores copies of static assets (e.g., images, videos) across geographically distributed servers. CDNs like Cloudflare or Akamai cache content at edge locations to reduce latency for users.
            </li>
            <li>
              <strong>Client-Side Caching:</strong> Storing data on the user's device (e.g., browser caching) to improve the performance of web pages during future visits. This includes assets like JavaScript files, CSS, or images, so that they do not need to be fetched repeatedly.
            </li>
            <li>
              <strong>Database Caching:</strong> Some databases include built-in caching mechanisms, like query caching. These caches keep frequently queried results ready to serve quickly without the need to re-execute the query.
            </li>
          </ul>
          <h3>Types of Caching Policies</h3>
          <p>
            To maintain efficiency, different caching policies dictate how and when data is cached or invalidated.
          </p>
          <ul>
            <li>
              <strong>Time-To-Live (TTL):</strong> Data is cached for a predefined period after which it is invalidated. For example, caching weather data for 10 minutes makes sense because weather updates are not instantaneous.
            </li>
            <li>
              <strong>Least Recently Used (LRU):</strong> LRU caches keep track of what data was used recently and discard the least recently used items when space is required.
            </li>
            <li>
              <strong>Write-Through vs Write-Back:</strong> Write-through caching writes data to both the cache and the backing store at the same time, ensuring data consistency. Write-back only writes to the cache initially and updates the backing store at a later time.
            </li>
          </ul>
          <h3>When to Use Caching?</h3>
          <p>
            Caching is highly beneficial, but it is not always suitable. Here are some scenarios where caching is effective:
          </p>
          <ul>
            <li>
              <strong>Static Data:</strong> Data that doesn’t change frequently, like product catalogues, user profiles, and web pages, can be cached for faster retrieval.
            </li>
            <li>
              <strong>Read-Heavy Applications:</strong> Applications that have a high ratio of read operations to write operations, such as content management systems or blogs, benefit significantly from caching.
            </li>
            <li>
              <strong>Distributed Systems:</strong> Caching helps prevent bottlenecks in distributed systems by reducing the load on a central data store.
            </li>
          </ul>
          <h3>Challenges of Caching</h3>
          <p>
            While caching can dramatically improve performance, it comes with challenges that need careful handling:
          </p>
          <ul>
            <li>
              <strong>Data Inconsistency:</strong> Caches might not reflect the latest state of the data if the underlying database changes. Choosing appropriate invalidation strategies is essential.
            </li>
            <li>
              <strong>Cache Misses:</strong> If data is not in the cache when requested, it is called a cache miss, leading to a fallback on slower data retrieval methods, thus defeating the purpose of the cache.
            </li>
            <li>
              <strong>Scalability:</strong> In distributed environments, maintaining a consistent and scalable cache can be challenging. Techniques like sharding or leveraging distributed cache systems like Redis Cluster can be used.
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
          <h3>Learn More about Caching</h3>
          <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" target="_blank" rel="noopener noreferrer">MDN: HTTP Caching</a></li>
            <li><a href="https://aws.amazon.com/caching/" target="_blank" rel="noopener noreferrer">AWS: What is Caching?</a></li>
            <li><a href="https://www.cloudflare.com/learning/cdn/what-is-caching/" target="_blank" rel="noopener noreferrer">Cloudflare: What is Caching?</a></li>
            <li><a href="https://redis.io/documentation" target="_blank" rel="noopener noreferrer">Redis Documentation</a></li>
            <li><a href="https://aws.amazon.com/elasticache/" target="_blank" rel="noopener noreferrer">AWS ElastiCache</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Caching;
