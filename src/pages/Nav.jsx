import React from 'react';
import { ArrowLeft, LayoutDashboard } from 'lucide-react';

const Nav = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 h-16">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </button>

          {/* Dashboard Link */}
          <a
            href="/"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;