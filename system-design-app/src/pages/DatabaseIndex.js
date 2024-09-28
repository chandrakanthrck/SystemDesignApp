import React from 'react';
import './DatabaseIndex.css';

function DatabaseIndex() {
  return (
    <div className="database-index-container">
      <h2 className="database-index-title">Database Index</h2>
      <p className="database-index-content">
        Database indexing improves retrieval performance by providing a data structure that allows 
        quick lookups of rows based on specified fields. Indexes are similar to a book's index: they 
        significantly speed up query response times by reducing the number of rows that need to be scanned.
      </p>
      <div className="database-index-diagram">
        <img src={`${process.env.PUBLIC_URL}/images/database-index-diagram.png`} alt="Database Index Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h3 className="interactive-heading">Explore Index Types</h3>
        <button className="interactive-button">Primary Index</button>
        <button className="interactive-button">Secondary Index</button>
      </div>
      <ul className="database-index-list">
        <li>Primary indexes enforce uniqueness on a table's key fields.</li>
        <li>Secondary indexes are used to speed up data retrieval for other fields.</li>
        <li>Indexes are essential for optimizing complex queries involving sorting and filtering.</li>
      </ul>
      <p className="database-index-note">
        Note: Too many indexes can slow down write operations, as they need to be updated for every insert or update.
      </p>
    </div>
  );
}

export default DatabaseIndex;
