import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { routes } from "@/contents/routes";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  // sdsd
  const [Loading, setLoading] = useState(true);
  const [memberData, setmemberData] = useState({});

  const fetchUserData = () => {
    const userDataString = localStorage.getItem("userData");
    try {
      if (userDataString) {
        // Parse the userData JSON string
        const userData = JSON.parse(userDataString);
        // Check if userData has the _id property
        if (userData && userData._id) {
          // Make a fetch request using the _id
          fetch(`http://localhost:3000/api/member/${userData._id}`)
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
              setmemberData(userDataFromFetch.result);
            })
            .catch((error) => {
              // Handle fetch error or redirect to login page
              console.error("Fetch error:", error);
            });
        } else {
          // Redirect to login page if _id is not present in userData
        }
      } else {
        // Redirect to login page if userData is not present in local storage
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  const logout = () => {
    localStorage.clear();
    window.location.href = "/login/logreg";
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menus = [
    {
      id: 0,
      label: "Home",
      link: routes.HOME,
    },
    {
      id: 1,
      label: "About us",
      link: routes.ABOUT_US,
      subMenu: [
        {
          id: 0,
          label: "About us",
          link: routes.ABOUT_US,
        },
        {
          id: 1,
          label: "History",
          link: routes.HISTORY,
        },
        {
          id: 2,
          label: "Past Presidents",
          link: routes.PAST_PRESIDENTS,
        },
        {
          id: 3,
          label: "Committee",
          link: routes.COMMITTEE,
        },
        {
          id: 4,
          label: "Membership",
          link: routes.MEMBERSHIPFULL,
        },
      ],
    },
    {
      id: 2,
      label: "Cricket",
      link: routes.CRICKET,
      subMenu: [
        {
          id: 0,
          label: "Team 25/26",
          link: routes.CRICKET_TEAM,
        },
        {
          id: 1,
          label: "Club Cricket",
          link: routes.CLUB_CRICKET,
        },
        {
          id: 2,
          label: "Past Captains",
          link: routes.CRICKET_PAST_CAPTAINS,
        },
      ],
    },
    {
      id: 3,
      label: "Basketball",
      link: routes.BASKET_BALL,
      subMenu: [
        {
          id: 0,
          label: "Team 25/26",
          link: routes.BASKET_TEAM,
        },
        {
          id: 1,
          label: "Club Basketball",
          link: routes.CLUB_BASKET_BALL,
        },
        {
          id: 2,
          label: "Past Captains",
          link: routes.BASKET_PAST_CAPTAINS,
        },
      ],
    },
    {
      id: 4,
      label: "Sports",
      link: routes.SPORTS,
    },
    {
      id: 5,
      label: "Lates news",
      link: routes.LATEST_NEWS,
    },
    {
      id: 6,
      label: "Gallery",
      link: routes.GALLERY,
    },
    {
      id: 7,
      label: "Contact us",
      link: routes.CONTACT_US,
    },
  ];

  return (
    <header className="bg-blue-900 text-slate-100">
      <nav
        className="flex items-center justify-between py-4 mx-auto responsive"
        aria-label="Global"
      >
        <div className="flex gap-4 lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
          <h1 className="text-xl font-bold">JOLLY STARS SC</h1>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {menus.map((menu) => (
            <NavItems key={menu.id} {...menu} />
          ))}
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!(memberData && memberData.firstName) && (
            <Link
              href="/login/logreg"
              className="text-sm font-semibold leading-6 text-gray-100"
            >
              Login/Signup <span aria-hidden="true">&rarr;</span>
              &nbsp;&nbsp;&nbsp;
            </Link>
          )}

          {memberData && memberData.firstName && (
            <div className="text-sm font-semibold leading-6 text-gray-100">
              {memberData.firstName} {memberData.lastName}
              &nbsp;&nbsp;&nbsp;
            </div>
          )}
          {memberData && memberData.firstName && (
            <div
              onClick={logout}
              href="/login/logreg"
              className="text-sm font-semibold leading-6 text-gray-100"
            >
              Logout <span aria-hidden="true">&rarr;</span>
              &nbsp;&nbsp;&nbsp;
            </div>
          )}
        </div>
      </nav>
      <MobileMenu
        menus={menus}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

export default Navbar;

const NavItems = ({ label, link, subMenu }) => {
  if (subMenu) {
    return (
      <Popover className="relative"  >
        <Popover.Button  className="flex items-center text-sm font-semibold leading-6 text-gray-100 gap-x-1">
          {label}
          <ChevronDownIcon
            className="flex-none w-5 h-5 text-gray-100"
            aria-hidden="true"
          />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
          style={{background:"red"}}
          
        >
          <Popover.Panel className="absolute z-10 w-56 mt-3 overflow-hidden bg-blue-900 shadow-lg -left-8 top-full">
            <div className="divide-y divide-blue-600">
              {subMenu.map(({ id, label, link }) => (
                <div
                  key={id}
                  className="relative flex items-center p-4 text-sm leading-6 group gap-x-6 hover:bg-blue-800"
                >
                  <div className="flex-auto">
                    <Link
                      href={link}
                      className="block font-semibold text-gray-100"
                    >
                      {label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    );
  } else {
    return (
      <Link
        href={link}
        className="text-sm font-semibold leading-6 text-gray-100"
      >
        {label}
      </Link>
    );
  }
};

const MobileMenu = ({ menus, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link
            href={routes.HOME}
            className="-m-1.5 p-1.5 text-blue-900 text-2xl font-bold"
          >
            JOLLY STARS SC
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flow-root mt-6">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="py-6 space-y-2">
              {menus.map(({ id, label, link, subMenu }) => {
                if (subMenu) {
                  return (
                    <Disclosure key={id} as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-gray-900 text-base font-semibold leading-7 hover:bg-gray-50">
                            {label}
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {subMenu.map(({ id, label, link }) => (
                              <Disclosure.Button
                                key={id}
                                as="a"
                                href={link}
                                className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                              >
                                {label}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  );
                } else {
                  return (
                    <Link
                      key={id}
                      href={link}
                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                    >
                      {label}
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
