import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="TICKET'D Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">TICKET'D</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
            <li><Link to="/feed" className="hover:text-blue-200">Feed</Link></li>
            <li><Link to="/trade" className="hover:text-blue-200">Trade</Link></li>
            <li><Link to="/login" className="hover:text-blue-200">Login</Link></li>
            <li><Link to="/signup" className="hover:text-blue-200">Sign Up</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
