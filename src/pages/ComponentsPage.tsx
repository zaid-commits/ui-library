import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const components = [
  {
    name: "Button",
    description: "Clickable button component with various styles and sizes.",
    href: "/components/button",
  },
  // Add more components here as you create them
];

const ComponentsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">UI Components</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <div key={component.name} className="border rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-2">{component.name}</h2>
            <p className="mb-4">{component.description}</p>
            <Button asChild>
              <Link to={component.href}>View Component</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentsPage;

