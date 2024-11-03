import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md hover:bg-gray-100 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=42&h=42&q=80"
                alt="Headspace"
                className="h-8 w-8 rounded-full"
              />
              <span className="ml-2 text-xl font-semibold">headspace</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Plans</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">For business</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Help</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Log in</a>
            <button className="bg-[#3366FF] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;