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
          CURRENT COMMITTEE 2025/27
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="flex-shrink-0 w-full md:w-7/12">
              <UserFullView
                picture={commityImg}
                name={"Mr. V. Manivannan"}
                occupation={"President"}
              />
            </div>

            <div className="w-full md:w-5/12 p-4 md:p-8">
              <div className="w-full p-2">
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
                  <p className="text-sm md:text-base">
                    Mr. S. Umadaran (Treasurer), Mr. P. Satheesraj (Vice
                    President), Mr. V. Manivannan (President), Mr. T. Sivathas
                    (Secretary), Mr. P. Murugavel (Vice President)
                  </p>
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
                  <p className="text-sm md:text-base">
                    Mr. K. Thayananthan (Member), Mr. S. Thirukumaran (Member),
                    Mr. P. Pirasanna (Member), Mr. S. Sarangan (Member)
                  </p>
                  <div
                    className="font-bold"
                    style={{
                      fontSize: "20px",
                      marginTop: "10px",
                    }}
                  >
                    Absentees
                  </div>
                  <p className="text-sm md:text-base">
                    Mr. N. Sivaraja (Vice President), Mr. K. Kabilan (Member),
                    Mr. S. Thayalan (Member), Mr. U. Kethees (Member), Mr. G.
                    Kirishanthan (Member)
                  </p>
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
