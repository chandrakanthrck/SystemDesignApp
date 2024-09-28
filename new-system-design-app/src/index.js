import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/globalStyles.css'; // Add the global styles import
import App from './App';
import reportWebVitals from './reportWebVitals';

// Optional: Adding an Error Boundary wrapper
import ErrorBoundary from './components/ErrorBoundary'; // ErrorBoundary component, optional

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Start measuring performance in your app
reportWebVitals();
