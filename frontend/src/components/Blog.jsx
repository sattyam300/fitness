import React from 'react';

const Blog = () => {
  const containerStyle = {
    padding: '20px',
    margin: '20px auto',
    maxWidth: '800px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '28px',
    color: '#333',
    marginBottom: '15px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Blog</h2>
      <p style={paragraphStyle}>Read our latest articles and updates.</p>
    </div>
  );
};

export default Blog;
