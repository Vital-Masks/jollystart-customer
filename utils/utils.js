export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
export const isUserData = () => {
  const userDataString = localStorage.getItem("userData");
  if (userDataString) {
    // Parse the userData JSON string
    const userData = JSON.parse(userDataString);
    // Check if userData has the _id property
    if (userData && userData._id) {
      // Make a fetch request using the _id
      return true;
    } else {
      // Redirect to login page if _id is not present in userData
      return false;
    }
  } else {
    // Redirect to login page if userData is not present in local storage
    return false;
  }
};

export const fetchUserData = async () => {
  try {
    const userDataString = localStorage.getItem("userData");

    if (userDataString) {
      const userData = JSON.parse(userDataString);

      if (userData && userData._id) {
        const response = await fetch(
          `https://api.jollystarssc.com/api/member/${userData._id}`
        );

        if (response.ok) {
          const userDataFromFetch = await response.json();
          console.log(userDataFromFetch);
          // You can return or process userDataFromFetch as needed
          return userDataFromFetch;
        } else {
          // Handle fetch error
          throw new Error("Fetch request failed");
        }
      } else {
        // Redirect to login page if _id is not present in userData
        redirectToLoginPage();
        return {};
      }
    } else {
      // Redirect to login page if userData is not present in local storage
      redirectToLoginPage();
      return {};
    }
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error in fetchUserData:", error);
    redirectToLoginPage();
    return {};
  }
};

function redirectToLoginPage() {
  // Redirect to the login page
  window.location.href = "/loginpage";
}
