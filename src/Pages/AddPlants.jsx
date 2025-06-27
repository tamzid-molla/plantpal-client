import { useContext, useEffect } from "react";
import { FaLeaf, FaImage } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/FirebaseContext";

const AddPlants = () => {
  const { user, dark } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entrees = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_baseURL}/plants`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(entrees),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Plant Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
  };

  useEffect(() => {
    document.title = "PlantPal || Add Plant";
  }, []);

  return (
    <div className="">
      <div
        className={`max-w-4xl mx-auto p-8 ${
          dark ? "bg-gray-800 text-white" : "bg-white"
        } shadow-xl rounded-2xl my-20 border ${
          dark ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <h2 className={`text-3xl font-bold mb-8 flex items-center gap-2 ${dark ? "text-gray-100" : "text-gray-800"
          }`}>
          <FaLeaf className="text-teal-600" /> Add A New Plant
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            
              <div>
                <label
                  htmlFor="image"
                  className={`block text-sm font-medium ${
                    dark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Plant Image
                </label>
                <div className="mt-1 flex items-center">
                  <input
                    type="url"
                    name="url"
                    required
                    className={`block w-full px-4 py-3 border ${
                      dark ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"
                    } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition duration-200`}
                    placeholder="Photo URL"
                  />
                  <FaImage className="ml-3 text-gray-400" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="plantName"
                  className={`block text-sm font-medium ${
                    dark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Plant Name
                </label>
                <input
                  type="text"
                  name="plantName"
                  required
                  className={`block w-full px-4 py-3 border ${
                    dark ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"
                  } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition duration-200`}
                  placeholder="e.g., Monstera Deliciosa"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className={`block text-sm font-medium ${
                    dark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Category
                </label>
                <select
                  name="category"
                  required
                  className={`block w-full px-4 py-3 border ${
                    dark ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"
                  } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition duration-200`}
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
                    dark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Care Level
                </label>
                <select
                  name="careLevel"
                  required
                  className={`block w-full px-4 py-3 border ${
                    dark ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"
                  } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition duration-200`}
                >
                  <option value="">Select care level</option>
                  <option value="easy">Easy</option>
                  <option value="moderate">Moderate</option>
                  <option value="difficult">Difficult</option>
                </select>
              </div>
            

            {/* Right Column */}
            
              <div>
                <label
                  htmlFor="wateringFrequency"
                  className={`block text-sm font-medium ${
                    dark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Watering Frequency
                </label>
                <input
                  type="text"
                  name="wateringFrequency"
                  required
                  className={`block w-full px-4 py-3 border ${
                    dark ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"
                  } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition duration-200`}
                  placeholder="e.g., Every 3 days"
                />
              </div>

              <div>
                <label
                  htmlFor="lastWateredDate"
                  className={`block text-sm font-medium ${
                    dark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Last Watered Date
                </label>
                <input
                  type="date"
                  name="lastWateredDate"
                  required
                  className={`block w-full px-4 py-3 border ${
                    dark ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"
                  } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition duration-200`}
                />
              </div>

              <div>
                <label
                  htmlFor="nextWateringDate"
                  className={`block text-sm font-medium ${
                    dark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Next Watering Date
                </label>
                <input
                  type="date"
                  name="nextWateringDate"
                  required
                  className={`block w-full px-4 py-3 border ${
                    dark ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"
                  } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition duration-200`}
                />
              </div>

              <div>
                <label
                  htmlFor="healthStatus"
                  className={`block text-sm font-medium ${
                    dark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Health Status
                </label>
                <input
                  type="text"
                  name="healthStatus"
                  required
                  className={`block w-full px-4 py-3 border ${
                    dark ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"
                  } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition duration-200`}
                  placeholder="e.g., Healthy, Needs Attention"
                />
              </div>

              {/* User Name and User Email Side by Side */}
              
                <div>
                  <label
                    htmlFor="userName"
                    className={`block text-sm font-medium ${
                      dark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    User Name
                  </label>
                  <input
                    value={user.displayName}
                    readOnly
                    type="text"
                    name="userName"
                    required
                    className={`block w-full px-4 py-3 border ${
                      dark ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"
                    } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition duration-200`}
                    placeholder="e.g., John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="userEmail"
                    className={`block text-sm font-medium ${
                      dark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    User Email
                  </label>
                  <input
                    value={user.email}
                    readOnly
                    type="email"
                    name="userEmail"
                    required
                    className={`block w-full px-4 py-3 border ${
                      dark ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"
                    } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition duration-200`}
                    placeholder="e.g., user@example.com"
                  />
                </div>
              
            </div>
     

          {/* Description Field - Full Width */}
          <div className="mt-6">
            <label
              htmlFor="description"
              className={`block text-sm font-medium ${
                dark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Description
            </label>
            <textarea
              required
              name="description"
              rows="5"
              className={`block w-full px-4 py-3 border ${
                dark ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition duration-200`}
              placeholder="Describe the plant..."
            ></textarea>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 cursor-pointer transition duration-200 font-medium"
            >
              Add Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlants;