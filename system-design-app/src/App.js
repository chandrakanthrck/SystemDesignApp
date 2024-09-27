import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'; // Ensure you create this component
import CDN from './pages/CDN'; // Import your pages
import Caching from './pages/Caching';
// Import other pages similarly...

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>System Design Concepts</h1> {/* You can add a title here */}
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route path="/cdn" component={CDN} />
            <Route path="/caching" component={Caching} />
            {/* Add other routes here */}
            <Route path="/" exact>
              <p>Welcome to the System Design Concepts app! Select a concept from the navigation.</p>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
