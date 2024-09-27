import React from 'react';
import './Concept.css';

function MessageQueues() {
  return (
    <div className="concept">
      <h2>Message Queues</h2>
      <p>
        Message queues facilitate asynchronous communication between services by allowing them to send and receive messages 
        without waiting for each other, which increases system resilience.
      </p>
      <img src="path/to/message-queues-diagram.png" alt="Message Queues Diagram" className="concept-image" />
    </div>
  );
}

export default MessageQueues;
