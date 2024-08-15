import React, { useState } from 'react';
import axios from 'axios';
import Register from './Register';
import './Login.css'; // You can add styles for the login component here

const Login = ({ onSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:8000/api/auth/login/', {
                email,
                password,
            });

            // Assuming the backend returns a token or user data on successful login
            const { data } = response;

            // Save token to localStorage or handle authentication as needed
            localStorage.setItem('authToken', data.token);

            // Call the onSuccess prop to handle successful login
            if (onSuccess) onSuccess();

        } catch (error) {
            setError('Invalid email or password');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="login-container">
            {showRegister ? (
                <Register onRegister={() => setShowRegister(false)} />
            ) : (
                <div>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                    <button onClick={() => setShowRegister(true)}>Register</button>
                </div>
            )}
        </div>
    );
};

export default Login;
