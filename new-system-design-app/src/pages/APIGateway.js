// src/pages/APIGateway.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/APIGateway.css';
import '../styles/globalStyles.css';
import apiGatewayQuestions from '../data/APIGatewayQuestions'; // Import questions from the separate file

function APIGateway() {
  // State for showing additional sections
  const [activeSection, setActiveSection] = useState('content');

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Randomly select 10 questions for the quiz
  useEffect(() => {
    const selectedQuestions = [...apiGatewayQuestions]
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
    <div className="api-gateway-container">
      {/* Top Navigation Bar */}
      <div className="top-bar">
        <button onClick={() => setActiveSection('diagram')}>Diagram</button>
        <button onClick={() => setActiveSection('content')}>Content</button>
        <button onClick={() => setActiveSection('quiz')}>Quiz</button>
        <button onClick={() => setActiveSection('resources')}>Resources</button>
      </div>

      {/* Section Rendering */}
      {activeSection === 'diagram' && (
        <motion.div
          className="api-gateway-diagram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/api-gateway-diagram.png`}
            alt="API Gateway Diagram"
            className="concept-image"
          />
        </motion.div>
      )}

      {activeSection === 'content' && (
        <motion.div
          className="api-gateway-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>API Gateway</h2>
          <p>
            An <strong>API Gateway</strong> is a critical component in modern architectures, especially in microservices and serverless designs. It serves as the entry point to your backend services, providing a layer between clients and server-side systems, managing things like routing, security, rate limiting, monitoring, and more. Essentially, it's the front door for your APIs.
          </p>

          <h3>💡 What is an API Gateway?</h3>
          <p>
            An API Gateway acts as a reverse proxy that handles requests from clients, forwarding them to the appropriate backend service. It integrates seamlessly with microservices to simplify client-server interactions. AWS’s API Gateway, for example, is a managed solution that does precisely this, providing a wide array of features to support complex application needs. You can think of the API Gateway as the glue between your clients and the many services that power your application.
          </p>

          <h3>🤸‍♀️ Flexibility</h3>
          <p>
            One of the biggest strengths of an API Gateway is its <strong>flexibility</strong>. In a fast-paced development environment where backend services evolve quickly, an API Gateway ensures that client interactions remain stable. As long as the API contract remains consistent, you can modify, replace, or upgrade backend services without changing the way clients interact with your platform. This decoupling provides significant advantages:
          </p>
          <ul>
            <li>
              <strong>Integration with Multiple Services:</strong> Whether you are using AWS Lambda, Amazon ECS, or EC2 instances, API Gateway can handle them all. It allows you to use the right tool for the job, giving you the flexibility to integrate various compute services depending on your use case.
            </li>
            <li>
              <strong>Seamless Transition Between Architectures:</strong> Suppose you want to move a feature from synchronous processing to an event-driven architecture. The API Gateway supports such transitions effortlessly by connecting clients to the backend with minimal changes.
            </li>
          </ul>

          <h3>📈 Scalability</h3>
          <p>
            Scalability is one of the most essential features of an API Gateway. Since the gateway is a managed service, like AWS API Gateway, it automatically scales to handle any amount of incoming traffic. This means you don’t have to worry about traffic surges or unexpected spikes. Whether you have one client or thousands, the API Gateway adjusts to meet the demand.
          </p>
          <p>
            Moreover, API Gateway offers tools like API keys and usage plans to provide <strong>rate limiting</strong>, helping prevent abuse and controlling access to your services. This makes managing client quotas much easier, giving you predictable load and helping optimize infrastructure costs.
          </p>

          <h3>🔐 Authentication & Security</h3>
          <p>
            Security is a primary concern for any API, and API Gateway serves as a security layer for your backend services. Using <strong>custom authorizers</strong>, you can manage authentication and authorization at the gateway layer, filtering out unwanted or malicious traffic before it reaches your backend.
          </p>
          <p>
            Integration with services like AWS Cognito allows you to validate tokens and manage user access without additional custom code. Alternatively, you can use Lambda functions as custom authorizers to validate JWT tokens or interact with other identity providers, ensuring flexibility in how you implement security.
          </p>
          <p>
            API Gateways can also integrate seamlessly with Web Application Firewalls (WAF), helping you defend against DDoS attacks and unwanted bot traffic. This means fewer unwanted requests make it through to your core infrastructure, reducing unnecessary load and keeping costs in check.
          </p>

          <h3>🧠 Simplified Application Logic</h3>
          <p>
            Another benefit of using an API Gateway is that it simplifies the logic within your backend services. By managing <strong>authentication</strong>, <strong>rate limiting</strong>, and <strong>routing</strong> at the gateway level, your backend services can focus purely on the business logic.
          </p>
          <p>
            For example, when using custom authorizers, your backend services don’t need to handle authentication and token validation. This means less code, fewer bugs, and simpler unit testing. Moreover, since your services do not need to manage these concerns, the time to implement new features can be greatly reduced, leading to faster iterations.
          </p>

          <h3>📚 Real-World Example: Migrating to an API Gateway</h3>
          <p>
            In a previous project, we managed an existing system that was a mix of public and private APIs hosted behind several load balancers. Our authentication was custom-built, and each service interacted with a shared authentication database. As you can imagine, this setup created a lot of duplicated code and a maintenance nightmare.
          </p>
          <p>
            When we decided to migrate to a third-party identity provider, we chose to implement AWS API Gateway as the entry point for all public APIs. By using API Gateway with custom authorizers, we simplified authentication by consolidating it at a single point. This had several benefits:
          </p>
          <ul>
            <li><strong>Reduced Complexity:</strong> Backend services no longer needed to interact with the authentication database, reducing duplicate code.</li>
            <li><strong>Easier Testing:</strong> The removal of complex authentication logic made unit testing simpler and faster.</li>
            <li><strong>Improved Security:</strong> The API Gateway provided a centralized point to attach security policies, reducing the surface area for vulnerabilities.</li>
            <li><strong>Reduced Load:</strong> By handling authentication at the gateway level, the backend services and databases experienced significantly less load.</li>
          </ul>

          <h3>🛠️ Other Key Features</h3>
          <ul>
            <li>
              <strong>Request Aggregation:</strong> API Gateway can aggregate multiple backend requests into a single client-facing response. This is particularly useful if you need to combine data from several services into one response, reducing round trips for clients.
            </li>
            <li>
              <strong>WebSocket Support:</strong> Modern applications often require real-time communication. API Gateway supports WebSocket protocols, allowing you to create bi-directional communication channels between the client and the server.
            </li>
            <li>
              <strong>Versioning and Stage Management:</strong> With API Gateway, you can manage multiple versions of an API and create stages like "development," "staging," and "production." This provides more control over how and when updates are rolled out.
            </li>
          </ul>

          <h3>✍️ Conclusion</h3>
          <p>
            API Gateway is an incredibly versatile tool that serves as the backbone for scalable, secure, and manageable client-server communications. It provides features that allow for seamless integration with backend services, simplified scaling, comprehensive security, and much more. Whether building small applications or enterprise-level systems, API Gateway offers a consistent way to expose your services to clients.
          </p>
          <p>
            For anyone starting with API development or managing large-scale distributed systems, adopting an API Gateway like AWS API Gateway could provide the robustness and flexibility you need to evolve your platform efficiently.
          </p>
        </motion.div>
      )}

      {activeSection === 'quiz' && (
        <div className="quiz-section">
          <h3>Take the Quiz</h3>
          {!quizFinished ? (
            <div className="question-container">
              <p>{questions[currentQuestionIndex]?.question}</p>
              <button className="quiz-button" onClick={() => handleAnswer('Correct')}>Correct</button>
              <button className="quiz-button" onClick={() => handleAnswer('Incorrect')}>Incorrect</button>
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
          <h3>Learn More about API Gateway</h3>
          <ul>
            <li><a href="https://aws.amazon.com/api-gateway/" target="_blank" rel="noopener noreferrer">AWS API Gateway Documentation</a></li>
            <li><a href="https://microservices.io/patterns/apigateway.html" target="_blank" rel="noopener noreferrer">Microservices.io: API Gateway Pattern</a></li>
            <li><a href="https://www.nginx.com/learn/api-gateway/" target="_blank" rel="noopener noreferrer">NGINX: What is an API Gateway?</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default APIGateway;
