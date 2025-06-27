import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/FirebaseContext";
import Loader from "../Loader";
import AllPlantsCards from "./DashboardCards/AllPlantsCards";
import MyPlantsCards from "./DashboardCards/MyPlantsCards";
import CareReminderCard from "./DashboardCards/CareReminderCard";
import PlantsHealth from "./DashboardCards/PlantsHealth";

const PlantDashboardCards = () => {
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

  const totalPlants = plants?.length;
  const myHealthyPlants =
    plants?.filter((plant) => plant?.healthStatus === "good").length || 0;
  const reminders = plants?.filter((plant) => {
    const nextWatering = new Date(plant?.nextWateringDate);
    return nextWatering <= new Date();
  });

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div
      className={`container mx-auto p-4 sm:p-6 ${
        dark ? "bg-gray-800 text-gray-200" : " text-gray-800"
      } min-h-[calc(100vh-200px)] rounded-lg`}
    >
      <h2
        className={`mt-7 mb-7 text-3xl sm:text-4xl font-bold text-center ${
          dark ? "text-teal-300" : "text-teal-600"
        }`}
      >
        Welcome back, {user?.displayName || "User"}!
      </h2>
      <div
        className={`pt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 ${
          dark ? "text-gray-200" : "text-gray-800"
        }`}
      >
        <AllPlantsCards
          className={dark ? "bg-gray-700" : "bg-white"}
        ></AllPlantsCards>
        <MyPlantsCards
          totalPlants={totalPlants}
          myHealthyPlants={myHealthyPlants}
          className={dark ? "bg-gray-700" : "bg-white"}
        ></MyPlantsCards>
        <CareReminderCard
          reminders={reminders}
          className={dark ? "bg-gray-700" : "bg-white"}
        ></CareReminderCard>
        <PlantsHealth
          myHealthyPlants={myHealthyPlants}
          totalPlants={totalPlants}
          className={dark ? "bg-gray-700" : "bg-white"}
        ></PlantsHealth>
      </div>
    </div>
  );
};

export default PlantDashboardCards;