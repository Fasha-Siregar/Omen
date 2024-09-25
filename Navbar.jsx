import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../public/Omen.png';

const Navbar = () => {
    return (
        <div className="relative w-full z-50">
            <nav className="relative w-full py-4 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <img src={Logo} alt="Omen Logo" className="h-12 w-auto" />
                        <ul className="flex space-x-8 text-black text-lg font-semibold tracking-wide">
                            <li>
                                <Link 
                                    to="/" 
                                    className="text-black transition duration-300 ease-in-out transform hover:scale-110 hover:text-gray-700"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/pc" 
                                    className="text-black transition duration-300 ease-in-out transform hover:scale-110 hover:text-gray-700"
                                >
                                    PC
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/laptop" 
                                    className="text-black transition duration-300 ease-in-out transform hover:scale-110 hover:text-gray-700"
                                >
                                    Laptop
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/accessories" 
                                    className="text-black transition duration-300 ease-in-out transform hover:scale-110 hover:text-gray-700"
                                >
                                    Accessories
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link 
                        to="/login" 
                        className="text-black text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-110 hover:text-gray-700"
                    >
                        Login
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
