import React from 'react';
import './Concept.css';

function DatabaseSharding() {
  return (
    <div className="concept">
      <h2>Database Sharding</h2>
      <p>
        Database sharding splits a large database into smaller, more manageable pieces called shards. 
        Each shard is stored on a separate server, enabling faster queries and better scalability.
      </p>
      <img src="path/to/database-sharding-diagram.png" alt="Database Sharding Diagram" className="concept-image" />
    </div>
  );
}

export default DatabaseSharding;
