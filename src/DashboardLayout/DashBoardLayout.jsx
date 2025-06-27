import React, { useContext } from "react";
import { Outlet } from "react-router";
import DashBoardLeft from "../Components/DashBoardComponents/DashBoardLeft";
import { AuthContext } from "../Context/FirebaseContext";
import Loader from "../Components/Loader";
import DashboardTop from "../Components/DashBoardComponents/DashboardTop";

const DashBoardLayout = () => {
  const { loading, dark, user } = useContext(AuthContext);
  console.log(user);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div
      className={`flex flex-col md:flex-row gap-5 min-h-screen ${
        dark ? "bg-gray-900 text-gray-200" : " text-gray-800"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`hidden md:flex md:w-[250px] lg:w-[300px] 2xl:w-[20%] h-screen sticky top-0 ${
          dark ? "bg-gray-800" : "bg-white"
        } `}
      >
        <DashBoardLeft />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 w-full">
        <DashboardTop></DashboardTop>
        <div
          className={`mt-6 ${
            dark ? "bg-gray-800 border border-gray-700" : "bg-white border border-teal-100"
          } rounded-lg shadow-md p-4 md:p-6`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;