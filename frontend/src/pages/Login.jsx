import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      navigate('/home');
    } else {
      setError(data.message || 'Login failed');
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    padding: '20px',
  };

  const formStyle = {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const errorStyle = {
    color: 'red',
    marginTop: '10px',
  };

  const linkStyle = {
    marginTop: '15px',
    fontSize: '14px',
    color: '#007bff',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </label>
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
      {error && <p style={errorStyle}>{error}</p>}
      <p>
        Don't have an account?{' '}
        <Link to="/register" style={linkStyle}>
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
