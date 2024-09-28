import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css'; // Main styles for the application
import './styles/globalStyles.css'; // Global styles applied across the app
import App from './App'; // Main application component
import reportWebVitals from './reportWebVitals'; // For measuring performance

// Create a root element for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Optional: Measure performance in your app, log results or send to an analytics endpoint
reportWebVitals();
