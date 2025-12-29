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
                <div>
                  <h4 className="text-black text-lg font-bold">
                    Sitting Left to Right:
                  </h4>
                  <p className="text-black font-light">
                    Mr. P. Pirasanna (Vice President ), Mr. S. Umadaran (Secretary), Mr. T. Sivathas (President),
                    Mr. G. Kirishanthan (Member), Mr. S. Luxmikanth (Member)
                  </p>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-black text-lg font-bold">
                    Standing Left to Right:
                  </h4>
                  <p className="text-black font-light">
                    Mr. S. Nishanan (Member), Mr. J. Shajeekan (Member),
                    Mr. U. Kethees (Member), Mr. T. Umesh (Vice Secretary), Mr. A. Vethakulan (Editor)
                  </p>
                </div>

                <div className="mt-4">
                  <h4 className="text-black text-lg font-bold">
                    Absentees:
                  </h4>
                  <p className="text-black font-light">
                    Mr. A. Asupathy (POG),  Mr. G. Gowthaman (Treasurer), Mr. S. Sarangan (Vice President),
                    Mr. K. Kabilan (Member)
                  </p>
                </div>
                
                {/* <div
                  className="m-3 text-lg text-slate-600 p-2 font"
                  style={{ fontWeight: "bold" }}
                >
                  <span
                    className="font-bold"
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    Sitting Left to Right
                  </span>
                  <br />
                  <p className="text-sm md:text-base">
                    Mr. P. Pirasanna (Vice President ), Mr. S. Umadaran (Secretary), Mr. T. Sivathas (President),
                    Mr. G. Kirishanthan (Member), Mr. S. Luxmikanth (Member)
                  </p>
                  <div
                    className="font-bold"
                    style={{
                      fontSize: "20px",
                      marginTop: "10px",
                    }}
                  >
                    {" "}
                    Standing Left to Right{" "}
                  </div>
                  <p className="text-sm md:text-base">
                    Mr. S. Nishanan (Member), Mr. J. Shajeekan (Member),
                    Mr. U. Kethees (Member), Mr. T. Umesh (Vice Secretary), Mr. A. Vethakulan (Editor)
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
                    Mr. A. Asupathy (POG),  Mr. G. Gowthaman (Treasurer), Mr. S. Sarangan (Vice President),
                    Mr. K. Kabilan (Member), 
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Committee;
