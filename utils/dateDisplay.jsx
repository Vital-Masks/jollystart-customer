import React from 'react';

const DateDisplay = ({ dateString }) => {
  // Parse the input date string
  const date = new Date(dateString);

  // Format the date as a string
  const formattedDate = date.toLocaleDateString();

  return <div>{formattedDate}</div>;
};

export default DateDisplay;
