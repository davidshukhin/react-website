import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and hamburger menu */}
          <div className="flex items-center">
            <button className="p-2 rounded-md hover:bg-gray-100 lg:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <div className="flex items-center cursor-pointer">
              <div className="h-8 w-8 bg-[#FF8E4F] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full" />
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900">headspace</span>
            </div>
          </div>

          {/* Right side - Navigation links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Plans
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              For business
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Help
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Log in
            </a>
            <button className="bg-[#3366FF] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
              Try for free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button className="bg-[#3366FF] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;