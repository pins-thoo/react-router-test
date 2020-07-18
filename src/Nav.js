import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/" className="nav-inner-link">
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/about" className="nav-inner-link">
          <li>About</li>
        </Link>
        <Link to="/shop" className="nav-inner-link">
          <li>Shop</li>
        </Link>
        
      </ul>
    </nav>
  );
}

export default Nav;