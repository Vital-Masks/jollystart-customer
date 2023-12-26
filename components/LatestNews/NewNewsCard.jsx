import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import React from "react";

const NewNewsCard = ({ SingleNew }) => {
  const { title, coverImage, description, gallery } = SingleNew;
  console.log(SingleNew, "sig;e");
  return (
    <>
      <div className="bg-slate-100">
        <div className="text-left">
          <h1 className="p-2 text-2xl font-bold text-slate-800">{title}</h1>

          <div className="flex justify-center p-2 mt-4">
            <Image
              src={`data:image/png;base64,${coverImage}`}
              width={720}
              height={720}
              className="w-full h-[400px] object-cover"
              alt="gg"
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <div className="flex items-center text-red justify-start gap-5 overflow-auto lg:grid-cols-3 xl:grid-cols-4 md:grid md:grid-cols-2 lg:justify-center p-5">
            {gallery &&
              gallery.length > 0 &&
              gallery.map((item, index) => (
                <div key={index}>
                  <Image
                    src={`data:image/png;base64,${item}`}
                    width={400}
                    height={400}
                    className="w-full h-[400px] object-cover"
                    alt="gg"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewNewsCard;
