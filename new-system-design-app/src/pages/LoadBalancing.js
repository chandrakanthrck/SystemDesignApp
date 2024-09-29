import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/globalStyles.css';
import '../styles/LoadBalancing.css'; // Ensure correct CSS import
import loadBalancingQuestions from '../data/LoadBalancingQuestions'; // Import the questions from the separate file

function LoadBalancing() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...loadBalancingQuestions]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    setQuestions(selectedQuestions);
  }, []);

  const handleAnswer = (isCorrect) => {
    setAnswers([...answers, isCorrect]);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="lb-container">
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
          className="lb-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/load-balancing-diagram.png`}
            alt="Load Balancing Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="lb-content-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Load Balancing</h2>
          <p>
            Imagine you are at a theme park, and there are multiple lines for the same roller coaster. A park attendant directs visitors 
            to different lines based on how crowded they are, ensuring everyone gets on a ride quickly and no line becomes too long. 
            This is analogous to **Load Balancing**, which distributes incoming traffic across multiple servers to optimize resource usage 
            and avoid any single server from becoming a bottleneck.
          </p>

          <h3>How Load Balancing Works</h3>
          <p>
            Load balancing is like a traffic cop sitting in front of your server, directing requests to different servers that can handle the request.
            It ensures that no single server bears too much load, thus enhancing **availability** and **reliability** of your applications.
          </p>

          <h3>Load Balancing Algorithms</h3>
          <ul>
            <li>
              **Round Robin**: Requests are distributed in a circular manner across servers. This is simple but might not always distribute the load evenly.
            </li>
            <li>
              **Least Connections**: The load balancer forwards the request to the server with the fewest active connections, which ensures better distribution.
            </li>
            <li>
              **IP Hash**: The client’s IP address determines which server receives the request. This can help with server stickiness for certain clients.
            </li>
          </ul>

          <h3>Benefits of Load Balancing</h3>
          <ul>
            <li>**Increased Availability**: By distributing requests, load balancers ensure that if one server fails, others can take over.</li>
            <li>**Scalability**: Load balancers can help scale applications by adding more servers during high traffic periods.</li>
            <li>**Performance Improvement**: Even distribution of traffic leads to better server utilization and faster response times.</li>
          </ul>

          <h3>Real-World Applications</h3>
          <p>
            Load balancing is essential in various applications such as:
          </p>
          <ul>
            <li>
              <strong>Web Services</strong>: Ensures users have fast access to web applications, handling high traffic volumes efficiently.
            </li>
            <li>
              <strong>Cloud Computing</strong>: Distributes workloads across multiple cloud resources to enhance performance and reliability.
            </li>
            <li>
              <strong>Content Delivery Networks (CDNs)</strong>: Ensures fast delivery of content by directing user requests to the nearest server.
            </li>
          </ul>

          <h3>Challenges of Load Balancing</h3>
          <p>
            Despite its benefits, load balancing can face challenges such as:
          </p>
          <ul>
            <li>
              **Configuration Complexity**: Setting up load balancing requires careful configuration to ensure efficient traffic distribution.
            </li>
            <li>
              **Session Persistence**: For some applications, it is crucial to keep users connected to the same server during their session.
            </li>
            <li>
              **Overhead**: Load balancing adds an additional layer to the system architecture, which can introduce latency.
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
                onClick={() => handleAnswer(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Correct
              </motion.button>
              <motion.button
                className="quiz-button"
                onClick={() => handleAnswer(false)}
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
                You answered {answers.filter((a) => a).length} out of {questions.length} questions correctly!
              </p>
            </div>
          )}
        </div>
      )}

      {activeSection === 'resources' && (
        <div className="reference-links">
          <h3>Learn More about Load Balancing</h3>
          <ul>
            <li>
              <a
                href="https://aws.amazon.com/elasticloadbalancing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AWS: Elastic Load Balancing - Understand how AWS ELB works and its types.
              </a>
            </li>
            <li>
              <a
                href="https://www.cloudflare.com/learning/cdn/glossary/what-is-load-balancing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloudflare: What is Load Balancing? - Learn the basics and importance of load balancing.
              </a>
            </li>
            <li>
              <a
                href="https://www.nginx.com/resources/glossary/load-balancing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NGINX: Load Balancing Explained - Explore different load balancing strategies.
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Footer Section */}
      <div className="lb-footer">
        Load balancing is critical for maintaining optimal application performance, availability, and reliability in distributed systems.
      </div>
    </div>
  );
}

export default LoadBalancing;
