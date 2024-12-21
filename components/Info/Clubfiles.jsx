import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import Link from "next/link";
import DateDisplay from "@/utils/dateDisplay";

const Clubfile = ({ memberData }) => {
  //
  const [MemberFileData, setMemberFileData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const fetchUserData = () => {
    try {
      fetch(`https://api.jollystarssc.com/api/fileManagement/getAllFiles`)
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
          setMemberFileData(userDataFromFetch.result);
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
    <div className="">
      <Container>
        <div className="mb-5 text-center">
          <h1 className="text-2xl font-bold text-slate-800">Club Files</h1>
        </div>
        {Loading ? (
          <div className="loaderBody">
            <div className="loader"></div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-start gap-5 overflow-auto lg:justify-center p-5">

              {
                memberData && memberData.memberApprovalStatus === "APPROVED" ?
                  MemberFileData &&
                  MemberFileData.map((item, i) => (
                    <ClubfileCard key={i} filedata={item} />
                  )) : (
                    <div style={{
                      display:"flex",
                      justifyContent:'center',
                      margin:"0 auto"
                    }}>
                      
                        Can not view without approved
                    </div>
                  )
              }
            </div>
          </div>
        )}

        {/* <ClubfileCard />
          <ClubfileCard />
          <ClubfileCard /> */}

        {/* <div className="text-center">
          <button className="content-center px-4 py-2 mt-10 text-white bg-blue-900 rounded-md">
            View More
          </button>
        </div> */}
      </Container>
    </div>
  );
};

export default Clubfile;

const ClubfileCard = ({ filedata }) => {
  const { _id, title, description, file, created_at } = filedata;
  //   {
  //     "_id": "6553d4cfc1205cd2ae847eec",
  //     "title": "jghjgh",
  //     "description": "jghjghjghjh",
  //     "file": "1699992783402-10298117.pdf",
  //     "isDeleted": false,
  //     "created_at": "2023-11-14T20:13:03.427Z",
  //     "updated_at": "2023-11-14T20:13:03.427Z",
  //     "__v": 0
  // },
  const openFileInChrome = () => {
    if (file) {
      const fileUrl = "https://api.jollystarssc.com/files/" + file;
      window.open(fileUrl, "_blank");
    }
  };

  return (
    <div className="w-full max-w-xs border-2 rounded-lg shrink-0">
      <div className="flex items-center justify-center h-40 rounded-t-lg bg-slate-400">
        <h1 className="mb-5 text-xl font-bold">{title}</h1>
      </div>
      <div className="p-5 text-black">
        <div className="mb-5 text-sm text-slate-400">
          <DateDisplay dateString={created_at} />
        </div>
        <div className="mb-5 text-sm">
          <p>{description}</p>
        </div>
        <div
          onClick={openFileInChrome}
          href="#"
          className="mb-5 text-sm font-bold text-blue-900"
        >
          View File
        </div>
      </div>
    </div>
  );
};
