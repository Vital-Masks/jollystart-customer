import React from 'react';

const Container = ({ className, children }) => {
  return <div className={`py-12 responsive ${className}`}>{children}</div>;
};

export default Container;
