import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import Image from "next/image";
import GallaryCard from "../Cards/gallary";
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
  const fetchData = () => {

  };
  useEffect(() => {
      setGallaryData(sampleGallayData);
  }, []);

  return (
    <div className="bg-slate-200">
      <Container>
        <div className="mb-10 text-center responsive">
          <h1 className="text-2xl font-bold text-slate-800">Gallery</h1>
          <p className="mt-3 text-slate-600 p-5">
            The membership of the club is open to all persons who are approved
            by the Executive Committee. Each applicant for admission as a member
            of the club shall apply in the prescribed.
          </p>
        </div>
        <div className="flex items-center justify-start gap-5 overflow-auto lg:grid-cols-3 xl:grid-cols-4 md:grid md:grid-cols-2 lg:justify-center p-5">
          {GallaryData &&
            GallaryData.map((item, index) => (
              <div key={index}>
                <GallaryCard
                  title={`${item.title + " " + index}`}
                  image={item.image}
                  description={item.description}
                  href={item.href}
                />
              </div>
            ))}
        </div>

        {/* {images.map((img) => (
            <div key={img.id} className="w-full shrink-0">
              <Image
                src={img.image}
                width={720}
                height={720}
                className="w-full h-full aspect-square"
                alt="gg"
              />
            </div>
          ))} */}
      </Container>
    </div>
  );
};

export default Gallery;
