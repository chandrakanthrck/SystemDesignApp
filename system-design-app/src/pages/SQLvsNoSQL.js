import React from 'react';
import './SQLvsNoSQL.css'; // Ensure the correct CSS file is imported

function SQLvsNoSQL() {
  return (
    <div className="sql-nosql-container">
      <h2 className="sql-nosql-header">SQL vs NoSQL</h2>
      <p className="sql-nosql-description">
        SQL databases are relational and structured, while NoSQL databases are non-relational and 
        offer more flexibility for unstructured data. Choosing between them depends on application 
        needs and data requirements.
      </p>
      <div className="sql-nosql-diagram">
        <img src="path/to/sql-vs-noso-diagram.png" alt="SQL vs NoSQL Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h2>Comparison Table</h2>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Aspect</th>
              <th>SQL</th>
              <th>NoSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data Structure</td>
              <td>Relational</td>
              <td>Non-relational</td>
            </tr>
            <tr>
              <td>Schema</td>
              <td>Fixed</td>
              <td>Dynamic</td>
            </tr>
            <tr>
              <td>Transactions</td>
              <td>ACID compliant</td>
              <td>Eventual consistency</td>
            </tr>
            <tr>
              <td>Scaling</td>
              <td>Vertical</td>
              <td>Horizontal</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="toggle-buttons">
        <button>Learn More about SQL</button>
        <button>Learn More about NoSQL</button>
      </div>
      <div className="details-section">
        <h3>Further Details</h3>
        <p>
          Selecting the right database model is crucial for application performance and scalability.
        </p>
      </div>
      <div className="sql-nosql-footer">
        Understanding the strengths and weaknesses of each type will guide your decision based on specific use cases.
      </div>
    </div>
  );
}

export default SQLvsNoSQL;
