import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/globalStyles.css';
import '../styles/ConsensusAlgorithms.css'; // Importing the specific CSS file
import consensusAlgorithmsQuestions from '../data/ConsensusAlgorithmsQuestions'; // Import questions from the separate file

function ConsensusAlgorithms() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('content');
  
  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...consensusAlgorithmsQuestions]
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
    <div className="consensus-container">
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
          className="consensus-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/consensus-algorithms-diagram.png`}
            alt="Consensus Algorithms Diagram"
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
          <h2>Consensus Algorithms</h2>
          <p>
            In distributed computing, ensuring that all nodes agree on a certain value or a state is crucial for reliability. This is where <strong>Consensus Algorithms</strong> come into play. Consensus algorithms are used to achieve agreement among distributed processes or systems, especially in environments where communication may fail or nodes may act unpredictably.
          </p>
          <h3>What is a Consensus Algorithm?</h3>
          <p>
            A <strong>Consensus Algorithm</strong> is a protocol used to achieve agreement among nodes in a distributed system. Imagine that you are trying to agree on something in a room full of people, but you are also separated into different smaller rooms. How can everyone reach an agreement, especially if some people can't hear well or aren't communicating properly? Consensus algorithms help all parties agree on the same decision even under challenging conditions like network failure, malicious actors, or unreliable nodes.
          </p>
          <h3>Importance in Distributed Systems</h3>
          <p>
            Distributed systems rely on consensus to function reliably. Without consensus, inconsistencies in the state of distributed databases could cause major issues, such as showing different account balances to different users. Consensus ensures that all nodes in a distributed system are synchronized and provide consistent data.
          </p>
          <h3>Real-World Analogy</h3>
          <p>
            Imagine you and several friends are deciding on a movie to watch together. Everyone needs to agree on the movie before you can start watching. However, some of your friends are in different rooms, and there might be issues like miscommunication or someone missing the message. A consensus algorithm is like a structured way for all of you to vote on the movie, ensuring everyone agrees on the same choice, even if there are occasional miscommunications.
          </p>
          <h3>Popular Consensus Algorithms</h3>
          <ul>
            <li><strong>Paxos:</strong> One of the earliest and most complex consensus algorithms. Paxos ensures reliability and consistency in distributed systems. Though effective, Paxos is difficult to understand and implement, making it less popular in newer systems.</li>
            <li><strong>Raft:</strong> Introduced as a more understandable alternative to Paxos, Raft uses leader election and log replication to achieve consensus. Raft is known for being easy to understand, making it a popular choice for distributed systems that require consistency.</li>
            <li><strong>Byzantine Fault Tolerance (BFT):</strong> Designed to handle nodes that may act maliciously, BFT algorithms ensure that a system can still reach consensus even if some nodes provide incorrect or malicious data. This type of algorithm is crucial in blockchain systems where nodes may not be trusted.</li>
          </ul>
          <h3>Consensus in Blockchain</h3>
          <p>
            Consensus algorithms play a vital role in blockchain technology. In a blockchain, consensus is necessary to validate transactions and add new blocks to the chain. Popular consensus mechanisms in blockchain include:
          </p>
          <ul>
            <li><strong>Proof of Work (PoW):</strong> Used by Bitcoin, PoW requires participants to solve complex mathematical problems, ensuring that new blocks are added in a fair manner.</li>
            <li><strong>Proof of Stake (PoS):</strong> In PoS, participants are chosen to create new blocks based on the number of coins they hold. This method is energy efficient compared to PoW.</li>
          </ul>
          <h3>Challenges of Consensus</h3>
          <p>
            Achieving consensus in distributed systems can be challenging due to several reasons:
          </p>
          <ul>
            <li><strong>Network Partitions:</strong> When nodes in the system are unable to communicate with each other due to a network partition, achieving consensus becomes extremely challenging.</li>
            <li><strong>Byzantine Faults:</strong> Nodes may act maliciously or provide incorrect information, complicating the process of achieving consensus.</li>
            <li><strong>Latency:</strong> Communication delays between nodes may lead to a significant time lag in reaching a decision, affecting system performance.</li>
          </ul>
          <h3>Benefits of Consensus Algorithms</h3>
          <ul>
            <li><strong>Ensures Data Consistency:</strong> All nodes in the distributed system agree on the same state, ensuring consistency.</li>
            <li><strong>Fault Tolerance:</strong> Consensus algorithms make distributed systems resilient to faults by ensuring that the system can still operate even if some nodes fail or act maliciously.</li>
            <li><strong>Reliability:</strong> Systems that use consensus algorithms can provide reliable services even under unfavorable conditions such as node failures.</li>
          </ul>
          <h3>How Consensus Algorithms Work</h3>
          <p>
            The process of reaching consensus typically involves:
          </p>
          <ul>
            <li><strong>Proposing a Value:</strong> A node proposes a value or state that it believes should be agreed upon by the other nodes.</li>
            <li><strong>Voting:</strong> The other nodes then vote on whether they agree with the proposed value. The votes are collected, and a decision is made based on the majority.</li>
            <li><strong>Reaching Agreement:</strong> Once a majority is reached, the proposed value becomes the agreed-upon value, and the nodes update their state accordingly.</li>
          </ul>
          <h3>Conclusion</h3>
          <p>
            Consensus algorithms are an essential part of distributed systems, ensuring that all nodes agree on the system's state. They are crucial in scenarios where consistency and reliability are critical, such as in distributed databases and blockchain networks. By understanding and implementing consensus algorithms, developers can build resilient, consistent, and reliable distributed systems capable of handling faults and providing consistent results.
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
          <h3>Learn More about Consensus Algorithms</h3>
          <ul>
            <li><a href="https://raft.github.io/" target="_blank" rel="noopener noreferrer">Raft: Understand Consensus Simplified</a></li>
            <li><a href="https://lamport.azurewebsites.net/pubs/paxos-simple.pdf" target="_blank" rel="noopener noreferrer">Paxos Made Simple by Leslie Lamport</a></li>
            <li><a href="https://www.ibm.com/docs/en/i/7.4?topic=ssw_ibm_i_74/rzajx/rzajxconchecks.htm" target="_blank" rel="noopener noreferrer">IBM: What is Byzantine Fault Tolerance?</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ConsensusAlgorithms;
