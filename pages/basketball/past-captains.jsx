import ListViewer from "@/components/ListViewer";
import Container from "@/components/Shared/Container";
import UserCard from "@/components/UserCard";
import React from "react";
import img2 from "../../public/assets2/banner/mani.jpg";
import siva from "../../public/assets2/banner/siva.jpg";
import kabil from "../../public/assets2/kobi/kabil.jpg";
import manchu from "../../public/assets2/kobi/manchu.jpg";
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
        <div className=" flex items-start justify-center p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {[1].map((img) => (
              <UserCard
                key={img}
                picture={manchu}
                name={"Mr. B. Manchuthan"}
                occupation={"Captain (2023/25)"}
              />
            ))}
            <UserCard
              picture={kabil}
              name={"Mr. Kabilan"}
              occupation={"Captain (2019/20)"}
            />
            <UserCard
              picture={siva}
              name={"Mr. T.Sivathas"}
              occupation={"Captain (2006/08)"}
            />
          </div>
        </div>
        <br /> <br />
        <h1 className="text-2xl font-bold text-slate-800 p-5">
          {" "}
          Vice Captains
        </h1>
        <div className=" flex items-start justify-center p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {[1].map((img) => (
              <UserCard
                key={img}
                picture={kabil}
                name={"Mr. Kabilan"}
                occupation={"Captain (2022/23)"}
              />
            ))}
            <UserCard
              picture={siva}
              name={"Mr. T.Sivathas"}
              occupation={"Captain (2019/20)"}
            />
          </div>
        </div>
        {/* <ListViewer data={members} /> */}
      </Container>
    </div>
  );
};

export default PastPresidents;
