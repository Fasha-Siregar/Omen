import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navbar />

            <div className="flex-grow flex items-center justify-center my-10">
                <form 
                    onSubmit={handleSubmit} 
                    className="bg-gradient-to-br from-red-700 to-black p-10 rounded-lg shadow-lg w-96" 
                >
                    <h2 className="text-white text-4xl font-bold mb-6 text-center">Login</h2> 
                    <div className="mb-6"> 
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="w-full p-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Email" 
                            required 
                        />
                    </div>
                    <div className="mb-6">
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="w-full p-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500" 
                            placeholder="Password" 
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-red-600 text-white px-6 py-3 rounded-lg w-full transition-transform duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
                    >
                        Login
                    </button>
                </form>
            </div>

            <Footer className="mt-10" />
        </div>
    );
};

export default Login;
