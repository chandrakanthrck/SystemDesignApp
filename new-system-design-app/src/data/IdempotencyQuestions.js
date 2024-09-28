// src/data/IdempotencyQuestions.js

const idempotencyQuestions = [
    { question: "What does idempotency mean in the context of APIs?", answer: "It means that an operation will produce the same result no matter how many times it is executed." },
    { question: "Which HTTP method is considered idempotent?", answer: "GET" },
    { question: "Why is idempotency important in distributed systems?", answer: "To ensure that retries do not cause unintended effects." },
    { question: "Which of the following is NOT an idempotent HTTP method?", answer: "POST" },
    { question: "Give an example of an idempotent operation in real life.", answer: "Turning a light switch on repeatedly doesn't change the state after it is already on." },
    { question: "Which HTTP method is idempotent when used to update a resource?", answer: "PUT" },
    { question: "What happens if an operation is not idempotent but retries are made?", answer: "It can lead to unintended repeated side effects, such as duplicated actions." },
    { question: "Which of the following HTTP methods is NOT inherently idempotent?", answer: "PATCH" },
    { question: "Why is idempotency important in payment systems?", answer: "To prevent double charging customers in case of retries." },
    { question: "What is the difference between idempotent and non-idempotent operations?", answer: "Idempotent operations produce the same result when repeated, while non-idempotent operations may yield different results." },
    { question: "Which of the following describes the idempotency of a DELETE operation?", answer: "DELETE is idempotent because repeating it will still result in the resource being deleted." },
    { question: "Why should retry mechanisms often rely on idempotent operations?", answer: "To avoid causing unintended repeated actions during network failures." },
    { question: "Which real-world analogy best describes an idempotent operation?", answer: "Turning off a faucet repeatedly does not change its state once it is already off." },
    { question: "In REST APIs, which HTTP method is most often associated with creating a new resource, but is NOT idempotent?", answer: "POST" },
    { question: "Which HTTP method is suitable for updating a resource and ensuring idempotency?", answer: "PUT" },
    { question: "How does idempotency relate to retries in network communication?", answer: "Idempotency ensures that retries don't result in unintended consequences." },
    { question: "What is a good reason to make an HTTP GET request idempotent?", answer: "To ensure that repeated data retrieval does not modify the state of the server." },
    { question: "Which of the following is an example of a non-idempotent operation?", answer: "Creating a new order by using an HTTP POST request multiple times." },
    { question: "Why is idempotency critical in microservices architecture?", answer: "To ensure consistency across retries during communication between services." },
    { question: "Which of the following is true about the HTTP PUT operation?", answer: "It is idempotent because it always updates or creates a resource with the same data." },
    { question: "What makes a PATCH request non-idempotent?", answer: "PATCH requests apply partial modifications, and repeating them can yield different results." },
    { question: "How does idempotency prevent data corruption?", answer: "It allows safe retries without causing duplicate effects or overwrites." },
    { question: "Which HTTP methods are typically idempotent?", answer: "GET, PUT, DELETE" },
    { question: "In what scenarios is idempotency most important?", answer: "When a client retries a request after not receiving a response." },
    { question: "How do idempotent operations impact scalability?", answer: "They make it easier to retry and distribute operations across multiple nodes without concerns of duplication." },
    { question: "What is a drawback of non-idempotent operations in distributed systems?", answer: "They can lead to data inconsistency when operations are retried." },
    { question: "Which of the following best describes idempotency in payment systems?", answer: "Processing the same payment request multiple times should not result in multiple charges." },
    { question: "How does idempotency relate to state changes?", answer: "Idempotent operations have no side effects when applied multiple times." },
    { question: "What is a typical example of an idempotent HTTP request that modifies server state?", answer: "PUT" },
    { question: "How can an operation be made idempotent?", answer: "By ensuring that repeating the operation produces the same result as applying it once." },
  ];
  
  export default idempotencyQuestions;
  