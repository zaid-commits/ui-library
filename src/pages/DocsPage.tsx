import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const DocsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Documentation</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="mb-4">
          To use our UI library in your project, follow these steps:
        </p>
        <ol className="list-decimal list-inside">
          <li className="mb-2">Install the package using npm or yarn</li>
          <li className="mb-2">Import the desired components in your React files</li>
          <li className="mb-2">Use the components in your JSX</li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Available Components</h2>
        <ul className="list-disc list-inside">
          <li>Button</li>
          {/* Add more components here as they are created */}
        </ul>
      </section>
      {/* <Card className="mb-6">
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>Learn how to install and use our UI library</CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Installation</h2>
          <p className="mb-4">
            To install our UI library, run the following command in your project directory:
          </p>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto mb-4">
            <code>npm install @custom-ui/react</code>
          </pre>
          <h2 className="text-2xl font-semibold mb-2">Usage</h2>
          <p>
            Import the components you need and start using them in your React application. 
            For detailed usage instructions, refer to the individual component documentation.
          </p>
        </CardContent>
      </Card> */}
      <Card>
        <CardHeader>
          <CardTitle>Theming</CardTitle>
          <CardDescription>Customize the look and feel of your application</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Our UI library supports custom theming. You can modify the default theme or create your own 
            to match your brand's visual identity. Refer to the theming documentation for more details.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocsPage;

