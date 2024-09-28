import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/DNS.css'; // Importing the specific CSS file
import dnsQuestions from '../data/DNSQuestions'; // Import questions from the separate file

function DNS() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...dnsQuestions]
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
    <div className="dns-container">
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
          className="dns-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/dns-diagram.png`}
            alt="DNS Diagram"
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
          <h2>Domain Name System (DNS)</h2>
          <p>
            The <strong>Domain Name System (DNS)</strong> translates human-readable domain names into IP addresses.
            It is essentially the internet's phonebook, allowing users to access websites without needing to memorize complex IP addresses.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine you want to call a friend, but instead of remembering their phone number, you just look up their name in your phone's contact list.
            DNS works similarly: instead of needing to remember an IP address like "192.168.0.1," you simply type in the domain name, like "example.com," and DNS handles the rest.
          </p>
          <h3>How DNS Works</h3>
          <p>
            DNS operates through a hierarchy of servers to resolve domain names. When you enter a domain name, such as "example.com," your computer contacts a DNS resolver,
            which then queries other DNS servers—such as the root server, TLD server, and authoritative server—until it finds the IP address of the desired domain.
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
          <h3>Learn More about DNS</h3>
          <ul>
            <li><a href="https://www.cloudflare.com/learning/dns/what-is-dns/" target="_blank" rel="noopener noreferrer">Cloudflare: What is DNS?</a></li>
            <li><a href="https://www.akamai.com/our-thinking/what-is-dns" target="_blank" rel="noopener noreferrer">Akamai: Understanding DNS</a></li>
            <li><a href="https://www.dnsimple.com/what-is-dns/" target="_blank" rel="noopener noreferrer">DNSimple: What is DNS?</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DNS;
