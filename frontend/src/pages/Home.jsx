import React from 'react';
import About from '../components/About';
import Blog from '../components/Blog';
import Plans from '../components/Plans';

const Home = () => {
  const containerStyle = {
    padding: '20px',
    margin: '20px auto',
    maxWidth: '1200px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '32px',
    color: '#333',
    marginBottom: '20px',
  };

  const sectionStyle = {
    margin: '20px 0',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Home</h1>
      <div style={sectionStyle}>
        <Plans />
      </div>
      <div style={sectionStyle}>
        <Blog />
      </div>
      <div style={sectionStyle}>
        <About />
      </div>
    </div>
  );
};

export default Home;
