import React from 'react';
import './DatabaseSharding.css';

function DatabaseSharding() {
  return (
    <div className="sharding-container">
      <h2 className="sharding-header">Database Sharding</h2>
      <p className="sharding-description">
        Database sharding splits a large database into smaller, more manageable pieces called shards. 
        Each shard is stored on a separate server, enabling faster queries and better scalability. Sharding 
        is particularly useful when handling large amounts of data that need to be distributed efficiently.
      </p>
      <div className="sharding-diagram">
        <img src={`${process.env.PUBLIC_URL}/images/database-sharding-diagram.png`} alt="Database Sharding Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h2>Interactive Sharding Simulation</h2>
        <button className="sharding-simulation-button">Simulate Horizontal Sharding</button>
        <button className="sharding-simulation-button">Simulate Vertical Partitioning</button>
      </div>
      <div className="sharding-benefits">
        <h2>Benefits of Database Sharding</h2>
        <p>
          Sharding offers a range of benefits including improved query performance, enhanced scalability, 
          and the ability to distribute data across multiple servers to avoid performance bottlenecks. 
          Shards are often divided based on logical data partitions like users or regions, reducing the load 
          on each database node.
        </p>
      </div>
      <div className="buttons-container">
        <button className="action-button">Learn More About Sharding Strategies</button>
        <button className="action-button">Explore Vertical vs Horizontal Sharding</button>
      </div>
      <div className="sharding-footer">
        Database sharding is a key part of scaling database infrastructure, enabling you to manage 
        large datasets effectively without sacrificing performance.
      </div>
    </div>
  );
}

export default DatabaseSharding;
