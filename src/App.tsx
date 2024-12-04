import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ComponentsPage from './pages/ComponentsPage';
import ButtonPage from './pages/ButtonPage';
import DocsPage from './pages/DocsPage';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <ErrorBoundary>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/components" element={<ComponentsPage />} />
              <Route path="/components/button" element={<ButtonPage />} />
              <Route path="/docs" element={<DocsPage />} />
            </Routes>
          </main>
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;

