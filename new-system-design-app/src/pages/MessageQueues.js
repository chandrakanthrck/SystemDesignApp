import React from 'react';
import './MessageQueues.css'; // Ensure correct CSS import

function MessageQueues() {
  return (
    <div className="mq-container">
      <h2 className="mq-header">Message Queues</h2>
      <p className="mq-description">
        Message queues facilitate asynchronous communication between services by allowing them to send and receive messages 
        without waiting for each other, which increases system resilience.
      </p>
      <div className="mq-diagram">
        <img src={`${process.env.PUBLIC_URL}/images/message-queues-diagram.png`} alt="Message Queues Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h2>Understanding Message Queues</h2>
        <p>They help in decoupling the components of a system, allowing for more flexible and scalable architectures.</p>
      </div>
      <div className="mq-example">
        <h3>Example of Message Queues</h3>
        <p>For instance, a web application can use a message queue to process user requests asynchronously, ensuring that users 
        receive timely responses without delays caused by backend processing.</p>
      </div>
      <div className="mq-benefits">
        <h2>Benefits of Message Queues</h2>
        <p>Message queues improve system resilience, increase throughput, and enhance scalability by allowing different 
        components to operate independently.</p>
      </div>
      <div className="buttons-container">
        <button className="action-button">Learn More About Message Queues</button>
        <button className="action-button">Explore Asynchronous Communication</button>
      </div>
      <div className="mq-footer">
        Effective message queuing can significantly enhance the reliability of your applications.
      </div>
    </div>
  );
}

export default MessageQueues;
