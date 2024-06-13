import Container from "@/components/Shared/Container";
import UserCard from "@/components/UserCard";
import UserFulViewName from "@/components/UserCard/UserFulViewName";
import UserFullView from "@/components/UserCard/UserFullView";
import commityImg from "../public/assets2/banner/committee.jpg";
const Committee = () => {
  const MembersNames = [
    {
      name: "Ravi",
      role: "President",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "President",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "Member",
    },
  ];
  return (
    <>
      <div className="bg-slate-100">
        <Container className="text-left">
          <h1 className="text-2xl font-bold text-slate-800 p-5">
            CURRENT COMMITTEE 2022/23
          </h1>
          <div className="flex">
            <div className="flex h-screen">
              <div className="flex-shrink-0 w-8/10">
                <UserFullView
                  picture={commityImg}
                  name={"Mr. V. Manivannan"}
                  occupation={"President"}
                />
              </div>
              <div className="w-2/10  p-8">
                <div className="flex-shrink-1 w-[400px] p-2 w-100">
                  <div
                    className="m-3 text-lg text-slate-600 p-2 font"
                    style={{ fontWeight: "bold" }}
                  >
                    <span
                      className="font-bold"
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Sitting Right to left
                    </span>
                    <br />
                    Mr. S. Umadaran (Treasurer), Mr. P. Satheesraj (Vice
                    President), Mr. V. Manivannan (President), Mr. T. Sivathas
                    (Secretary), Mr. P. Murugavel (Vice President)
                    <br />
                    <div
                      className="font-bold"
                      style={{
                        fontSize: "20px",
                        marginTop: "10px",
                      }}
                    >
                      {" "}
                      Standing Right to left{" "}
                    </div>
                    Mr. K. Thayananthan (Member), Mr. S. Thirukumaran (Member),
                    Mr. P. Pirasanna (Member), Mr. S. Sarangan (Member)
                    <br />
                    <div
                      className="font-bold"
                      style={{
                        fontSize: "20px",
                        marginTop: "10px",
                      }}
                    >
                      Absentees
                    </div>{" "}
                    Mr. N. Sivaraja(Vice President), Mr. K. Kabilan (Member),
                    Mr. S. Thayalan (Member), Mr. U. Kethees (Member), Mr. G.
                    Kirishanthan (Member)
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          
        </Container>
      </div>
    </>
  );
};

export default Committee;
