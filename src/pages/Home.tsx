import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Our Custom UI Library</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Discover a collection of beautiful, accessible, and customizable React components
        built with TypeScript and Tailwind CSS.
      </p>
      <div className="flex space-x-4">
        <Button asChild>
          <Link to="/components">Explore Components</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/docs">Read Documentation</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;

