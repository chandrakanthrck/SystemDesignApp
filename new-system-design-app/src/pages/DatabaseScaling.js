import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/globalStyles.css';
import '../styles/DatabaseScaling.css'; // Importing the specific CSS file
import databaseScalingQuestions from '../data/DatabaseScalingQuestions'; // Import questions from the separate file

function DatabaseScaling() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...databaseScalingQuestions]
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
    <div className="scaling-container">
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
          className="scaling-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/database-scaling-diagram.png`}
            alt="Database Scaling Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="scaling-content"
        >
          <h2>Database Scaling</h2>
          <p>
            <strong>Database scaling</strong> refers to increasing the capacity of a database to handle larger amounts of data and more queries efficiently. Scaling ensures that databases remain performant as the demand and volume of data grow.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine you own a bakery. Initially, when you start getting more orders, you decide to buy a bigger oven to bake more cakes. This is similar to <strong>vertical scaling</strong>, where you upgrade your existing resources. However, at some point, no matter how big your oven is, it can't keep up with the demand. So, you decide to open more branches of the bakery across the city. This is like <strong>horizontal scaling</strong>, where you add more resources to handle growing demand.
          </p>
          <h3>Types of Scaling</h3>
          <ul>
            <li><strong>Vertical Scaling (Scaling Up):</strong> This approach involves adding more power (CPU, RAM, SSD) to your existing server. Vertical scaling is simpler as it doesn’t require architectural changes, but it’s limited by the physical capacity of the hardware. For example, upgrading from 16GB RAM to 64GB RAM is vertical scaling.</li>
            <li><strong>Horizontal Scaling (Scaling Out):</strong> This approach involves adding more servers to distribute the load. It provides nearly limitless scalability, allowing you to add as many machines as needed to handle increasing demand. For example, adding additional servers to create a cluster is horizontal scaling.</li>
          </ul>
          <h3>Vertical vs Horizontal Scaling</h3>
          <p>
            Vertical scaling is relatively straightforward, as it just involves upgrading the existing machine, which may work well for smaller databases. However, it is limited by the capacity of the server and can become costly when you reach the upper limit of hardware capabilities.
          </p>
          <p>
            On the other hand, horizontal scaling provides flexibility for distributed systems. Adding more servers to handle requests in parallel makes it a good choice for applications with heavy read and write operations. However, it adds complexity as you need to manage and synchronize multiple servers.
          </p>
          <h3>Advantages and Disadvantages</h3>
          <h4>Advantages of Vertical Scaling</h4>
          <ul>
            <li><strong>Simplicity:</strong> No need to change the application or architecture; simply upgrade the existing server.</li>
            <li><strong>Less Complex:</strong> Easier to manage since there’s only one server to handle.</li>
          </ul>
          <h4>Disadvantages of Vertical Scaling</h4>
          <ul>
            <li><strong>Limited by Hardware:</strong> There is a limit to how much you can scale up, based on the maximum capabilities of your hardware.</li>
            <li><strong>Single Point of Failure:</strong> A single server means that if the server fails, the entire system can go down.</li>
          </ul>
          <h4>Advantages of Horizontal Scaling</h4>
          <ul>
            <li><strong>Unlimited Scaling:</strong> Easily add more servers to distribute the load.</li>
            <li><strong>Fault Tolerance:</strong> Failure of one server doesn’t affect the entire system; other servers can take over the load.</li>
          </ul>
          <h4>Disadvantages of Horizontal Scaling</h4>
          <ul>
            <li><strong>Complexity:</strong> Requires changes to the application to handle distributed databases and requires load balancers.</li>
            <li><strong>Synchronization:</strong> Managing data consistency across multiple servers can be challenging.</li>
          </ul>
          <h3>Database Sharding and Replication</h3>
          <p>
            Horizontal scaling often involves techniques like <strong>sharding</strong> and <strong>replication</strong>. 
            <strong>Sharding</strong> refers to breaking up a large database into smaller, faster, and more manageable parts called shards, which can each be hosted on a different server. <strong>Replication</strong> involves copying data to multiple servers so that all servers have a copy of the data, providing redundancy and improving read performance.
          </p>
          <h3>Use Cases for Scaling</h3>
          <ul>
            <li><strong>Vertical Scaling:</strong> Best suited for smaller applications where simplicity is more important than scale. It works well when database size is limited, and scaling demands are moderate.</li>
            <li><strong>Horizontal Scaling:</strong> Ideal for large-scale applications like social media platforms, e-commerce websites, or streaming services where high availability and performance are crucial, and data growth is exponential.</li>
          </ul>
          <h3>Conclusion</h3>
          <p>
            Database scaling is essential for applications that experience increasing data volume or user traffic. While vertical scaling is straightforward and easy to implement, it has physical limitations. Horizontal scaling, although more complex, offers practically limitless capacity, making it the preferred choice for large-scale applications. Choosing the right scaling method depends on the specific needs of your application, taking into account factors like cost, performance, complexity, and reliability.
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
          <h3>Learn More about Database Scaling</h3>
          <ul>
            <li><a href="https://aws.amazon.com/nosql/database-scaling/" target="_blank" rel="noopener noreferrer">AWS: Database Scaling</a></li>
            <li><a href="https://www.digitalocean.com/community/tutorials/vertical-and-horizontal-scaling" target="_blank" rel="noopener noreferrer">DigitalOcean: Vertical and Horizontal Scaling</a></li>
            <li><a href="https://www.geeksforgeeks.org/vertical-and-horizontal-scaling-in-databases/" target="_blank" rel="noopener noreferrer">GeeksforGeeks: Vertical and Horizontal Scaling</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DatabaseScaling;
