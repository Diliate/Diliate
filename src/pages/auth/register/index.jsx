import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await doCreateUserWithEmailAndPassword(email, password);
            navigate('/');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    // Function to handle login redirection
    const handleLoginRedirect = () => {
        navigate('/login'); // Redirect to login page
    };

    return (
        <>
             <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-4">Register</h1>
                <form onSubmit={onSubmit} className="space-y-4">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Sign Up</button>
                    {errorMessage && (
                        <button onClick={handleLoginRedirect} className="w-full p-2 bg-gray-200 text-blue-500 rounded-md hover:bg-gray-300">Already have an account? Log in</button>
                    )}
                </form>
            </div>
        </div>
        </>
    );
};

export default Register;
