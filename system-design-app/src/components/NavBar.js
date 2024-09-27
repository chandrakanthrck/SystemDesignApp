// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/cdn">CDN</Link></li>
        <li><Link to="/caching">Caching</Link></li>
        {/* Add links to other pages */}
      </ul>
    </nav>
  );
};

export default NavBar;
