import React, { useEffect, useState } from 'react';

const Plans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('/api/plans')
      .then(response => response.json())
      .then(data => setPlans(data))
      .catch(error => console.error('Error fetching plans:', error));
  }, []);

  const containerStyle = {
    padding: '20px',
    margin: '20px auto',
    maxWidth: '800px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '28px',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
  };

  const listItemStyle = {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  };

  const planTitleStyle = {
    fontSize: '20px',
    color: '#007BFF',
    marginBottom: '10px',
  };

  const textStyle = {
    fontSize: '16px',
    color: '#555',
    margin: '5px 0',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Plans</h2>
      <ul style={listStyle}>
        {plans.map(plan => (
          <li key={plan._id} style={listItemStyle}>
            <h3 style={planTitleStyle}>{plan.name}</h3>
            <p style={textStyle}>{plan.description}</p>
            <p style={textStyle}>Price: ${plan.price}</p>
            <p style={textStyle}>Duration: {plan.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Plans;
