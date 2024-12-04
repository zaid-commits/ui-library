import React from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from './ModeToggle';

const Navbar: React.FC = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          UI Library
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/components" className="hover:underline">
            Components
          </Link>
          <Link to="/docs" className="hover:underline">
            Docs
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

