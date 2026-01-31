import React from 'react';
import Header from './Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div className="font-inter">
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
