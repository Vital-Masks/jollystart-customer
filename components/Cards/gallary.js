import Link from 'next/link';
import React from 'react';
// Make sure to import your CSS file

const GallaryCard = (props) => {
  
  const {title,image,description,href} =props;
  return (
    <div className="wrapper">
      <div className="card">
        <img src={image} alt="Mountain" />
        <div className="info">
          <h1>{title}</h1>
          <p>{description}</p>
          <button  >
            <Link href={href} target='blank' >VIEW IMAGE</Link>
          </button>
        </div>
      </div>
      {/* Repeat the above structure for other cards */}
    </div>
  );
};

export default GallaryCard;
