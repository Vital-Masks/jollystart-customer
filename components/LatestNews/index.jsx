import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import Link from "next/link";
import Image from "next/image";
import { stringify } from "postcss";

const LatestNews = () => {
  const [memberData, setmemberData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const fetchUserData = () => {
    try {
      fetch(`http://localhost:3000/api/newsManagement/getAllNews`)
        .then((fetchResponse) => {
          // Check if the fetch request was successful
          if (fetchResponse.ok) {
            // Process the response here, e.g., parse the JSON response
            console.log(fetchResponse, "==========");
            return fetchResponse.json();
          } else {
            // Handle fetch error
            throw new Error("Fetch request failed");
          }
        })
        .then((userDataFromFetch) => {
          console.log(userDataFromFetch.result);
          setmemberData(userDataFromFetch.result);
        })
        .catch((error) => {
          // Handle fetch error or redirect to login page
          console.error("Fetch error:", error);
          // redirectToLoginPage();
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className="bg-slate-100">
      <Container>
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold text-slate-800">Latest News</h1>
          <p className="mt-3 text-slate-600 p-5">
            The latest news page for the Club is a great place to stay
            up-to-date on all the latest happenings in the club. Here you will
            find news about upcoming events, tournament results, and more. We
            encourage you to check back often for the latest news and
            information.
          </p>
        </div>
        <div className="flex items-center justify-start gap-5 overflow-auto lg:grid-cols-3 xl:grid-cols-4 md:grid md:grid-cols-2 lg:justify-center p-5">
          {memberData &&
            memberData.map((item, index) => (
              <div key={index}>
                <LatestNewsCard data={item} />
              </div>
            ))}
        </div>

        <div className="text-center">
          <button className="content-center px-4 py-2 mt-10 text-white bg-blue-900 rounded-md">
            View More
          </button>
        </div>
      </Container>
    </div>
  );
};

export default LatestNews;

const LatestNewsCard = ({ data }) => {
  console.log(data);
  const { title, description, coverImage, _id, updated_at } = data;
  //  '/assets/banner/gallery3.jpg'
  console.log(data.data, "props");
  return (
    <div className="w-full max-w-xs border-2 rounded-lg shrink-0">
      <div className="flex items-center justify-center h-40 rounded-t-lg bg-slate-400">
        {/* <img
           
            alt="Mountain"
          /> */}
        <Image
          src={`data:image/png;base64,${coverImage}`}
          width={720}
          height={720}
          className="object-cover w-full h-full rounded-t-lg"
          alt="news -dumbnail"
        />
      </div>
      <div className="p-5 text-black">
        <div className="mb-5 text-sm text-slate-400"> {updated_at}</div>
        <h1 className="mb-5 text-xl font-bold">{title}</h1>
        <div className="mb-5 text-sm">
          <p>{description}</p>
        </div>
        <Link
          href={`/latest-news/${_id}`}
          target="blank"
          className="mb-5 text-sm font-bold text-blue-900"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
