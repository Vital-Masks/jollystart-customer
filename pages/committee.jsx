import Container from "@/components/Shared/Container";
import UserCard from "@/components/UserCard";
import UserFulViewName from "@/components/UserCard/UserFulViewName";
import UserFullView from "@/components/UserCard/UserFullView";
import Image from "next/image";

const Committee = () => {
  // const MembersNames = [
  //   {
  //     name: "Ravi",
  //     role: "President",
  //   },
  //   {
  //     name: "Ravi",
  //     role: "Member",
  //   },
  //   {
  //     name: "Ravi",
  //     role: "Member",
  //   },
  //   {
  //     name: "Ravi",
  //     role: "Member",
  //   },
  //   {
  //     name: "Ravi",
  //     role: "Member",
  //   },
  //   {
  //     name: "Ravi",
  //     role: "Member",
  //   },
  //   {
  //     name: "Ravi",
  //     role: "President",
  //   },
  //   {
  //     name: "Ravi",
  //     role: "Member",
  //   },
  //   {
  //     name: "Ravi",
  //     role: "Member",
  //   },
  //   {
  //     name: "Ravi",
  //     role: "Member",
  //   },
  //   {
  //     name: "Ravi",
  //     role: "Member",
  //   },
  //   {
  //     name: "Ravi",
  //     role: "Member",
  //   },
  // ];
  return (
    <>
      <div className="bg-slate-100">
        <Container className="text-left">
          <h1 className="text-2xl font-bold text-slate-800 p-5">
            CURRENT COMMITTEE 2022/23
          </h1>
          <div className="flex justify-center p-2 mt-4">
            <Image
              src="/assets/banner/committee.jpg"
              width={720}
              height={720}
              className="w-full h-[850px] object-cover"
              alt="gg"
            />
          </div>
          {/* <div className="grid grid-cols-2 gap-5 mt-5 md:grid-cols-4 xl:gap-10 p-5">
            {MembersNames.map((item, index) => (
              <UserFulViewName
                key={index}
                name={item.name}
                occupation={item.role}
              />
            ))}
          </div> */}
          <p className="mt-1 text-sm text-slate-600 p-5">
          Sitting (Left to Right): Mr.S.Umadaran (Treasurer),
          Mr. P.Satheesraj (Vice President),
          Mr. V.Manivannan (President),
          Mr. T.Sivathas (Secretary),
          Mr. P.Murugavel(Vice President).
          
          <br></br>
          Standing: Mr. K.Thaynanthan, 
          Mr. S.Thirukumaran, 
          Mr. S.Prasanna, 
          Mr. S.Sarangan.
          
          <br></br>
          Absentees: Mr. N.Sivaraja (Vice President), 
          Mr. K.Kabilan, 
          Mr. S. Thayalan, 
          Mr. U.Kethees, 
          Mr. G.Kirishanthan.
          </p>

          <p className="mt-1 text-lg text-slate-600 p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum lorem ligula, a viverra justo luctus fringilla. Phasellus
            lobortis dui et ipsum dictum semper. Quisque dui erat, feugiat in
            sapien ut, bibendum lobortis lectus. Vivamus id tristique tellus.
            Sed cursus sollicitudin sapien. Integer sollicitudin libero non erat
            fermentum, vel tempus arcu varius. Nunc tempor ut metus a pretium.
            Duis eget leo ut tellus aliquam pulvinar. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed vestibulum lorem ligula, a
            viverra justo luctus fringilla. Phasellus lobortis dui et ipsum
            dictum semper. Quisque dui erat, feugiat in sapien ut, bibendum
            lobortis lectus. Vivamus id tristique tellus. Sed cursus
            sollicitudin sapien.
          </p>
        </Container>
      </div>
    </>
  );
};

export default Committee;
