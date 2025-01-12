import React from 'react';
import { Menu, ShoppingBag, Home, Phone, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-purple-500" />
            <span className="text-white font-bold text-xl">FutureStore</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-purple-500 flex items-center space-x-1">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-purple-500 flex items-center space-x-1">
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-purple-500 flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>

          <div className="md:hidden">
            <Menu className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}