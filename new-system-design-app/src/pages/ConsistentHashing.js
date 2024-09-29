import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/ConsistentHashing.css'; // Importing the specific CSS file
import consistentHashingQuestions from '../data/ConsistentHashingQuestions'; // Import questions from the separate file

function ConsistentHashing() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('content');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...consistentHashingQuestions]
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
    <div className="consistent-hashing-container">
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
          className="consistent-hashing-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/consistent-hashing-diagram.png`}
            alt="Consistent Hashing Diagram"
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
          <h2>Consistent Hashing</h2>
          <p>
            <strong>Consistent hashing</strong> is a hashing technique primarily used in distributed systems to evenly distribute data across nodes while minimizing the need for reorganization when the system scales up or down. Consistent hashing plays an important role in systems that require high availability and scalability, such as distributed caching systems or peer-to-peer networks.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine you are managing a delivery service with multiple trucks. Each truck is responsible for specific deliveries based on a predefined route. Suppose you need to add a new truck to expand your delivery capacity. In a traditional hashing system, you would have to redistribute all the deliveries to accommodate the new truck, which is quite inefficient. In contrast, with consistent hashing, you only need to reassign a small number of deliveries, ensuring minimal disruption. This approach ensures efficiency and stability when adding or removing trucks (or nodes).
          </p>
          <h3>How Does Consistent Hashing Work?</h3>
          <p>
            In consistent hashing, all nodes (e.g., servers) are arranged in a circular structure, often called a hash ring. Data is mapped to positions on the ring based on hash values, and each node is also mapped to the same ring. When a node receives a piece of data, it looks for the closest node in a clockwise direction on the hash ring. This ensures even data distribution and easy lookup.
          </p>
          <p>
            When a node is added to or removed from the system, consistent hashing ensures that only a small subset of data needs to be redistributed among nodes. This minimizes disruptions compared to traditional hashing methods, where changes in the number of nodes require extensive data reorganization.
          </p>
          <h3>Benefits of Consistent Hashing</h3>
          <ul>
            <li>
              <strong>Scalability:</strong> Adding or removing nodes results in minimal redistribution of keys, allowing for seamless scaling without affecting the entire data set.
            </li>
            <li>
              <strong>Load Balancing:</strong> Consistent hashing ensures that data is evenly distributed across available nodes, preventing some nodes from being overloaded while others are underutilized.
            </li>
            <li>
              <strong>High Availability:</strong> Because consistent hashing requires minimal data redistribution, nodes can be added or removed with minimal impact on data availability, ensuring reliability in the system.
            </li>
          </ul>
          <h3>Consistent Hashing in Distributed Caching</h3>
          <p>
            Consistent hashing is widely used in distributed caching systems like <strong>Memcached</strong> or <strong>Amazon DynamoDB</strong>. In these systems, cache nodes are distributed across different servers, and data is cached according to hash values. When a new cache server is added, consistent hashing ensures only a small portion of cached data needs to be rehashed, ensuring minimal downtime.
          </p>
          <p>
            For example, in a system where user sessions are cached, adding a new cache node without consistent hashing would mean that most users could lose their cached sessions, causing disruptions. With consistent hashing, the impact of adding or removing a node is minimized, which makes it ideal for applications that need to remain available without disruptions.
          </p>
          <h3>Consistent Hashing vs. Traditional Hashing</h3>
          <p>
            In traditional hashing techniques, a change in the number of nodes requires rehashing all the keys, leading to significant computational overhead. Imagine you have ten nodes, and you add one more. In a traditional setup, every key would need to be remapped to the new number of nodes, causing all data to be reassigned. With consistent hashing, only a small subset of keys needs to be reassigned, significantly reducing overhead and making it practical for systems that change frequently.
          </p>
          <h3>Real-World Example</h3>
          <p>
            Consider the <strong>Chord Protocol</strong>, a well-known implementation of consistent hashing used in peer-to-peer (P2P) networks. Chord helps locate the node responsible for storing a particular piece of data in a dynamic network, where nodes frequently join or leave. The use of consistent hashing ensures that changes to the network result in minimal movement of data, allowing the P2P system to remain stable.
          </p>
          <h3>Challenges with Consistent Hashing</h3>
          <p>
            Despite its advantages, consistent hashing comes with a few challenges:
          </p>
          <ul>
            <li><strong>Hot Spots:</strong> Inconsistent load distribution can occur if nodes are not evenly distributed around the hash ring, leading to "hot spots" where certain nodes handle more traffic than others. This can be mitigated by using "virtual nodes," where each physical node is mapped to multiple points on the hash ring.</li>
            <li><strong>Node Coordination:</strong> In systems with many nodes, managing coordination between nodes can become complex. Algorithms like <strong>Gossip Protocols</strong> are often used to maintain state information between nodes and ensure efficient communication.</li>
          </ul>
          <h3>Conclusion</h3>
          <p>
            Consistent hashing is a powerful and efficient mechanism for managing data distribution in distributed systems, ensuring scalability, minimal data redistribution, and load balancing. It plays a vital role in distributed caching, peer-to-peer networks, and other dynamic environments where nodes frequently join or leave the system. By understanding consistent hashing, developers can create distributed systems that are resilient, scalable, and can handle changes without compromising performance.
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
          <h3>Learn More about Consistent Hashing</h3>
          <ul>
            <li><a href="https://www.cockroachlabs.com/blog/consistent-hashing/" target="_blank" rel="noopener noreferrer">Cockroach Labs: Consistent Hashing Explained</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Consistent_hashing" target="_blank" rel="noopener noreferrer">Wikipedia: Consistent Hashing</a></li>
            <li><a href="https://www.nginx.com/blog/what-is-consistent-hashing/" target="_blank" rel="noopener noreferrer">NGINX: What is Consistent Hashing?</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ConsistentHashing;

