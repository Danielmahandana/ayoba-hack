// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <p>© {new Date().getFullYear()} Ayoba CRM. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
