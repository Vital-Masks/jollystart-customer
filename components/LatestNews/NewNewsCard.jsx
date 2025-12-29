import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import Container from "@/components/Shared/Container";
import DateDisplay from "@/utils/dateDisplay";
import Image from "next/image";
import React from "react";

const NewNewsCard = ({ SingleNew }) => {
  const { title, coverImage, description, gallery, updated_at } = SingleNew;
  console.log(SingleNew, "sig;e");
  return (
    <>
      <div className="bg-slate-100 pb-12 px-6">
        <div className="text-left">
          {/* <h1 className="mb-5 text-xl font-bold title-truncated">{title}</h1> */}

          <h1 className="p-2 text-2xl font-bold text-slate-800">{title}</h1>
          <div className="m-3 mt-1" >
            <DateDisplay dateString={updated_at} />

          </div>
          <div className="flex relative w-full aspect-[5/2] h-auto justify-center p-2 mt-4">
            <Image
              src={`data:image/png;base64,${coverImage}`}
              fill
              className="w-full h-[400px] object-cover rounded-lg"
              alt="gg"
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <div className="grid grid-cols-1 my-8 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery &&
              gallery.length > 0 &&
              gallery.map((item, index) => (
                <div key={index} className="w-full h-auto aspect-[3/2] relative">
                  <Image
                    src={`data:image/png;base64,${item}`}
                    fill
                    className="object-cover rounded-lg"
                    alt={`Gallery image ${index + 1}`}
                    // fill
                    // style={{
                    //   width:"360px",
                    //   height:"250px"
                    // }}
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
