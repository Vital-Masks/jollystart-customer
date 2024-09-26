import ListViewer from "@/components/ListViewer";
import Container from "@/components/Shared/Container";
import UserCard from "@/components/UserCard";
import React from "react";
import img2 from "../../public/assets2/banner/mani.jpg";

const PastPresidents = () => {
  const members = [
    {
      id: 1,
      title: "Past Presidents",
      members: [
        { id: 0, name: "member" },
        { id: 1, name: "member" },
        { id: 2, name: "member" },
        { id: 3, name: "member" },
        { id: 4, name: "member" },
        { id: 5, name: "member" },
      ],
    },
  ];

  return (
    <div className="bg-white">
      <Container>
        <h1 className="text-2xl font-bold text-slate-800 p-5">Captains</h1>
        <div className="flex items-center justify-center gap-5 overflow-auto lg:grid-cols-3 xl:grid-cols-6 md:grid md:grid-cols-2 lg:justify-center p-5">
          {[1].map((img) => (
            <UserCard
              key={img}
              picture={img2}
              name={"Mr. V. Manivannan"}
              occupation={"Captain (2023/24)"}
            />
          ))}
        </div>
        <br /> <br />
        <h1 className="text-2xl font-bold text-slate-800 p-5">
          {" "}
          Past Captains
        </h1>
        <div className="flex items-center justify-center gap-5 overflow-auto lg:grid-cols-3 xl:grid-cols-6 md:grid md:grid-cols-2 lg:justify-center p-5">
          {[1].map((img) => (
            <UserCard
              key={img}
              picture={img2}
              name={"Mr. V. Manivannan"}
              occupation={"Captain (2022/23)"}
            />
          ))}
        </div>
        {/* <ListViewer data={members} /> */}
      </Container>
    </div>
  );
};

export default PastPresidents;
