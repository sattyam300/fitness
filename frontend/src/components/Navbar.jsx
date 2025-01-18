// filepath: /d:/CLASS PROJECT/frontend/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#333',
    padding: '10px',
  };

  const ulStyle = {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: '0',
    padding: '0',
  };

  const liStyle = {
    margin: '0 10px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/home" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/profile" style={linkStyle}>
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
