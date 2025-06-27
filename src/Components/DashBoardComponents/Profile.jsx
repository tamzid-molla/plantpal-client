import React, { useContext, useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaLeaf, FaEdit } from "react-icons/fa";
import Loader from "../Loader";
import { AuthContext } from "../../Context/FirebaseContext";

const Profile = () => {
  const { user, updateUser, dark } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({ displayName: "", photoURL: "" });
  const [loading, setLoading] = useState(true);
  const [plants, setPlants] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    if (user) {
      fetch(`${import.meta.env.VITE_baseURL}/plants?byEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setPlants(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching plants:", err);
          setLoading(false);
        });

      setProfileData({
        displayName: user.displayName || user.userName || "User",
        photoURL: user.photoURL || "https://via.placeholder.com/150",
      });
      setNewName(user.displayName || user.userName || "");
    }
  }, [user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateUser({ displayName: newName });
      setProfileData({ ...profileData, displayName: newName });
      setEditMode(false);
    } catch (err) {
      console.error("Error updating profile:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div
      className={`p-6 max-w-3xl mx-auto ${
        dark ? "bg-gray-800 text-teal-200" : " text-gray-800"
      } min-h-screen`}
    >
      <h2
        className={`text-3xl font-bold mb-6 text-center ${
          dark ? "text-teal-300" : "text-teal-700"
        }`}
      >
        My Profile
      </h2>
      <div
        className={` rounded-xl shadow-xl p-6 ${
          dark ? "bg-gray-700 border border-teal-800" : "border bg-white border-teal-100"
        }`}
      >
        <div className="flex flex-col items-center mb-8">
          <img
            src={profileData.photoURL}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-teal-600 shadow-md"
          />
          <h3
            className={`text-2xl font-semibold ${
              dark ? "text-teal-100" : "text-gray-900"
            }`}
          >
            {profileData.displayName}
          </h3>
          <p
            className={`text-gray-600 ${
              dark ? "text-teal-400" : "text-gray-500"
            }`}
          >
            {user.email}
          </p>
        </div>

        <div className="mb-8">
          <div
            className={`bg-teal-50 p-5 rounded-xl ${
              dark ? "bg-teal-800 border border-teal-700" : "border border-teal-100"
            }`}
          >
            <div className="flex items-center space-x-4">
              <FaLeaf className="text-teal-600 w-6 h-6" />
              <div>
                <p
                  className={`text-sm ${
                    dark ? "text-teal-300" : "text-gray-600"
                  }`}
                >
                  Total Plants
                </p>
                <p
                  className={`text-xl font-bold ${
                    dark ? "text-teal-100" : "text-teal-700"
                  }`}
                >
                  {plants.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {editMode ? (
          <form onSubmit={handleUpdateProfile} className="space-y-6">
            <div>
              <label
                className={`block text-sm font-medium ${
                  dark ? "text-teal-200" : "text-gray-700"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className={`mt-2 block w-full p-3 border ${
                  dark
                    ? "bg-gray-600 border-teal-500 text-teal-100"
                    : "bg-white border-teal-300 text-gray-900"
                } rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500`}
                required
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className={`bg-teal-600 text-white px-6 py-2 rounded-xl hover:bg-teal-700 transition-colors ${
                  dark ? "hover:bg-teal-500" : ""
                }`}
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className={`bg-gray-300 text-gray-800 px-6 py-2 rounded-xl hover:bg-gray-400 transition-colors ${
                  dark ? "bg-gray-600 text-teal-200 hover:bg-gray-500" : ""
                }`}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className={`flex items-center space-x-2 bg-teal-600 text-white px-6 py-2 rounded-xl hover:bg-teal-700 transition-colors ${
              dark ? "hover:bg-teal-500" : ""
            }`}
          >
            <FaEdit />
            <span>Edit Profile</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;