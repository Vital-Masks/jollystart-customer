import ListViewer from "@/components/ListViewer";
import Container from "@/components/Shared/Container";
import UserCard from "@/components/UserCard";
import React from "react";

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
        <h1 className="text-2xl font-bold text-slate-800 p-5">Presidents</h1>
        <div className="flex items-center justify-center gap-5 overflow-auto lg:grid-cols-3 xl:grid-cols-6 md:grid md:grid-cols-2 lg:justify-center p-5">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
            <UserCard
              key={img}
              picture="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              name={"Mr. V. Manivannan"}
              occupation={"President"}
            />
          ))}
        </div>
        <br /> <br />
       
        {/* <ListViewer data={members} /> */}
      </Container>
    </div>
  );
};

export default PastPresidents;
