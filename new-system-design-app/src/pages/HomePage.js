import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HomePage.css'; // Importing CSS for styling the homepage

function HomePage() {
  return (
    <div className="homepage">
      {/* Animated Background */}
      <motion.div
        className="background-animation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="circle-animation"></div>
        <div className="circle-animation small-circle"></div>
        <div className="circle-animation large-circle"></div>
      </motion.div>

      {/* Welcome Message */}
      <motion.h1
        className="welcome-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Welcome to the System Design App!
      </motion.h1>

      {/* Subheading with Fun Description */}
      <motion.p
        className="homepage-subtitle"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Learn complex system design concepts with fun animations, interactive diagrams, and quizzes.
      </motion.p>

      {/* Animated Buttons to Explore Concepts */}
      <motion.div
        className="button-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.button
          className="explore-button"
          whileHover={{ scale: 1.1, backgroundColor: "#38b2ac" }}
          whileTap={{ scale: 0.9 }}
        >
          Start Exploring!
        </motion.button>
      </motion.div>

      {/* Interactive Icons */}
      <motion.div
        className="icons-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          className="concept-icon"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 1 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/cdn-icon.png`}
            alt="CDN Icon"
            className="homepage-icon"
          />
          <p>CDN</p>
        </motion.div>
        <motion.div
          className="concept-icon"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 1 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/caching-icon.png`}
            alt="Caching Icon"
            className="homepage-icon"
          />
          <p>Caching</p>
        </motion.div>
        <motion.div
          className="concept-icon"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 1 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/load-balancing-icon.png`}
            alt="Load Balancing Icon"
            className="homepage-icon"
          />
          <p>Load Balancing</p>
        </motion.div>
        <motion.div
          className="concept-icon"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 1 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/database-sharding-icon.png`}
            alt="Database Sharding Icon"
            className="homepage-icon"
          />
          <p>Sharding</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomePage;
