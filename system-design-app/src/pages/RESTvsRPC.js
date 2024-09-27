import React from 'react';
import './Concept.css';

function RESTvsRPC() {
  return (
    <div className="concept">
      <h2>REST vs RPC</h2>
      <p>
        REST (Representational State Transfer) and RPC (Remote Procedure Call) are two styles for API design. 
        REST is resource-based, whereas RPC is more function-oriented, offering different trade-offs depending on use cases.
      </p>
      <img src="path/to/rest-vs-rpc-diagram.png" alt="REST vs RPC Diagram" className="concept-image" />
    </div>
  );
}

export default RESTvsRPC;
