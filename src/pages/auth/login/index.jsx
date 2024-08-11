import React, { useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [setErrorMessage] = useState('');

    const handleAuth = useCallback(async (authMethod) => {
        setIsSigningIn(true);
        try {
            await authMethod();
            navigate('/services'); 
        } catch (err) {
            setIsSigningIn(false);
            setErrorMessage(err.message);
        }
    }, [navigate]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            handleAuth(() => doSignInWithEmailAndPassword(email, password));
        }
    };

    const onGoogleSignIn = (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            handleAuth(doSignInWithGoogle);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 via-orange-60 to-indigo-700">
            <main className="w-full h-screen flex justify-center items-center">
                <motion.div
                    className="w-96 p-6 space-y-5 shadow-xl border rounded-xl bg-zinc-200"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    
                    <form onSubmit={onSubmit} className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded-lg"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded-lg"
                            required
                        />
                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className={`w-full p-2.5 border rounded-lg text-sm font-medium ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-gray-100 transition duration-300 active:bg-gray-100'}`}
                        >
                            {isSigningIn ? 'Logging In...' : 'Login'}
                        </button>
                    </form>
                    
                    <Link 
                        to="/register" 
                        className="w-full flex items-center justify-center py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-100 transition duration-300 active:bg-gray-100"
                    >
                        Don't have an account? Register
                    </Link>
                    
                    <motion.button
                        disabled={isSigningIn}
                        onClick={onGoogleSignIn}
                        className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-gray-100 transition duration-300 active:bg-gray-100'}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaGoogle className="h-5 w-5 mr-2" />
                        {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                    </motion.button>
                </motion.div>
            </main>
        </div>
    );
};

export default Login;
