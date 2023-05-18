import React from 'react';
import Header from './Header';
import { Inter } from 'next/font/google';
import Footer from '../Footer';
const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }) => {
  return (
    <div className={`${inter.className}`}>
      <Header />
      <main
      // className="min-h-[calc(100vh-11rem)]"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
