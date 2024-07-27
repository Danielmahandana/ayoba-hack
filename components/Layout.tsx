// components/Layout.tsx

import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-6">
          <h1 className="text-2xl font-bold">Ayoba CRM</h1>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-blue-600 text-white py-4 mt-auto">
        <div className="container mx-auto px-6 text-center">
          &copy; 2024 Ayoba CRM. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
