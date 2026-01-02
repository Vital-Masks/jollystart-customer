import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import Link from "next/link";
import Image from "next/image";
import { stringify } from "postcss";
import TruncatedParagraph from "../utils/truncatedParagraph";
import DateDisplay from "@/utils/dateDisplay";
import { usePathname } from 'next/navigation'

const LatestNews = () => {
  const [memberData, setmemberData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const pathName = usePathname()
  const fetchUserData = () => {
    try {
      fetch(`https://api.jollystars.lk/api/newsManagement/getAllNews`)
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
          setLoading(false);
        })
        .catch((error) => {
          // Handle fetch error or redirect to login page
          console.error("Fetch error:", error);
          setLoading(false);
          // redirectToLoginPage();
        });
    } catch (error) {
      console.log(error);
    } finally {
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

        {Loading ? (
          <div className="loaderBody">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="flex items-center justify-start gap-5 overflow-auto lg:grid-cols-3 xl:grid-cols-4 md:grid md:grid-cols-2 lg:justify-center p-5">
            {memberData.length > 0 && (
              pathName === "/" ?
                memberData.slice(0, 4).map((item, index) => (
                  <div key={index}>
                    <LatestNewsCard data={item} />
                  </div>
                )) : memberData.map((item, index) => (
                  <div key={index}>
                    <LatestNewsCard data={item} />
                  </div>
                )))}
          </div>
        )}

        {memberData.length > 4 && pathName === "/" && (
          <div className="text-center">
            <Link
              href={"/latest-news"}
              className="content-center px-4 py-2 mt-10 text-white bg-blue-900 rounded-md"
            >
              View More
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};

export default LatestNews;

const LatestNewsCard = ({ data }) => {
  const { title, description, coverImage, _id, updated_at } = data;
  //  '/assets/banner/gallery3.jpg'

  return (
    <div className="w-full max-w-xs border-2 flex flex-col rounded-lg shrink-0 latestnewcard">
      <div className="flex items-center justify-center h-40 rounded-t-lg bg-slate-400">
        <Image
          src={`data:image/png;base64,${coverImage}`}
          width={720}
          height={720}
          className="object-cover w-full h-full rounded-t-lg"
          alt="news-thumbnail"
        />
      </div>
      <div className="p-5 flex-grow text-black relative">
        <div className="mb-5 text-sm text-slate-400">
          <DateDisplay dateString={updated_at} />
        </div>
        <Link href={`/latest-news/${_id}`} className="mb-5 text-sm font-bold text-blue-900">
          <h1 className="mb-5 text-xl font-bold title-truncated">
            {title}
          </h1>
        </Link>
        <div className="mb-5 text-sm">
          {/* Your other content */}
        </div>
        <Link href={`/latest-news/${_id}`} className="mb-5 absolute bottom-0 text-sm font-bold text-blue-900">
          Read More
        </Link>
      </div>
    </div>

  );
};
