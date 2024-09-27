import React from 'react';
import './Concept.css';

function SQLvsNoSQL() {
  return (
    <div className="concept">
      <h2>SQL vs NoSQL</h2>
      <p>
        SQL databases are relational and structured, while NoSQL databases are non-relational and 
        offer more flexibility for unstructured data. Choosing between them depends on application 
        needs and data requirements.
      </p>
      <img src="path/to/sql-vs-noso-diagram.png" alt="SQL vs NoSQL Diagram" className="concept-image" />
    </div>
  );
}

export default SQLvsNoSQL;
