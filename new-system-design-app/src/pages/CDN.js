import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/CDN.css'; // Use a separate CSS file for specific concept styling.
import cdnQuestions from '../data/CDNQuestions'; // Import the questions from the separate file

function CDN() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...cdnQuestions]
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
    <div className="cdn-container">
      {/* Top Navigation Bar */}
      <div className="top-bar">
        <button onClick={() => setActiveSection('diagram')}>Diagram</button>
        <button onClick={() => setActiveSection('content')}>Content</button>
        <button onClick={() => setActiveSection('quiz')}>Quiz</button>
        <button onClick={() => setActiveSection('resources')}>Resources</button>
      </div>

      {/* Section Rendering */}
      {activeSection === 'diagram' && (
        <motion.img
          src={`${process.env.PUBLIC_URL}/images/cdn-diagram.png`}
          alt="CDN Diagram"
          className="concept-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        />
      )}

      {activeSection === 'content' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Content Delivery Network (CDN)</h2>
          <p>
            Imagine that you are hosting a party and you want to serve ice cream to your guests. 
            You could either store all the ice cream in a central freezer in your kitchen, or you could have 
            mini freezers distributed across various parts of the house. Now, if everyone has to get ice cream 
            only from the kitchen, it could take a long time for everyone to get served, and it could lead to bottlenecks.
          </p>
          <p>
            A CDN (Content Delivery Network) works similarly to those mini freezers: it is a network of servers distributed 
            across different locations worldwide, which helps users access content faster by serving it from a nearby server 
            instead of a central one. This improves load times and ensures that all users get a great experience, regardless 
            of where they are located.
          </p>
          <h3>Benefits of Using a CDN</h3>
          <ul>
            <li><strong>Improved Performance:</strong> Since content is served from a closer location, users experience faster loading speeds.</li>
            <li><strong>Reduced Latency:</strong> Latency is reduced because the server that delivers the data is geographically closer to the user.</li>
            <li><strong>Scalability:</strong> Handling spikes in traffic becomes easier, as content delivery is distributed across multiple servers.</li>
            <li><strong>Security Enhancements:</strong> CDNs can help mitigate DDoS attacks and provide additional security features.</li>
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
          <h3>Learn More about CDN</h3>
          <ul>
            <li><a href="https://www.cloudflare.com/learning/cdn/what-is-a-cdn/" target="_blank" rel="noopener noreferrer">Cloudflare: What is a CDN?</a></li>
            <li><a href="https://www.akamai.com/solutions/what-is-a-cdn" target="_blank" rel="noopener noreferrer">Akamai: Understanding CDNs</a></li>
            <li><a href="https://aws.amazon.com/cloudfront/" target="_blank" rel="noopener noreferrer">AWS CloudFront</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default CDN;
