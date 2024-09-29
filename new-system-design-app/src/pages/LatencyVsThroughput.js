import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/LatencyVsThroughput.css'; // Ensure correct CSS import
import latencyThroughputQuestions from '../data/LatencyThroughputQuestions'; // Import questions from a separate file

function LatencyThroughput() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('diagram');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...latencyThroughputQuestions]
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
    <div className="lt-container">
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
          className="lt-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/latency-throughput-diagram.png`}
            alt="Latency vs Throughput Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="lt-content-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Latency vs Throughput: Understanding the Balance</h2>
          <p>
            In the world of computer networking and system performance, two crucial metrics stand out: <strong>latency</strong> and <strong>throughput</strong>. Though they are often mentioned together, they refer to distinct properties of a system, each representing different aspects of performance. Understanding latency and throughput is fundamental for engineers who need to optimize the speed and efficiency of their systems.
          </p>

          <h3>What is Latency?</h3>
          <p>
            <strong>Latency</strong> refers to the time taken for a data packet to travel from the sender to the receiver. It is essentially the delay between when a request is made and when the response is received. For instance, if you click a button on a website, the latency is the time it takes for the server to respond to that click.
          </p>
          <p>
            Latency is measured in milliseconds (ms) and can be influenced by several factors:
          </p>
          <ul>
            <li><strong>Physical Distance:</strong> The greater the distance between the source and destination, the longer the latency.</li>
            <li><strong>Number of Intermediary Devices:</strong> Routers and switches that relay data add to the overall delay.</li>
            <li><strong>Network Congestion:</strong> Heavy traffic on the network can slow down data delivery.</li>
          </ul>
          <p>
            Low latency is crucial for applications that require real-time responses, such as gaming, online trading, and video conferencing. Even a small delay in these applications can significantly impact the user experience.
          </p>

          <h3>What is Throughput?</h3>
          <p>
            <strong>Throughput</strong>, on the other hand, refers to the volume of data that can be transmitted successfully from one point to another in a given timeframe. It is typically measured in bits per second (bps) and indicates the capacity of a network to handle large amounts of data.
          </p>
          <p>
            Unlike latency, which is about speed, throughput is about volume. For example, how many requests can a server handle in one minute? How much data can be uploaded to the cloud in an hour? These questions relate to throughput.
          </p>

          <h3>Real-World Analogies</h3>
          <p>
            To better understand these concepts, let's consider a real-world analogy: a coffee shop.
          </p>
          <ul>
            <li>
              <strong>Latency:</strong> Imagine you are in a coffee shop, and you place an order for a latte. Latency is the time from when you place your order to when the barista starts making your coffee. It represents the delay or waiting time.
            </li>
            <li>
              <strong>Throughput:</strong> Throughput, however, is the number of coffees that the barista can make in an hour. If the barista can make 20 coffees in an hour, that’s the throughput of the coffee shop.
            </li>
          </ul>

          <h3>Scenarios where Latency and Throughput Matter</h3>
          <h4>1. Online Gaming</h4>
          <p>
            In online gaming, latency is one of the most critical factors. If a player takes an action, such as shooting an opponent, the signal must reach the game server and return with minimal delay. High latency, often referred to as "lag," can make the game unplayable, causing the player to see delayed responses.
          </p>

          <h4>2. Video Streaming</h4>
          <p>
            For services like Netflix, throughput is more critical. Streaming high-definition video requires transferring large amounts of data continuously without interruption. If the throughput is insufficient, users will experience buffering issues. This is why streaming services often use Content Delivery Networks (CDNs) to increase throughput and deliver data faster.
          </p>

          <h4>3. Financial Transactions</h4>
          <p>
            In financial systems, both latency and throughput are essential. High-frequency trading relies on extremely low latency to execute trades instantly, while banking systems must also ensure that they have enough throughput to process millions of transactions daily without delays.
          </p>

          <h3>The Trade-off Between Latency and Throughput</h3>
          <p>
            Sometimes, there's a trade-off between achieving low latency and high throughput:
          </p>
          <ul>
            <li>
              <strong>High Latency, High Throughput:</strong> For bulk data transfers, like moving a large database backup, the first data packet might take a while to get started, but once the transfer begins, large amounts of data are transferred efficiently.
            </li>
            <li>
              <strong>Low Latency, Low Throughput:</strong> For real-time applications like voice communication, the focus is on minimizing delay rather than handling large volumes of data.
            </li>
            <li>
              <strong>Low Latency, High Throughput:</strong> Achieving both low latency and high throughput is the ideal but is often challenging. It requires a highly optimized network infrastructure and efficient protocols.
            </li>
          </ul>

          <h3>Optimizing for Latency and Throughput</h3>
          <p>
            Depending on the nature of the application, different strategies can be used to optimize for latency or throughput:
          </p>

          <h4>Reducing Latency</h4>
          <ul>
            <li><strong>Content Delivery Networks (CDNs):</strong> By distributing content closer to users, latency can be significantly reduced.</li>
            <li><strong>Reducing Hop Count:</strong> Fewer intermediary devices between the client and the server mean faster data travel.</li>
            <li><strong>Efficient Protocols:</strong> Protocols like QUIC and HTTP/3 are designed to minimize latency.</li>
          </ul>

          <h4>Increasing Throughput</h4>
          <ul>
            <li><strong>Parallel Processing:</strong> Handling multiple requests at the same time can increase throughput.</li>
            <li><strong>Load Balancing:</strong> Distributing incoming requests across multiple servers prevents bottlenecks and maximizes the system's ability to process data.</li>
            <li><strong>Batch Processing:</strong> Instead of processing one request at a time, handling multiple requests as a batch can improve throughput.</li>
          </ul>

          <h3>Latency vs Throughput: Which to Optimize?</h3>
          <p>
            The decision on whether to optimize for latency or throughput depends entirely on the use case:
          </p>
          <ul>
            <li>
              <strong>Optimize for Low Latency:</strong> Applications that require immediate feedback, such as online gaming, remote surgery, and financial trading systems, benefit from low latency. In these applications, delays can be catastrophic or frustrating to users.
            </li>
            <li>
              <strong>Optimize for High Throughput:</strong> Systems that handle large volumes of data, such as video streaming services, backup systems, and data warehouses, prioritize throughput. The goal is to maximize the amount of data processed rather than focusing on individual packet delays.
            </li>
          </ul>

          <h3>Conclusion</h3>
          <p>
            In summary, <strong>latency</strong> and <strong>throughput</strong> are two fundamental yet distinct metrics that determine the performance of a system. Latency measures the speed of response, while throughput measures the volume of data that can be processed. Both are critical in their own right, depending on the use case, and understanding the trade-offs between them is essential for designing efficient and responsive systems. In today’s increasingly connected world, optimizing for the right balance between latency and throughput can be the difference between a successful and an unsuccessful user experience.
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
          <h3>Learn More about Latency and Throughput</h3>
          <ul>
            <li>
              <a
                href="https://www.cloudflare.com/learning/performance/glossary/what-is-latency/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloudflare: What is Latency? - Learn the basics of network latency and how it impacts user experience.
              </a>
            </li>
            <li>
              <a
                href="https://www.techtarget.com/searchnetworking/definition/throughput"
                target="_blank"
                rel="noopener noreferrer"
              >
                TechTarget: Throughput Definition - Understand what throughput is and why it's important in networking.
              </a>
            </li>
            <li>
              <a
                href="https://aws.amazon.com/architecture/network-performance-monitoring/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AWS: Network Performance Monitoring - Explore how AWS helps monitor and optimize network latency and throughput.
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LatencyThroughput;
