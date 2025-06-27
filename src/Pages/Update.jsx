import React, { useContext, useEffect } from "react";
import { FaLeaf, FaImage } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/FirebaseContext";

const Update = () => {
  const { dark } = useContext(AuthContext);
  const navigate = useNavigate();
  const updateData = useLoaderData();
  const {
    careLevel,
    category,
    description,
    healthStatus,
    lastWateredDate,
    nextWateringDate,
    plantName,
    userEmail,
    url,
    userName,
    wateringFrequency,
  } = updateData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entrees = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_baseURL}/plants/${updateData._id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(entrees),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Update successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(-1);
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Update canceled | Please Try again",
          footer: err.message,
        });
      });
  };

  useEffect(() => {
    document.title = `PlantPal || ${plantName}`;
  }, [plantName]);

  return (
    <div className="pt-12">
      <div
      className={`max-w-4xl mx-auto p-6 ${
        dark ? "bg-gray-700 text-gray-100" : "bg-white text-gray-800"
      } shadow-lg rounded-xl my-20`}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
        <FaLeaf className={dark ? "text-teal-300" : "text-teal-600"} /> Update{" "}
        {plantName}
      </h2>
      <form onSubmit={handleUpdate} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <label
                htmlFor="image"
                className={`block text-sm font-medium ${
                  dark ? "text-teal-200" : "text-gray-700"
                }`}
              >
                Plant Image URL
              </label>
              <div className="mt-2 flex items-center">
                <input
                  defaultValue={url}
                  type="url"
                  name="url"
                  required
                  className={`w-full px-4 py-2 border ${
                    dark ? "bg-gray-600 border-teal-500" : "bg-gray-50 border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                    dark ? "focus:ring-teal-500" : "focus:ring-teal-600"
                  } focus:border-transparent`}
                  placeholder="Photo URL"
                />
                <FaImage className="ml-3 text-teal-400" />
              </div>
            </div>

            <div>
              <label
                htmlFor="plantName"
                className={`block text-sm font-medium ${
                  dark ? "text-teal-200" : "text-gray-700"
                }`}
              >
                Plant Name
              </label>
              <input
                defaultValue={plantName}
                type="text"
                name="plantName"
                required
                className={`mt-2 w-full px-4 py-2 border ${
                  dark ? "bg-gray-600 border-teal-500" : "bg-gray-50 border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                  dark ? "focus:ring-teal-500" : "focus:ring-teal-600"
                } focus:border-transparent`}
                placeholder="e.g., Monstera Deliciosa"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className={`block text-sm font-medium ${
                  dark ? "text-teal-200" : "text-gray-700"
                }`}
              >
                Category
              </label>
              <select
                defaultValue={category}
                name="category"
                required
                className={`mt-2 w-full px-4 py-2 border ${
                  dark ? "bg-gray-600 border-teal-500" : "bg-gray-50 border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                  dark ? "focus:ring-teal-500" : "focus:ring-teal-600"
                } focus:border-transparent`}
              >
                <option value="">Select a category</option>
                <option value="succulent">Succulent</option>
                <option value="fern">Fern</option>
                <option value="flowering">Flowering</option>
                <option value="cactus">Cactus</option>
                <option value="herb">Herb</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="careLevel"
                className={`block text-sm font-medium ${
                  dark ? "text-teal-200" : "text-gray-700"
                }`}
              >
                Care Level
              </label>
              <select
                defaultValue={careLevel}
                name="careLevel"
                required
                className={`mt-2 w-full px-4 py-2 border ${
                  dark ? "bg-gray-600 border-teal-500" : "bg-gray-50 border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                  dark ? "focus:ring-teal-500" : "focus:ring-teal-600"
                } focus:border-transparent`}
              >
                <option value="">Select care level</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="difficult">Difficult</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="wateringFrequency"
                className={`block text-sm font-medium ${
                  dark ? "text-teal-200" : "text-gray-700"
                }`}
              >
                Watering Frequency
              </label>
              <input
                defaultValue={wateringFrequency}
                type="text"
                name="wateringFrequency"
                required
                className={`mt-2 w-full px-4 py-2 border ${
                  dark ? "bg-gray-600 border-teal-500" : "bg-gray-50 border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                  dark ? "focus:ring-teal-500" : "focus:ring-teal-600"
                } focus:border-transparent`}
                placeholder="e.g., Every 3 days"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <label
                htmlFor="lastWateredDate"
                className={`block text-sm font-medium ${
                  dark ? "text-teal-200" : "text-gray-700"
                }`}
              >
                Last Watered Date
              </label>
              <input
                defaultValue={lastWateredDate}
                type="date"
                name="lastWateredDate"
                required
                className={`mt-2 w-full px-4 py-2 border ${
                  dark ? "bg-gray-600 border-teal-500" : "bg-gray-50 border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                  dark ? "focus:ring-teal-500" : "focus:ring-teal-600"
                } focus:border-transparent`}
              />
            </div>

            <div>
              <label
                htmlFor="nextWateringDate"
                className={`block text-sm font-medium ${
                  dark ? "text-teal-200" : "text-gray-700"
                }`}
              >
                Next Watering Date
              </label>
              <input
                defaultValue={nextWateringDate}
                type="date"
                name="nextWateringDate"
                required
                className={`mt-2 w-full px-4 py-2 border ${
                  dark ? "bg-gray-600 border-teal-500" : "bg-gray-50 border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                  dark ? "focus:ring-teal-500" : "focus:ring-teal-600"
                } focus:border-transparent`}
              />
            </div>

            <div>
              <label
                htmlFor="healthStatus"
                className={`block text-sm font-medium ${
                  dark ? "text-teal-200" : "text-gray-700"
                }`}
              >
                Health Status
              </label>
              <input
                defaultValue={healthStatus}
                type="text"
                name="healthStatus"
                required
                className={`mt-2 w-full px-4 py-2 border ${
                  dark ? "bg-gray-600 border-teal-500" : "bg-gray-50 border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                  dark ? "focus:ring-teal-500" : "focus:ring-teal-600"
                } focus:border-transparent`}
                placeholder="e.g., Healthy, Needs Attention"
              />
            </div>

            <div>
              <label
                htmlFor="userEmail"
                className={`block text-sm font-medium ${
                  dark ? "text-teal-200" : "text-gray-700"
                }`}
              >
                User Email
              </label>
              <input
                value={userEmail}
                readOnly
                type="email"
                name="userEmail"
                required
                className={`mt-2 w-full px-4 py-2 border ${
                  dark ? "bg-gray-600 border-teal-500" : "bg-gray-50 border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                  dark ? "focus:ring-teal-500" : "focus:ring-teal-600"
                } focus:border-transparent`}
                placeholder="e.g., user@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="userName"
                className={`block text-sm font-medium ${
                  dark ? "text-teal-200" : "text-gray-700"
                }`}
              >
                User Name
              </label>
              <input
                value={userName}
                readOnly
                type="text"
                name="userName"
                required
                className={`mt-2 w-full px-4 py-2 border ${
                  dark ? "bg-gray-600 border-teal-500" : "bg-gray-50 border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                  dark ? "focus:ring-teal-500" : "focus:ring-teal-600"
                } focus:border-transparent`}
                placeholder="e.g., John Doe"
              />
            </div>
          </div>
        </div>

        {/* Full-width Description */}
        <div>
          <label
            htmlFor="description"
            className={`block text-sm font-medium ${
              dark ? "text-teal-200" : "text-gray-700"
            }`}
          >
            Description
          </label>
          <textarea
            defaultValue={description}
            required
            name="description"
            rows="4"
            className={`mt-2 w-full px-4 py-2 border ${
              dark ? "bg-gray-600 border-teal-500" : "bg-gray-50 border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 ${
              dark ? "focus:ring-teal-500" : "focus:ring-teal-600"
            } focus:border-transparent`}
            placeholder="Describe the plant..."
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className={`px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 ${
              dark ? "focus:ring-teal-400" : "focus:ring-teal-600"
            } focus:ring-offset-2 transition duration-200`}
          >
            Update Plant
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Update;