import {useState} from "react";

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();

            if (response.ok) {
                // Save JWT to local storage for future authenticated requests
                localStorage.setItem('token', data.token);
                localStorage.setItem('patientData', JSON.stringify(data.patient));
                alert('Login Successful!');
                // Redirect logic goes here (e.g., window.location.href = '/dashboard')
            } else {
                setError(data.message || 'Login failed.');
            }
        } catch (error) {
            setError('Network error.');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
            <h2>Sign In</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email" name="email" placeholder="Email" required
                    onChange={handleChange} style={inputStyle}
                />
                <input
                    type="password" name="password" placeholder="Password" required
                    onChange={handleChange} style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Login</button>
            </form>
        </div>
    );
}
const inputStyle = { display: 'block', width: '100%', margin: '10px 0', padding: '10px' };
const buttonStyle = { width: '100%', padding: '10px', background: '#28A745', color: 'white', border: 'none' };
export default Login;