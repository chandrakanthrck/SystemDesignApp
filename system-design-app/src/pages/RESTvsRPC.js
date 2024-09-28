import React from 'react';
import './RESTvsRPC.css'; // Ensure the correct CSS file is imported

function RESTvsRPC() {
  return (
    <div className="rest-rpc-container">
      <h2 className="rest-rpc-header">REST vs RPC</h2>
      <p className="rest-rpc-description">
        REST (Representational State Transfer) and RPC (Remote Procedure Call) are two styles for API design. 
        REST is resource-based, whereas RPC is more function-oriented, offering different trade-offs depending on use cases.
      </p>
      <div className="rest-rpc-diagram">
        <img src={`${process.env.PUBLIC_URL}/images/rest-vs-rpc-diagram.png`} alt="REST vs RPC Diagram" className="concept-image" />
      </div>
      <div className="interactive-section">
        <h2>Comparison Table</h2>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Aspect</th>
              <th>REST</th>
              <th>RPC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Type</td>
              <td>Resource-based</td>
              <td>Function-based</td>
            </tr>
            <tr>
              <td>Data Format</td>
              <td>JSON/XML</td>
              <td>Binary/Protocol Buffers</td>
            </tr>
            <tr>
              <td>Stateless</td>
              <td>Yes</td>
              <td>No (optional)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="toggle-buttons">
        <button>View More on REST</button>
        <button>View More on RPC</button>
      </div>
      <div className="details-section">
        <h3>Further Details</h3>
        <p>
          Understanding the trade-offs between REST and RPC can help developers choose the right architecture for their applications.
        </p>
      </div>
      <div className="rest-rpc-footer">
        Selecting between REST and RPC depends on the specific needs and constraints of your application.
      </div>
    </div>
  );
}

export default RESTvsRPC;
