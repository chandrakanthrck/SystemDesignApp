import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/globalStyles.css';
import '../styles/StrongVsEventualConsistency.css'; // Ensure the correct CSS file is imported
import strongVsEventualConsistencyQuestions from '../data/StrongVsEventualConsistencyQuestions'; // Import quiz questions

function StrongVsEventualConsistency() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...strongVsEventualConsistencyQuestions]
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
    <div className="consistency-container">
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
      </div>

      {/* Section Rendering */}
      {activeSection === 'diagram' && (
        <motion.div
          className="consistency-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/consistency-diagram.png`}
            alt="Strong vs Eventual Consistency Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="consistency-content-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Strong vs Eventual Consistency</h2>
          <p>
            Strong consistency ensures that after an update, any subsequent access to the data returns the most recent value. 
            Eventual consistency means that data will eventually become consistent across all nodes, which works well for systems requiring high availability and partition tolerance.
          </p>

          <h3>Understanding Strong Consistency</h3>
          <p>
            In strong consistency, any read operation will return the most recent write for a given piece of data. 
            This is crucial for applications that cannot afford to see stale data, such as financial systems and inventory management.
          </p>
          <p>
            For example, if a bank account balance is updated to reflect a deposit, any subsequent read must reflect this new balance immediately.
          </p>

          <h3>Understanding Eventual Consistency</h3>
          <p>
            Eventual consistency, on the other hand, allows for temporary inconsistencies across different nodes. 
            While this may lead to a situation where different nodes return different values for a given key, the system guarantees that all updates will propagate and converge to the same value eventually.
          </p>
          <p>
            This model is often used in distributed databases like DynamoDB and systems like social media platforms where immediate consistency is less critical.
          </p>

          <h3>Trade-offs Between Strong and Eventual Consistency</h3>
          <p>
            The choice between strong and eventual consistency often comes down to the requirements of your application:
          </p>
          <ul>
            <li><strong>Use Strong Consistency:</strong> When your application needs guaranteed accuracy and real-time data access, such as banking and transaction systems.</li>
            <li><strong>Use Eventual Consistency:</strong> When your application can tolerate temporary inconsistencies and prioritizes availability and partition tolerance, like social networks or content delivery networks.</li>
          </ul>

          <h3>Interactive Examples</h3>
          <div className="consistency-example">
            <p>Example of Strong Consistency: A bank transaction where all accounts reflect the updated balance immediately.</p>
          </div>
          <div className="consistency-example">
            <p>Example of Eventual Consistency: Social media likes where updates may take time to reflect across all servers.</p>
          </div>
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
              <p>
                You answered {answers.filter((a) => a === 'Correct').length} out of {questions.length} questions correctly!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default StrongVsEventualConsistency;
