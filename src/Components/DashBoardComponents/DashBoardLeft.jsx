import React, { useContext } from "react";
import { NavLink } from "react-router";
import { FaChartBar, FaPlus, FaLeaf, FaUser, FaCog, FaHome } from "react-icons/fa";
import { AuthContext } from "../../Context/FirebaseContext";

const DashBoardLeft = () => {
  const { dark } = useContext(AuthContext);

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 p-4 ${
        dark ? "bg-gray-800 text-teal-200" : "bg-white text-teal-800"
      } shadow-lg rounded-r-2xl transform transition-all duration-300`}
    >
      <div
        className={`p-4 border-b-2 ${
          dark ? "border-teal-700" : "border-teal-200"
        }`}
      >
        <h2
          className={`text-2xl font-bold ${
            dark ? "text-teal-300" : "text-teal-600"
          }`}
        >
          PlantPal Dashboard
        </h2>
      </div>

      <ul className="flex-1 p-4 space-y-3 mt-6">
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
  );
};

export default DashBoardLeft;