import Link from "next/link";
import React from "react";
// Make sure to import your CSS file

const GallaryCard = (props) => {
  //   {
  //     "_id": "6579e10a92fb4e23d42d0c36",
  //     "albumName": "Financial report",
  //     "description": "xcvxcvxcvxc",
  //     "coverImage": "",
  //     "albumLink": "url",
  //     "isDeleted": false,
  //     "created_at": "2023-12-13T16:51:22.354Z",
  //     "updated_at": "2023-12-13T16:51:22.354Z",
  //     "__v": 0
  // },
  const { albumName, coverImage, description, albumLink } = props.data;
  return (
    <>
      <div className="wrapper">
        <div className="card">
          <img src={`data:image/png;base64,${coverImage}`} alt="Mountain" />
          <div className="info">
            <h1>{albumName}</h1>
            <p className="mb-2 line-clamp-2 text-sm font-light text-gray-200">{description}</p>
            <Link href={`${albumLink}`}>
              <button>VIEW IMAGE</button>
            </Link>
          </div>
        </div>
        {/* Repeat the above structure for other cards */}
      </div>
    </>
  );
};

export default GallaryCard;
