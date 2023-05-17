import React from 'react';
import Header from './Header';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }) => {
  return (
    <div className={`${inter.className}`}>
      <Header />
      <main className="h-[calc(100vh-11rem)]">{children}</main>
    </div>
  );
};

export default Layout;
