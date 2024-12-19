import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import Link from "next/link";
import Image from "next/image";
import { stringify } from "postcss";
import NewNewsCard from "./NewNewsCard";
import { useRouter } from "next/router";
import TruncatedParagraph from "../utils/truncatedParagraph";
import DateDisplay from "@/utils/dateDisplay";

const LatestNewsOne = () => {
  const router = useRouter();
  const { id } = router.query;
  const [AllNewsData, setAllNewsData] = useState([]);
  const [SingleNew, setSingleNew] = useState({});
  const [Loading, setLoading] = useState(true);
  const [Loading2, setLoading2] = useState(true);
  const fetchUserData = () => {
    try {
      fetch(`https://api.jollystarssc.com/api/newsManagement/getAllNews`)
        .then((fetchResponse) => {
          // Check if the fetch request was successful
          if (fetchResponse.ok) {
            // Process the response here, e.g., parse the JSON response
            return fetchResponse.json();
          } else {
            // Handle fetch error
            throw new Error("Fetch request failed");
          }
        })
        .then((userDataFromFetch) => {
          setAllNewsData(userDataFromFetch.result);
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
  const fetchUserSingleData = () => {
    try {
      fetch(`https://api.jollystarssc.com/api/newsManagement/${id}`)
        .then((fetchResponse) => {
          // Check if the fetch request was successful
          if (fetchResponse.ok) {
            // Process the response here, e.g., parse the JSON response
            return fetchResponse.json();
          } else {
            // Handle fetch error
            throw new Error("Fetch request failed");
          }
        })
        .then((userDataFromFetch) => {
          setSingleNew(userDataFromFetch.result);
          console.log(userDataFromFetch.result, "result");
          setLoading2(false);
        })
        .catch((error) => {
          // Handle fetch error or redirect to login page
          console.error("Fetch error:", error);
          setLoading2(false);
          // redirectToLoginPage();
        });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  useEffect(() => {
    fetchUserData();
    if (id) {
      console.log(id, "iddddd");
      fetchUserSingleData();
    }
  }, [id]);
  useEffect(() => {
    fetchUserData();
  }, [id]);
  return (
    <div className="bg-slate-100">
      <Container>
        <div className="text-black">
          {Loading && Loading2 ? (
            <>
              <div className="loaderBody">
                <div className="loader"></div>
              </div>
            </>
          ) : (
            <>
              {<NewNewsCard SingleNew={SingleNew} />}
              <div className="flex items-center text-red justify-center gap-5 overflow-auto flex-wrap lg:grid-cols-3 xl:grid-cols-4 md:grid md:grid-cols-2 md:justify-center   p-5">
                {AllNewsData &&
                  AllNewsData.map((item, index) => (
                    <div key={index}>
                      <LatestNewsCard data={item} />
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
        {/* <div className="flex items-center text-red justify-start gap-5 overflow-auto lg:grid-cols-3 xl:grid-cols-4 md:grid md:grid-cols-2 lg:justify-center p-5">
          {Loading
            ? "Loading ..."
            : AllNewsData &&
              AllNewsData.map((item, index) => (
                <div key={index}>
                  <LatestNewsCard data={item} />
                </div>
              ))}
        </div> */}

        {/* <div className="text-center">
          <Link href={'/latest-news'} className="content-center px-4 py-2 mt-10 text-white bg-blue-900 rounded-md">
            View More
          </Link>
        </div> */}
      </Container>
    </div>
  );
};

export default LatestNewsOne;

const LatestNewsCard = ({ data }) => {
  console.log(data);
  const { title, description, coverImage, _id, updated_at } = data;
  //  '/assets/banner/gallery3.jpg'
  console.log(data.data, "props");
  return (
  <div className="w-full max-w-xs border-2 rounded-lg shrink-0 latestnewcard">
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
        <div className="mb-5 text-sm text-slate-400">
          {" "}
          <DateDisplay dateString={updated_at} />
        </div>
        <h1 className="mb-5 text-xl font-bold">{title}</h1>
        <div className="mb-5 text-sm">
          {/* <div style={{
           whiteSpace: 'nowrap',
           width: '400px',
           overflow: 'hidden',
           textOverflow: 'ellipsis',
        }} dangerouslySetInnerHTML={{ __html: description }} /> */}

          {/* TruncatedParagraph */}
          {/* <TruncatedParagraph text={description} maxLength={40} /> */}
          {/* <p>{description}</p> */}
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
