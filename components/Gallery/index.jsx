import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import Image from "next/image";
import GallaryCard from "../Cards/gallary";
import Link from "next/link";
const sampleGallayData = [
  {
    image:
      "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    title: "Test Title",
    description:
      "The membership of the club is open to all persons who are approved by the Executive Committee.",
    href: "https://www.facebook.com/KoddaimunaiSV/posts/pfbid02m5B4dfzdSPRh9G5kzdGpeYwV7GXMbBMaYXLWX5D9eQ9C2hZdioJnupgKirVjj3y1l?notif_id=1695025695375898&notif_t=feedback_reaction_generic&ref=notif",
  },
  {
    image:
      "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    title: "Test Title",
    description:
      "The membership of the club is open to all persons who are approved by the Executive Committee.",
    href: "https://www.facebook.com/KoddaimunaiSV/posts/pfbid02m5B4dfzdSPRh9G5kzdGpeYwV7GXMbBMaYXLWX5D9eQ9C2hZdioJnupgKirVjj3y1l?notif_id=1695025695375898&notif_t=feedback_reaction_generic&ref=notif",
  },
  {
    image:
      "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    title: "Test Title",
    description:
      "The membership of the club is open to all persons who are approved by the Executive Committee.",
    href: "https://www.facebook.com/KoddaimunaiSV/posts/pfbid02m5B4dfzdSPRh9G5kzdGpeYwV7GXMbBMaYXLWX5D9eQ9C2hZdioJnupgKirVjj3y1l?notif_id=1695025695375898&notif_t=feedback_reaction_generic&ref=notif",
  },
  {
    image:
      "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    title: "Test Title",
    description:
      "The membership of the club is open to all persons who are approved by the Executive Committee.",
    href: "https://www.facebook.com/KoddaimunaiSV/posts/pfbid02m5B4dfzdSPRh9G5kzdGpeYwV7GXMbBMaYXLWX5D9eQ9C2hZdioJnupgKirVjj3y1l?notif_id=1695025695375898&notif_t=feedback_reaction_generic&ref=notif",
  },
  {
    image:
      "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    title: "Test Title",
    description:
      "The membership of the club is open to all persons who are approved by the Executive Committee.",
    href: "https://www.facebook.com/KoddaimunaiSV/posts/pfbid02m5B4dfzdSPRh9G5kzdGpeYwV7GXMbBMaYXLWX5D9eQ9C2hZdioJnupgKirVjj3y1l?notif_id=1695025695375898&notif_t=feedback_reaction_generic&ref=notif",
  },
  {
    image:
      "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    title: "Test Title",
    description:
      "The membership of the club is open to all persons who are approved by the Executive Committee.",
    href: "https://www.facebook.com/KoddaimunaiSV/posts/pfbid02m5B4dfzdSPRh9G5kzdGpeYwV7GXMbBMaYXLWX5D9eQ9C2hZdioJnupgKirVjj3y1l?notif_id=1695025695375898&notif_t=feedback_reaction_generic&ref=notif",
  },
  {
    image:
      "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    title: "Test Title",
    description:
      "The membership of the club is open to all persons who are approved by the Executive Committee.",
    href: "https://www.facebook.com/KoddaimunaiSV/posts/pfbid02m5B4dfzdSPRh9G5kzdGpeYwV7GXMbBMaYXLWX5D9eQ9C2hZdioJnupgKirVjj3y1l?notif_id=1695025695375898&notif_t=feedback_reaction_generic&ref=notif",
  },
  {
    image:
      "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    title: "Test Title",
    description:
      "The membership of the club is open to all persons who are approved by the Executive Committee.",
    href: "https://www.facebook.com/KoddaimunaiSV/posts/pfbid02m5B4dfzdSPRh9G5kzdGpeYwV7GXMbBMaYXLWX5D9eQ9C2hZdioJnupgKirVjj3y1l?notif_id=1695025695375898&notif_t=feedback_reaction_generic&ref=notif",
  },
  {
    image:
      "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    title: "Test Title",
    description:
      "The membership of the club is open to all persons who are approved by the Executive Committee.",
    href: "https://www.facebook.com/KoddaimunaiSV/posts/pfbid02m5B4dfzdSPRh9G5kzdGpeYwV7GXMbBMaYXLWX5D9eQ9C2hZdioJnupgKirVjj3y1l?notif_id=1695025695375898&notif_t=feedback_reaction_generic&ref=notif",
  },
  {
    image:
      "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    title: "Test Title",
    description:
      "The membership of the club is open to all persons who are approved by the Executive Committee.",
    href: "https://www.facebook.com/KoddaimunaiSV/posts/pfbid02m5B4dfzdSPRh9G5kzdGpeYwV7GXMbBMaYXLWX5D9eQ9C2hZdioJnupgKirVjj3y1l?notif_id=1695025695375898&notif_t=feedback_reaction_generic&ref=notif",
  },
];
const Gallery = () => {
  const [GallaryData, setGallaryData] = useState([]);
  const [Loading, setLoading] = useState(false);

  const fetchUserData = () => {
    setLoading(true);
    try {
      // Parse the userData JSON string
      // Check if userData has the _id property
      // Make a fetch request using the _id
      fetch(`http://localhost:3000/api/galleryManagement/getAllGallery`)
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
          // Do something with the userDataFromFetch
          console.log(userDataFromFetch.result);
          setGallaryData(userDataFromFetch.result);
        })
        .catch((error) => {
          // Handle fetch error or redirect to login page
          console.error("Fetch error:", error);
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
    <div className="bg-slate-200">
      {!Loading ? (
        <Container>
          <div className="mb-10 text-center responsive">
            <h1 className="text-2xl font-bold text-slate-800">Gallery</h1>
            <p className="mt-3 text-slate-600 p-5">
              The membership of the club is open to all persons who are approved
              by the Executive Committee. Each applicant for admission as a
              member of the club shall apply in the prescribed.
            </p>
          </div>
          <div className="flex items-center justify-start gap-5 overflow-auto lg:grid-cols-3 xl:grid-cols-4 md:grid md:grid-cols-2 lg:justify-center p-5">
            {GallaryData &&
              GallaryData.length > 0 &&
              GallaryData.map((item, index) => (
                <div key={index}>
                  <GallaryCard data={item} />
                </div>
              ))}
          </div>
        </Container>
      ) : (
        <div className="loaderBody">
          <div className="loader"></div>
        </div>
      )}
       <div className="text-center">
          <Link href={'/gallery'} className="content-center px-4 py-2 mt-10 text-white bg-blue-900 rounded-md">
            View More
          </Link>
        </div>
        <br/>
        <br/>
    </div>
    
  );
};

export default Gallery;
