// src/data/APIGatewayQuestions.js
const apiGatewayQuestions = [
    { question: "What is an API Gateway?", answer: "An entry point for client requests to multiple back-end services" },
    { question: "How does an API Gateway simplify client interactions?", answer: "By handling routing, security, and load balancing for back-end services" },
    { question: "What is the role of an API Gateway in microservices?", answer: "It acts as an intermediary, managing client requests to various services" },
    { question: "How does an API Gateway help with security?", answer: "By authenticating requests before forwarding them to services" },
    { question: "What is rate limiting in the context of an API Gateway?", answer: "Restricting the number of requests a client can make within a specific time frame" },
    { question: "How does an API Gateway contribute to service discovery?", answer: "It helps in identifying the correct service based on client requests" },
    { question: "How can API Gateway improve fault tolerance?", answer: "By rerouting requests to available services in case of failures" },
    { question: "What kind of load balancing can an API Gateway provide?", answer: "Distributing incoming requests across multiple instances of a service" },
    { question: "Which type of architecture benefits most from an API Gateway?", answer: "Microservices architecture" },
    { question: "What is a common feature of API Gateway related to data transformation?", answer: "Request and response transformation to meet client requirements" },
    { question: "Can an API Gateway act as a cache?", answer: "Yes, it can cache responses to reduce load on services" },
    { question: "What kind of authentication methods can be implemented in an API Gateway?", answer: "OAuth, API keys, JWT, etc." },
    { question: "What is the benefit of centralizing rate limiting in an API Gateway?", answer: "It provides consistent request throttling across all services" },
    { question: "Why is API Gateway referred to as a 'single entry point'?", answer: "Because all requests from clients go through it to access back-end services" },
    { question: "How does API Gateway help with monitoring?", answer: "It provides logging and metrics for all incoming requests" },
    { question: "What happens if the API Gateway goes down?", answer: "Client requests fail unless redundancy or backup gateways are implemented" },
    { question: "What are the alternatives to using an API Gateway?", answer: "Direct service-to-service communication or Service Mesh" },
    { question: "How can API Gateway reduce latency?", answer: "By optimizing routing and caching frequently requested data" },
    { question: "What role does API Gateway play in user authentication?", answer: "It authenticates users before forwarding requests to services" },
    { question: "Can API Gateways handle versioning?", answer: "Yes, they can route requests to different service versions based on client needs" },
    { question: "What is dynamic routing in the context of an API Gateway?", answer: "Routing client requests based on specific conditions, like headers or query parameters" },
    { question: "How does API Gateway help prevent DDoS attacks?", answer: "By rate limiting and filtering malicious traffic before it reaches services" },
    { question: "Why is load balancing an important feature of an API Gateway?", answer: "To evenly distribute client requests across available service instances" },
    { question: "How does an API Gateway improve microservices security?", answer: "By centralizing authentication, authorization, and rate limiting" },
    { question: "What is request aggregation in an API Gateway?", answer: "Combining multiple requests to different services into a single client response" },
    { question: "Can an API Gateway rewrite URLs?", answer: "Yes, it can modify request URLs before forwarding them to services" },
    { question: "How does API Gateway help developers during testing?", answer: "By providing a single interface to test and interact with multiple services" },
    { question: "Why is API Gateway crucial for managing microservice communication?", answer: "It reduces complexity and standardizes interactions between clients and services" },
  ];
  
  export default apiGatewayQuestions;
  