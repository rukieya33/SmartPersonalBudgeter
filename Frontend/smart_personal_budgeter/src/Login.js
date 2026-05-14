import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const fakeAuthResponse = {
            token: 'fake-jwt-token',
            role: 'user',
        };
        localStorage.setItem('token', fakeAuthResponse.token);
        localStorage.setItem('role', fakeAuthResponse.role);
        navigate('/dashboard');
    };
    return (
      <h1>Hello Login :)</h1>
    )
}
export default Login;