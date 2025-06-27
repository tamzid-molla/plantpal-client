import React, { useContext } from "react";
import { AuthContext } from "../../Context/FirebaseContext";
import { NavLink } from "react-router";
import { FaHome, FaUser, FaCog, FaChartBar,FaPlus ,FaLeaf  } from "react-icons/fa";

const DashboardTop = () => {
  const { user,dark } = useContext(AuthContext);
  return (
    <div className="">
      <div className="drawer border-b border-gray-400">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar w-full">
            <div className="flex-none md:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 text-xl font-bold px-2">Dashboard</div>
            <div className="">
              <div className="flex justify-end py-6 px-4">
                <div>
                  <img
                    src={user?.photoURL}
                    alt="User photo"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className={`menu ${dark?"bg-gray-800":"bg-base-200"} min-h-full w-64 p-4`}>
            <li>
                      <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 rounded-xl text-base text-teal-600 hover:bg-teal-100 transition-all duration-200 ${
                            isActive ? "bg-teal-600 text-white font-semibold" : ""
                          } ${dark ? "hover:bg-teal-700 hover:text-teal-100 text-teal-400" : ""} ${
                            dark && isActive ? "bg-teal-600 text-white" : ""
                          }`
                        }
                      >
                        <FaChartBar className="w-6 h-6 mr-4" />
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/addPlants"
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 rounded-xl text-base text-teal-600 hover:bg-teal-100 transition-all duration-200 ${
                            isActive ? "bg-teal-600 text-white font-semibold" : ""
                          } ${dark ? "hover:bg-teal-700 hover:text-teal-100 text-teal-400" : ""} ${
                            dark && isActive ? "bg-teal-600 text-white" : ""
                          }`
                        }
                      >
                        <FaPlus className="w-6 h-6 mr-4" />
                        Add Plants
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/myPlants"
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 rounded-xl text-base text-teal-600 hover:bg-teal-100 transition-all duration-200 ${
                            isActive ? "bg-teal-600 text-white font-semibold" : ""
                          } ${dark ? "hover:bg-teal-700 hover:text-teal-100 text-teal-400" : ""} ${
                            dark && isActive ? "bg-teal-600 text-white" : ""
                          }`
                        }
                      >
                        <FaLeaf className="w-6 h-6 mr-4" />
                        My Plants
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/profile"
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 rounded-xl text-base text-teal-600 hover:bg-teal-100 transition-all duration-200 ${
                            isActive ? "bg-teal-600 text-white font-semibold" : ""
                          } ${dark ? "hover:bg-teal-700 hover:text-teal-100 text-teal-400" : ""} ${
                            dark && isActive ? "bg-teal-600 text-white" : ""
                          }`
                        }
                      >
                        <FaUser className="w-6 h-6 mr-4" />
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/settings"
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 rounded-xl text-base text-teal-600 hover:bg-teal-100 transition-all duration-200 ${
                            isActive ? "bg-teal-600 text-white font-semibold" : ""
                          } ${dark ? "hover:bg-teal-700 hover:text-teal-100 text-teal-400" : ""} ${
                            dark && isActive ? "bg-teal-600 text-white" : ""
                          }`
                        }
                      >
                        <FaCog className="w-6 h-6 mr-4" />
                        Settings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 rounded-xl text-base text-teal-600 hover:bg-teal-100 transition-all duration-200 ${
                            isActive ? "bg-teal-600 text-white font-semibold" : ""
                          } ${dark ? "hover:bg-teal-700 hover:text-teal-100 text-teal-400" : ""} ${
                            dark && isActive ? "bg-teal-600 text-white" : ""
                          }`
                        }
                      >
                        <FaHome className="w-6 h-6 mr-4" />
                        Back to Home
                      </NavLink>
                    </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;
