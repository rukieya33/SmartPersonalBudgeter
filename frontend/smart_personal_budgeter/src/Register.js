import { useNavigate } from 'react-router-dom';
import {useState} from "react";
const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleRegister = (e) => {
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
        <h1>Hello Register :)</h1>
    )
}
export default Register;