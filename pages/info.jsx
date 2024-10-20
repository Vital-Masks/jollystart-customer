import Container from "@/components/Shared/Container";
import Personalinfo from "@/components/Info/Personalinfo";
import Clubfiles from "@/components/Info/Clubfiles";
import Paymentinfo from "@/components/Info/Paymentinfo";
import Occupationinfo from "@/components/Info/Occupationinfo";
import Schoolinfo from "@/components/Info/Schoolinfo";
import React, { useEffect, useState } from "react";
import { isEmpty, isUserData } from "@/utils/utils";

const Info = () => {
  const [memberData, setmemberData] = useState({});
  const [Loading, setLoading] = useState(true);
  const tabs = [
    {
      name: "Personal Info",
      component: <Personalinfo memberData={memberData} />,
    },

    {
      name: "Payment Info",
      component: <Paymentinfo memberData={memberData} />,
    },
    {
      name: "Occupation Info",
      component: <Occupationinfo memberData={memberData} />,
    },
    {
      name: "School & Club",
      component: <Schoolinfo memberData={memberData} />,
    },
    { name: "Clubfiles", component: <Clubfiles memberData={memberData} /> },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0].name);
  var userDataStrings = {};
  if (typeof window !== "undefined") {
     userDataStrings = localStorage.getItem("userData");
  } else {
     userDataStrings = {};
  }
  // const userDataStrings = localStorage.getItem("userData");
  const fetchUserData = (userDataString) => {
    // const userDataString = localStorage.getItem("userData");
    try {
      if (userDataString) {
        // Parse the userData JSON string
        const userData = JSON.parse(userDataString);
        // Check if userData has the _id property
        if (userData && userData._id) {
          // Make a fetch request using the _id
          fetch(
            `https://api.jollystarssc.com/api/member/memberPayment/${userData._id}`
          )
            .then((fetchResponse) => {
              // Check if the fetch request was successful
              if (fetchResponse.ok) {
                // Process the response here, e.g., parse the JSON response
                console.log(fetchResponse, "==========");
                return fetchResponse.json();
              } else {
                // Handle fetch error
                throw new Error("Fetch request failed");
              }
            })
            .then((userDataFromFetch) => {
              // Do something with the userDataFromFetch
              console.log(userDataFromFetch.result);
              setmemberData(userDataFromFetch.result[0]);
            })
            .catch((error) => {
              // Handle fetch error or redirect to login page
              console.error("Fetch error:", error);
              redirectToLoginPage();
            });
        } else {
          // Redirect to login page if _id is not present in userData
          redirectToLoginPage();
        }
      } else {
        // Redirect to login page if userData is not present in local storage
        redirectToLoginPage();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  function redirectToLoginPage() {
    // Redirect to the login page
    window.location.href = "/login/logreg";
  }
  useEffect(() => {
    fetchUserData(userDataStrings);
  }, [userDataStrings]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-white p-5">
      {!Loading && !isEmpty(memberData) ? (
        <Container>
          <div>
            <div className="sm:hidden bg-slate-100 text-slate-600">
              <label htmlFor="tabs" className="sr-only">
                Select a sport
              </label>
              <select
                id="tabs"
                name="tabs"
                className="block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                defaultValue={tabs[0].name}
                onChange={(e) => setCurrentTab(e.target.value)}
              >
                {tabs.map((tab) => (
                  <option key={tab.name}>{tab.name}</option>
                ))}
              </select>
            </div>

            <div className="hidden sm:block">
              <nav
                className="flex divide-x divide-gray-200 rounded-lg shadow isolate"
                aria-label="Tabs"
              >
                {tabs.map((tab, tabIdx) => (
                  <button
                    key={tab.name}
                    onClick={() => setCurrentTab(tab.name)}
                    className={classNames(
                      tab.name === currentTab
                        ? "bg-blue-800 text-white "
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50",
                      tabIdx === 0 ? "rounded-l-lg" : "",
                      tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                      "group relative min-w-0 flex-1 overflow-hidden  py-4 px-4 text-center text-sm font-medium  focus:z-10"
                    )}
                  >
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className="mt-10 text-black">
            {tabs.find((x) => x.name === currentTab).component}
          </div>
        </Container>
      ) : (
        <div className="loaderBody">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default Info;
