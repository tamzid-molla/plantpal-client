import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../../Context/FirebaseContext";
import Loader from "../../Loader";


const HealthOverview = () => {
  const { user, dark } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

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
    }
  }, [user]);

  if (loading) {
      return <Loader></Loader>;
  }

  const healthyPlants = plants.filter((plant) => plant.healthStatus === "good");
  const unhealthyPlants = plants.filter(
    (plant) => plant.healthStatus !== "good"
  );

  return (
    <div
      className={`p-6 max-w-4xl mx-auto ${
        dark ? " text-teal-200" : " text-gray-800"
      } min-h-[calc(100vh-200px)] rounded-lg`}
    >
      <h2
        className={`text-3xl font-bold mb-6 text-center ${
          dark ? "text-teal-500" : "text-teal-600"
        }`}
      >
        Plant Health Overview
      </h2>
      <div className="space-y-6">
        <div>
          <h3
            className={`text-xl font-semibold mb-4 ${
              dark ? "text-teal-300" : "text-teal-600"
            }`}
          >
            Healthy Plants ({healthyPlants.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {healthyPlants.map((plant) => (
              <div
                key={plant._id}
                className={` rounded-lg shadow-md p-4 ${
                  dark ? "bg-gray-800 border border-teal-600" : "bg-white border border-teal-100"
                }`}
              >
                <h4
                  className={`text-lg font-medium ${
                    dark ? "text-teal-200" : "text-gray-900"
                  }`}
                >
                  {plant.plantName}
                </h4>
                <p
                  className={`text-sm ${
                    dark ? "text-teal-400" : "text-gray-600"
                  }`}
                >
                  Category: {plant.category}
                </p>
                <p
                  className={`text-sm ${
                    dark ? "text-teal-400" : "text-gray-600"
                  }`}
                >
                  Next Watering: {new Date(plant.nextWateringDate).toLocaleDateString()}
                </p>
                <Link
                  to={`/viewDetails/${plant._id}`}
                  className={`mt-2 inline-block text-sm ${
                    dark ? "text-teal-500 hover:text-teal-400" : "text-teal-600 hover:text-teal-500"
                  }`}
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3
            className={`text-xl font-semibold mb-4 ${
              dark ? "text-teal-300" : "text-teal-600"
            }`}
          >
            Plants Needing Attention ({unhealthyPlants.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {unhealthyPlants.map((plant) => (
              <div
                key={plant._id}
                className={` rounded-lg shadow-md p-4 ${
                  dark ? "bg-gray-800 border border-teal-600" : "bg-white border border-teal-100"
                }`}
              >
                <h4
                  className={`text-lg font-medium ${
                    dark ? "text-teal-200" : "text-gray-900"
                  }`}
                >
                  {plant.plantName}
                </h4>
                <p
                  className={`text-sm ${
                    dark ? "text-teal-400" : "text-gray-600"
                  }`}
                >
                  Category: {plant.category}
                </p>
                <p
                  className={`text-sm ${
                    dark ? "text-teal-400" : "text-gray-600"
                  }`}
                >
                  Next Watering: {new Date(plant.nextWateringDate).toLocaleDateString()}
                </p>
                <Link
                  to={`/viewDetails/${plant._id}`}
                  className={`mt-2 inline-block text-sm ${
                    dark ? "text-teal-500 hover:text-teal-400" : "text-teal-600 hover:text-teal-500"
                  }`}
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthOverview;