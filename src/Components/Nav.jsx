import React, { useContext, useState } from "react";
import logo from "../assets/Logo.png";
import { Link, NavLink, useNavigate } from "react-router";
import { MdLightMode } from "react-icons/md";
import { MdMenu, MdClose } from "react-icons/md";
import { AuthContext } from "../Context/FirebaseContext";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import defaultImage from "../assets/default.webp";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, LogoutUser, setDark, dark } = useContext(AuthContext);
  const navigate = useNavigate();
  const [urlError, setUrlError] = useState(false);

  const handleLogout = () => {
    LogoutUser().then(() => {
      Swal.fire({
        icon: "success",
        title: "LogOut successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const links = (
    <>
      <NavLink to="/" className="">
        Home
      </NavLink>
      <NavLink to="/allPlants">All Plants</NavLink>
      {user && <NavLink to="/dashboard">Dashboard</NavLink>}

      <NavLink to="/about">About Us</NavLink>
    </>
  );

  return (
    <div className="flex justify-between w-11/12 mx-auto relative">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          className={`w-14 h-14 ${dark && "bg-white rounded-full p-2"}`}
        />
        <h4 className="text-3xl font-bold">PlantPal</h4>
      </div>

      <div className="flex gap-5 xl:gap-20 items-center">
        <div className="space-x-7 xl:space-x-14 hidden lg:block font-medium text-lg">
          {links}
        </div>

        <div className="space-x-6 flex items-center">
          {user ? (
            <button
              onClick={handleLogout}
              className="btn hidden md:block text-lg px-5 xl:px-7">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn hidden md:block text-lg px-5 xl:px-7">
                Login
              </button>
            </Link>
          )}
          {!user && (
            <Link to="/register">
              <button className="btn  hidden md:block text-lg px-5 xl:px-7">
                Register
              </button>
            </Link>
          )}

          <button className="lg:hidden" onClick={toggleSidebar}>
            <MdMenu size={35} />
          </button>
          <button onClick={() => setDark(!dark)} className="cursor-pointer">
            {" "}
            <MdLightMode
              size={30}
              className={`${dark ? "text-black" : "text-white"}`}
            />{" "}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-1/2 ${
          dark ? "bg-gray-800 text-gray-200" : "bg-white"
        } shadow-lg transform transition-transform duration-300 z-50 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="flex flex-col p-6 space-y-6">
          <button className="self-end" onClick={toggleSidebar}>
            <MdClose size={30} />
          </button>
          {links}
          {user ? (
            <button
              onClick={handleLogout}
              className="btn md:hidden text-lg px-5 xl:px-7">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn md:hidden text-lg px-5 xl:px-7">
                Login
              </button>
            </Link>
          )}
          {!user && (
            <Link to="/register">
              <button className="btn  md:hidden text-lg px-5 xl:px-7">
                Register
              </button>
            </Link>
          )}
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className={`fixed inset-0 bg-[#1111116c] bg-opacity-50 transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } z-40`}
          onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

export default Nav;
