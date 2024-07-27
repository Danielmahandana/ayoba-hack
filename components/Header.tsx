// components/Header.tsx

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Ayoba CRM
        </Link>
        <nav>
          <Link href="/customers" className="mr-4 hover:text-blue-200">
            Customers
          </Link>
          <Link href="/pipeline" className="mr-4 hover:text-blue-200">
            Pipeline
          </Link>
          <Link href="/messaging" className="mr-4 hover:text-blue-200">
            Messaging
          </Link>
          <Link href="/analytics" className="hover:text-blue-200">
            Analytics
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;