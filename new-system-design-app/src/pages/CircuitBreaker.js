import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/globalStyles.css';
import '../styles/CircuitBreaker.css'; // Updated to use CircuitBreaker-specific CSS file
import circuitBreakerQuestions from '../data/CircuitBreakerQuestions'; // Import questions from the separate file

function CircuitBreaker() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('content');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...circuitBreakerQuestions]
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
    <div className="circuitbreaker-container">
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
          className="circuitbreaker-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/circuit-breaker-diagram.png`}
            alt="Circuit Breaker Diagram"
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
          <h2>Circuit Breaker</h2>
          <p>
            The <strong>Circuit Breaker</strong> pattern is a critical resilience pattern used to protect a system from continuously making requests to an external service that is either failing or has a high latency response. This pattern is incredibly important in distributed systems, where failures in one part of the system could potentially cascade, bringing down the entire system.
          </p>
          <h3>Why Use a Circuit Breaker?</h3>
          <p>
            Imagine you’re building an online shopping platform. One of your services manages inventory information and checks whether an item is available for sale. If this service starts to fail or become very slow, all the dependent services such as order processing or checkout could also degrade in performance. Without a mechanism to prevent these continuous failed calls, it could lead to a complete collapse of the shopping experience. This is where the <strong>Circuit Breaker pattern</strong> comes into play.
          </p>
          <p>
            The Circuit Breaker pattern works like an electrical circuit breaker in your home. When a service fails, it "opens" the circuit, temporarily halting further requests to that failing service. After a certain amount of time or when the system detects an improvement in health, the circuit "closes" again, allowing normal traffic to resume.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Think of a circuit breaker like an electrical fuse in your home. If there is an overload in your wiring (perhaps too many devices connected), the fuse "blows" to cut off electricity and protect your system from a fire. Similarly, the Circuit Breaker in a distributed system "breaks" the connection to a failing service, preventing it from overwhelming the system. Once the service shows signs of recovery, the circuit can be "closed" again to restore normal functioning.
          </p>
          <h3>States of a Circuit Breaker</h3>
          <ul>
            <li>
              <strong>Closed State:</strong> In this state, all requests are allowed to flow through to the service. If the failure rate crosses a predefined threshold, the circuit breaker will switch to the open state.
            </li>
            <li>
              <strong>Open State:</strong> When the failure rate exceeds the threshold, the circuit breaker opens the circuit, blocking all requests to the service to prevent overloading it. This state protects the service from getting further overloaded.
            </li>
            <li>
              <strong>Half-Open State:</strong> After some time, the circuit breaker moves to a half-open state, allowing limited requests through to check if the service is recovering. If the service responds successfully, the circuit breaker switches back to the closed state. If the service still fails, it goes back to the open state.
            </li>
          </ul>
          <h3>Benefits of Using Circuit Breaker Pattern</h3>
          <ul>
            <li><strong>Protects System Resources:</strong> By halting requests to a failing service, a circuit breaker prevents further degradation of other dependent services.</li>
            <li><strong>Prevents Cascading Failures:</strong> It provides stability by isolating failures to a specific part of the system, preventing a "domino effect."</li>
            <li><strong>Allows Gradual Recovery:</strong> The half-open state allows you to test if a service is available before fully opening the circuit, ensuring gradual recovery.</li>
          </ul>
          <h3>Real-World Example of Circuit Breaker</h3>
          <p>
            Netflix is a prime example of using the Circuit Breaker pattern. Their microservices architecture has many interconnected services, and a failure in one can have significant repercussions. They use a library called <strong>Hystrix</strong> (now superseded by resilience4j) that implements the Circuit Breaker pattern to isolate services and ensure that failures in one service do not impact the rest of the system.
          </p>
          <h3>Implementing Circuit Breaker in Practice</h3>
          <p>
            One popular implementation of the Circuit Breaker pattern is <strong>Resilience4j</strong>. It provides capabilities for setting failure thresholds, retry strategies, and monitoring circuit health. Here's a high-level view of how you can use it:
          </p>
          <ul>
            <li>First, you define a <strong>failure threshold</strong>—say, 50% of the requests failing within a given period.</li>
            <li>If failures exceed this threshold, the circuit breaker transitions to the open state and blocks further requests.</li>
            <li>After a set <strong>wait time</strong>, the circuit will enter the half-open state, letting a small number of requests through to "test the waters."</li>
            <li>If those requests succeed, the circuit goes back to closed; otherwise, it opens again.</li>
          </ul>
          <h3>Common Use Cases</h3>
          <p>
            The Circuit Breaker pattern is commonly used in microservices to:
          </p>
          <ul>
            <li>Prevent cascading failures when one service fails and others depend on it.</li>
            <li>Provide a fallback response or degrade functionality gracefully when an external dependency fails.</li>
            <li>Monitor service health and gradually reintroduce requests as the service recovers.</li>
          </ul>
          <h3>Challenges with Circuit Breakers</h3>
          <p>
            While Circuit Breakers are incredibly useful, they do introduce challenges. Setting the right failure threshold, timeout values, and half-open duration is crucial, as incorrect settings could lead to either unnecessary blocking or too much load on a recovering service.
          </p>
          <p>
            Additionally, monitoring the health of services and adjusting these parameters dynamically is complex, requiring thorough analysis of system metrics, logs, and patterns of failure.
          </p>
          <h3>Conclusion</h3>
          <p>
            The <strong>Circuit Breaker</strong> pattern is an essential tool in building resilient distributed systems. It prevents cascading failures, improves system stability, and provides a pathway for gradual recovery when services fail. Understanding the states of the circuit—closed, open, and half-open—and their purpose helps in making sure that a distributed application can withstand failures without bringing down the whole system.
          </p>
          <p>
            If you're working with a microservices-based architecture, incorporating the Circuit Breaker pattern with tools like <strong>Resilience4j</strong> or <strong>Hystrix</strong> can help improve your system's resilience and keep it healthy even in the face of unpredictable failures.
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
          <h3>Learn More about Circuit Breaker</h3>
          <ul>
            <li><a href="https://martinfowler.com/bliki/CircuitBreaker.html" target="_blank" rel="noopener noreferrer">Martin Fowler: Circuit Breaker</a></li>
            <li><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker" target="_blank" rel="noopener noreferrer">Microsoft Azure: Circuit Breaker Pattern</a></li>
            <li><a href="https://www.nginx.com/blog/implementing-microservices-circuit-breaker-pattern/" target="_blank" rel="noopener noreferrer">NGINX: Circuit Breaker in Microservices</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default CircuitBreaker;
