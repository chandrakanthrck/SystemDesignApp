import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/globalStyles.css';
import '../styles/CDN.css'; // Use a separate CSS file for specific concept styling.
import cdnQuestions from '../data/CDNQuestions'; // Import the questions from the separate file

function CDN() {
  // State for showing sections
  const [activeSection, setActiveSection] = useState('content');
  
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
            A <strong>Content Delivery Network (CDN)</strong> is a system of distributed servers that work together to deliver web content more efficiently to users. Instead of relying on a single server to deliver the entire website or media files, CDNs cache content in multiple servers globally. This setup ensures faster load times, lower latency, and improved user experience.
          </p>
          <p>
            Imagine hosting a party and storing ice cream in multiple mini freezers spread across your house, instead of only keeping it in your kitchen. This way, guests can access the ice cream without everyone having to go to the kitchen, reducing congestion and ensuring everyone is served quickly.
          </p>
          <h3>How Does a CDN Work?</h3>
          <p>
            CDNs store cached versions of your website's assets, such as images, videos, HTML pages, JavaScript, and CSS files, across multiple servers in different geographical locations. When a user requests a piece of content, the CDN redirects the request to the nearest server, reducing the distance the data needs to travel, thereby improving load times.
          </p>
          <p>
            For example, if a user from London requests an image from your website, the CDN will serve that image from a server in London, rather than having to request it from a server in New York. This significantly reduces latency and improves the user's experience.
          </p>
          <h3>Key Benefits of CDNs</h3>
          <ul>
            <li>
              <strong>Reduced Latency:</strong> The shorter the distance between the server and the end-user, the faster the delivery of content. CDNs help reduce latency by serving content from servers closer to the user.
            </li>
            <li>
              <strong>Improved Performance:</strong> By caching content at multiple points around the world, CDNs help reduce the workload on the origin server, ensuring users experience faster page load times.
            </li>
            <li>
              <strong>Scalability:</strong> Handling traffic spikes becomes easier, as content delivery is spread across multiple servers, allowing for seamless scalability during high-traffic events.
            </li>
            <li>
              <strong>Enhanced Security:</strong> CDNs provide an additional layer of security by masking the origin server’s IP address. They also help mitigate DDoS attacks by distributing the load across multiple servers.
            </li>
          </ul>
          <h3>Real-World Examples of CDNs</h3>
          <p>
            Popular companies like Netflix, Amazon, and YouTube rely on CDNs to deliver video content quickly and efficiently to users all around the world. By using a CDN, these companies are able to provide a seamless streaming experience, even during peak times.
          </p>
          <p>
            Many websites also use CDNs for serving static assets like images, stylesheets, and JavaScript files. This helps them improve page load speeds and offer a smoother user experience, especially for users from various regions.
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
