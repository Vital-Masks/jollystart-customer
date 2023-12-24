import React from 'react';

const TruncatedParagraph = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return <p>{text}</p>;
  } else {
    const truncatedText = text.substring(0, maxLength) + '...';
    return <p>{truncatedText}</p>;
  }
};

export default TruncatedParagraph;
