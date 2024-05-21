import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
                navigate('/services'); // Replace '/service' with the actual path to your service page
            } catch (err) {
                setIsSigningIn(false);
                setErrorMessage(err.message);
            }
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithGoogle();
                navigate('/services'); // Replace '/service' with the actual path to your service page
            } catch (err) {
                setIsSigningIn(false);
                setErrorMessage(err.message);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r bg-purple-700 bg-orange-60 bg-indigo-700 bg-fuchsia-700">
            <main className="w-full h-screen flex self-center place-content-center place-items-center">
                <motion.div
                    className="w-96 text-black-600 space-y-5 p-4 shadow-xl border rounded-xl bg-zinc-200"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Login</h1>
                    </div>
                    {/* Manual Login Form */}
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
                  
                  
                    <Link to="/register" className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-100 transition duration-300 active:bg-gray-100">
                        Don't have an account? Register
                    </Link>
                  
                    {/* Google Sign-In Button */}

                    <motion.button
                        disabled={isSigningIn}
                        onClick={onGoogleSignIn}
                        className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-gray-100 transition duration-300 active:bg-gray-100'}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isSigningIn ? 'Signing In...' : (
                            <>
                                <FaGoogle className="h-5 w-5 mr-2" /> {/* Use the Google icon from React Icons */}
                                Continue with Google
                            </>
                        )}
                    </motion.button>
                    {/* Register Button */}
                   
                </motion.div>
            </main>
        </div>
    );
};

export default Login;
