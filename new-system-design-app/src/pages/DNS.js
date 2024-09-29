import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/globalStyles.css';
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
        {['diagram', 'content', 'quiz', 'resources'].map((section) => (
          <button
            key={section}
            className={activeSection === section ? 'active' : ''}
            onClick={() => setActiveSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
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
          className="dns-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Domain Name System (DNS)</h2>
          <p>
            The <strong>Domain Name System (DNS)</strong> is one of the fundamental components of the internet. It acts as the "phonebook" of the internet, translating human-readable domain names (like <em>www.example.com</em>) into machine-readable IP addresses (such as <em>192.168.1.1</em>). Without DNS, it would be nearly impossible for us to navigate the web without memorizing numerical IP addresses for every site we want to visit.
          </p>

          <h3>How Does DNS Work?</h3>
          <p>
            DNS is a complex distributed database that consists of different layers of servers, each playing a role in mapping domain names to IP addresses. When you enter a URL into your browser, the following steps take place:
          </p>

          <h4>1. DNS Query Process</h4>
          <p>
            The DNS query starts when you type in a domain, like <em>www.example.com</em>. The first step is to check the local cache. Your device keeps a small memory of recent DNS lookups to save time. If the desired IP is cached, it is used immediately.
          </p>

          <h4>2. Contacting a Recursive DNS Resolver</h4>
          <p>
            If the IP address is not in your local cache, your computer sends a query to a DNS resolver, often provided by your Internet Service Provider (ISP). This recursive resolver is responsible for locating the IP address on your behalf.
          </p>

          <h4>3. Querying the Root Name Server</h4>
          <p>
            If the recursive resolver cannot answer the query from its own cache, it contacts a <strong>Root Name Server</strong>. These servers are the authoritative source of where to find the addresses of Top-Level Domain (TLD) servers (.com, .net, etc.).
          </p>

          <h4>4. TLD and Authoritative Name Servers</h4>
          <p>
            The recursive resolver then contacts the appropriate TLD server (for example, .com) which then directs it to the <strong>Authoritative Name Server</strong> responsible for the domain, such as <em>example.com</em>. The authoritative server provides the exact IP address to the resolver.
          </p>

          <h4>5. Returning the IP Address</h4>
          <p>
            The recursive resolver finally returns the IP address to your computer, allowing the browser to connect to the web server and display the desired content.
          </p>

          <h3>Importance of DNS</h3>
          <p>
            DNS is a key pillar of how the internet functions. Without it, user-friendly navigation of the web would be impossible. DNS not only helps locate servers, but it also plays a crucial role in providing a secure browsing experience, and it is essential for services like email, VPN, and more.
          </p>

          <h3>Types of DNS Records</h3>
          <ul>
            <li><strong>A Record:</strong> Maps a domain name to an IPv4 address.</li>
            <li><strong>AAAA Record:</strong> Maps a domain to an IPv6 address.</li>
            <li><strong>MX Record:</strong> Specifies the mail servers responsible for receiving email on behalf of a domain.</li>
            <li><strong>CNAME Record:</strong> Creates an alias for a domain, often used to point one domain to another.</li>
            <li><strong>TXT Record:</strong> Used to hold machine-readable text, commonly for verification purposes (e.g., SPF records for email).</li>
          </ul>

          <h3>DNS Caching and TTL</h3>
          <p>
            <strong>DNS Caching</strong> is an important performance feature. Both local devices and DNS resolvers store DNS records to save lookup time in future queries. These caches are controlled by a parameter called <strong>Time to Live (TTL)</strong>. TTL determines how long a DNS record stays cached before it needs to be refreshed. Proper management of TTL values helps balance between fast lookups and ensuring updated information.
          </p>

          <h3>Challenges in DNS</h3>
          <p>
            DNS, like any major internet service, faces a number of challenges:
          </p>
          <ul>
            <li><strong>Security Threats:</strong> DNS is vulnerable to attacks such as DNS spoofing, where attackers replace the legitimate IP with a malicious one. DNSSEC (DNS Security Extensions) has been introduced to help mitigate such risks by providing data integrity checks.</li>
            <li><strong>DNS Propagation:</strong> When changes are made to DNS records, they do not instantly propagate across all servers due to the TTL. This is known as DNS propagation delay and can sometimes lead to inconsistencies in website access.</li>
          </ul>

          <h3>DNS and CDN Integration</h3>
          <p>
            DNS is often integrated with <strong>Content Delivery Networks (CDNs)</strong> to ensure faster content delivery. When a user requests content, the DNS directs them to the closest CDN server, thus reducing latency and improving the browsing experience.
          </p>

          <h3>DNS in Action: A Real-World Analogy</h3>
          <p>
            Imagine trying to find someone's phone number in a massive city with no phonebook or contact list. You'd have to walk around and ask people where to find that person. DNS is like a digital phonebook for the internet. It allows you to look up a domain, get the right address, and be on your way almost instantly.
          </p>

          <h3>Conclusion</h3>
          <p>
            DNS is a critical service that enables smooth navigation across the internet. It is built on a robust hierarchy of servers that work tirelessly to resolve domain names to IP addresses in milliseconds. As the internet grows and scales, DNS continues to be one of the most reliable and essential components of global communication.
          </p>
        </motion.div>
      )}

      {activeSection === 'quiz' && (
        <motion.div
          className="quiz-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>
      )}

      {activeSection === 'resources' && (
        <motion.div
          className="reference-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3>Learn More about DNS</h3>
          <ul>
            <li><a href="https://www.cloudflare.com/learning/dns/what-is-dns/" target="_blank" rel="noopener noreferrer">Cloudflare: What is DNS?</a></li>
            <li><a href="https://www.akamai.com/our-thinking/what-is-dns" target="_blank" rel="noopener noreferrer">Akamai: Understanding DNS</a></li>
            <li><a href="https://www.dnsimple.com/what-is-dns/" target="_blank" rel="noopener noreferrer">DNSimple: What is DNS?</a></li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default DNS;
