// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container flex justify-between items-center">
        <h1>Ayoba CRM</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/profile">Customer Profiles</Link>
          <Link href="/pipeline">Sales Pipeline</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
