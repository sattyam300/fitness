import React from 'react';

const About = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px',
  };

  const headingStyle = {
    color: '#333',
    fontSize: '24px',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    color: '#666',
    fontSize: '16px',
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>About Us</h2>
      <p style={paragraphStyle}>Learn more about our gym and our mission.</p>
    </div>
  );
};

export default About;
