import React, { useEffect, useState, useContext } from "react";

import { Link } from "react-router";
import { AuthContext } from "../../../Context/FirebaseContext";
import Loader from "../../Loader";

const ReminderPlants = () => {
  const { user, dark } = useContext(AuthContext);
  const [reminders, setReminders] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetch(`${import.meta.env.VITE_baseURL}/plants?byEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          const filteredReminders = data.filter((plant) => {
            const nextWatering = new Date(plant?.nextWateringDate);
            return nextWatering <= new Date();
          });
          setReminders(filteredReminders);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching reminders:", err);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return <Loader></Loader>
  }

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
        Reminder Plants
      </h2>
      {reminders.length === 0 ? (
        <p className="text-center">No reminders available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reminders.map((plant) => (
            <div
              key={plant._id}
              className={` rounded-lg shadow-md p-4 ${
                dark ? "bg-gray-800 border border-teal-600" : " bg-white border border-teal-100"
              }`}
            >
              <h3 className={`text-xl font-semibold ${dark ? "text-teal-200" : "text-gray-900"}`}>
                {plant.plantName}
              </h3>
              <p className={`text-sm ${dark ? "text-teal-400" : "text-gray-600"}`}>
                Category: {plant.category}
              </p>
              <p className={`text-sm ${dark ? "text-teal-400" : "text-gray-600"}`}>
                Next Watering: {new Date(plant.nextWateringDate).toLocaleDateString()}
              </p>
              <Link
                to={`/plants/${plant._id}`}
                className={`mt-2 inline-block text-sm ${
                  dark ? "text-teal-500 hover:text-teal-400" : "text-teal-600 hover:text-teal-500"
                }`}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReminderPlants;