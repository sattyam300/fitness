import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#555',
    marginBottom: '30px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '15px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to the Gym</h1>
      <p style={paragraphStyle}>Your fitness journey starts here.</p>
      <div style={buttonContainerStyle}>
        <Link
          to="/login"
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Login
        </Link>
        <Link
          to="/register"
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Landing;
