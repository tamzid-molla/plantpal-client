import React, { useContext, useState, useEffect } from "react";
import { FaUser, FaLock, FaEnvelope, FaBell, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../Context/FirebaseContext";

const Settings = () => {
  const { user, updateUser, signOut, dark } = useContext(AuthContext);
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    displayName: "",
    email: "",
    password: "",
    notifications: true,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setSettings({
        displayName: user.displayName || user.userName || "User",
        email: user.email,
        password: "",
        notifications: true,
      });
      setLoading(false);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await updateUser({ displayName: settings.displayName });

      if (settings.password) {
        console.log("Password update not implemented yet. Use Firebase auth.");
      }
    } catch (err) {
      setError("Failed to update profile. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut();
      navigate("/login");
    } catch (err) {
      console.error("Error signing out:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        className={`flex justify-center items-center ${
          dark ? "bg-gray-900" : "bg-teal-50"
        }`}
      >
        <div
          className={`animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 ${
            dark ? "border-teal-500" : "border-teal-600"
          }`}
        ></div>
      </div>
    );
  }

  return (
    <div
      className={`p-6 max-w-2xl mx-auto `}
    >
      <h2
        className={`text-3xl font-bold mb-6 text-center ${
          dark ? "text-teal-500" : "text-teal-600"
        }`}
      >
        Settings
      </h2>
      <div
        className={` rounded-xl shadow-xl p-6 ${
          dark ? "bg-gray-800 border border-teal-600" : "border bg-white border-teal-100"
        }`}
      >
        {error && (
          <p
            className={`mb-4 ${
              dark ? "text-red-400" : "text-red-500"
            }`}
          >
            {error}
          </p>
        )}
        <form onSubmit={handleUpdateProfile} className="space-y-6">
          <div>
            <label
              className={`block text-sm font-medium ${
                dark ? "text-teal-200" : "text-gray-700"
              }`}
            >
              Name
            </label>
            <div className="mt-1 flex items-center space-x-3">
              <FaUser
                className={`${
                  dark ? "text-teal-500" : "text-teal-600"
                }`}
              />
              <input
                type="text"
                name="displayName"
                value={settings.displayName}
                onChange={handleChange}
                className={`block w-full p-2 border ${
                  dark
                    ? "bg-gray-700 border-teal-500 text-teal-200"
                    : "bg-white border-teal-300 text-gray-900"
                } rounded-lg focus:ring-teal-500 focus:border-teal-500`}
                required
              />
            </div>
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${
                dark ? "text-teal-200" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <div className="mt-1 flex items-center space-x-3">
              <FaEnvelope
                className={`${
                  dark ? "text-teal-500" : "text-teal-600"
                }`}
              />
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className={`block w-full p-2 border border-gray-300 rounded-lg bg-gray-100 ${
                  dark ? "bg-gray-700 text-teal-200" : ""
                }`}
                disabled
              />
            </div>
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${
                dark ? "text-teal-200" : "text-gray-700"
              }`}
            >
              New Password
            </label>
            <div className="mt-1 flex items-center space-x-3">
              <FaLock
                className={`${
                  dark ? "text-teal-500" : "text-teal-600"
                }`}
              />
              <input
                type="password"
                name="password"
                value={settings.password}
                onChange={handleChange}
                className={`block w-full p-2 border ${
                  dark
                    ? "bg-gray-700 border-teal-500 text-teal-200"
                    : "bg-white border-teal-300 text-gray-900"
                } rounded-lg focus:ring-teal-500 focus:border-teal-500`}
                placeholder="Leave blank to keep current password"
              />
            </div>
          </div>

          <div>
            <label
              className={`flex items-center space-x-3 ${
                dark ? "text-teal-200" : "text-gray-700"
              }`}
            >
              <FaBell
                className={`${
                  dark ? "text-teal-500" : "text-teal-600"
                }`}
              />
              <span className="text-sm font-medium">Enable Notifications</span>
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
                className={`ml-2 h-5 w-5 ${
                  dark ? "text-teal-500" : "text-teal-600"
                } focus:ring-teal-500 border-gray-300 rounded`}
              />
            </label>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className={`bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition-colors ${
                dark ? "hover:bg-teal-400" : ""
              }`}
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={handleSignOut}
              className={`flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 ${
                dark ? "hover:bg-red-500" : ""
              }`}
            >
              <FaSignOutAlt />
              <span>Sign Out</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;